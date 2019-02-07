import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import base, { firebaseApp, db } from '../base';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      uid: null,
      userAuthenticated: false,
      userData: null,
      isLoading: true,
      userData: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.writeUserData = this.writeUserData.bind(this);
  }

  componentDidMount() {
    this.ref = base.bindCollection('userData', {
      context: this,
      state: 'userData',
      withRefs: true,
      then() {
        this.setState({ isLoading: false });
      },
    });
  }

  handleClick() {
    this.authenticate('Google');
  }

  authenticate(provider) {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  }

  async authHandler(authData) {
    // ! user is now authenticated and but not trusted
    // TODO: change firestore database read/write rules
    this.setState({
      uid: authData.user.uid,
      userAuthenticated: true,
    });

    const { uid } = this.state;

    if (!authData.additionalUserInfo.isNewUser) {
      // TODO: fetch data from db
    } else {
      // TODO: handle new user
      this.writeUserData();
    }

    base.addToCollection('userData', {
      hello: 'world',
    });
  }

  async logOut() {
    await firebase.auth().signOut();
    this.setState({
      uid: null,
      userAuthenticated: false,
    });
  }

  writeUserData() {
    const { uid } = this.state;
    db.collection('users')
      .add({
        uid,
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  render() {
    return (
      <div>
        <h1 className="title">Emailbot</h1>
        <div>
          <button type="submit" onClick={e => this.handleClick(e)}>
            Log in
          </button>
          <div>{`User Authenticated: ${this.state.userAuthenticated}`}</div>
        </div>
      </div>
    );
  }
}

export default Header;

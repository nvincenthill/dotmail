import React from 'react';

import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/auth'; // If using Firebase storage
import base, { firebaseApp } from '../base';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      uid: null,
      userAuthenticated: false,
    };
    this.handleClick = this.handleClick.bind();
    this.authenticate = this.authenticate.bind();
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
    this.setState({
      uid: authData.user.uid,
      userAuthenticated: true,
    });

    let userData;
    const { uid } = this.state;

    if (!authData.additionalUserInfo.isNewUser) {
      userData = await base.fetch(`users/${uid}/userData`, {
        context: this,
      });
    } else {
      userData = null;
    }

    this.writeUserData(uid, userData, authData.user.displayName, authData.user.email);
    this.ref = base.syncState(`users/${uid}/userData`, {
      context: this,
      state: 'randomRecipes',
    });
  }

  async logOut() {
    await firebase.auth().signOut();
    this.setState({
      uid: null,
      userAuthenticated: false,
    });
  }

  writeUserData(uid, payload, name, email) {
    firebase
      .database()
      .ref(`users/${uid}`)
      .set({
        uid,
        payload,
        name,
        email,
      });
  }

  checkIfUserExists(userId) {
    const usersRef = firebase.database().ref('users/');
    usersRef.child(userId).once('value', (snapshot) => {
      const exists = snapshot.val() !== null;
      if (exists) {
        console.log('exists');
      }
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

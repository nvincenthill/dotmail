import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

import firebase from 'firebase/app';
import 'firebase/auth';
import base, { firebaseApp, db } from '../base';

import GlobalStyle from '../../Global';
import FormContainer from '../../containers/FormContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import ResponseContainer from '../../containers/ResponseContainer';
import Footer from '../Footer/Footer';
import { Theme } from '../../utilities';

const test = css`
  padding: 1rem 1.5rem;
`;

const AppStyles = styled.div`
  ${test};
  /* background: ${({ theme }) => theme.colors.background}; */
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };

    this.authenticate = this.authenticate.bind(this);
    this.logOut = this.logOut.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.writeUserData = this.writeUserData.bind(this);
  }

  componentDidMount() {
    // this.ref = base.bindCollection('userData', {
    //   context: this,
    //   state: 'userData',
    //   withRefs: true,
    //   then() {
    //     this.setState({ isLoading: false });
    //   },
    // });
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
    const { updateUser } = this.props;
    updateUser({
      name: authData.additionalUserInfo.profile.name,
      email: authData.additionalUserInfo.profile.email,
      uid: authData.user.uid,
      isUserAuthenticated: true,
    });
    if (!authData.additionalUserInfo.isNewUser) {
      // TODO: fetch data from db
      db.collection('usersData')
        .doc(`${authData.user.uid}`)
        .get()
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
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
    const { updateUser } = this.props;
    updateUser({
      name: '',
      email: '',
      uid: '',
      isUserAuthenticated: false,
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

  // TODO: Render components conditionally based on authStatus
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <React.Fragment>
          <GlobalStyle />
          <AppStyles>
            <HeaderContainer authenticate={this.authenticate} logOut={this.logOut} />
            <ResponseContainer />
            <FormContainer />
            <Footer />
          </AppStyles>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;

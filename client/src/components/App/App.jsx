import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseApp, db } from '../base';

import GlobalStyle from '../../Global';
import FormContainer from '../../containers/FormContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import Footer from '../Footer/Footer';
import { Theme } from '../../utilities';

const AppStyles = styled.div`
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.background};
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.authenticate = this.authenticate.bind(this);
    this.logOut = this.logOut.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.writeUserData = this.writeUserData.bind(this);
  }

  getDataFromFirestore() {
    this.getTemplates();
    this.getEmailGroups();
  }

  getTemplates() {
    const { addTemplate } = this.props;
    const templatesRef = db.collection('templates');

    // TODO: Only get templates that match authenticated user's role
    templatesRef
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        snapshot.forEach((doc) => {
          addTemplate(doc.data());
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  }

  getEmailGroups() {
    const { addEmailGroup } = this.props;
    const emailGroupsRef = db.collection('emailGroups');

    emailGroupsRef
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }

        snapshot.forEach((doc) => {
          const group = doc.data();
          group.recipients = [];
          doc.ref
            .collection('recipients')
            .get()
            .then((recipientSnapshot) => {
              if (recipientSnapshot.empty) {
                console.log('No matching documents.');
                return;
              }
              recipientSnapshot.forEach((contact) => {
                group.recipients.push(contact.data());
              });
            });

          addEmailGroup(group);
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  }

  authenticate(provider) {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  }

  async authHandler(authData) {
    const { updateUser, deleteTemplates, deleteEmailGroups } = this.props;
    updateUser({
      name: authData.additionalUserInfo.profile.name,
      email: authData.additionalUserInfo.profile.email,
      uid: authData.user.uid,
      isUserAuthenticated: true,
    });
    if (!authData.additionalUserInfo.isNewUser) {
      // TODO: handle existing user
    } else {
      // TODO: handle new user
      this.writeUserData();
    }

    // clear examples and fetch data from db
    deleteTemplates();
    deleteEmailGroups();
    this.getDataFromFirestore();
  }

  async logOut() {
    await firebase.auth().signOut();
    const {
      updateUser, deleteTemplates, deleteEmailGroups, deleteRecipients,
    } = this.props;
    updateUser({
      name: '',
      email: '',
      uid: '',
      isUserAuthenticated: false,
    });
    deleteTemplates();
    deleteEmailGroups();
    deleteRecipients();
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
            <FormContainer />
            <Footer />
          </AppStyles>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  addTemplate: PropTypes.func.isRequired,
  addEmailGroup: PropTypes.func.isRequired,
};

export default App;

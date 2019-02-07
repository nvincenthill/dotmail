import React from 'react';
import styled from 'styled-components';

// import Response from './Response';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import FormContainer from '../../containers/FormContainer';

const AppStyles = styled.div`
  max-width: 40rem;
  padding: 1rem 1.5rem;
  background: #eee;
`;

const App = () => (
  <React.Fragment>
    <AppStyles>
      <Header />
      {/* <Response /> */}
      <FormContainer />
    </AppStyles>
    <Footer />
  </React.Fragment>
);

export default App;

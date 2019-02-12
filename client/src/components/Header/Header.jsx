import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledBtn } from '../../elements';
import { Below } from '../../utilities';

const HeaderStyles = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 25%;
  }

  div {
    margin-left: auto;
    margin-right: auto;
  }

  .title-container {
    flex: 2;
    display: flex;
    justify-content: center;
  }

  .button-container {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .logo-container {
    flex: 1;
  }

  .title {
    margin: 1rem;
  }

  ${Below.small`
    flex-flow: column wrap;
    img {
      max-width: 25vw;
    }
  `}
`;
class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { authenticate, logOut } = this.props;
    if (e.target.innerHTML === 'Log in') {
      authenticate('Google');
    }

    if (e.target.innerHTML === 'Log out') {
      logOut();
    }
  }

  render() {
    const logInButton = (
      <StyledBtn category="positive" onClick={e => this.handleClick(e)}>
        Log in
      </StyledBtn>
    );
    const logOutButton = (
      <StyledBtn category="cancel" onClick={e => this.handleClick(e)}>
        Log out
      </StyledBtn>
    );
    const { currentUser } = this.props;

    return (
      <HeaderStyles>
        <div className="logo-container">
          <img id="logo" src="/assets/emailbot.png" alt="logo did not load" />
        </div>
        <div className="title-container">
          <h1 className="title">EMAILBOT</h1>
        </div>
        <div className="button-container">
          {currentUser.isUserAuthenticated ? logOutButton : logInButton}
        </div>
      </HeaderStyles>
    );
  }
}

Header.propTypes = {
  authenticate: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  currentUser: PropTypes.instanceOf(Object).isRequired,
};

export default Header;

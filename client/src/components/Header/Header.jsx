import React from 'react';
import PropTypes from 'prop-types';

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
      <button type="submit" onClick={e => this.handleClick(e)}>
        Log in
      </button>
    );
    const logOutButton = (
      <button type="submit" onClick={e => this.handleClick(e)}>
        Log out
      </button>
    );
    const { currentUser } = this.props;

    return (
      <div>
        <h1 className="title">Emailbot</h1>
        <div>{currentUser.isUserAuthenticated ? logOutButton : logInButton}</div>
      </div>
    );
  }
}

Header.propTypes = {
  authenticate: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  currentUser: PropTypes.instanceOf(Object).isRequired,
};

export default Header;

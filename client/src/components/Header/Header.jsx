import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.innerHTML === 'Log in') {
      // TODO: Log in user
      this.authenticate('Google');
    }

    if (e.target.innerHTML === 'Log out') {
      // TODO: Log out user
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">Emailbot</h1>
        <div>
          <button type="submit" onClick={e => this.handleClick(e)}>
            Log in
          </button>

          <button type="submit" onClick={e => this.handleClick(e)}>
            Log out
          </button>
        </div>
      </div>
    );
  }
}

export default Header;

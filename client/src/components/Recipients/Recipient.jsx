import React, { Component } from 'react';

import { StyledBtn } from '../../elements';

class Recipient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: React.createRef(),
      lastName: React.createRef(),
      preferred: React.createRef(),
      email: React.createRef(),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(action) {
    const { addRecipient, removeRecipient, index } = this.props;
    const {
      firstName, lastName, preferred, email,
    } = this.state;
    if (action === 'ADD') {
      addRecipient({
        firstName,
        lastName,
        preferred,
        email,
      });
    }
    removeRecipient(index);
  }

  render() {
    const {
      firstName, lastName, preferred, email,
    } = this.state;
    return (
      <div style={{ margin: '1rem' }}>
        <label htmlFor="firstName">
          First Name
          <input type="text" id="firstName" name="firstName" ref={firstName} />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input type="text" id="lastName" name="lastName" ref={lastName} />
        </label>
        <label style={{ display: 'block' }} htmlFor="preferred">
          Preferred
          <input type="text" id="preferred" name="preferred" ref={preferred} />
        </label>
        <label style={{ display: 'block' }} htmlFor="email">
          Email
          <input type="text" id="email" name="email" ref={email} />
        </label>
        <StyledBtn onClick={() => this.handleClick('ADD')}>Add</StyledBtn>
        <StyledBtn type="cancel" onClick={this.handleClick}>
          Remove
        </StyledBtn>
      </div>
    );
  }
}

export default Recipient;

import React, { Component } from 'react';
import styled from 'styled-components';

import { StyledBtn } from '../../elements';

const RecipientStyles = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: 0 0 100%;

  label {
    display: block;
  }

  input {
    margin: 0.25rem;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
`;

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
      <RecipientStyles>
        <label htmlFor="firstName">
          First Name
          <input type="text" id="firstName" name="firstName" ref={firstName} />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input type="text" id="lastName" name="lastName" ref={lastName} />
        </label>
        <label htmlFor="preferred">
          Preferred
          <input type="text" id="preferred" name="preferred" ref={preferred} />
        </label>
        <label htmlFor="email">
          Email
          <input type="text" id="email" name="email" ref={email} />
        </label>
        <div className="button-container">
          <StyledBtn onClick={() => this.handleClick('ADD')}>Add</StyledBtn>
          <StyledBtn type="cancel" onClick={this.handleClick}>
            Cancel
          </StyledBtn>
        </div>
      </RecipientStyles>
    );
  }
}

export default Recipient;

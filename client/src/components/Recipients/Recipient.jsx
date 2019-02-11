import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import { StyledBtn } from '../../elements';

import { Below } from '../../utilities';

const slideUp = keyframes`
  0% {
      opacity: 0;
      transform: translateY(20px);
  }
  100% {
      opacity: 1;
      transform: translateY(0);
  }
`;

const RecipientContainer = styled.div`
  margin: 1rem auto;
  padding: 0.75rem;
  align-self: center;
  justify-content: center;
  display: grid;
  box-shadow: ${({ theme }) => theme.elevations.med};
  border: 1px solid ${({ theme }) => theme.colors.accentColor5};
  animation: ${slideUp} 0.4s ease;
  grid-template-columns: 15rem 15rem;
  grid-template-areas:
    'firstName lastName'
    'preferred email'
    'add       cancel';
  grid-gap: 0.5rem;
  ${Below.small`
    grid-template-columns: 15rem;
    grid-template-areas:
      "firstName"
      "lastName"
      "preferred"
      "email"
      "add"
      "cancel";
  `}
`;

const Input = styled.input`
  grid-area: ${({ area }) => area};
  border: 0.01rem solid ${({ theme }) => theme.colors.accentColor5};
  :focus {
    box-shadow: 0 0 0.01rem ${({ theme }) => theme.colors.accentColor5};
  }
`;

const GridElement = styled.div`
  grid-area: ${({ area }) => area};
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
      <RecipientContainer>
        <Input
          placeholder="Name"
          area="firstName"
          type="text"
          id="firstName"
          name="firstName"
          ref={firstName}
        />
        <Input
          placeholder="Last Name"
          area="lastName"
          type="text"
          id="lastName"
          name="lastName"
          ref={lastName}
        />
        <Input
          placeholder="Preferred"
          area="preferred"
          type="text"
          id="preferred"
          name="preferred"
          ref={preferred}
        />
        <Input placeholder="Email" area="email" type="text" id="email" name="email" ref={email} />
        <GridElement area="add">
          <StyledBtn align="center" onClick={() => this.handleClick('ADD')}>
            Add
          </StyledBtn>
        </GridElement>
        <GridElement area="cancel">
          <StyledBtn align="center" type="cancel" onClick={this.handleClick}>
            Cancel
          </StyledBtn>
        </GridElement>
      </RecipientContainer>
    );
  }
}

export default Recipient;

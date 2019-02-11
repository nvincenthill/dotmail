import React, { Component } from 'react';
import styled from 'styled-components';

import { StyledBtn } from '../../elements';
import RecipientContainer from './RecipientContainer';

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
    const { addRecipient, cancelRecipient, index } = this.props;
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
    cancelRecipient(index);
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

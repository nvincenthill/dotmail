import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { StyledBtn } from '../../elements';
import RecipientContainer from './RecipientContainer';

import { slideUp, fadeOut } from '../../utilities';

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

class AddRecipient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: React.createRef(),
      lastName: React.createRef(),
      preferred: React.createRef(),
      email: React.createRef(),
      animation: slideUp,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, action) {
    e.preventDefault();
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

    const callback = () => setTimeout(() => cancelRecipient(index), 100);
    this.setState(
      {
        animation: fadeOut,
      },
      callback,
    );
  }

  render() {
    const {
      firstName, lastName, preferred, email, animation,
    } = this.state;
    return (
      <form onSubmit={e => this.handleClick(e, 'ADD')}>
        <RecipientContainer animation={animation}>
          <Input
            placeholder="Name"
            area="firstName"
            type="text"
            id="firstName"
            name="firstName"
            ref={firstName}
            required
          />
          <Input
            placeholder="Last Name"
            area="lastName"
            type="text"
            id="lastName"
            name="lastName"
            ref={lastName}
            required
          />
          <Input
            placeholder="Preferred"
            area="preferred"
            type="text"
            id="preferred"
            name="preferred"
            ref={preferred}
            required
          />
          <Input
            placeholder="Email"
            area="email"
            type="email"
            id="email"
            name="email"
            ref={email}
            required
          />
          <GridElement area="add">
            <StyledBtn isAnimated type="submit">
              Add
            </StyledBtn>
          </GridElement>
          <GridElement area="cancel">
            <StyledBtn isAnimated category="cancel" onClick={this.handleClick}>
              Cancel
            </StyledBtn>
          </GridElement>
        </RecipientContainer>
      </form>
    );
  }
}

AddRecipient.propTypes = {
  addRecipient: PropTypes.func.isRequired,
  cancelRecipient: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default AddRecipient;

import React, { Component } from 'react';
import styled from 'styled-components';

import { slideUp, fadeOut } from '../../utilities';

const StyledRecipient = styled.h6`
  margin: 0;
  font-size: 0.5rem;
  padding: 0.25rem;
  background: ${({ theme }) => theme.colors.accentColor4};
  color: ${({ theme }) => theme.colors.accentColor1};
  box-shadow: ${({ theme }) => theme.elevations.med};
  position: relative;
  animation: ${({ animation }) => animation} 0.25s ease;

  span {
    position: absolute;
    top: 0;
    left: 100%;
    width: 0.5rem;
    height: 0.5rem;
    padding: 0.25rem;
    color: #fff;
    background: ${({ theme }) => theme.colors.accentColor3};
    transform: translate(-70%, -30%);
    font-size: 0.1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
  }
`;

class Recipient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: slideUp,
    };
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    const { removeRecipient, i } = this.props;
    const callback = () => setTimeout(() => {
      removeRecipient({ i });
    }, 250);

    this.setState(
      {
        animation: fadeOut,
      },
      callback,
    );
  }

  render() {
    const { animation } = this.state;
    const { recipient } = this.props;
    return (
      <StyledRecipient animation={animation}>
        <span onClick={this.handleRemove}>X</span>
        {recipient.firstName} {recipient.lastName}
      </StyledRecipient>
    );
  }
}

export default Recipient;

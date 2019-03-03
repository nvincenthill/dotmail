import React from 'react';
import styled from 'styled-components';

import { StyledLabel } from '../../elements';

const StyledRadioContainer = styled.div`
  display: flex;
  input {
    margin: 0.5rem 1rem;
    width: auto;
  }
`;

const StyledTitle = styled.p`
  text-transform: capitalize;
`;

const Radio = ({ children, options, ...otherProps }) => (
  <StyledLabel htmlFor={children}>
    <StyledTitle>{children}</StyledTitle>
    {options.map((option, index) => {
      const optionStr = option.toString();
      return (
        <StyledRadioContainer>
          <input
            key={index}
            id={optionStr}
            name={children}
            value={optionStr}
            type="radio"
            {...otherProps}
          />
          {optionStr}
        </StyledRadioContainer>
      );
    })}
  </StyledLabel>
);

export default Radio;

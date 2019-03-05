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
  /* text-transform: capitalize; */
`;

const Radio = ({ children, injection, ...otherProps }) => (
  <StyledLabel htmlFor={children}>
    <StyledTitle>{children}</StyledTitle>
    {injection.options.map((option) => {
      const optionStr = option.toString();
      const checked = injection.data.toString() === optionStr;
      return (
        <StyledRadioContainer key={optionStr}>
          <input
            id={optionStr}
            name={children}
            value={optionStr}
            type="radio"
            checked={checked}
            {...otherProps}
          />
          {optionStr}
        </StyledRadioContainer>
      );
    })}
  </StyledLabel>
);

export default Radio;

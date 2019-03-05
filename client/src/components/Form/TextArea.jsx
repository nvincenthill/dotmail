import React from 'react';
import styled from 'styled-components';

import { StyledLabel } from '../../elements';

const StyledTitle = styled.p`
  /* text-transform: capitalize; */
`;

const TextArea = ({
  children, name, value, ...otherProps
}) => (
  <StyledLabel htmlFor={name}>
    <StyledTitle>{children}</StyledTitle>
    <textarea style={{ resize: 'vertical' }} id={name} name={name} value={value} {...otherProps} />
  </StyledLabel>
);

export default TextArea;

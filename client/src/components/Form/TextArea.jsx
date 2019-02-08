import React from 'react';

import { StyledLabel } from '../../elements';

const TextArea = ({
  children, name, value, ...otherProps
}) => (
  <StyledLabel htmlFor={name}>
    {children}
    <textarea id={name} name={name} value={value} {...otherProps} />
  </StyledLabel>
);

export default TextArea;

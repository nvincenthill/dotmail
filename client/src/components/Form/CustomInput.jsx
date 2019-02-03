import React from 'react';

import StyledLabel from './Label';

const CustomInput = ({ name, children, ...otherProps }) => (
  <StyledLabel htmlFor={name}>
    {children}
    <input id={name} name={name} {...otherProps} />
  </StyledLabel>
);

export default CustomInput;

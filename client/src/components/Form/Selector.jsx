import React from 'react';
import PropTypes from 'prop-types';

import { StyledLabel } from '../../elements';

const Selector = ({
  name, children, options, handleChange,
}) => (
  <StyledLabel htmlFor={name}>
    {children}
    <select id={name} name={name} onChange={handleChange}>
      {options.map((option, idx) => (
        <option value={option.id} key={idx}>
          {option.name}
        </option>
      ))}
    </select>
  </StyledLabel>
);

Selector.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.instanceOf(Object).isRequired,
};

export default Selector;

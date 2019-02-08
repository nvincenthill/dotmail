import React from 'react';
import PropTypes from 'prop-types';

import { StyledLabel } from '../../elements';

const TemplateSelector = ({
  name, children, templates, handleChange,
}) => (
  <StyledLabel htmlFor={name}>
    {children}
    <select id={name} name="templateSelector" onChange={handleChange}>
      {templates.map(template => (
        <option value={template.id} key={template.name}>
          {template.name}
        </option>
      ))}
    </select>
  </StyledLabel>
);

TemplateSelector.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  templates: PropTypes.instanceOf(Object).isRequired,
};

export default TemplateSelector;

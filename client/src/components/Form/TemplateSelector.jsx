import React from 'react';

import StyledLabel from './Label';

const TemplateSelector = ({
  name, children, templates, value, handleChange,
}) => (
  <StyledLabel htmlFor={name}>
    {children}
    <select id={name} value={value} name="templateSelector" onChange={handleChange}>
      {templates.map(template => (
        <option value={template.id} key={template.name}>
          {template.name}
        </option>
      ))}
    </select>
  </StyledLabel>
);

export default TemplateSelector;

import React from 'react';

import StyledLabel from './Label';

const TemplateSelector = ({
  name, children, templates, value, otherProps,
}) => (
  <StyledLabel htmlFor={name}>
    {children}
    <select id={name} value={value} {...otherProps} readOnly>
      {templates.templates.map(template => (
        <option value={template.name} key={template.id}>
          {template.name}
        </option>
      ))}
    </select>
  </StyledLabel>
);

export default TemplateSelector;

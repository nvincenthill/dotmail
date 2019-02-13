import React from 'react';
import styled from 'styled-components';

const LabelContainer = styled.div`
  margin: 1rem auto;
`;

const Label = styled.label`
  margin: 0.5rem auto;
  font-size: 1.25rem;
  font-weight: 700;

  input,
  select,
  textarea {
    display: block;
    margin: 0.5rem auto;
    width: 50vw;
  }

  textarea {
    width: 50vw;
  }
`;

const StyledLabel = ({ children }) => (
  <LabelContainer>
    <Label>{children}</Label>
  </LabelContainer>
);

export default StyledLabel;

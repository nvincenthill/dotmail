import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 0.3rem;
  display: block;
  margin: 0.5rem auto;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.accentColor2};
  border: none;
  color: ${({ theme }) => theme.colors.accentColor1};
  box-shadow: ${({ theme }) => theme.elevations.med};
  transition: all 0.5s ease;
  cursor: pointer;

  :focus {
    outline: none;
  }

  span {
    display: inline-block;
    position: relative;
    transition: all 0.5s ease;
  }

  span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: -0.06rem;
    right: 0.05rem;
  }

  :hover {
    box-shadow: ${({ theme }) => theme.elevations.high};
  }

  :hover span {
    padding-right: 1rem;
  }

  :hover span:after {
    opacity: 1;
    right: 0;
  }

  ${({ type }) => {
    if (type === 'cancel') {
      return css`
        background: ${({ theme }) => theme.colors.accentColor3};
      `;
    }
  }}
`;

const StyledBtn = ({ children, ...otherProps }) => (
  <Button type="button" {...otherProps}>
    <span>{children}</span>
  </Button>
);

export default StyledBtn;

import { css } from 'styled-components';

const sizes = {
  small: 600,
  med: 768,
  large: 922,
  xlarge: 1200,
};

const Above = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default Above;

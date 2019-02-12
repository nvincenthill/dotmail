import { keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
      opacity: 0;
      transform: translateY(20px);
  }
  100% {
      opacity: 1;
      transform: translateY(0);
  }
`;

const slideDown = keyframes`
  0% {
      opacity: 1;
      transform: translateY(0);
  }
  100% {
      opacity: 0;
      transform: translateY(20px);
  }
`;

export { slideUp, slideDown };

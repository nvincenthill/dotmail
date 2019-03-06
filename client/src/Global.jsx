import { createGlobalStyle } from 'styled-components';
import { Above } from './utilities';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i');

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background: ${({ theme }) => theme.colors.accentColor1};
    text-align: center;
    margin: 0;
  }

  h1,
  h2,
  h3,
  div {
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  p {
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  input {
    padding: 0.5rem;
  }

  textarea {
    padding: 0.5rem;
  }

  button {
    min-width: 10%;
  }

  select {
    min-width: 20vw;
    text-emphasis: center;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.accentColor1};
  }

  ${Above.small`
    body {
      background: ${({ theme }) => theme.colors.accentColor1};
    }
  `}

  ${Above.med`
    body {
      background: ${({ theme }) => theme.colors.accentColor1};
    }
  `}

  ${Above.large`
    body {
      background: ${({ theme }) => theme.colors.accentColor1};
    }
  `}

  ${Above.xlarge`
    body {
      background: ${({ theme }) => theme.colors.accentColor1};
    }
  `}
`;

export default GlobalStyle;

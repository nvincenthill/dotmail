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
    background: ${({ theme }) => theme.colors.background};
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

  select {
    min-width: 20vw;
    text-emphasis: center;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.accentColor1};
  }

  .title {
    border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
    padding: 1rem;
    margin: 0 25%;
  }

  .response-message {
    padding: 0.5rem;
  }

  .error {
    background: red;
    color: white;
  }

  .success {
    background: green;
    color: white;
  }

  ${Above.small`
    body {
      background: ${({ theme }) => theme.colors.background};
    }
  `}

  ${Above.med`
    body {
      background: ${({ theme }) => theme.colors.background};
    }
  `}

  ${Above.large`
    body {
      background: ${({ theme }) => theme.colors.background};
    }
  `}

  ${Above.xlarge`
    body {
      background: ${({ theme }) => theme.colors.background};
    }
  `}
`;

export default GlobalStyle;

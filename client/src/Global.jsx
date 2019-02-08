import { createGlobalStyle } from 'styled-components';

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

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    background: ${({ theme }) => theme.colors.background};
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    background: ${({ theme }) => theme.colors.background};
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    background: ${({ theme }) => theme.colors.background};
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    background: ${({ theme }) => theme.colors.background};
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline: none;
    font-size: 10px;
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
    font-weight: normal;
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Poppins';
    border: none;
  }

  main {
    min-height: 100vh;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyles

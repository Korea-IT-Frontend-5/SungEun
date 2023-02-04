import  { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body, html {
    position: relative;
    height: 100%;
    line-height: 1.34;
    background-color: #f0f2f5;
  }
  #root {
    height: 100%;
  }
  body, button, input, label, select, td, textarea {
    font-size: 12px;
    font-size: Helvetica, Arial, sans-serif;
  }
  input, select, textarea {
    background-color: #fff;
    font-size: 12px;
    appearance: none;
    border: 1px solid #ccd0d5;
    border-radius: 0;
    margin: 0;
    padding: 3px;

    &:focus {
      border:1px solid #1b74e4;
      box-shadow: 0 0 0 2px #e7f3ff;
      }
  }
  a {
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
  hr {
    border: 0;
    height: 1px;
    background: #dadde1;
    margin: 20px 16px;
    text-align: center;
  }
`;

export default GlobalStyles;
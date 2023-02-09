import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    position: relative;
    height: 100%;
    line-height: 1.34;
    background-color: #fff;
    font-size: 14px;
    font-family: Helvetica, Arial, sans-serif;
  }

  body, button, input, label, select, td, textarea {
    /* font-size: 12px;
    font-size: Helvetica, Arial, sans-serif; */
  }
  
  input, select, textarea {
    background-color: #fff;
    font-size: 12px;
    appearance: none;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    margin: 0;
    padding: 8px 10px;
    width: 100%;

    &:focus {
      outline: none;
      border:1px solid #1b74e4;
      box-shadow: 0 0 0 2px #e7f3ff;
      }
  }

  input[type="file"] {
    overflow: hidden;
    width: 60px;
    height: 60px;
  }

  textarea {
    resize: none;
  }

  a {
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }

  hr {
    margin: 15px 0;
    width: 100%;
    height: 1px;
    background-color: #dbdbdb;
    border: 0;
  }
`;

export default GlobalStyle;
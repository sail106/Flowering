import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    margin-top: 100px;
    overflow-x:hidden;
  }
  button {
    border: 0;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyles;
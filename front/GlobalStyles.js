import { createGlobalStyle } from "styled-components";
import LexendDecaMedium from './src/styles/fonts/lexend-deca/LexendDeca-Regular.ttf'
import LexendDecaRegular from './src/styles/fonts/lexend-deca/LexendDeca-Regular.ttf'
import NotoSansMedium from './src/styles/fonts/noto-sans/NotoSansKR-Medium.ttf'
import NotoSansRegular from './src/styles/fonts/noto-sans/NotoSansKR-Regular.ttf'

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

  /* 폰트 적용 */
  @font-face {
    font-family: "Lexend Deca";
    src: local("LexendDecaMedium"), url(${LexendDecaMedium}) format('ttf'); 
    font-weight: normal;
  }
  @font-face {
    font-family: "Lexend Deca";
    src: local("LexendDecaRegular"), url(${LexendDecaRegular}) format('ttf'); 
    font-weight: normal;
  }
  @font-face {
    font-family: "Noto Sans";
    src: local("NotoSansMedium"), url(${NotoSansMedium}) format('ttf'); 
    font-weight: normal;
  }
  @font-face {
    font-family: "Noto Sans";
    src: local("NotoSansRegular"), url(${NotoSansRegular}) format('ttf'); 
    font-weight: normal;
  }

`;

export default GlobalStyles;
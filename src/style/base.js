import { injectGlobal } from 'styled-components';
import theme from './theme';
import { BrandonWOFF2 } from './fonts';

const base = injectGlobal`

  @font-face {
    font-family: 'Brandon';
    src:  url(${BrandonWOFF2}) format('woff2');
    // font-weight: normal;
    // font-style: normal;
  }

  @import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");


  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    font-family: ${theme.fonts.Josefin};
    font-size: ${theme.fontSizes.base};

    &.loading {
      overflow: hidden;
    }
  }

  ::selection {
    background-color: rgba(76, 87, 114, 0.5);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: ${theme.colors.white};
  }

  p {
    margin: 0;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }
`;

export default base;

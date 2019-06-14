import { injectGlobal } from 'styled-components';
import theme from './theme';
import {
  BrandonWOFF2,
  BrandonBoldWOFF2,
  AvenirBoldWOFF2,
  AvenirRegularWOFF2,
  AvenirMediumWOFF2,
  AvenirSemiBoldWOFF2,
} from './fonts';

const base = injectGlobal`

  @font-face {
    font-family: 'Brandon';
    src:  url(${BrandonWOFF2}) format('woff2');
  }

  @font-face {
    font-family: 'BrandonBold';
    src:  url(${BrandonBoldWOFF2}) format('woff2');
  }

  @font-face {
    font-family: 'Avenir Next Black';
    src:  url(${AvenirBoldWOFF2}) format('woff2');
  }

  @font-face {
    font-family: 'Avenir Next';
    src:  url(${AvenirRegularWOFF2}) format('woff2');
  }

  @font-face {
    font-family: 'Avenir Next Semibold';
    src:  url(${AvenirSemiBoldWOFF2}) format('woff2');
  }

  @font-face {
    font-family: 'AvenirMedium';
    src:  url(${AvenirMediumWOFF2}) format('woff2');
  }

  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,700|Open+Sans:400,700&display=swap');

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
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    font-family: ${theme.fonts.Avenir};
    font-size: ${theme.fontSizes.xlarge};

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
    color: ${theme.colors.dark};
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

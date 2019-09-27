import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from './media';

import {
  BrandonWOFF2,
  BrandonBoldWOFF2,
  AvenirBoldWOFF2,
  AvenirRegularWOFF2,
  AvenirMediumWOFF2,
  AvenirSemiBoldWOFF2,
} from './fonts';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Brandon';
    src:  url(${BrandonWOFF2}) format('woff2');
    font-weight: normal;
    font-display: auto;
  }
  
  @font-face {
    font-family: 'BrandonBold';
    src:  url(${BrandonBoldWOFF2}) format('woff2');
    font-weight: normal;
    font-display: auto;  }

  @font-face {
    font-family: 'Avenir Next Black';
    src:  url(${AvenirBoldWOFF2}) format('woff2');
    font-weight: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Avenir Next';
    src:  url(${AvenirRegularWOFF2}) format('woff2');
    font-weight: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Avenir Next Semibold';
    src:  url(${AvenirSemiBoldWOFF2}) format('woff2');
    font-weight: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'AvenirMedium';
    src:  url(${AvenirMediumWOFF2}) format('woff2');
    font-weight: normal;
    font-display: auto;
  }

  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,700|Open+Sans:400,700&display=swap');

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    line-height: 1.25;
    font-family: ${theme.fonts.Avenir};
    font-size: ${theme.fontSizes.xlarge};
    ${media.phablet`font-size: ${theme.fontSizes.large};`}

    &.blur {
      #root > .container > * {
        filter: blur(5px) brightness(0.7);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }


  ::selection {
    background-color: ${theme.colors.highlight};
    // background-color: rgba(76, 87, 114, 0.5);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: ${theme.colors.dark};
    margin: 0 0 10px 0;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }	

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${theme.colors.green};
      outline: 0;
    }
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    &:focus,
    &:active {
      outline-color: ${theme.colors.blue};
    }
  }
  input, textarea {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
  
  p {
    margin: 0 0 10px 0;
  }
  
  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }	 

  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`;

export default GlobalStyle;

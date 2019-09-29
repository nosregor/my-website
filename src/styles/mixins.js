import { css } from 'styled-components';
import theme from './theme';
import media from './media';

const { colors, fontSizes, fonts } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:focus {
      outline-color: ${colors.blue};
    }
    &:hover,
    &:active,
    &:focus {
      color: ${colors.lightBlue};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.green};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.green};
      outline: 0;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      opacity: 0;
      background-color: ${colors.green};
      transition: ${theme.transition};
    }
  `,

  smallButton: css`
    color: ${colors.lightBlue};
    background-color: transparent;
    border: 1px solid ${colors.lightBlue};
    border-radius: ${theme.borderRadius};
    padding: 12px 17px;
    font-size: ${fontSizes.smallish};
    font-family: ${fonts.Avenir};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.white};
      background-color: ${colors.lightBlue};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${colors.white};
    background-color: ${colors.lightBlue};
    border: 1px solid ${colors.lightBlue};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    font-size: ${fontSizes.medium};
    font-family: ${fonts.Avenir};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.white};
      background-color: ${colors.transLightBlue};
    }
    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,
};
export default mixins;

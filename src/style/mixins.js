import { css } from 'styled-components';
import theme from './theme';

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

  smallButton: css`
    color: ${theme.colors.green};
    border: 1px solid ${theme.colors.green};
    border-radius: ${theme.borderRadius};
    padding: 15px 15px 10px;
    font-size: ${theme.fontSizes.medium};
    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.transGreen};
    }
  `,

  bigButton: css`
    color: ${theme.colors.green};
    border: 1px solid ${theme.colors.green};
    border-radius: ${theme.borderRadius};
    padding: 20px 25px 15px;
    font-size: ${theme.fontSizes.large};
    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.transGreen};
    }
  `,

  inlineLink: css`
    color: ${theme.colors.green};
    &:hover,
    &:focus,
    &:active {
      &:after {
        opacity: 1;
      }
    }
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      position: relative;
      top: 0px;
      opacity: 0;
      background-color: ${theme.colors.green};
      transition: ${theme.transition};
    }
  `,
};

export default mixins;

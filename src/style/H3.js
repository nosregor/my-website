import styled from 'styled-components';
import theme from './theme';

const H3 = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  font-size: ${theme.fontSizes.h3};
  // font-family: ${theme.fonts.Avenir};
  &:before {
    // counter-increment: section;
    // content: '0' counter(section) '.';
    margin-right: 10px;
    font-family: ${theme.fonts.Avenir};
    font-weight: 400;
    color: ${theme.colors.green};
    font-size: ${theme.fontSizes.xlarge};
    font-size: $fzXLarge;
    position: relative;
    bottom: 4px;
  }
  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background-color: ${theme.colors.mediumGrey};
    position: relative;
    top: -5px;
    margin-left: 20px;
  }
`;

export default H3;

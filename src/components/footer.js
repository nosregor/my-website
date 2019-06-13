import React from 'react';

import styled from 'styled-components';
import { theme, mixins, A, P } from '../style';

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${theme.colors.white};
  padding: 25px 150px 20px;
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.slate};
  text-align: center;
  height: 80px;
`;

const Copy = P.extend`
  margin-bottom: 3px;
`;

const GithubLink = A.extend`
  ${mixins.inlineLink};
  color: ${theme.colors.lightGrey};
  font-family: ${theme.fonts.Josefin};
  font-size: ${theme.fontSizes.xsmall};
  &:after {
    display: none;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Copy>Designed &amp; Developed by Andrew Rogerson</Copy>
    <GithubLink to="#" target="_blank" rel="noopener">
      View Source
    </GithubLink>
  </FooterContainer>
);

export default Footer;

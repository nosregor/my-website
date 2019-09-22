import React from 'react';

import styled from 'styled-components';
import { theme, mixins, media, A, P } from '../style';

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  ${mixins.padding};
  flex-direction: column;
  background-color: ${theme.colors.navy};

  color: ${theme.colors.slate};
  text-align: center;
  height: 75px;
  ${media.phone`padding: 0 20px;`};
`;

const Copy = styled(P)`
  margin: 5px 0 3px;
  font-size: ${theme.fontSizes.medium};
`;

const GithubLink = styled(A)`
  ${mixins.inlineLink};
  color: ${theme.colors.lightGrey};
  font-family: ${theme.fonts.Avenir};
  font-size: ${theme.fontSizes.xsmall};
  &:after {
    display: none;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Copy>Designed &amp; Developed by Andrew Rogerson</Copy>
    <GithubLink href="https://github.com/nosregor/my-website" target="_blank" rel="noopener">
      View Source
    </GithubLink>
  </FooterContainer>
);

export default Footer;

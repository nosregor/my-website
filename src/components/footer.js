import React from 'react';

import { socialMedia } from '../config';

import { IconGithub, IconLinkedin, IconCodepen, IconInstagram, IconTwitter } from './icons';

import styled from 'styled-components';
import { theme, mixins, media } from '../styles';

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  padding: 15px;
  flex-direction: column;
  background-color: ${theme.colors.navy};

  color: ${theme.colors.slate};
  text-align: center;
  height: auto;
`;
const SocialContainer = styled.div`
  color: ${theme.colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const SocialItemList = styled.ul`
  ${mixins.flexBetween};
`;
const SocialItem = styled.li``;
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Copy = styled.p`
  margin: 5px 0 3px;
  font-size: ${theme.fontSizes.medium};
`;

const GithubLink = styled.a`
  ${mixins.link};
  color: ${theme.colors.slate};
  font-family: ${theme.fonts.Avenir};
  font-size: ${theme.fontSizes.xsmall};
  &:after {
    display: none;
  }
`;

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <SocialItemList>
        {socialMedia &&
          socialMedia.map((social, i) => (
            <SocialItem key={i}>
              <SocialLink
                href={social.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={social.name}>
                {social.name === 'Github' ? (
                  <IconGithub />
                ) : social.name === 'Linkedin' ? (
                  <IconLinkedin />
                ) : social.name === 'Codepen' ? (
                  <IconCodepen />
                ) : social.name === 'Instagram' ? (
                  <IconInstagram />
                ) : social.name === 'Twitter' ? (
                  <IconTwitter />
                ) : (
                  <IconGithub />
                )}
              </SocialLink>
            </SocialItem>
          ))}
      </SocialItemList>
    </SocialContainer>
    <Copy>
      <GithubLink
        href="https://github.com/nosregor/my-website"
        target="_blank"
        rel="nofollow noopener noreferrer">
        Designed &amp; Built by Andrew Rogerson
      </GithubLink>
    </Copy>
  </FooterContainer>
);

export default Footer;

import React from 'react';

import { socialMedia } from '../config';

import { IconGithub, IconLinkedin, IconCodepen, IconInstagram, IconTwitter } from './icons';

import styled from 'styled-components';
import { theme, media } from '../styles';

const { colors } = theme;

const SocialContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  color: ${colors.lightSlate};
  ${media.desktop`left: 25px;`};
  ${media.tablet`display: none;`};
`;
const SocialItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.lightSlate};
  }
`;
const SocialItem = styled.li`
  &:last-of-type {
    margin-bottom: 20px;
  }
`;
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 18px;
    height: 18px;
  }
`;

const Social = () => (
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
);

export default Social;

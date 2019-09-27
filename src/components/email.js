import React from 'react';
import { email } from '../config';

import styled from 'styled-components';
import { theme, media } from '../styles';

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 40px;

  ${media.desktop`right: 25px;`};
  ${media.tablet`display: none;`};

  &:after {
    content: '';
    height: 90px;
    width: 1px;
    background-color: ${theme.colors.lightSlate};
    display: block;
  }
`;
const EmailLink = styled.a`
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.xsmall};
  letter-spacing: 0.5px;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;
`;

const Email = () => (
  <EmailContainer>
    <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
  </EmailContainer>
);

export default Email;

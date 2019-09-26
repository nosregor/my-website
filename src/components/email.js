import React from 'react';
import { email } from '../config';

import styled from 'styled-components';
import { theme, media, A } from '../style';

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
const EmailLink = styled(A)`
  font-family: ${theme.fonts.Josefin};
  font-size: ${theme.fontSizes.xsmall};
  color: ${theme.colors.lightSlate};
  letter-spacing: 0.5px;
  writing-mode: vertical-rl;
  margin: 20px 0;
  right: -1px;
  padding: 10px;
`;

const Email = () => (
  <EmailContainer>
    <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
  </EmailContainer>
);

export default Email;

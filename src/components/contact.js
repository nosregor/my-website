import React from 'react';

import styled from 'styled-components';
import { theme, mixins, Section, H3, A, P } from '../style';

const ContactContainer = Section.extend`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 100px;
`;
const Next = H3.extend`
  color: ${theme.colors.green};
  font-size: ${theme.fontSizes.small};
  font-family: ${theme.fonts.SFMono};
  font-weight: 400;
  margin-bottom: 20px;
  justify-content: center;
  &:before {
    font-size: ${theme.fontSizes.small};
    bottom: 0;
  }
  &:after {
    display: none;
  }
`;
const Title = styled.h4`
  font-size: 60px;
  margin: 0 0 20px;
`;
const EmailLink = A.extend`
  ${mixins.bigButton};
  margin-top: 50px;
`;

const Contact = () => (
  <ContactContainer>
    <Next>What&apos;s Next?</Next>
    <Title>Get In Touch</Title>
    <P>
      Although I&apos;m not currently looking for opportunities, my inbox is always open. Whether
      for a potential project or just to say hi, I&apos;ll try my best to answer your email!
    </P>
    <EmailLink href="#" target="_blank" rel="noopener">
      Say Hi
    </EmailLink>
  </ContactContainer>
);

export default Contact;

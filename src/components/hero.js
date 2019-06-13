import React from 'react';

import styled from 'styled-components';
import { theme, mixins, Section, A, P } from '../style';

const HeroContainer = Section.extend`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  padding: ${theme.navbarHeight} 0 0 0;
  min-height: calc(100vh - ${theme.navbarHeight});
`;
const Hi = styled.h1`
  color: ${theme.colors.purple};
  margin: 0 0 10px 3px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.Josefin};
  font-weight: 400;
`;
const Name = styled.h1`
  font-size: 80px;
  font-weight: 600;
  margin: 0;
`;
const Subtitle = styled.h2`
  font-size: 80px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${theme.colors.darkNavy};
`;
const Blurb = styled.div`
  max-width: 50%;
  max-width: 480px;
`;
const MoovelLink = A.extend`
  ${mixins.inlineLink};
  &:after {
    top: -5px;
  }
`;
const EmailLink = A.extend`
  ${mixins.smallButton};
  margin-top: 50px;
`;

const Hero = () => (
  <HeroContainer>
    <Hi>Hi, my name is</Hi>
    <Name>Andrew Rogerson.</Name>
    <Subtitle>I build things for the web.</Subtitle>
    <Blurb>
      <P>
        I&apos;m a software engineer based in Berlin, Germany specializing in developing (and
        occasionally designing) exceptional, high-quality websites and applications.
      </P>
      <P>
        Currently, I&apos;m an Software Engineer at
        <MoovelLink href="#" target="_blank" rel="noopener">
          &nbsp;Moovel&nbsp;
        </MoovelLink>
        working on some exciting projects with some amazing people.
      </P>
    </Blurb>
    <EmailLink href="#" className="git">
      Get In Touch
    </EmailLink>
  </HeroContainer>
);

export default Hero;

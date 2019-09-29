import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { email } from '../config';

import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '../styles';

const ContactContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`;
const GreenHeading = styled(Heading)`
  display: block;
  color: ${theme.colors.green};
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.SFMono};
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;
  ${media.desktop`font-size: ${theme.fontSizes.small};`};
  &:before {
    bottom: 0;
    font-size: ${theme.fontSizes.small};
    ${media.desktop`font-size: ${theme.fontSizes.smallish};`};
  }
  &:after {
    display: none;
  }
`;
const Title = styled.h4`
  font-family: ${theme.fonts.AvenirSemiBold};
  margin: 0 0 20px;
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;
const EmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

class Contact extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title } = frontmatter;

    return (
      <ContactContainer id="contact">
        <GreenHeading>What&apos;s Next?</GreenHeading>
        <Title>{title}</Title>
        <p dangerouslySetInnerHTML={{ __html: html }} />
        <EmailLink href={`mailto:${email}`} target="_blank" rel="nofollow noopener noreferrer">
          Say Hi
        </EmailLink>
      </ContactContainer>
    );
  }
}

export default Contact;

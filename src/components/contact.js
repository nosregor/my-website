import React, { Component } from 'react';
import PropTypes from 'prop-types';

import config from '../config';

import styled from 'styled-components';
import { theme, mixins, Section, H3, A, P } from '../style';

const ContactContainer = Section.extend`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 100px;
`;
const Header = H3.extend`
  color: ${theme.colors.green};
  ${theme.fontSizes.medium};
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
  font-family: ${theme.fonts.AvenirSemiBold};
  font-size: 60px;
  margin: 0 0 20px;
`;
const EmailLink = A.extend`
  ${mixins.bigButton};
  margin-top: 50px;
`;

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.array.isRequired,
    email: PropTypes.string.isRequired,
  };

  render() {
    const { contact } = this.props;
    const { node } = contact[0];

    return (
      <ContactContainer id="contact">
        <Header>What&apos;s Next?</Header>
        <Title>{node.frontmatter.title}</Title>{' '}
        <P dangerouslySetInnerHTML={{ __html: node.html }} />{' '}
        <EmailLink href={`mailto:${config.email}`} target="_blank" rel="noopener">
          Say Hi
        </EmailLink>
      </ContactContainer>
    );
  }
}

export default Contact;

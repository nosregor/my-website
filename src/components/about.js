import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styled from 'styled-components';
import { theme, mixins, media, Section, H3 } from '../styles';

const AboutContainer = styled(Section)`
  position: relative;
`;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const SkillsContainer = styled.ul`
  margin-top: 20px;
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${theme.fonts.Avenir};
  font-size: ${theme.fontSizes.smallish};
  // color: ${theme.colors.slate};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${theme.colors.green};
    font-size: ${theme.fontSizes.small};
    line-height: 12px;
  }
`;
const PicContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.green};

  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`;
const Avatar = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  position: relative;
  // mix-blend-mode: multiply;
  // filter: grayscale(100%) contrast(1);
  // border-radius: ${theme.borderRadius};
  // transition: ${theme.transition};
`;
class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title, skills, avatar } = frontmatter;

    return (
      <AboutContainer id="about">
        <H3>{title}</H3>
        <FlexContainer>
          <ContentContainer>
            <p dangerouslySetInnerHTML={{ __html: html }} />
            <SkillsContainer>
              {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
            </SkillsContainer>
          </ContentContainer>
          <PicContainer>
            <Avatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
          </PicContainer>
        </FlexContainer>
      </AboutContainer>
    );
  }
}

export default About;

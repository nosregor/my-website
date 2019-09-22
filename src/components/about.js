import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styled from 'styled-components';
import { theme, mixins, media, Section, H3, P, Ul } from '../style';

const AboutContainer = styled(Section)``;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;

  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  padding-right: 30px;

  ${media.tablet`width: 100%;`};
`;
const SkillsContainer = styled(Ul)`
  margin-top: 20px;
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(2, minmax(140px, 200px));
`;
const Skill = styled.li`
  position: relative;
  font-family: ${theme.fonts.Avenir};
  font-size: ${theme.fontSizes.smallish};
  margin-bottom: 10px;
  padding-left: 20px;

  &:before {
    content: '▹';
    color: ${theme.colors.green};
    position: absolute;
    top: -2px;
    left: 0;
  }
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

class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    const { data } = this.props;
    const { node } = data[0];

    return (
      <AboutContainer id="about">
        <H3>{node.frontmatter.title}</H3>
        <FlexContainer>
          <ContentContainer>
            <P dangerouslySetInnerHTML={{ __html: node.html }} />
            <SkillsContainer>
              {node.frontmatter.skills &&
                node.frontmatter.skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
            </SkillsContainer>
          </ContentContainer>
          <PicContainer>
            <Avatar fluid={node.frontmatter.avatar.childImageSharp.fluid} alt="Avatar" />
          </PicContainer>
        </FlexContainer>
      </AboutContainer>
    );
  }
}

export default About;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { IconGithub, IconExternal } from './icons';

import styled from 'styled-components';
import { theme, mixins, media, Section, H3, Ul, A } from '../style';

const FeaturedContainer = Section.extend`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const FeaturedImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
`;
const ImgContainer = styled.div`
  order: 0;
  position: relative;
  width: 60%;
  background-color: ${theme.colors.green};
  position: relative;
  border-radius: ${theme.borderRadius};

  ${media.tablet`display: none;`};

  &:hover {
    background-color: transparent;
    &:before,
    ${FeaturedImg} {
      background-color: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: ${theme.transition};
    z-index: 3;
    background-color: ${theme.colors.navy};
    mix-blend-mode: screen;
  }
  ${FeaturedImg} {
    position: relative;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    border-radius: ${theme.borderRadius};
  }
`;
const ProjectContent = styled.div`
  width: 45%;
  margin-left: -5%;
  z-index: 5;

  ${media.tablet`
    width: 100%;
    margin: 0 !important;
  `};
`;

const ProjectDetails = styled.div`
  background-color: ${theme.colors.lightNavy};
  padding: 25px 25px 15px;
`;

const FeaturedLabel = styled.h4`
  font-size: ${theme.fontSizes.small};
  font-weight: 400;
  color: ${theme.colors.green};
  font-family: ${theme.fonts.SFMono};
  margin-top: 0;
  padding-top: 0;
`;
const ProjectName = styled.h5`
  font-family: ${theme.fonts.AvenirSemiBold};
  font-size: 28px;
  margin: 0 0 20px;
`;
const ProjectDescription = styled.div`
  font-size: ${theme.fontSizes.large};
  p {
    margin: 0;
  }
`;
const TechList = Ul.extend`
  display: flex;
  justify-content: flex-end;
  margin: ${theme.margin} 0 0 auto;

  ${media.tablet`justify-content: flex-start;`};

  li {
    font-family: ${theme.fonts.Avenir};
    font-size: ${theme.fontSizes.smallish};
    color: ${theme.colors.lightGrey};
    margin-left: ${theme.margin};

    ${media.tablet`margin: 0 20px 0 0;`};
  }
`;
const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  right: -10px;
  margin-top: 10px;

  ${media.tablet`right: 0;`};

  a {
    padding: 10px;

    svg {
      width: ${theme.margin};
      height: ${theme.margin};
    }
  }
`;
const Project = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 100px;
  text-align: right;

  ${media.tablet`
    display: block;
    text-align: left;
  `};

  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(even) {
    text-align: left;
    ${ImgContainer} {
      order: 1;
    }
    ${ProjectContent} {
      text-align: left;
      margin: 0 -5% 0 0;
    }
    ${TechList}, ${Links} {
      justify-content: flex-start;
      li {
        margin: 0 20px 0 0;
      }
    }
    ${Links} {
      right: auto;
      left: -10px;
      ${media.tablet`justify-content: flex-end;`};
    }
  }
`;

class Featured extends Component {
  static propTypes = {
    featured: PropTypes.array.isRequired,
  };

  render() {
    const { featured } = this.props;
    return (
      <FeaturedContainer id="projects">
        <H3>Some Things I&apos;ve Built</H3>
        <div className="featured__things">
          {featured &&
            featured.map((project, i) => (
              <Project key={i}>
                <ImgContainer>
                  <FeaturedImg sizes={project.node.frontmatter.cover.childImageSharp.sizes} />
                </ImgContainer>
                <ProjectContent>
                  <FeaturedLabel>Featured Project</FeaturedLabel>
                  <ProjectName>{project.node.frontmatter.title}</ProjectName>
                  <ProjectDetails>
                    <ProjectDescription dangerouslySetInnerHTML={{ __html: project.node.html }} />
                    <TechList>
                      {project.node.frontmatter.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </TechList>
                    <Links>
                      <A href={project.node.frontmatter.github} target="_blank" rel="noopener">
                        <IconGithub />
                      </A>
                      <A href={project.node.frontmatter.external} target="_blank" rel="noopener">
                        <IconExternal />
                      </A>
                    </Links>
                  </ProjectDetails>
                </ProjectContent>
              </Project>
            ))}
        </div>
      </FeaturedContainer>
    );
  }
}

export default Featured;

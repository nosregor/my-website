import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { IconGithub, IconExternal } from './icons';

import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '../styles';

const FeaturedContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const FeaturedGrid = styled.div`
  position: relative;
`;
const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  ${media.thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
  `};
  ${media.phablet`padding: 30px 25px 20px;`};
`;
const FeaturedLabel = styled.h4`
  font-size: ${theme.fontSizes.smallish};
  font-weight: normal;
  color: ${theme.colors.green};
  font-family: ${theme.fonts.SFMono};
  margin-top: 10px;
  padding-top: 0;
`;
const ProjectName = styled.h5`
  font-family: ${theme.fonts.AvenirSemiBold};
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${theme.colors.lightestSlate};
  ${media.tablet`font-size: 24px;`};
  a {
    ${media.tablet`display: block;`};
  }
`;
const ProjectDescription = styled.div`
  background-color: ${theme.colors.lightNavy};
  color: ${theme.colors.lightSlate};
  padding: 20px;
  border-radius: ${theme.borderRadius};
  // font-size: ${theme.fontSizes.large};
  font-size: 17px;
  line-height: 1.3;
  ${media.thone`
    background-color: transparent;
    padding: 20px 0;
  `};
  p {
    margin: 0;
  }
  a {
    ${mixins.inlineLink};
    color: ${theme.colors.white};
  }
`;
const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0 10px;
  li {
    font-family: ${theme.fonts.Avenir};
    font-size: ${theme.fontSizes.smallish};
    color: ${theme.colors.slate};
    margin-right: ${theme.margin};
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
    ${media.thone`
    color: ${theme.colors.lightestSlate};
    margin-right: 10px;
    `};
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
const FeaturedImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: ${theme.borderRadius};
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
  ${media.tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
    filter: grayscale(100%) contrast(1) brightness(80%);
  `};
`;
const ImgContainer = styled.div`
  position: relative;
  z-index: 1;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.green};
  border-radius: 2px;
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  ${media.tablet`height: 100%;`};
  ${media.thone`
    grid-column: 1 / -1;
    opacity: 0.25;
  `};
  &:hover {
    background: transparent;
    &:before,
    ${FeaturedImg} {
      background: transparent;
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
    z-index: 3;
    transition: ${theme.transition};
    background-color: ${theme.colors.navy};
    mix-blend-mode: screen;
  }
`;
const Project = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  ${media.thone`margin-bottom: 70px;`};

  &:last-of-type {
    margin-bottom: 0;
  }

  &:nth-of-type(odd) {
    ${ContentContainer} {
      grid-column: 7 / -1;
      text-align: right;
      ${media.thone`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      `};
      ${media.phablet`padding: 30px 25px 20px;`};
    }
    ${TechList} {
      justify-content: flex-end;
      li {
        margin-left: ${theme.margin};
        margin-right: 0;
      }
    }
    ${Links} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${ImgContainer} {
      grid-column: 1 / 8;
      ${media.tablet`height: 100%;`};
      ${media.thone`
        grid-column: 1 / -1;
        opacity: 0.25;
      `};
    }
  }
`;

class Featured extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    const { data } = this.props;
    return (
      <FeaturedContainer id="projects">
        <Heading>Some Things I&apos;ve Built</Heading>
        <FeaturedGrid>
          {data &&
            data.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { external, title, tech, github, cover } = frontmatter;
              return (
                <Project key={i}>
                  <ContentContainer>
                    <FeaturedLabel>Featured Project</FeaturedLabel>
                    <ProjectName>
                      {external ? (
                        <a
                          href={external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link">
                          {title}
                        </a>
                      ) : (
                        title
                      )}
                    </ProjectName>
                    <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                    {tech && (
                      <TechList>
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </TechList>
                    )}
                    <Links>
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="Github Link">
                          <IconGithub />
                        </a>
                      )}
                      {external && (
                        <a
                          href={external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link">
                          <IconExternal />
                        </a>
                      )}
                    </Links>
                  </ContentContainer>
                  <ImgContainer>
                    <FeaturedImg fluid={cover.childImageSharp.fluid} />
                  </ImgContainer>
                </Project>
              );
            })}
        </FeaturedGrid>
      </FeaturedContainer>
    );
  }
}

export default Featured;

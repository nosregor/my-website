import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { theme, mixins, media, Section, Button } from '../styles';

import { IconGithub, IconExternal, IconFolder } from './icons';

const { colors, fontSizes, fonts } = theme;

const ProjectsContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  // ${media.desktop`
  //   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  // `};
`;
const ProjectsTitle = styled.h4`
  margin: 0 auto 50px;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  position: relative;
  ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
`;
const ProjectInner = styled.div`
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  border: 1px solid ${colors.green};
  padding: 25px;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  // background-color: ${colors.lightNavy};
}
`;
const Project = styled.div`
  transition: ${theme.transition};
  &:hover,
  // background-color: ${colors.transGreen};
  &:focus {
    ${ProjectInner} {
      transform: translateY(-5px);
      box-shadow: 0 2px 4px ${colors.shadowNavy};
      box-shadow: 0 19px 38px ${colors.darkestNavy} 0 15px 12px ${colors.shadowNavy};
    }
  }
`;
const ProjectTop = styled.div``;
const ProjectBottom = styled.div``;
const ProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const Folder = styled.div`
  color: ${colors.green};
  margin-bottom: 30px;
  svg {
    width: 40px;
    height: 40px;
  }
`;
const Links = styled.div`
  margin-right: -10px;
`;
const IconLink = styled.a`
  padding: 10px;
  svg {
    width: 22px;
    height: 22px;
  }
`;
const ProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.lightestSlate};
`;
const ProjectLink = styled.a``;
const ProjectDescription = styled.div`
  font-size: 17px;
  line-height: 1.25;
  a {
    ${mixins.inlineLink};
  }
`;
const TechList = styled.ul`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xsmall};
    // color: ${colors.lightSlate};
    // color: ${colors.lightGrey};
    // color: ${colors.green};
    line-height: 2;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const ShowMoreButton = styled(Button)`
  margin: 100px auto 0;
`;

class Projects extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  state = {
    showMore: false,
  };

  showMoreToggle = () => this.setState({ showMore: !this.state.showMore });

  render() {
    const GRID_LIMIT = 3;
    const { showMore } = this.state;
    const { data } = this.props;
    const projects = data.filter(({ node }) => node.frontmatter.show === 'true');
    const firstThree = projects.slice(0, GRID_LIMIT);
    const projectsToShow = showMore ? projects : firstThree;

    return (
      <ProjectsContainer>
        <ProjectsTitle>Other Projects</ProjectsTitle>

        <ProjectsGrid>
          {projectsToShow &&
            projectsToShow.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { github, external, title, tech } = frontmatter;
              return (
                <Project
                  key={i}
                  style={{
                    transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                  }}>
                  <ProjectInner>
                    <ProjectTop>
                      <ProjectHeader>
                        <Folder>
                          <IconFolder />
                        </Folder>
                        <Links>
                          {github && (
                            <IconLink
                              href={github}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label="Github Link">
                              <IconGithub />
                            </IconLink>
                          )}
                          {external && (
                            <IconLink
                              href={external}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label="External Link">
                              <IconExternal />
                            </IconLink>
                          )}
                        </Links>
                      </ProjectHeader>
                      <ProjectName>
                        {external ? (
                          <ProjectLink
                            href={external}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="Visit Website">
                            {title}
                          </ProjectLink>
                        ) : (
                          title
                        )}
                      </ProjectName>
                      <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                    </ProjectTop>
                    <ProjectBottom>
                      <TechList>
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </TechList>
                    </ProjectBottom>
                  </ProjectInner>
                </Project>
              );
            })}
        </ProjectsGrid>

        <ShowMoreButton onClick={this.showMoreToggle}>
          {showMore ? 'Fewer' : 'More'} Projects
        </ShowMoreButton>
      </ProjectsContainer>
    );
  }
}

export default Projects;

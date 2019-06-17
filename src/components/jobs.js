import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { theme, mixins, media, Section, H3, P } from '../style';

const JobsContainer = Section.extend`
  position: relative;
  max-width: 700px;
`;
const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;

  ${media.thone`display: block;`};
`;
const Tabs = styled.div`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;

  ${media.thone`
    display: flex;
    margin-bottom: 30px;
    width: 100%;
    overflow-x: scroll;
  `};v
`;
const Tab = styled.button`
  ${mixins.link};
  display: block;
  width: 100%;
  background-color: transparent;
  height: ${theme.tabHeight}px;
  padding: 0 20px 2px;
  transition: ${theme.transition};
  border-left: 2px solid ${theme.colors.darkGrey};
  text-align: left;
  white-space: nowrap;
  font-family: ${theme.fonts.Avenir};
  font-size: ${theme.fontSizes.smallish};
  color: ${props => (props.isActive ? theme.colors.green : theme.colors.mediumGrey)};

  ${media.tablet`padding: 0 10px 2px;`};
  ${media.thone`
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${theme.colors.darkGrey};
    min-width: 120px;
  `};

  &:focus {
    background-color: ${theme.colors.mediumGrey};
  }
`;
const Highlighter = styled.span`
  display: block;
  background: ${theme.colors.green};
  width: 2px;
  height: ${theme.tabHeight}px;
  border-radius: ${theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  transition: ${theme.transition};
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateY(
    ${props => (props.activeTabId > 0 ? props.activeTabId * theme.tabHeight : 0)}px
  );

  ${media.thone`
    width: 100%;
    max-width: ${theme.tabWidth}px;
    height: 2px;
    top: auto;
    bottom: 0;
    transform: translateX(
      ${props => (props.activeTabId > 0 ? props.activeTabId * theme.tabWidth : 0)}px
    );
   `};
`;
const ContentContainer = styled.div`
  position: relative;
  padding-top: 14px;
  padding-left: 30px;
  flex-grow: 1;
  ${media.tablet`padding-left: 20px;`};
  ${media.thone`padding-left: 0;`};
`;
const TabContent = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: ${props => (props.isActive ? 1 : 0)};
  z-index: ${props => (props.isActive ? 2 : -1)};
  position: ${props => (props.isActive ? 'relative' : 'absolute')};
  transition: ${theme.transition};
  transition-duration: ${props => (props.isActive ? '0.5s' : '0s')};
  padding-top: 12px;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${theme.fontSizes.large};
    li {
      position: relative;
      padding-left: ${theme.margin};
      margin-bottom: 5px;
      &:before {
        content: '▹';
        color: ${theme.colors.green};
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
  a {
    ${mixins.link};
    ${mixins.inlineLink};
    &:after {
      top: -5px;
    }
  }
`;
const JobTitle = styled.h4`
  font-size: ${theme.fontSizes.xlarge};
  font-weight: 500;
  margin-bottom: 5px;
`;
const JobDetails = styled.h5`
  font-family: ${theme.fonts.Avenir};
  font-size: ${theme.fontSizes.smallish};
  font-weight: 400;
  letter-spacing: 0.5px;
  color: ${theme.colors.slate};
  margin-bottom: 30px;
  svg {
    width: 15px;
  }
`;

class Jobs extends Component {
  static propTypes = {
    jobs: PropTypes.array.isRequired,
  };

  state = {
    activeTabId: 0,
  };

  isActive = id => this.state.activeTabId === id;

  setActiveTab = activeTabId => {
    this.setState({ activeTabId });
  };

  render() {
    const { activeTabId } = this.state;
    const { jobs } = this.props;

    return (
      <JobsContainer id="jobs">
        <H3>Where I&apos;ve Worked</H3>
        <TabsContainer>
          <Tabs>
            {jobs &&
              jobs.map((tab, i) => (
                <Tab
                  href="#"
                  key={i}
                  content={tab.text}
                  isActive={this.isActive(i)}
                  onClick={e => this.setActiveTab(i, e)}>
                  <span>{tab.node.frontmatter.company}</span>
                </Tab>
              ))}
            <Highlighter activeTabId={activeTabId} />
          </Tabs>
          <ContentContainer>
            {jobs &&
              jobs.map((job, i) => (
                <TabContent key={i} isActive={this.isActive(i)}>
                  <JobTitle>
                    <span>{job.node.frontmatter.title} @ </span>
                    <span>
                      <a
                        href={job.node.frontmatter.url}
                        target="_blank"
                        rel="nofollow noopener noreferrer">
                        {job.node.frontmatter.company}
                      </a>
                    </span>
                  </JobTitle>
                  <JobDetails>
                    <span>{job.node.frontmatter.range} </span>
                  </JobDetails>
                  <P dangerouslySetInnerHTML={{ __html: job.node.html }} />
                </TabContent>
              ))}
          </ContentContainer>
        </TabsContainer>
      </JobsContainer>
    );
  }
}

export default Jobs;

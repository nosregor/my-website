import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Head from './head';
import Nav from './nav';
import Social from './social';
import Email from './email';
import Footer from './footer';

import { GlobalStyle } from '../styles';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    isLoading: true,
    githubInfo: {
      stars: null,
      forks: null,
    },
  };

  componentDidMount() {
    fetch('https://api.github.com/repos/nosregor/my-website')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        this.setState({
          githubInfo: {
            stars: stargazers_count,
            forks: forks_count,
          },
        });
      });
  }

  render() {
    const { children } = this.props;
    const { githubInfo } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
                siteUrl
                description
              }
            }
          }
        `}
        render={({ site }) => (
          <div id="root">
            <Head metaData={site.siteMetadata} />
            <GlobalStyle />

            <div className="container">
              <Nav />
              <Social />
              <Email />
              {children}
              <Footer githubInfo={githubInfo} />
            </div>
          </div>
        )}
      />
    );
  }
}

export default Layout;

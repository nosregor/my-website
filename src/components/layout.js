/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Head from './head';
import Nav from './nav';
import Social from './social';
import Email from './email';
import Footer from './footer';

import { GlobalStyle } from '../styles';

const Layout = ({ children }) => {
  const [githubInfo, setGithubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/nosregor/my-website')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGithubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      });
  }, []);

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
};

Layout.protoTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

//  * with Gatsby's StaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/static-query/
//  */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import config from '../config';

import Head from '../components/head';
import Social from '../components/social';
import Email from './email';
import Header from '../components/header';
import Menu from '../components/menu';
import Footer from '../components/footer';

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div id="root">
        <Head siteMetadata={data.site.siteMetadata} />
        {/* <div className="container"> */}
        <Header location={location} navLinks={config.navLinks} />
        <Social />
        <Email />
        {children}
        <Menu />
        <Footer />
      </div>
      // </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default Layout;

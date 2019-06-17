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

const Layout = ({ children }) => (
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
        <Social />
        <Email email={config.email} />
        <Menu />
        <Header navLinks={config.navLinks} />
        {children}
        <Footer />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

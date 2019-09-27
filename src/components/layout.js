import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { nav } from '../config';

import Head from '../components/head';
import Header from '../components/header';
import Social from '../components/social';
import Email from '../components/email';
import Footer from '../components/footer';

import '../styles/base';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object,
  };

  finishLoading = () => this.setState({ isLoading: false });

  render() {
    const { children, location } = this.props;

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
            <div className="container">
              <Header location={location} navLinks={nav} />
              <Social />
              <Email />
              {children}
              <Footer />
            </div>
          </div>
        )}
      />
    );
  }
}

export default Layout;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { nav } from '../config';

import Head from '../components/head';
import Header from '../components/header';
import Social from '../components/social';
import Email from '../components/email';
import Footer from '../components/footer';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object,
  };

  render() {
    const { children, location } = this.props;

    return (
      <div id="root">
        <Head />
        <div className="container">
          <Header location={location} navLinks={nav} />
          <Social />
          <Email />
          {children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;

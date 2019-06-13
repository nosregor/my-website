import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import Hero from '../components/hero';
import About from '../components/about';
import Jobs from '../components/jobs';

import { Main } from '../style';

const MainContainer = Main.extend`
  padding: 0 150px;
  counter-reset: section;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainContainer>
      <Hero />
      <About />
      <Jobs />
    </MainContainer>
  </Layout>
);

export default IndexPage;

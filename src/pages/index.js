import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import Hero from '../components/hero';
import About from '../components/about';
import Jobs from '../components/jobs';
import Featured from '../components/featured';
import Projects from '../components/projects';
import Contact from '../components/contact';

import { Main } from '../style';

const MainContainer = Main.extend`
  padding: 0 150px;
  counter-reset: section;
`;

// const IndexPage = ({
//   data: {
//     allMarkdownRemark: { edges },
//   },
// }) => (

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainContainer>
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <Projects />
      <Contact />
    </MainContainer>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object,
};

/* eslint no-undef: off */
// export const query = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           frontmatter {
//             date(formatString: "DD.MM.YYYY")
//             title
//             tech
//           }
//         }
//       }
//     }
//   }
// `;

export default IndexPage;

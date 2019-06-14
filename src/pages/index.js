import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <MainContainer>
      <Hero />
      <About />
      <Jobs jobs={data.jobs.edges} />
      <Featured featured={data.featured.edges} />
      <Projects projects={data.projects.edges} />
      <Contact />
    </MainContainer>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object,
};

/* eslint no-undef: off */
export const query = graphql`
  query IndexQuery {
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MM.DD.YYYY")
            title
            company
            range
            url
          }
          html
        }
      }
    }
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MM.DD.YYYY")
            title
            image
            tech
            github
            external
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MM.DD.YYYY")
            title
            image
            tech
            github
            external
          }
          html
        }
      }
    }
  }
`;

export default IndexPage;

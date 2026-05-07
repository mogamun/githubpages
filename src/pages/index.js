import React from 'react';
import { graphql } from 'gatsby';
import WikiLayout from '../components/WikiLayout';
import SEO from '../components/SEO';
import { BlogIndexContent } from './wiki/index';

const IndexPage = ({ data }) => (
  <WikiLayout currentSlug="/">
    <SEO title="EightTails" />
    <BlogIndexContent data={data} />
  </WikiLayout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { fields: { isWiki: { eq: true } } }
      sort: { frontmatter: { updated: DESC } }
    ) {
      edges {
        node {
          fields { slug }
          frontmatter {
            title
            created
            updated
            tags
            status
            category
          }
          excerpt(pruneLength: 120)
        }
      }
    }
  }
`;

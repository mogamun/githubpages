import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 80px;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
  margin-bottom: 24px;
  transition: color 0.2s;

  &:hover {
    color: #00c73c;
    opacity: 1;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 8px;
`;

const Content = styled.div`
  h1, h2, h3, h4, h5, h6 {
    margin-top: 40px;
    margin-bottom: 16px;
  }

  h2 {
    padding-bottom: 8px;
    border-bottom: 2px solid #00c73c;
    display: inline-block;
  }

  p {
    margin-bottom: 16px;
  }

  ul, ol {
    margin-bottom: 16px;
    padding-left: 24px;
  }

  li {
    margin-bottom: 8px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
    font-size: 0.9rem;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 10px 14px;
    text-align: left;
  }

  th {
    background: ${({ theme }) => theme.colors.background};
    font-weight: 600;
  }

  strong {
    font-weight: 700;
  }

  a {
    color: #00c73c;
  }
`;

const LegalPage = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Wrapper>
        <BackLink to="/todaydailyeng/">&larr; 일기써영</BackLink>
        <Title>{post.frontmatter.title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </Wrapper>
    </Layout>
  );
};

export default LegalPage;

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;

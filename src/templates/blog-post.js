import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styled from 'styled-components';

const PostHeader = styled.header`
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 8px;
`;

const Date = styled.time`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
`;

const Content = styled.div`
  h1, h2, h3, h4, h5, h6 {
    margin-top: 32px;
    margin-bottom: 16px;
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

  pre {
    margin-bottom: 16px;
  }
`;

const PostWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 80px;
`;

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <PostWrapper>
        <PostHeader>
          <Title>{post.frontmatter.title}</Title>
          <Date>{post.frontmatter.date}</Date>
        </PostHeader>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </PostWrapper>
    </Layout>
  );
};

export default BlogPost;

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

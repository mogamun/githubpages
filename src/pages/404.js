import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  padding: 64px 0;

  h1 {
    font-size: 3rem;
    margin-bottom: 16px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <Wrapper>
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;

import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 80px;
`;

const Content = styled.div`
  h1 {
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 16px;
  }
`;

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Wrapper>
      <Content>
        <h1>About</h1>
        <p>개발과 기술에 대한 이야기를 나누는 블로그입니다.</p>
        <p>궁금한 점이 있으시면 언제든 연락주세요.</p>
      </Content>
    </Wrapper>
  </Layout>
);

export default AboutPage;

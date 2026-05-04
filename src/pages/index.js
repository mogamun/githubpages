import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostCard from '../components/PostCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styled from 'styled-components';

/* ===== Hero ===== */
const HeroSection = styled.header`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  padding: 0 20px;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1000px;
  width: 100%;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #fff;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: #aaa !important;
`;

const NavBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
  }
`;

/* ===== Section ===== */
const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: bold;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.headline};
`;

/* ===== Horizontal Scroll ===== */
const HorizontalScroll = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding-bottom: 20px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HighlightCard = styled(Link)`
  min-width: 400px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  flex-shrink: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    min-width: 300px;
  }
`;

const CardImg = styled.div`
  height: 250px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardExcerpt = styled.div`
  height: 250px;
  padding: 24px;
  background: linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  display: flex;
  align-items: flex-end;

  p {
    font-size: 14px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const CardText = styled.div`
  padding: 24px;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.headline};
`;

const CardSummary = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

/* ===== Grid ===== */
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px 24px;
`;

const GridItem = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '40px')});
  transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: ${({ $delay }) => $delay || 0}s;
`;

/* ===== App Cards ===== */
const AppCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AppCard = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  border-radius: 16px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const AppCardIcon = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f3460, #16213e);
  font-size: 3rem;
`;

const AppCardContent = styled.div`
  padding: 16px;
`;

const AppCardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 4px;
  color: ${({ theme }) => theme.colors.headline};
`;

const AppCardDesc = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
  line-height: 1.4;
`;

/* ===== Reveal Wrapper ===== */
function RevealSection({ children, ...rest }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} {...rest}>
      {typeof children === 'function' ? children(isVisible) : children}
    </div>
  );
}

/* ===== Page ===== */
const HomePage = ({ data }) => {
  const allPosts = data.allMarkdownRemark.edges;
  const posts = allPosts.filter(({ node }) => node.frontmatter.layout !== 'legal');

  return (
    <Layout>
      <SEO title="Blog" />

      {/* Hero */}
      <HeroSection>
        <NavBtn style={{ left: 40 }} aria-label="Previous">&#10094;</NavBtn>
        <HeroContent>
          <HeroTitle>
            <span className="line1">새로운 시선으로</span><br />
            <span className="line2">세상을 읽다</span>
          </HeroTitle>
          <HeroSubtitle>기술과 사람, 그리고 그 사이의 이야기를 전합니다.</HeroSubtitle>
        </HeroContent>
        <NavBtn style={{ right: 40 }} aria-label="Next">&#10095;</NavBtn>
      </HeroSection>

      {/* Apps */}
      <Section>
        <RevealSection>
          {(visible) => (
            <div style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(40px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
              <SectionTitle>Apps</SectionTitle>
              <AppCardGrid>
                <AppCard to="/todaydailyeng/">
                  <AppCardIcon>📝</AppCardIcon>
                  <AppCardContent>
                    <AppCardTitle>일기써영</AppCardTitle>
                    <AppCardDesc>AI 영어 일기 교정</AppCardDesc>
                  </AppCardContent>
                </AppCard>
              </AppCardGrid>
            </div>
          )}
        </RevealSection>
      </Section>

      {/* Featured Stories - Horizontal Scroll */}
      <Section>
        <RevealSection>
          {(visible) => (
            <div style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(40px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
              <SectionTitle>Featured Stories</SectionTitle>
              <HorizontalScroll>
                {posts.map(({ node }) => (
                  <HighlightCard key={node.fields.slug} to={node.fields.slug}>
                    {node.frontmatter.thumbnail ? (
                      <CardImg>
                        <img src={node.frontmatter.thumbnail} alt={node.frontmatter.title} />
                      </CardImg>
                    ) : (
                      <CardExcerpt>
                        <p>{node.excerpt}</p>
                      </CardExcerpt>
                    )}
                    <CardText>
                      <CardTitle>{node.frontmatter.title}</CardTitle>
                      {node.frontmatter.summary && (
                        <CardSummary>{node.frontmatter.summary}</CardSummary>
                      )}
                    </CardText>
                  </HighlightCard>
                ))}
              </HorizontalScroll>
            </div>
          )}
        </RevealSection>
      </Section>

      {/* Latest Updates - Grid */}
      <Section>
        <RevealSection>
          {(visible) => (
            <SectionTitle style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(40px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
              Latest Updates
            </SectionTitle>
          )}
        </RevealSection>
        <RevealSection>
          {(visible) => (
            <GridContainer>
              {posts.map(({ node }, i) => (
                <GridItem key={node.fields.slug} $visible={visible} $delay={i * 0.1}>
                  <PostCard
                    slug={node.fields.slug}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    category={node.frontmatter.category}
                    thumbnail={node.frontmatter.thumbnail}
                    summary={node.frontmatter.summary}
                    excerpt={node.excerpt}
                  />
                </GridItem>
              ))}
            </GridContainer>
          )}
        </RevealSection>
      </Section>
    </Layout>
  );
};

export default HomePage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            category
            date(formatString: "YYYY.MM.DD")
            thumbnail
            summary
            layout
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`;

import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 80px;
`;

const HeroCard = styled.div`
  background: linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%);
  border-radius: 20px;
  padding: 48px 40px;
  color: #fff;
  margin-bottom: 48px;
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 32px 24px;
    gap: 24px;
  }
`;

const AppIcon = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 28px;
  background: #00c73c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  flex-shrink: 0;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 8px;
`;

const HeroSubtitle = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 20px;
  line-height: 1.6;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: 8px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.headline};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 48px;
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 16px;
  padding: 28px 24px;
  border: 1px solid rgba(0, 0, 0, 0.06);
`;

const FeatureIcon = styled.div`font-size: 2rem; margin-bottom: 12px;`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.headline};
`;

const FeatureDesc = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin: 0;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.background};
`;

const LegalLink = styled(Link)`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
  transition: color 0.2s;

  &:hover { color: #00c73c; opacity: 1; }
`;

const AppIntroPage = () => (
  <Layout>
    <SEO title="일기써영 - App Introduction" />
    <Wrapper>
      <HeroCard>
        <AppIcon>📝</AppIcon>
        <div style={{ flex: 1 }}>
          <HeroTitle>일기써영</HeroTitle>
          <HeroSubtitle>
            AI-powered English diary correction app.<br />
            On-device AI keeps your diary private — nothing is sent to external servers.
          </HeroSubtitle>
          <div>
            <Badge>On-device AI</Badge>
            <Badge>No Data Collection</Badge>
            <Badge>Free</Badge>
          </div>
        </div>
      </HeroCard>

      <SectionTitle>Features</SectionTitle>
      <FeatureGrid>
        <FeatureCard>
          <FeatureIcon>✍️</FeatureIcon>
          <FeatureTitle>English Diary</FeatureTitle>
          <FeatureDesc>Write freely in English. Mix in Korean when you're unsure — the AI understands.</FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>🤖</FeatureIcon>
          <FeatureTitle>AI Correction</FeatureTitle>
          <FeatureDesc>On-device AI fixes grammar errors and suggests natural expressions.</FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>📚</FeatureIcon>
          <FeatureTitle>Vocabulary</FeatureTitle>
          <FeatureDesc>New words are automatically extracted from your diary and saved.</FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>📊</FeatureIcon>
          <FeatureTitle>Learning Stats</FeatureTitle>
          <FeatureDesc>Track your streak, word count, and learning progress at a glance.</FeatureDesc>
        </FeatureCard>
      </FeatureGrid>

      <LegalLinks>
        <LegalLink to="/todaydailyeng/privacy">Privacy Policy</LegalLink>
        <LegalLink to="/todaydailyeng/terms">Terms of Service</LegalLink>
      </LegalLinks>
    </Wrapper>
  </Layout>
);

export default AppIntroPage;

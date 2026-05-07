import React, { useState, useMemo } from 'react';
import { graphql, Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmerAnim = keyframes`
  0%   { transform: translateX(-100%) skewX(-12deg); }
  100% { transform: translateX(300%) skewX(-12deg); }
`;

/* ── 페이지 레이아웃 ── */
const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px 80px;

  @media (max-width: 768px) {
    padding: 100px 16px 60px;
  }
`;

/* ── 히어로 ── */
const HeroArea = styled.div`
  margin-bottom: 60px;
  animation: ${fadeUp} 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  margin: 0 0 12px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroDesc = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0 0 28px;
  line-height: 1.7;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const StatChip = styled.div`
  padding: 6px 16px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.glass};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  backdrop-filter: blur(8px);
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

/* ── 검색 + 필터 ── */
const ControlRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  align-items: center;
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 12px 18px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.glass};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  backdrop-filter: blur(12px);
  color: ${({ theme }) => theme.colors.headline};
  font-size: 0.9rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder { color: ${({ theme }) => theme.colors.gray}; opacity: 0.6; }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.glowPrimary};
  }
`;

const FilterChip = styled.button`
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.glassBorder};
  background: ${({ $active, theme }) =>
    $active ? `${theme.colors.primary}20` : theme.colors.glass};
  backdrop-filter: blur(8px);
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.gray};
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
  text-transform: capitalize;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/* ── 카테고리 섹션 ── */
const CategorySection = styled.section`
  margin-bottom: 56px;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0;
  color: ${({ theme }) => theme.colors.headline};
  text-transform: capitalize;
`;

const CategoryCount = styled.span`
  padding: 2px 10px;
  border-radius: 999px;
  background: ${({ theme }) => `${theme.colors.primary}15`};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}30`};
  font-size: 0.72rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const CategoryLine = styled.div`
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.glassBorder}, transparent);
`;

/* ── 위키 카드 그리드 ── */
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
`;

const WikiCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px 20px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.25s ease, border-color 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -60%;
    width: 40%;
    height: 100%;
    background: linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
    animation: ${shimmerAnim} 3s ease infinite;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    border-color: ${({ theme }) => `${theme.colors.primary}50`};
    box-shadow: 0 4px 24px ${({ theme }) => theme.colors.glowPrimary};
    opacity: 1;

    &::after { opacity: 1; }
  }
`;

const CardTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.headline};
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const CardDate = styled.span`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.gray};
  opacity: 0.7;
`;

const CardStatus = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  padding: 1px 8px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  background: ${({ $s, theme }) =>
    $s === 'stable' ? `${theme.colors.primary}18` : `${theme.colors.gray}15`};
  color: ${({ $s, theme }) =>
    $s === 'stable' ? theme.colors.primary : theme.colors.gray};
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const CardTag = styled.span`
  font-size: 0.68rem;
  padding: 1px 8px;
  border-radius: 999px;
  background: ${({ theme }) => `${theme.colors.secondary}12`};
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => `${theme.colors.secondary}25`};
`;

/* ── 빈 상태 ── */
const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${({ theme }) => theme.colors.gray};
  opacity: 0.6;
`;

/* ── Reveal 래퍼 ── */
function RevealSection({ children }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(30px)',
        transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {children}
    </div>
  );
}

/* ── 유틸 ── */
const CATEGORY_EMOJI = {
  concepts:    '💡',
  sources:     '📄',
  entities:    '🏷',
  comparisons: '⚖️',
  synthesis:   '🔬',
  important:   '⭐',
  corrections: '✏️',
};

const CATEGORY_ORDER = ['concepts', 'entities', 'comparisons', 'sources', 'synthesis', 'important', 'corrections'];

function parseTags(raw) {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  return raw.replace(/[\[\]]/g, '').split(',').map(t => t.trim()).filter(Boolean);
}

/* ── 페이지 ── */
const WikiIndexPage = ({ data }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const allWiki = data.allMarkdownRemark.edges.map(({ node }) => ({
    slug:     node.fields.slug,
    title:    node.frontmatter.title || node.fields.slug,
    updated:  node.frontmatter.updated || node.frontmatter.created || '',
    created:  node.frontmatter.created || '',
    status:   node.frontmatter.status || '',
    category: node.frontmatter.category || 'etc',
    tags:     parseTags(node.frontmatter.tags),
    excerpt:  node.excerpt,
  }));

  // 카테고리 목록
  const categories = useMemo(() => {
    const cats = [...new Set(allWiki.map(w => w.category))];
    return cats.sort((a, b) => {
      const ai = CATEGORY_ORDER.indexOf(a);
      const bi = CATEGORY_ORDER.indexOf(b);
      if (ai === -1 && bi === -1) return a.localeCompare(b);
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    });
  }, [allWiki]);

  // 필터링 (검색 + 카테고리)
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return allWiki.filter(w => {
      const matchCat = activeCategory === 'all' || w.category === activeCategory;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        w.title.toLowerCase().includes(q) ||
        w.tags.some(t => t.toLowerCase().includes(q)) ||
        w.excerpt?.toLowerCase().includes(q)
      );
    });
  }, [allWiki, search, activeCategory]);

  // 카테고리별 그룹핑 (최근 수정순)
  const grouped = useMemo(() => {
    const map = {};
    for (const item of filtered) {
      if (!map[item.category]) map[item.category] = [];
      map[item.category].push(item);
    }
    // 각 카테고리 내 최근 수정순 정렬
    for (const cat of Object.keys(map)) {
      map[cat].sort((a, b) => (b.updated || b.created).localeCompare(a.updated || a.created));
    }
    return map;
  }, [filtered]);

  const sortedCategories = activeCategory === 'all'
    ? categories.filter(c => grouped[c])
    : [activeCategory].filter(c => grouped[c]);

  return (
    <Layout>
      <SEO title="Wiki" />
      <PageWrapper>
        {/* 히어로 */}
        <HeroArea>
          <HeroTitle>Wiki</HeroTitle>
          <HeroDesc>
            수집하고 정리한 지식 베이스 — 개념, 엔티티, 비교, 소스
          </HeroDesc>
          <StatsRow>
            <StatChip>📚 총 {allWiki.length}개 문서</StatChip>
            <StatChip>📂 {categories.length}개 카테고리</StatChip>
          </StatsRow>
        </HeroArea>

        {/* 검색 + 필터 */}
        <ControlRow>
          <SearchInput
            type="text"
            placeholder="제목, 태그, 내용 검색..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <FilterChip $active={activeCategory === 'all'} onClick={() => setActiveCategory('all')}>
            전체
          </FilterChip>
          {categories.map(cat => (
            <FilterChip
              key={cat}
              $active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {CATEGORY_EMOJI[cat] || '📁'} {cat}
            </FilterChip>
          ))}
        </ControlRow>

        {/* 카테고리별 그리드 */}
        {sortedCategories.length === 0 ? (
          <EmptyState>검색 결과가 없습니다.</EmptyState>
        ) : (
          sortedCategories.map(cat => (
            <RevealSection key={cat}>
              <CategorySection>
                <CategoryHeader>
                  <CategoryTitle>
                    {CATEGORY_EMOJI[cat] || '📁'} {cat}
                  </CategoryTitle>
                  <CategoryCount>{grouped[cat].length}</CategoryCount>
                  <CategoryLine />
                </CategoryHeader>
                <CardGrid>
                  {grouped[cat].map(item => (
                    <WikiCard key={item.slug} to={item.slug}>
                      <CardTitle>{item.title}</CardTitle>
                      {item.tags.length > 0 && (
                        <CardTags>
                          {item.tags.slice(0, 4).map(t => (
                            <CardTag key={t}>#{t}</CardTag>
                          ))}
                        </CardTags>
                      )}
                      <CardMeta>
                        <CardDate>{item.updated || item.created}</CardDate>
                        {item.status && (
                          <CardStatus $s={item.status}>{item.status}</CardStatus>
                        )}
                      </CardMeta>
                    </WikiCard>
                  ))}
                </CardGrid>
              </CategorySection>
            </RevealSection>
          ))
        )}
      </PageWrapper>
    </Layout>
  );
};

export default WikiIndexPage;

export const query = graphql`
  query WikiIndexQuery {
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

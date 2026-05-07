import React, { useEffect, useRef, useState, useCallback } from 'react';
import { navigate } from 'gatsby';
import styled, { keyframes } from 'styled-components';

/* ── 카테고리 색상 ── */
const CAT_COLOR = {
  important:   '#fbbf24',
  sources:     '#34d399',
  concepts:    '#818cf8',
  entities:    '#f472b6',
  comparisons: '#fb923c',
  synthesis:   '#a78bfa',
  corrections: '#60a5fa',
};
const DEFAULT_COLOR = '#94a3b8';

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

/* ── 사이드바 컨테이너 ── */
const SidebarWrap = styled.aside`
  position: sticky;
  top: 70px;
  height: calc(100vh - 70px);
  width: ${({ $collapsed }) => ($collapsed ? '48px' : '260px')};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-right: 1px solid ${({ theme }) => theme.colors.glassBorder};
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  z-index: 10;
  animation: ${fadeIn} 0.4s ease both;

  @media (max-width: 900px) {
    display: none;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $collapsed }) => ($collapsed ? 'center' : 'space-between')};
  padding: ${({ $collapsed }) => ($collapsed ? '14px 0' : '14px 12px')};
  border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};
  flex-shrink: 0;
`;

const SidebarTitle = styled.span`
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary};
  white-space: nowrap;
  overflow: hidden;
`;

const IconBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
  padding: 4px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => `${theme.colors.primary}15`};
    color: ${({ theme }) => theme.colors.primary};
  }

  svg { width: 16px; height: 16px; }
`;

const GraphCanvas = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  opacity: ${({ $collapsed }) => ($collapsed ? 0 : 1)};
  transition: opacity 0.2s ease;

  canvas { display: block; }
`;

/* ── 풀스크린 모달 ── */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: #fffff5;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.2s ease both;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  flex-shrink: 0;
`;

const ModalTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: #1e1b4b;
  letter-spacing: 0.5px;
`;

const ModalClose = styled.button`
  background: rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 8px;
  color: #1e1b4b;
  cursor: pointer;
  padding: 6px 14px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background 0.2s;

  &:hover { background: rgba(0,0,0,0.1); }
`;

const Legend = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 8px 24px;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  flex-shrink: 0;
`;

const LegendItem = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(0,0,0,0.6);
  text-transform: capitalize;
`;

const LegendDot = styled.span`
  width: 8px; height: 8px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const ModalCanvas = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  canvas { display: block; }
`;

const BG_COLOR = '#fffff5';
const TEXT_COLOR = 'rgba(15,15,30,0.85)';
const LINK_COLOR = 'rgba(0,0,0,0.08)';

/* ── 그래프 렌더러 ── */
function GraphRenderer({ graphData, currentSlug, width, height, onNodeClick, nodeSize = 1 }) {
  const containerRef = useRef(null);
  const fgRef = useRef(null);
  const [ForceGraph2D, setFG] = useState(null);
  const hoverRef = useRef(null);
  const highlightRef = useRef({ nodes: new Set(), links: new Set() });
  const neighborsRef = useRef({});
  const nodeLinksRef = useRef({});

  // dynamic import — 한 번만
  useEffect(() => {
    import('react-force-graph-2d').then(mod => setFG(() => mod.default));
  }, []);

  // 인접 맵 구축
  useEffect(() => {
    const neighbors = {};
    const nodeLinks = {};
    for (const link of graphData.links) {
      const s = typeof link.source === 'object' ? link.source.id : link.source;
      const t = typeof link.target === 'object' ? link.target.id : link.target;
      if (!neighbors[s]) neighbors[s] = new Set();
      if (!neighbors[t]) neighbors[t] = new Set();
      neighbors[s].add(t);
      neighbors[t].add(s);
      if (!nodeLinks[s]) nodeLinks[s] = new Set();
      if (!nodeLinks[t]) nodeLinks[t] = new Set();
      nodeLinks[s].add(link);
      nodeLinks[t].add(link);
    }
    neighborsRef.current = neighbors;
    nodeLinksRef.current = nodeLinks;
  }, [graphData]);

  const handleNodeHover = useCallback((node) => {
    const hl = highlightRef.current;
    hl.nodes.clear();
    hl.links.clear();
    if (node) {
      hoverRef.current = node;
      hl.nodes.add(node);
      (neighborsRef.current[node.id] || []).forEach(nId => {
        const n = graphData.nodes.find(x => x.id === nId);
        if (n) hl.nodes.add(n);
      });
      (nodeLinksRef.current[node.id] || []).forEach(l => hl.links.add(l));
    } else {
      hoverRef.current = null;
    }
  }, [graphData]);

  const paintNode = useCallback((node, ctx, globalScale) => {
    const isCurrent = node.id === currentSlug;
    const isHovered = hoverRef.current?.id === node.id;
    const isHighlighted = highlightRef.current.nodes.has(node);
    const hasHover = hoverRef.current !== null;

    const baseColor = CAT_COLOR[node.category] || DEFAULT_COLOR;
    const radius = (node.val || 2) * nodeSize * (isCurrent ? 1.8 : 1) * (isHovered ? 1.4 : 1);

    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);

    if (isCurrent) {
      ctx.shadowBlur = 12;
      ctx.shadowColor = baseColor;
      ctx.fillStyle = baseColor;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5 / globalScale;
      ctx.stroke();
    } else if (hasHover && !isHighlighted) {
      ctx.fillStyle = `${baseColor}25`;
      ctx.fill();
    } else {
      if (isHovered || isHighlighted) {
        ctx.shadowBlur = 8;
        ctx.shadowColor = baseColor;
      }
      ctx.fillStyle = baseColor;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // 레이블: 호버 또는 현재 페이지만, 호버 시 2배 크기
    if (isHovered || isCurrent) {
      const label = node.title.length > 24 ? node.title.slice(0, 24) + '…' : node.title;
      const baseFontSize = Math.max(3, 4.5 / globalScale);
      const fontSize = isHovered ? baseFontSize * 2 : baseFontSize * 1.3;
      ctx.font = `${isCurrent || isHovered ? 700 : 400} ${fontSize}px sans-serif`;
      ctx.fillStyle = TEXT_COLOR;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, node.x, node.y + radius + fontSize * 1.2);
    }
  }, [currentSlug, nodeSize]);

  const paintLink = useCallback((link, ctx) => {
    const isHighlighted = highlightRef.current.links.has(link);
    ctx.strokeStyle = isHighlighted
      ? `${CAT_COLOR[link.source?.category] || DEFAULT_COLOR}80`
      : LINK_COLOR;
    ctx.lineWidth = isHighlighted ? 1.5 : 0.5;
  }, []);

  if (!ForceGraph2D || !graphData) return <div ref={containerRef} style={{ width, height }} />;

  return (
    <ForceGraph2D
      ref={fgRef}
      graphData={graphData}
      width={width}
      height={height}
      backgroundColor={BG_COLOR}
      nodeCanvasObject={paintNode}
      nodeCanvasObjectMode={() => 'replace'}
      linkCanvasObjectMode={() => 'after'}
      linkCanvasObject={paintLink}
      onNodeHover={handleNodeHover}
      onNodeClick={(node) => onNodeClick && onNodeClick(node)}
      onNodeDrag={(node) => { node.fx = node.x; node.fy = node.y; }}
      onNodeDragEnd={(node) => { node.fx = null; node.fy = null; }}
      linkWidth={0.5}
      linkColor={() => LINK_COLOR}
      nodeRelSize={3}
      warmupTicks={80}
      cooldownTicks={Infinity}
      cooldownTime={0}
      d3AlphaDecay={0.005}
      d3VelocityDecay={0.3}
      enableNodeDrag={true}
      enableZoomInteraction={true}
      enablePanInteraction={true}
    />
  );
}

/* ── 메인 컴포넌트 ── */
const WikiGraph = ({ currentSlug }) => {
  const [graphData, setGraphData] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const sidebarRef = useRef(null);
  const [sidebarSize, setSidebarSize] = useState({ w: 260, h: 500 });

  useEffect(() => {
    fetch('/wiki-graph.json')
      .then(r => r.json())
      .then(setGraphData)
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!sidebarRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSidebarSize({ w: Math.floor(width), h: Math.floor(height) });
    });
    ro.observe(sidebarRef.current);
    return () => ro.disconnect();
  }, []);

  const handleNodeClick = useCallback((node) => {
    navigate(node.id);
  }, []);

  return (
    <>
      <SidebarWrap $collapsed={collapsed}>
        <SidebarHeader $collapsed={collapsed}>
          {!collapsed && <SidebarTitle>Graph</SidebarTitle>}
          <div style={{ display: 'flex', gap: 4 }}>
            {!collapsed && (
              <IconBtn onClick={() => setExpanded(true)} title="전체화면">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M2 6V2h4M10 2h4v4M14 10v4h-4M6 14H2v-4" />
                </svg>
              </IconBtn>
            )}
            <IconBtn onClick={() => setCollapsed(c => !c)} title={collapsed ? '펼치기' : '접기'}>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                {collapsed
                  ? <path d="M6 4l4 4-4 4" />
                  : <path d="M10 4L6 8l4 4" />}
              </svg>
            </IconBtn>
          </div>
        </SidebarHeader>

        <GraphCanvas ref={sidebarRef} $collapsed={collapsed}>
          {graphData && !collapsed && sidebarSize.w > 0 && (
            <GraphRenderer
              graphData={graphData}
              currentSlug={currentSlug}
              width={sidebarSize.w}
              height={sidebarSize.h}
              onNodeClick={handleNodeClick}
              nodeSize={0.9}
            />
          )}
        </GraphCanvas>
      </SidebarWrap>

      {/* 풀스크린 모달 */}
      {expanded && graphData && (
        <Overlay onClick={(e) => { if (e.target === e.currentTarget) setExpanded(false); }}>
          <ModalHeader>
            <ModalTitle>Wiki Graph — {graphData.nodes.length}개 노드 · {graphData.links.length}개 연결</ModalTitle>
            <ModalClose onClick={() => setExpanded(false)}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1l10 10M11 1L1 11" />
              </svg>
              닫기
            </ModalClose>
          </ModalHeader>
          <Legend>
            {Object.entries(CAT_COLOR).map(([cat, color]) => (
              <LegendItem key={cat}>
                <LegendDot $color={color} />
                {cat}
              </LegendItem>
            ))}
          </Legend>
          <ModalCanvas>
            <GraphRenderer
              graphData={graphData}
              currentSlug={currentSlug}
              width={typeof window !== 'undefined' ? window.innerWidth : 1200}
              height={typeof window !== 'undefined' ? window.innerHeight - 100 : 700}
              onNodeClick={(node) => { navigate(node.id); setExpanded(false); }}
              nodeSize={1.2}
            />
          </ModalCanvas>
        </Overlay>
      )}
    </>
  );
};

export default WikiGraph;

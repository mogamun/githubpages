import React, { useEffect, useRef, useState, useCallback } from 'react';
import { navigate } from 'gatsby';
import styled, { keyframes } from 'styled-components';

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

const fadeIn = keyframes`from{opacity:0}to{opacity:1}`;

const BG = '#fffff5';
const TEXT = 'rgba(15,15,30,0.85)';
const LINK = 'rgba(0,0,0,0.08)';

/* ── 사이드바 ── */
const SidebarWrap = styled.aside`
  position:sticky;top:70px;height:calc(100vh - 70px);
  width:${({$c})=>$c?'48px':'260px'};flex-shrink:0;
  display:flex;flex-direction:column;
  background:${({theme})=>theme.colors.glass};
  backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
  border-right:1px solid ${({theme})=>theme.colors.glassBorder};
  transition:width .3s cubic-bezier(.16,1,.3,1);
  overflow:hidden;z-index:10;animation:${fadeIn} .4s ease both;
  @media(max-width:900px){display:none}
`;
const SidebarHeader = styled.div`
  display:flex;align-items:center;
  justify-content:${({$c})=>$c?'center':'space-between'};
  padding:${({$c})=>$c?'14px 0':'14px 12px'};
  border-bottom:1px solid ${({theme})=>theme.colors.glassBorder};flex-shrink:0;
`;
const SidebarTitle = styled.span`
  font-size:.72rem;font-weight:800;text-transform:uppercase;
  letter-spacing:1px;color:${({theme})=>theme.colors.primary};
  white-space:nowrap;overflow:hidden;
`;
const IconBtn = styled.button`
  background:none;border:none;cursor:pointer;
  color:${({theme})=>theme.colors.gray};padding:4px;border-radius:6px;
  display:flex;align-items:center;justify-content:center;
  transition:background .2s,color .2s;flex-shrink:0;
  &:hover{background:${({theme})=>`${theme.colors.primary}15`};color:${({theme})=>theme.colors.primary}}
  svg{width:16px;height:16px}
`;
const GraphCanvas = styled.div`
  flex:1;overflow:hidden;position:relative;
  opacity:${({$c})=>$c?0:1};transition:opacity .2s;
  canvas{display:block}
`;

/* ── 모달 ── */
const Overlay = styled.div`
  position:fixed;inset:0;background:${BG};z-index:2000;
  display:flex;flex-direction:column;animation:${fadeIn} .2s ease both;
`;
const ModalHeader = styled.div`
  display:flex;align-items:center;justify-content:space-between;
  padding:16px 24px;border-bottom:1px solid rgba(0,0,0,.08);flex-shrink:0;
`;
const ModalTitle = styled.span`font-size:.9rem;font-weight:700;color:#1e1b4b;letter-spacing:.5px`;
const ModalClose = styled.button`
  background:rgba(0,0,0,.05);border:1px solid rgba(0,0,0,.1);
  border-radius:8px;color:#1e1b4b;cursor:pointer;padding:6px 14px;
  font-size:.8rem;font-weight:600;display:flex;align-items:center;gap:6px;
  transition:background .2s;
  &:hover{background:rgba(0,0,0,.1)}
`;
const Legend = styled.div`
  display:flex;gap:16px;flex-wrap:wrap;padding:8px 24px;
  border-bottom:1px solid rgba(0,0,0,.06);flex-shrink:0;
`;
const LegendItem = styled.span`
  display:flex;align-items:center;gap:5px;
  font-size:.7rem;font-weight:600;color:rgba(0,0,0,.6);text-transform:capitalize;
`;
const LegendDot = styled.span`width:8px;height:8px;border-radius:50%;background:${({$c})=>$c};flex-shrink:0`;
const ModalCanvas = styled.div`flex:1;overflow:hidden;position:relative;canvas{display:block}`;

/* ── 그래프 렌더러: canvas에 직접 그리기 ── */
function GraphRenderer({ graphData, currentSlug, width, height, onNodeClick, nodeSize = 1 }) {
  const containerRef = useRef(null);
  const fgRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !graphData || width === 0 || height === 0) return;

    let cancelled = false;
    let fg = null;

    import('react-force-graph-2d').then(({ default: ForceGraph2D }) => {
      if (cancelled) return;

      // 인접 맵
      const neighbors = {};
      const nodeLinks = {};
      for (const link of graphData.links) {
        const s = typeof link.source === 'object' ? link.source.id : link.source;
        const t = typeof link.target === 'object' ? link.target.id : link.target;
        if (!neighbors[s]) neighbors[s] = new Set();
        if (!neighbors[t]) neighbors[t] = new Set();
        neighbors[s].add(t);
        neighbors[t].add(s);
        if (!nodeLinks[s]) nodeLinks[s] = [];
        if (!nodeLinks[t]) nodeLinks[t] = [];
        nodeLinks[s].push(link);
        nodeLinks[t].push(link);
      }

      let hoverNode = null;
      const highlightNodes = new Set();
      const highlightLinks = new Set();

      fg = new ForceGraph2D(containerRef.current, {
        graphData,
        width,
        height,
        backgroundColor: BG,
        nodeRelSize: 3,
        linkColor: () => LINK,
        linkWidth: 0.5,
        linkCanvasObjectMode: () => 'after',
        linkCanvasObject(link, ctx) {
          const hl = highlightLinks.has(link);
          ctx.strokeStyle = hl
            ? `${CAT_COLOR[link.source?.category] || DEFAULT_COLOR}80`
            : LINK;
          ctx.lineWidth = hl ? 1.5 : 0.5;
        },
        nodeCanvasObjectMode: () => 'replace',
        nodeCanvasObject(node, ctx, globalScale) {
          const isCurrent = node.id === currentSlug;
          const isHovered = hoverNode?.id === node.id;
          const isHighlighted = highlightNodes.has(node);
          const hasHover = hoverNode !== null;

          const baseColor = CAT_COLOR[node.category] || DEFAULT_COLOR;
          const radius = (node.val || 2) * nodeSize * (isCurrent ? 1.8 : 1) * (isHovered ? 1.4 : 1);

          ctx.beginPath();
          ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);

          if (isCurrent) {
            ctx.shadowBlur = 12; ctx.shadowColor = baseColor;
            ctx.fillStyle = baseColor; ctx.fill();
            ctx.shadowBlur = 0;
            ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5 / globalScale; ctx.stroke();
          } else if (hasHover && !isHighlighted) {
            ctx.fillStyle = `${baseColor}25`; ctx.fill();
          } else {
            if (isHovered || isHighlighted) { ctx.shadowBlur = 8; ctx.shadowColor = baseColor; }
            ctx.fillStyle = baseColor; ctx.fill();
            ctx.shadowBlur = 0;
          }

          // 레이블: 호버 or 현재 페이지만. 호버 시 2배
          if (isHovered || isCurrent) {
            const label = node.title.length > 24 ? node.title.slice(0, 24) + '…' : node.title;
            const baseFS = Math.max(3, 4.5 / globalScale);
            const fontSize = isHovered ? baseFS * 2 : baseFS * 1.3;
            ctx.font = `${isHovered ? 700 : 600} ${fontSize}px sans-serif`;
            ctx.fillStyle = TEXT;
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(label, node.x, node.y + radius + fontSize * 1.2);
          }
        },
        onNodeHover(node) {
          highlightNodes.clear(); highlightLinks.clear();
          if (node) {
            hoverNode = node;
            highlightNodes.add(node);
            for (const nId of (neighbors[node.id] || [])) {
              const n = graphData.nodes.find(x => x.id === nId);
              if (n) highlightNodes.add(n);
            }
            for (const l of (nodeLinks[node.id] || [])) highlightLinks.add(l);
          } else {
            hoverNode = null;
          }
        },
        onNodeClick(node) { onNodeClick && onNodeClick(node); },
        onNodeDrag(node) { node.fx = node.x; node.fy = node.y; },
        onNodeDragEnd(node) { node.fx = null; node.fy = null; },
        d3AlphaDecay: 0.005,
        d3VelocityDecay: 0.3,
        warmupTicks: 60,
        cooldownTicks: Infinity,
        cooldownTime: 0,
        enableNodeDrag: true,
        enableZoomInteraction: true,
        enablePanInteraction: true,
      });

      fgRef.current = fg;
    });

    return () => {
      cancelled = true;
      if (fg) { fg._destructor(); fg = null; }
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, [graphData, currentSlug, width, height, nodeSize]); // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={containerRef} style={{ width, height }} />;
}

/* ── 메인 ── */
const WikiGraph = ({ currentSlug }) => {
  const [graphData, setGraphData] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const sidebarRef = useRef(null);
  const [sidebarSize, setSidebarSize] = useState({ w: 260, h: 500 });

  useEffect(() => {
    fetch('/wiki-graph.json').then(r => r.json()).then(setGraphData).catch(() => {});
  }, []);

  useEffect(() => {
    if (!sidebarRef.current) return;
    const ro = new ResizeObserver(([e]) => {
      const { width, height } = e.contentRect;
      setSidebarSize({ w: Math.floor(width), h: Math.floor(height) });
    });
    ro.observe(sidebarRef.current);
    return () => ro.disconnect();
  }, []);

  const handleNodeClick = useCallback((node) => { navigate(node.id); }, []);

  return (
    <>
      <SidebarWrap $c={collapsed}>
        <SidebarHeader $c={collapsed}>
          {!collapsed && <SidebarTitle>Graph</SidebarTitle>}
          <div style={{display:'flex',gap:4}}>
            {!collapsed && (
              <IconBtn onClick={() => setExpanded(true)} title="전체화면">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M2 6V2h4M10 2h4v4M14 10v4h-4M6 14H2v-4"/>
                </svg>
              </IconBtn>
            )}
            <IconBtn onClick={() => setCollapsed(c => !c)} title={collapsed ? '펼치기' : '접기'}>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                {collapsed ? <path d="M6 4l4 4-4 4"/> : <path d="M10 4L6 8l4 4"/>}
              </svg>
            </IconBtn>
          </div>
        </SidebarHeader>
        <GraphCanvas ref={sidebarRef} $c={collapsed}>
          {graphData && !collapsed && sidebarSize.w > 0 && (
            <GraphRenderer graphData={graphData} currentSlug={currentSlug}
              width={sidebarSize.w} height={sidebarSize.h}
              onNodeClick={handleNodeClick} nodeSize={0.9}/>
          )}
        </GraphCanvas>
      </SidebarWrap>

      {expanded && graphData && (
        <Overlay onClick={e => { if (e.target === e.currentTarget) setExpanded(false); }}>
          <ModalHeader>
            <ModalTitle>Wiki Graph — {graphData.nodes.length}개 노드 · {graphData.links.length}개 연결</ModalTitle>
            <ModalClose onClick={() => setExpanded(false)}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1l10 10M11 1L1 11"/>
              </svg> 닫기
            </ModalClose>
          </ModalHeader>
          <Legend>
            {Object.entries(CAT_COLOR).map(([cat, color]) => (
              <LegendItem key={cat}><LegendDot $c={color}/>{cat}</LegendItem>
            ))}
          </Legend>
          <ModalCanvas>
            <GraphRenderer graphData={graphData} currentSlug={currentSlug}
              width={typeof window !== 'undefined' ? window.innerWidth : 1200}
              height={typeof window !== 'undefined' ? window.innerHeight - 100 : 700}
              onNodeClick={node => { navigate(node.id); setExpanded(false); }} nodeSize={1.2}/>
          </ModalCanvas>
        </Overlay>
      )}
    </>
  );
};

export default WikiGraph;

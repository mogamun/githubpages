---
title: 컨텍스트 로트 방지 (Context Rot Prevention)
created: 2026-04-24
updated: 2026-04-29
tags: [concept, ai-agent, context-management, claude-code]
sources: [2026-04-24-heyjames-claude-code-frameworks.md, 2026-04-29-claude-managed-agents-memory.md]
status: stable
category: concepts
---

# 컨텍스트 로트 방지 (Context Rot Prevention)

## 정의
LLM 에이전트의 컨텍스트 윈도우가 채워질수록 초기 지시사항이 희석되어 품질이 급격히 저하되는 현상(컨텍스트 로트)을 방지하는 설계 패턴.

## 핵심 원칙
- **컨텍스트 30% 이하 유지**: 최상의 출력 품질 보장
- **50% 임계값**: 품질 저하 시작, 급행선 짜기 시작
- **70% 위험 구간**: 환각, 요구사항 망각 발생
- **해결책**: 단계별 새 서브 에이전트에 깨끗한 컨텍스트 할당, 결과물은 디스크로 전달

## 적용 사례
- **GSD 프레임워크**: Plan/Execute/Review 각 단계에 20만 토큰 컨텍스트를 가진 새 서브 에이전트 할당. 메인 세션은 30~40% 유지
- **gstack**: 역할별 격리된 컨텍스트로 각 역할이 자기 업무에만 집중
- **이 위키의 LLM Wiki 패턴**: 컨텍스트를 위키에 저장하여 세션 간 지식 유지

## See also
- [gsd](/wiki/entities/gsd/)
- [gstack](/wiki/entities/gstack/)
- [brevity-accuracy-tradeoff](/wiki/concepts/brevity-accuracy-tradeoff/)
- [structure-as-implicit-prompt](/wiki/concepts/structure-as-implicit-prompt/)
- [Tool Search](/wiki/concepts/tool-search/)
- [Programmatic Tool Calling](/wiki/concepts/programmatic-tool-calling/)
- [Ref 기반 선택](/wiki/concepts/ref-based-selection/)
- [agent-browser](/wiki/entities/agent-browser/)
- [파일시스템 기반 메모리](/wiki/concepts/filesystem-based-memory/)
- [Managed Agents](/wiki/entities/managed-agents/)

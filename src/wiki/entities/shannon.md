---
title: Shannon
created: 2026-04-23
updated: 2026-04-23
tags: [entity, tool, security, ai-agent, pentesting]
sources: [2026-04-23-keygraph-shannon-ai-pentester.md]
status: stable
category: entities
---

# Shannon

## 정체
- **Type**: 자율 AI 침투테스트 도구 (오픈소스 + 상업)
- **개발사**: Keygraph
- **라이선스**: Shannon Lite (AGPL-3.0) / Shannon Pro (Commercial)
- **저장소**: https://github.com/KeygraphHQ/shannon

## 역할
웹 애플리케이션과 API의 화이트박스 보안 테스트 자동화. Claude Agent SDK 기반 멀티에이전트가 소스 코드 분석 → 실제 익스플로잇 → PoC 리포트까지 자율 수행. "No Exploit, No Report" 원칙으로 위양성 제거.

## 기술 특징
- Claude 3티어 모델 (Haiku/Sonnet/Opus)
- 5단계 파이프라인 (Pre-Recon → Recon → Vuln → Exploit → Report)
- 5개 OWASP 카테고리 병렬 처리 (Injection, XSS, SSRF, Auth, Authz)
- Docker + Temporal 기반 격리 실행
- XBOW 벤치마크 96.15%

## See also
- [Keygraph](/wiki/entities/keygraph/)
- [Shannon 소스](/wiki/sources/keygraph-shannon-ai-pentester/)
- [Claude Code](/wiki/entities/claude-code/)

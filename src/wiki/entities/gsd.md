---
title: GSD (Get Shit Done)
created: 2026-04-24
updated: 2026-04-24
tags: [entity, framework, claude-code, context-management]
sources: [2026-04-24-heyjames-claude-code-frameworks.md]
status: stable
category: entities
---

# GSD (Get Shit Done)

## 정체
Lex Christopherson(Glitter Cowboy)가 개발한 Claude Code용 AI 코딩 프레임워크. 컨텍스트 로트(썩는 현상) 해결에 집중. 깃허브 스타 51K.

## 역할
- 컨텍스트 격리로 장기 세션 품질 유지
- Plan/Execute/Review 3단계 워크플로우
- 각 단계마다 새 서브 에이전트에 20만 토큰 깨끗한 컨텍스트 할당
- 메인 세션 컨텍스트 30~40% 유지 (품질 저하 방지)
- 단계간 결과물은 디스크에 저장 (XML 포맷, LLM 파싱 최적화)
- v2: TypeScript SDK로 프로그래밍틱 오케스트레이션 제공

## 관련 프로젝트/맥락
- 아마존, 구글, 쇼피파이, 웹플로우 엔지니어 실사용 인증
- 14개 에이전트 지원 (가장 넓은 호환성): Claude Code, Cursor, Windsurf, Codex, Copilot, Gemini CLI, Cline, Augment, Trae, Qwen Code 등
- 설치: `npx get-shit-done-cc@latest`
- 저장소: https://github.com/gsd-build/get-shit-done

## 핵심 데이터
- 컨텍스트 0~30%: 최상 품질
- 컨텍스트 50%+: 품질 저하 시작
- 컨텍스트 70%+: 환각, 요구사항 망각

## See also
- [claude-code](/wiki/entities/claude-code/)
- [superpowers](/wiki/entities/superpowers/)
- [gstack](/wiki/entities/gstack/)
- [hermes-agent](/wiki/entities/hermes-agent/)
- [context-rot-prevention](/wiki/concepts/context-rot-prevention/)
- [claude-code-framework-comparison](/wiki/comparisons/claude-code-framework-comparison/)

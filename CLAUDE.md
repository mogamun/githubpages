# Project: Contents Directory (Gatsby Blog)

## Dev Server
- Gatsby dev server는 항상 **port 8000**으로 구동할 것 (`--port 8000`)
- **port 9235는 절대 종료(kill)하지 않는다** — 다른 용도로 사용 중인 포트이므로 건드리지 않는다.
- 기존 dev server 재시작이 필요할 때는 8000 포트만 종료 후 재구동한다.


<!-- PROBLEM-RESOLUTION -->
## 문제 해결
- **에러 발생 시**: 원인 분석 → 해결 시도 → 결과 확인 → `/llmwiki-write`로 교정 기록
- **기록 형식**: 문제 → 원인 → 해결방법 → 재발방지원칙
- **필수 기록**: 빌드에러, API오류, 설정충돌, 예상과 다른 동작, 서드파티 호환성, 포트/환경변수 문제
- **재발 방지**: 같은 문제 재발 시 CLAUDE.md에 직접 메모 추가 (예: "포트 3000 이미 사용 → lsof -ti:3000 | xargs kill")
<!-- /PROBLEM-RESOLUTION -->

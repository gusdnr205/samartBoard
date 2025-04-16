# SmartFlow Front

## 구성

- `전역상태관리`: zustand
- `비동기상태관리`: tanstack-query
- `단위/통합 테스트`: Jest
- `스타일링`: TailwindCSS(https://tailwindcss.com/)
- 라우팅

## 필요 결정사항

- 인터페이스 파일 관리 규칙
  - 네이밍 규칙 포함
- 디렉토리 구조 및 패턴
- 스토리북 쓸건지

## 고려할만한 것

- React UI 라이브러리

  - Material UI (MUI) : 프리랜서 프로젝트에서 여전히 많이 사용되는 UI 라이브러리. Google의 Material Design 시스템 기반
  - Mantine UI : 2022년 가장 인기 있었던 UI 라이브러리. 다양한 기능과 커스텀 스타일 지원
  - Chakra UI : 2021년 가장 인기 있었던 UI 라이브러리. 접근성과 스타일링 편의성이 뛰어남

- React 애니메이션 라이브러리

  - Motion : 가장 추천되는 애니메이션 라이브러리 (구 Framer Motion)
  - react-spring : 물리 기반 애니메이션 구현 가능

- React 차트

  - D3.js
  - Recharts
  - visx: D3 리액트 친화버전

- 폼 라이브러리

  - React Hook Form : 추천

- 불변 데이터 관리
  - Immer

# 🛠️ SmartBoard

**SmartBoard**는 개인적인 실험용 프로젝트로 시작된 게시판 기반 웹 애플리케이션입니다. 단순한 CRUD 게시판을 넘어서, 다양한 시뮬레이션 기능(건강보험료 계산기, 배당금 예측 등)을 담을 수 있는 확장형 플랫폼을 목표로 하고 있습니다.

---

## 🚀 프로젝트 목표

- 실용적인 게시판 시스템 구현
- 시뮬레이션 기능 탑재 (건보료 계산기, 배당금 예측 등)
- 확장성과 코드 품질을 고려한 구조 설계
- 학습 기반의 백엔드/프론트엔드 기술 실험

---

## ⚙️ 기술 스택

### 📦 프론트엔드

- **Vite**: 빠른 개발 빌드 환경을 제공하는 번들러
- **ESLint / Prettier**: 코드 스타일 및 품질 유지

### 🧠 백엔드

- **Python (예정)**: 초기 버전은 Python 기반 서버로 구현
- **Rust (고민 중)**: 성능 중심의 Rust 백엔드도 후보로 검토 중

### 🗄️ 데이터베이스

- 미정.  
  권한 관리 및 시뮬레이션을 위한 데이터 모델을 고려하여 결정할 예정입니다.  
  사용자 기반 데이터 저장과 로직 처리를 어떻게 나눌지 실험 중입니다.

---

## 🧰 개발 도구 및 품질 관리

- 코드 포맷터: **Prettier**
- 린트 도구: **ESLint**
- 추후 CI/CD 및 테스트 도구도 도입 예정입니다. (회사 프로젝트에서 사용하던 수준으로 관리할 예정)

---

## 🔮 향후 기능 (로드맵)

- [ ] 기본 게시판 기능 (중요)
- [ ] 사용자 인증 / 권한 관리
- [ ] 건강보험료 계산 시뮬레이터
- [ ] 배당금 수익 예측 도구
- [ ] 통계 시각화 (차트/그래프 등)

---

## 초기설정

npm install -D eslint prettier \
 eslint-config-prettier \
 eslint-plugin-react \
 eslint-plugin-react-hooks \
 eslint-plugin-jsx-a11y \
 @typescript-eslint/eslint-plugin \
 @typescript-eslint/parser

요즘은 eslint.json 안쓰고 eslint.config.js 쓴다고함

---

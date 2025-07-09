## 🔨 기술 스택
- React
- TypeScript
- Emotion (CSS-in-JS)
- React Router DOM
- Axios
- React Query (데이터 관리)
- Firebase Authentication (회원가입/로그인)
- Firebase Firestore (카드 신청 데이터 저장)
- json-server (Mock API: 카드 목록, 배너 데이터 등)
- DevOps / Deployment
- Vercel (프론트엔드 배포)
- Firebase Hosting / Firestore Database 관리

## 📱 주요 기능
  ✅ 공통
  - 회원가입 및 로그인 (Firebase Authentication)
  - 로그인 상태 유지 및 보호 라우팅
  - 전역 에러 핸들링 및 로딩 처리
  - 반응형 UI

  🏠 메인 페이지
  - 카드 추천 배너 (Swiper 슬라이드)
  - 카드 목록 조회 및 상세 페이지 이동
  - 검색 및 필터 기능 (예: 연회비, 혜택별 필터)

  💳 카드 상세 페이지
  - 카드 이미지 및 상세 설명 표시
  - 카드 혜택/조건 정보 확인
  - 카드 신청 버튼

  📝 카드 신청
  - 카드 신청 폼 입력 및 제출
  - 신청 완료 후 확인 페이지 표시
  - Firestore에 카드 신청 데이터 저장

  🔍 마이페이지
  - 내가 신청한 카드 목록 조회
  - 신청 내역 삭제

## 🗂️ 폴더 구조
```
src/
├── api/               # API 호출 함수
├── components/        # 재사용 가능한 컴포넌트
├── features/          # 카드, 사용자 관련 비즈니스 로직
├── hooks/             # 커스텀 훅
├── pages/             # 각 페이지 컴포넌트
├── styles/            # 스타일 파일
└── utils/             # 유틸리티 함수
```
## 🛡️ 프로젝트 목적 및 회고
  이 프로젝트는 카드사 사이트의 기본적인 서비스 구조를 이해하고, 실제 사용자 플로우 기반으로 프론트엔드 기능을 개발하기 위한 학습 목적으로 제작하였습니다. 실제 카드사 사이트처럼 API 연동, 로그인 인증, 데이터 관리 등 서비스를 구성하는 핵심 요소들을 직접 구현하며 클라이언트 사이드 개발 역량을 키웠습니다.
배너 캐러셀, 카드 상세 페이지 UI 등 사용자 친화적 디자인 구현
Firebase 기반 로그인 및 데이터베이스 실습

React Query를 통한 상태 관리 및 API 캐싱 최적화

에러 및 로딩 핸들링을 통한 사용자 경험 개선


# Progress

이 문서는 디자인 폰트 텍스트 이미지 생성기 프로젝트의 진행 상황을 기록합니다.

## 프로젝트 개요

- Next.js 기반 싱글 페이지 앱
- Tailwind CSS 및 커스텀 폰트를 이용한 텍스트 스타일링
- 결과를 이미지로 내보내는 도구

## 마일스톤

- [x] 기본 UI 와 레이아웃 구성
- [x] Tailwind CSS 설정 및 기본 테마 정의
- [x] 폰트 리소스 정리 및 로딩 방식 결정
- [x] 텍스트 입력/편집 기능 구현
- [x] 프리셋(폰트, 색상, 레이아웃) 시스템 설계 및 적용
- [x] SPA 라우터(AppRouter) 및 EditorScreen 분리
- [x] 나눔글꼴(localFont) 통합 및 폰트 선택 기능 구현
- [x] README/페이지에 나눔글꼴 포함 및 라이선스 정보 명시
- [ ] 이미지로 내보내기(Export) 기능 구현

## 작업 로그

### 2025-12-03

- Next.js 템플릿 초기 세팅 확인
- 프로젝트용 README.md 및 progress.md 작성
- 메인 페이지를 에디터/미리보기 UI로 리디자인 (좌측 컨트롤 패널 · 우측 프리뷰)
- Tailwind CSS(v4) 도입 및 page.module.css를 @apply 기반으로 리팩터링
- AppRouter + EditorScreen 구조로 SPA 라우터 구성
- 나눔글꼴 폰트 파일(`src/app/fonts/nanum`) 정리 및 `next/font/local`로 통합
- EditorScreen에 나눔 폰트 선택 드롭다운 추가
- README 및 에디터 푸터에 나눔글꼴 사용/라이선스 안내 문구 추가
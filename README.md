# DesignFont – 텍스트 이미지 생성기

이 프로젝트는 Next.js와 Tailwind CSS를 이용해 **디자인이 좋은 텍스트 이미지를 생성하는 싱글 페이지 앱**입니다.  
제공된 폰트들을 활용해 빠르게 타이포그래피 이미지를 만들 수 있도록 하는 것이 목표입니다.

## 기술 스택

- Next.js(App Router, TypeScript)
- Tailwind CSS
- next/font 및 커스텀 웹폰트
- Vercel / Cloudflare Pages 등 서버리스 배포 환경

## 주요 기능(계획)

- 텍스트 입력 및 실시간 미리보기
- 여러 폰트 프리셋 전환
- 색상, 정렬, 자간/행간 등 기본 스타일 조절
- 캔버스 사이즈/배경색 선택
- 결과를 이미지(PNG 등)로 내보내기

자세한 기능별 진행 상황은 [`progress.md`](progress.md)에 정리합니다.

## 개발 환경 설정

1. 패키지 설치

```bash
npm install
```

2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열면 앱을 확인할 수 있습니다.

기본 진입 페이지는 [`src/app/page.tsx`](src/app/page.tsx)이며, 전역 스타일은 [`src/app/globals.css`](src/app/globals.css)에 정의됩니다.

## 스크립트

- npm run dev : 개발 서버 실행
- npm run build : 프로덕션 빌드
- npm run start : 빌드 결과 실행
- npm run lint : ESLint 검사

## 프로젝트 구조(요약)

```text
.
├── README.md
├── progress.md
├── src
│   └── app
│       ├── page.tsx        # 메인 페이지 (싱글 페이지 앱)
│       ├── layout.tsx      # 공통 레이아웃
│       └── globals.css     # 전역 스타일 (Tailwind 포함 예정)
└── public                  # 정적 리소스(아이콘, 폰트 등)
```

## Tailwind CSS 도입 계획

- Tailwind CSS 설치 및 [`tailwind.config.{js,ts}`](tailwind.config.ts) 설정
- [`src/app/globals.css`](src/app/globals.css)에 Tailwind base/components/utilities 추가
- 공통 컬러/폰트 스케일 정의 후 컴포넌트에 단계적 적용

## Fonts

이 프로젝트에는 **나눔글꼴 계열 폰트들**(Nanum Gothic, Nanum Myeongjo, Nanum Square, Nanum Square Neo, Nanum Barun Gothic, Nanum Pen 등)이 포함되어 있으며,
[`next/font/local`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts)을 통해 [`src/app/fonts/nanum`](src/app/fonts/nanum/index.ts)에서 관리합니다.

- 폰트 파일들은 네이버에서 제공하는 나눔글꼴 패키지를 기반으로 합니다.
- 나눔글꼴은 NAVER에서 제공하며, **나눔글꼴 라이선스**를 따릅니다.
  - 자세한 내용: https://hangeul.naver.com/font
- 이 프로젝트의 코드는 [`LICENSE.md`](LICENSE.md)와 별개로, 포함된 폰트 파일은 각 폰트 제공처의 라이선스를 따릅니다.

## 라이선스

이 프로젝트는 [`LICENSE.md`](LICENSE.md)의 내용을 따릅니다.

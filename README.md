# Dev Starters - Next.js 스타터킷

프로덕션 준비된 기술 스택과 구조를 갖춘 Next.js 웹 개발 스타터킷입니다.

## 🎯 특징

- ⚡ **Next.js 16** - App Router와 최신 기능
- ⚛️ **React 19** - 최신 버전과 Server Components
- 📘 **TypeScript** - 타입 안전한 개발
- 🎨 **Tailwind CSS v4** - 유틸리티 기반 스타일링
- 🧩 **shadcn/ui** - 검증된 컴포넌트 라이브러리
- 📊 **TanStack Query** - 서버 상태 관리
- 🌙 **dark-mode** - next-themes로 다크모드 지원
- 🔑 **Type-Safe** - 완벽한 TypeScript 지원

## 📦 기술 스택

| 라이브러리 | 버전 | 설명 |
|-----------|------|------|
| Next.js | 16.2.4 | React 풀스택 프레임워크 |
| React | 19.2.4 | UI 라이브러리 |
| TypeScript | 5 | 정적 타입 지정 |
| Tailwind CSS | 4 | 유틸리티 CSS |
| shadcn/ui | latest | UI 컴포넌트 |
| TanStack Query | 5.99.2 | 데이터 페칭 및 캐싱 |
| axios | 1.15.0 | HTTP 클라이언트 |
| next-themes | 0.4.6 | 다크모드 관리 |

## 🚀 빠른 시작

### 1. 프로젝트 설정

```bash
# 의존성 설치
pnpm install

# 환경변수 설정
cp .env.example .env.local
```

### 2. 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 3. 빌드 및 배포

```bash
# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start
```

## 📁 프로젝트 구조

```
dev-starters/
├── app/                              # Next.js App Router
│   ├── api/
│   │   └── example/route.ts          # API 라우트 예제
│   ├── error.tsx                     # 에러 페이지
│   ├── loading.tsx                   # 로딩 페이지
│   ├── not-found.tsx                 # 404 페이지
│   ├── layout.tsx                    # 루트 레이아웃
│   ├── globals.css                   # 글로벌 스타일
│   └── page.tsx                      # 홈 페이지
│
├── components/
│   ├── ui/                           # shadcn UI 컴포넌트
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ... 기타 컴포넌트
│   ├── layout/                       # 레이아웃 컴포넌트
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   └── Navigation.tsx
│   └── common/                       # 공통 컴포넌트
│       ├── ThemeToggle.tsx
│       ├── Logo.tsx
│       └── PageTitle.tsx
│
├── hooks/                            # 커스텀 React 훅
│   ├── use-api.ts                   # TanStack Query 기반 데이터 페칭
│   ├── use-local-storage.ts         # localStorage 상태 관리
│   └── use-debounce.ts              # 디바운싱
│
├── lib/
│   ├── api.ts                       # axios 클라이언트
│   ├── query-client.ts              # TanStack Query 설정
│   ├── constants.ts                 # 앱 전역 상수
│   └── utils.ts                     # 유틸리티 함수
│
├── types/
│   └── index.ts                     # TypeScript 타입 정의
│
├── public/                           # 정적 자산
├── .env.example                      # 환경변수 템플릿
├── package.json                      # 의존성 관리
├── tsconfig.json                     # TypeScript 설정
└── README.md                         # 이 파일
```

## 🎨 컴포넌트 사용 예제

### Button 사용

```tsx
import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    <Button variant="default" size="lg">
      클릭하세요
    </Button>
  )
}
```

### useApi 훅으로 데이터 페칭

```tsx
"use client"

import { useApi } from "@/hooks/use-api"

interface Post {
  id: number
  title: string
  description: string
}

export function PostList() {
  const { data, isLoading, error } = useApi<Post[]>("/example")

  if (isLoading) return <div>로딩 중...</div>
  if (error) return <div>에러: {error.message}</div>

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

### useLocalStorage 훅

```tsx
"use client"

import { useLocalStorage } from "@/hooks/use-local-storage"

export function Counter() {
  const [count, setCount] = useLocalStorage<number>("count", 0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  )
}
```

## 🔧 개발 가이드

### 새로운 shadcn 컴포넌트 추가

```bash
pnpm dlx shadcn@latest add [component-name]
```

### 환경변수 추가

`.env.local` 파일에 추가하고, `NEXT_PUBLIC_` 접두사를 붙이면 클라이언트에서 접근 가능합니다.

```env
NEXT_PUBLIC_MY_VAR=value
PRIVATE_VAR=secret  # 서버에서만 접근 가능
```

### API 라우트 작성

```tsx
// app/api/my-endpoint/route.ts
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hello" })
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  return NextResponse.json({ success: true, data })
}
```

### 커스텀 훅 작성

```tsx
// hooks/use-my-hook.ts
"use client"

import { useState, useEffect } from "react"

export function useMyHook() {
  const [state, setState] = useState(null)

  useEffect(() => {
    // 초기화 로직
  }, [])

  return { state, setState }
}
```

## 🌙 다크모드

다크모드는 `next-themes`로 관리됩니다. `ThemeToggle` 컴포넌트를 사용하세요.

```tsx
import { ThemeToggle } from "@/components/common/ThemeToggle"

export function Header() {
  return (
    <header>
      {/* ... */}
      <ThemeToggle />
    </header>
  )
}
```

## 📊 TanStack Query 설정

TanStack Query의 기본 설정은 `lib/query-client.ts`에 있습니다.

```tsx
// useApi 훅 사용 (권장)
const { data, isLoading } = useApi<MyType>("/api/endpoint")

// 또는 직접 useQuery 사용
import { useQuery } from "@tanstack/react-query"
import apiClient from "@/lib/api"

const { data } = useQuery({
  queryKey: ["posts"],
  queryFn: () => apiClient.get("/api/posts"),
})
```

## 📝 스크립트

```bash
# 개발
pnpm dev

# 빌드
pnpm build

# 프로덕션 실행
pnpm start

# Linting
pnpm lint
```

## 📚 추가 리소스

- [Next.js 문서](https://nextjs.org/docs)
- [React 문서](https://react.dev)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [TanStack Query](https://tanstack.com/query/latest)

## 📄 라이선스

MIT

## 🤝 기여

이 프로젝트는 오픈소스입니다. 개선 사항은 언제든지 환영합니다!

---

**Happy Coding! 🚀**

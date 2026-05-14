# 🚀 Dev Starters 온보딩 가이드

**프로덕션 준비된 Next.js 스타터킷에 오신 것을 환영합니다!**

이 가이드는 프로젝트를 빠르게 시작하고, 코드 구조를 이해하며, 개발 워크플로우를 숙지하는 데 도움이 됩니다.

---

## 📋 목차

1. [빠른 시작](#빠른-시작)
2. [프로젝트 구조](#프로젝트-구조)
3. [기술 스택](#기술-스택)
4. [개발 가이드](#개발-가이드)
5. [주요 패턴](#주요-패턴)
6. [문제 해결](#문제-해결)

---

## 🎯 빠른 시작

### 1단계: 의존성 설치

```bash
# Node.js 18+ 및 pnpm이 설치되어 있는지 확인
node --version  # v18 이상
pnpm --version  # 8.0 이상

# 의존성 설치
pnpm install
```

### 2단계: 환경변수 설정

```bash
# 템플릿에서 .env.local 생성
cp .env.example .env.local

# .env.local 파일을 편집하여 필요한 변수 설정
# NEXT_PUBLIC_으로 시작하는 변수는 클라이언트에서 접근 가능
```

### 3단계: 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 4단계: 변경사항 확인

- `app/page.tsx`를 수정하고 저장하면 핫 리로드로 즉시 반영됩니다
- 콘솔에서 TypeScript 타입 에러를 확인할 수 있습니다

---

## 📁 프로젝트 구조 상세 가이드

### 루트 디렉토리 구조

```
dev-starters/
├── app/                    # Next.js App Router (모든 라우트, 레이아웃, API)
├── components/             # React 컴포넌트 (shadcn/ui, 커스텀 컴포넌트)
├── hooks/                  # 커스텀 React 훅
├── lib/                    # 유틸리티, 설정, 헬퍼 함수
├── types/                  # TypeScript 타입 정의
├── public/                 # 정적 자산 (이미지, 아이콘 등)
├── .claude/                # Claude Code 설정
├── .next/                  # Next.js 빌드 결과 (커밋하지 마세요)
├── node_modules/           # npm 패키지 (커밋하지 마세요)
├── .git/                   # Git 저장소
├── package.json            # 의존성 및 스크립트
├── tsconfig.json           # TypeScript 설정
├── next.config.js          # Next.js 설정
├── tailwind.config.js      # Tailwind CSS 설정
├── README.md               # 프로젝트 설명
├── CLAUDE.md               # Claude Code 프로젝트 설정
└── ONBOARDING.md          # 이 파일
```

### app/ 디렉토리 (App Router)

Next.js 13+의 App Router를 사용합니다. 파일명이 라우트 구조를 결정합니다.

```
app/
├── layout.tsx              # 루트 레이아웃 (모든 페이지의 공통 구조)
├── page.tsx                # / 페이지
├── globals.css             # 글로벌 스타일
├── error.tsx               # 에러 경계
├── not-found.tsx           # 404 페이지
├── loading.tsx             # 로딩 UI
│
└── api/                    # API 라우트
    └── example/
        └── route.ts        # GET, POST 등 HTTP 메서드 작성
```

**라우팅 규칙:**
- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/blog/[id]/page.tsx` → `/blog/123` (동적 라우트)
- `app/api/posts/route.ts` → `GET /api/posts`

### components/ 디렉토리

기능별로 구성됩니다.

```
components/
├── ui/                     # shadcn/ui 컴포넌트
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   ├── dialog.tsx
│   └── ...
│
├── layout/                 # 레이아웃 컴포넌트
│   ├── Header.tsx          # 헤더
│   ├── Footer.tsx          # 푸터
│   ├── Sidebar.tsx         # 사이드바
│   └── Navigation.tsx      # 네비게이션
│
└── common/                 # 공통 컴포넌트
    ├── ThemeToggle.tsx     # 다크모드 토글
    ├── Logo.tsx            # 로고
    └── PageTitle.tsx       # 페이지 제목
```

**컴포넌트 작성 규칙:**
- 파일명은 PascalCase (예: `MyComponent.tsx`)
- 클라이언트 컴포넌트는 최상단에 `"use client"` 추가
- 컴포넌트는 가독성을 위해 폴더로 정리

### hooks/ 디렉토리

커스텀 React 훅을 모아두는 곳입니다.

```
hooks/
├── use-api.ts             # TanStack Query를 래핑한 데이터 페칭
├── use-local-storage.ts   # localStorage 상태 관리
├── use-debounce.ts        # 입력 디바운싱
└── use-custom.ts          # 커스텀 훅 (필요시 추가)
```

**훅 작성 규칙:**
- 파일명은 kebab-case (예: `use-my-hook.ts`)
- 클라이언트 훅은 상단에 `"use client"` 추가

### lib/ 디렉토리

프로젝트 전역 설정 및 유틸리티입니다.

```
lib/
├── api.ts                 # axios 클라이언트 설정
├── query-client.ts        # TanStack Query 설정
├── constants.ts           # 앱 전역 상수
└── utils.ts               # 유틸리티 함수 (cn 등)
```

### types/ 디렉토리

TypeScript 타입 정의를 중앙화합니다.

```
types/
└── index.ts               # 모든 타입 정의
```

---

## 🛠️ 기술 스택

### 프론트엔드

| 라이브러리 | 버전 | 목적 |
|-----------|------|------|
| **Next.js** | 16.2.4 | React 풀스택 프레임워크, 라우팅, SSR |
| **React** | 19.2.4 | UI 라이브러리 |
| **TypeScript** | 5 | 정적 타입 지정 |
| **Tailwind CSS** | 4 | 유틸리티 CSS 프레임워크 |
| **shadcn/ui** | latest | 접근성 높은 UI 컴포넌트 |

### 데이터 관리 & API

| 라이브러리 | 버전 | 목적 |
|-----------|------|------|
| **TanStack Query** | 5.99.2 | 서버 상태 관리, 캐싱, 데이터 페칭 |
| **axios** | 1.15.0 | HTTP 클라이언트 |

### 테마 & UI

| 라이브러리 | 버전 | 목적 |
|-----------|------|------|
| **next-themes** | 0.4.6 | 다크모드 관리 |
| **lucide-react** | 1.8.0 | 아이콘 라이브러리 |
| **sonner** | 2.0.7 | 토스트 알림 |

---

## 💻 개발 가이드

### API 호출하기

#### TanStack Query 훅 사용 (권장)

```tsx
"use client"

import { useApi } from "@/hooks/use-api"

interface Post {
  id: number
  title: string
  body: string
}

export function PostList() {
  const { data: posts, isLoading, error } = useApi<Post[]>("/api/posts")

  if (isLoading) return <div>로딩 중...</div>
  if (error) return <div>에러: {error.message}</div>

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

#### 수동으로 useQuery 사용

```tsx
"use client"

import { useQuery } from "@tanstack/react-query"
import apiClient from "@/lib/api"

export function MyComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => apiClient.get("/api/posts"),
  })

  return <div>{data?.data}</div>
}
```

### API 라우트 작성

```tsx
// app/api/posts/route.ts
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  return NextResponse.json({
    posts: [
      { id: 1, title: "Hello" },
      { id: 2, title: "World" },
    ],
  })
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  
  // 데이터 검증, 데이터베이스 저장 등
  
  return NextResponse.json({ success: true, data }, { status: 201 })
}
```

### 새 페이지 추가

```tsx
// app/posts/page.tsx
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "포스트 목록",
  description: "모든 포스트를 확인하세요",
}

export default function PostsPage() {
  return (
    <main>
      <h1>포스트 목록</h1>
      {/* 컨텐츠 */}
    </main>
  )
}
```

### 동적 라우트

```tsx
// app/posts/[id]/page.tsx
interface Props {
  params: Promise<{ id: string }>
}

export default async function PostDetail({ params }: Props) {
  const { id } = await params

  return (
    <main>
      <h1>포스트 #{id}</h1>
    </main>
  )
}
```

### shadcn/ui 컴포넌트 추가

```bash
# 원하는 컴포넌트 추가
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add dialog

# 모든 컴포넌트 확인
pnpm dlx shadcn@latest --help
```

### 다크모드 구현

```tsx
// components/common/ThemeToggle.tsx
"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
```

### 커스텀 훅 작성

```tsx
// hooks/use-counter.ts
"use client"

import { useState, useCallback } from "react"

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = useCallback(() => setCount(c => c + 1), [])
  const decrement = useCallback(() => setCount(c => c - 1), [])
  const reset = useCallback(() => setCount(initialValue), [initialValue])

  return { count, increment, decrement, reset }
}
```

### 환경변수 관리

```env
# .env.local (커밋하지 마세요)

# 클라이언트에서 접근 가능
NEXT_PUBLIC_API_URL=http://localhost:3001

# 서버에서만 접근 가능
DATABASE_URL=postgresql://user:password@localhost/dbname
API_SECRET_KEY=secret123
```

```tsx
// 클라이언트에서
const apiUrl = process.env.NEXT_PUBLIC_API_URL

// 서버에서
const dbUrl = process.env.DATABASE_URL
```

---

## 🎯 주요 패턴

### 1. 서버 컴포넌트 vs 클라이언트 컴포넌트

```tsx
// 서버 컴포넌트 (기본값) - 데이터 페칭, 보안
export async function ServerComponent() {
  const data = await fetch(...) // 서버에서만 실행
  return <div>{data}</div>
}

// 클라이언트 컴포넌트 - 인터랙션, 상태 관리
"use client"

export function ClientComponent() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### 2. 데이터 페칭 패턴

```tsx
// ✅ 권장: Server Component에서 페칭
export async function PostList() {
  const posts = await fetch("/api/posts")
  return <div>{posts}</div>
}

// ✅ 권장: Client Component에서 TanStack Query로 페칭
"use client"
export function PostList() {
  const { data } = useApi("/api/posts")
  return <div>{data}</div>
}

// ❌ 피하기: useEffect로 Server Component에서 페칭
```

### 3. 타입 안전성

```tsx
// types/index.ts
export interface Post {
  id: number
  title: string
  body: string
  createdAt: string
}

// 사용
import type { Post } from "@/types"

export function PostCard({ post }: { post: Post }) {
  return <div>{post.title}</div>
}
```

### 4. 유틸리티 함수

```tsx
// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Tailwind CSS 클래스 병합
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 사용
<div className={cn("px-2", "px-4")}>px-4 적용됨</div>
```

---

## 🔍 문제 해결

### 문제: 포트 3000이 이미 사용 중입니다

```bash
# 다른 포트에서 실행
pnpm dev -- -p 3001
```

### 문제: TypeScript 에러가 있지만 빌드됨

```bash
# 빌드 전 타입 체크
pnpm tsc --noEmit

# 에러 수정 후 빌드
pnpm build
```

### 문제: shadcn/ui 컴포넌트 스타일이 적용되지 않음

```bash
# Tailwind CSS 설정 확인
# tailwind.config.js에서 content 설정을 확인하세요
```

### 문제: 환경변수가 로드되지 않음

```bash
# .env.local 파일 확인
# NEXT_PUBLIC_으로 시작해야 클라이언트에서 접근 가능
# 변경 후 개발 서버 재시작 필요
```

### 문제: useApi 훅에서 타입 에러

```tsx
// 올바른 사용법
const { data } = useApi<MyType[]>("/api/endpoint")
// data의 타입: MyType[] | undefined
```

---

## 📚 추가 리소스

### 공식 문서
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [TanStack Query](https://tanstack.com/query/latest)

### 유용한 패키지
- `lucide-react` - 아이콘
- `sonner` - 토스트 알림
- `clsx` - 클래스명 유틸리티
- `tailwind-merge` - Tailwind 클래스 병합

---

## ✅ 체크리스트: 개발 시작 전

- [ ] `pnpm install` 실행
- [ ] `.env.local` 파일 생성
- [ ] `pnpm dev` 실행 및 localhost:3000 확인
- [ ] `app/page.tsx` 수정하여 핫 리로드 확인
- [ ] TypeScript 설정 확인 (`tsconfig.json`)
- [ ] Tailwind CSS 설정 확인 (`tailwind.config.js`)

---

**더 궁금한 사항이 있으면 README.md와 공식 문서를 참고하세요!** 🚀

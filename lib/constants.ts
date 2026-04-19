export const APP_NAME = "Dev Starters"
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

// 네비게이션 경로
export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  DOCS: "/docs",
  EXAMPLES: "/examples",
  LOGIN: "/login",
  REGISTER: "/register",
}

// 네비게이션 메뉴
export const NAV_ITEMS = [
  {
    label: "대시보드",
    href: ROUTES.DASHBOARD,
  },
  {
    label: "문서",
    href: ROUTES.DOCS,
  },
  {
    label: "예제",
    href: ROUTES.EXAMPLES,
  },
]

// API 요청 시간 제한
export const API_TIMEOUT = 10000 // 10초

// TanStack Query 기본 설정
export const QUERY_CONFIG = {
  staleTime: 1000 * 60 * 5, // 5분
  gcTime: 1000 * 60 * 10, // 10분 (formerly cacheTime)
}

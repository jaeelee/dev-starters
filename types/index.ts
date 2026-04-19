// API 응답 공통 타입
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// 페이지네이션 응답
export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// API 에러 구조
export interface ApiError {
  code: string
  message: string
  details?: Record<string, unknown>
}

// 네비게이션 아이템
export interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
  badge?: number | string
}

// 사용자 정보 (예제)
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
}

"use client"

import { useEffect, useState } from "react"

/**
 * 값 변경을 지연시키는 디바운싱 훅
 * 검색 입력, 실시간 검증 등에 유용
 * @param value 모니터링할 값
 * @param delay 지연 시간 (ms)
 * @returns 디바운스된 값
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

"use client"

import { useState, useEffect } from "react"

/**
 * localStorage와 동기화된 상태 관리 훅
 * @param key localStorage 키
 * @param initialValue 초기값
 * @returns [값, 값 설정 함수]
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue)
  const [isClient, setIsClient] = useState(false)

  // 마운트 시점에만 localStorage에서 값 읽기
  useEffect(() => {
    setIsClient(true)
    try {
      const item = typeof window !== "undefined" ? window.localStorage.getItem(key) : null
      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.warn(`localStorage에서 "${key}" 읽기 실패:`, error)
    }
  }, [key])

  // 값 설정 시 localStorage에도 저장
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.warn(`localStorage에 "${key}" 저장 실패:`, error)
    }
  }

  return [storedValue, setValue]
}

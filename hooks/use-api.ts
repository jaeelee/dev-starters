"use client"

import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query"
import apiClient from "@/lib/api"
import type { ApiError } from "@/types"

interface UseApiOptions<T> extends Omit<UseQueryOptions<T, ApiError>, "queryKey" | "queryFn"> {
  enabled?: boolean
  retry?: number | false
}

/**
 * TanStack Query 기반 API 데이터 페칭 훅
 * @param url API 엔드포인트 (절대 경로 또는 상대 경로)
 * @param options React Query 옵션
 * @returns useQuery 결과 (data, isLoading, error, isFetching 등)
 */
export function useApi<T = unknown>(
  url: string | null,
  options: UseApiOptions<T> = {}
): UseQueryResult<T, ApiError> {
  return useQuery<T, ApiError>({
    queryKey: [url],
    queryFn: async () => {
      if (!url) throw new Error("URL is required")
      const response = await apiClient.get<T>(url)
      return response as T
    },
    enabled: url !== null && (options.enabled !== false),
    retry: options.retry !== undefined ? options.retry : 1,
    ...options,
  })
}

/**
 * 다수의 URL에서 병렬로 데이터 페칭
 * @param urls API 엔드포인트 배열
 * @returns 각 URL에 대한 useQuery 결과 배열
 */
export function useApiMultiple<T = unknown>(
  urls: string[],
  options: UseApiOptions<T> = {}
) {
  return urls.map((url) => useApi<T>(url, options))
}

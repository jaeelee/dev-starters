import { QueryClient } from "@tanstack/react-query"
import { QUERY_CONFIG } from "./constants"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: QUERY_CONFIG.staleTime,
      gcTime: QUERY_CONFIG.gcTime,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

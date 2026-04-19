import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios"
import { API_URL, API_TIMEOUT } from "./constants"
import type { ApiResponse, ApiError } from "@/types"

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
})

// Request 인터셉터 - Authorization 헤더 추가
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 토큰이 있으면 Authorization 헤더에 추가
    // 예: const token = localStorage.getItem("authToken")
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response 인터셉터 - 에러 처리 및 응답 정규화
apiClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      const apiError: ApiError = {
        code: error.code || "UNKNOWN_ERROR",
        message: error.message || "요청 중 오류가 발생했습니다.",
      }

      // 401 Unauthorized 처리
      if (error.response?.status === 401) {
        // localStorage.removeItem("authToken")
        // 로그인 페이지로 리다이렉트하는 로직 추가 가능
        apiError.message = "인증이 필요합니다."
      }

      // 상세 에러 정보 추가
      if (error.response?.data) {
        apiError.details = error.response.data
      }

      return Promise.reject(apiError)
    }

    return Promise.reject({
      code: "UNKNOWN_ERROR",
      message: "예기치 않은 오류가 발생했습니다.",
    } as ApiError)
  }
)

export default apiClient

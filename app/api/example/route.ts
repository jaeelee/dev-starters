import { NextRequest, NextResponse } from "next/server"
import type { ApiResponse } from "@/types"

// GET 예제 - 데이터 조회
export async function GET(request: NextRequest) {
  try {
    // 쿼리 파라미터 읽기
    const searchParams = request.nextUrl.searchParams
    const page = searchParams.get("page") || "1"

    // 예제 데이터
    const data = {
      items: [
        { id: 1, title: "예제 항목 1", description: "첫 번째 항목입니다" },
        { id: 2, title: "예제 항목 2", description: "두 번째 항목입니다" },
        { id: 3, title: "예제 항목 3", description: "세 번째 항목입니다" },
      ],
      page: parseInt(page),
      total: 3,
    }

    const response: ApiResponse = {
      success: true,
      data,
      message: "데이터를 성공적으로 조회했습니다",
    }

    return NextResponse.json(response)
  } catch (error) {
    const response: ApiResponse = {
      success: false,
      error: error instanceof Error ? error.message : "서버 오류가 발생했습니다",
    }

    return NextResponse.json(response, { status: 500 })
  }
}

// POST 예제 - 데이터 생성
export async function POST(request: NextRequest) {
  try {
    // 요청 바디 파싱
    const body = await request.json()
    const { title, description } = body

    // 유효성 검사
    if (!title || !description) {
      const response: ApiResponse = {
        success: false,
        error: "title과 description은 필수입니다",
      }
      return NextResponse.json(response, { status: 400 })
    }

    // 새로운 항목 생성 (실제로는 데이터베이스에 저장)
    const newItem = {
      id: Math.random(),
      title,
      description,
      createdAt: new Date().toISOString(),
    }

    const response: ApiResponse = {
      success: true,
      data: newItem,
      message: "항목을 성공적으로 생성했습니다",
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    const response: ApiResponse = {
      success: false,
      error: error instanceof Error ? error.message : "서버 오류가 발생했습니다",
    }

    return NextResponse.json(response, { status: 500 })
  }
}

// PUT 예제 - 데이터 업데이트
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, title, description } = body

    if (!id) {
      const response: ApiResponse = {
        success: false,
        error: "id는 필수입니다",
      }
      return NextResponse.json(response, { status: 400 })
    }

    const updatedItem = {
      id,
      title: title || "수정된 제목",
      description: description || "수정된 설명",
      updatedAt: new Date().toISOString(),
    }

    const response: ApiResponse = {
      success: true,
      data: updatedItem,
      message: "항목을 성공적으로 업데이트했습니다",
    }

    return NextResponse.json(response)
  } catch (error) {
    const response: ApiResponse = {
      success: false,
      error: error instanceof Error ? error.message : "서버 오류가 발생했습니다",
    }

    return NextResponse.json(response, { status: 500 })
  }
}

// DELETE 예제 - 데이터 삭제
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get("id")

    if (!id) {
      const response: ApiResponse = {
        success: false,
        error: "id 쿼리 파라미터는 필수입니다",
      }
      return NextResponse.json(response, { status: 400 })
    }

    const response: ApiResponse = {
      success: true,
      message: `항목(ID: ${id})을 성공적으로 삭제했습니다`,
    }

    return NextResponse.json(response)
  } catch (error) {
    const response: ApiResponse = {
      success: false,
      error: error instanceof Error ? error.message : "서버 오류가 발생했습니다",
    }

    return NextResponse.json(response, { status: 500 })
  }
}

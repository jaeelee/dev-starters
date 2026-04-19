"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/lib/constants"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold">에러가 발생했습니다</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {error.message || "요청 처리 중 문제가 발생했습니다."}
        </p>
        {error.digest && <p className="mt-1 text-sm text-muted-foreground">Error ID: {error.digest}</p>}

        <div className="mt-8 flex gap-4 justify-center">
          <Button onClick={reset}>다시 시도</Button>
          <Link href={ROUTES.HOME}>
            <Button variant="outline">홈으로</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

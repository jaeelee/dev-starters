import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/lib/constants"

export default function NotFound(): React.ReactNode {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-2 text-2xl font-semibold">페이지를 찾을 수 없습니다</p>
        <p className="mt-2 text-lg text-muted-foreground">
          요청하신 페이지가 존재하지 않습니다.
        </p>

        <Link href={ROUTES.HOME} className="mt-8 inline-block">
          <Button>홈으로 돌아가기</Button>
        </Link>
      </div>
    </div>
  )
}

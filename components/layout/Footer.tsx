"use client"

import Link from "next/link"
import { APP_NAME } from "@/lib/constants"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background/95">
      <div className="px-4 py-8 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* 회사 정보 */}
          <div>
            <h3 className="font-semibold">{APP_NAME}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              빠르게 웹 개발을 시작할 수 있는 Next.js 스타터킷
            </p>
          </div>

          {/* 링크 */}
          <div>
            <h4 className="font-semibold">링크</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  문서
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  예제
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          {/* 법적 */}
          <div>
            <h4 className="font-semibold">법적</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {currentYear} {APP_NAME}. All rights reserved.</p>
          <p>Made with ❤️ using Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

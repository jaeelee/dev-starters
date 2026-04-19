"use client"

import { Logo } from "@/components/common/Logo"
import { ThemeToggle } from "@/components/common/ThemeToggle"
import { Navigation } from "@/components/layout/Navigation"
import { NAV_ITEMS } from "@/lib/constants"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        {/* 좌측: 로고 */}
        <Logo />

        {/* 중앙: 네비게이션 (데스크탑만 표시) */}
        <div className="hidden md:block">
          <Navigation items={NAV_ITEMS} />
        </div>

        {/* 우측: 테마 토글 */}
        <ThemeToggle />
      </div>
    </header>
  )
}

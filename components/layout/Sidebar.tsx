"use client"

import { useState } from "react"
import { Navigation } from "@/components/layout/Navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { NavItem } from "@/types"

interface SidebarProps {
  items: NavItem[]
  children?: React.ReactNode
}

export function Sidebar({ items, children }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex h-screen">
      {/* 토글 버튼 (모바일) */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="absolute left-4 top-4 z-40 md:hidden"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>

      {/* 사이드바 */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-30 h-screen w-64 border-r border-border bg-background transition-transform duration-300 md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="space-y-4 py-8">
          <div className="px-4">
            <h2 className="text-lg font-semibold">네비게이션</h2>
          </div>
          <nav className="px-4">
            <Navigation items={items} className="flex-col items-start gap-2" />
          </nav>
        </div>
      </aside>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 overflow-auto pt-16 md:pt-0">{children}</main>

      {/* 모바일 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

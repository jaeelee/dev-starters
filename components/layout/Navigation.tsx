"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import type { NavItem } from "@/types"

interface NavigationProps {
  items: NavItem[]
  className?: string
}

export function Navigation({ items, className }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center gap-8", className)}>
      {items.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive ? "text-foreground" : "text-muted-foreground"
            )}
          >
            <span className="flex items-center gap-2">
              {item.icon}
              {item.label}
              {item.badge && <span className="ml-1 text-xs">{item.badge}</span>}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}

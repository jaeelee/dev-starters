"use client"

import Link from "next/link"
import { APP_NAME, ROUTES } from "@/lib/constants"

export function Logo() {
  return (
    <Link href={ROUTES.HOME} className="flex items-center gap-2 font-bold text-lg">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <span className="text-sm font-black">D</span>
      </div>
      <span>{APP_NAME}</span>
    </Link>
  )
}

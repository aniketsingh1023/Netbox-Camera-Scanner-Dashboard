"use client"
import { useRole } from "./role-context"
import { cn } from "@/lib/utils"

export function RoleBadge({ className }: { className?: string }) {
  const { role } = useRole()
  return (
    <span className={cn("px-2 py-1 rounded text-xs border bg-secondary text-secondary-foreground", className)}>
      {role}
    </span>
  )
}

"use client"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme-dark") === "true"
    setDark(saved)
    document.documentElement.classList.toggle("dark", saved)
  }, [])

  return (
    <button
      className={cn("px-2 py-1 rounded-md border text-sm hover:bg-muted transition", className)}
      onClick={() => {
        const next = !dark
        setDark(next)
        localStorage.setItem("theme-dark", String(next))
        document.documentElement.classList.toggle("dark", next)
      }}
      aria-label="Toggle theme"
    >
      {dark ? "Light" : "Dark"}
    </button>
  )
}

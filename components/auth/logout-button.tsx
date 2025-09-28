"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export function LogoutButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  return (
    <button
      className="inline-flex items-center px-3 py-2 rounded-md border hover:bg-accent disabled:opacity-60"
      disabled={loading}
      onClick={async () => {
        try {
          setLoading(true)
          await fetch("/api/auth/logout", { method: "POST" })
          router.push("/login")
        } finally {
          setLoading(false)
        }
      }}
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  )
}

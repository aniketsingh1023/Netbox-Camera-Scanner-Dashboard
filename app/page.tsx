"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import OnboardingModal from "@/components/onboarding-modal"

export default function HomePage() {
  const [open, setOpen] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const hasAuth = document.cookie.split("; ").some((c) => c.startsWith("demo-auth="))
    router.replace(hasAuth ? "/map" : "/login")
  }, [router])

  return (
    <div className="min-h-[calc(100vh-4rem)] grid place-items-center">
      <div className="max-w-2xl text-center space-y-4 animate-in fade-in slide-in-from-bottom-2">
        <h1 className="text-3xl md:text-4xl font-semibold text-balance">Automated VAPT for CCTV & DVRs</h1>
        <p className="text-muted-foreground text-pretty">
          Discover devices, analyze firmware, map CVEs, and simulate safe scanning workflows.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
            onClick={() => router.push("/scan")}
          >
            One‑Click Demo Scan
          </button>
          <button className="px-4 py-2 rounded-md border" onClick={() => router.push("/map")}>
            Explore Dashboard
          </button>
        </div>
      </div>
      <OnboardingModal open={open} onOpenChange={setOpen} />
    </div>
  )
}

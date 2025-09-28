"use client"

import type React from "react"

import { createContext, useContext, useEffect, useRef, useState } from "react"

type Status = "idle" | "running" | "completed" | "stopped"

const Ctx = createContext<{
  status: Status
  scanned: boolean
  startDemo: (opts: { range: string }) => void
  stopDemo: () => void
  reset: () => void
} | null>(null)

export function DemoScanProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status>("idle")
  const [scanned, setScanned] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    const s = localStorage.getItem("demo-scanned") === "true"
    setScanned(s)
  }, [])

  const startDemo = () => {
    if (status === "running") return
    setStatus("running")
    // Simulate progress for ~3.5s then complete
    timer.current = window.setTimeout(() => {
      setStatus("completed")
      setScanned(true)
      localStorage.setItem("demo-scanned", "true")
      timer.current && clearTimeout(timer.current)
      timer.current = null
    }, 3500)
  }

  const stopDemo = () => {
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = null
    }
    setStatus("stopped")
  }

  const reset = () => {
    setStatus("idle")
    setScanned(false)
    localStorage.removeItem("demo-scanned")
  }

  return <Ctx.Provider value={{ status, scanned, startDemo, stopDemo, reset }}>{children}</Ctx.Provider>
}

export function useDemoScan() {
  const v = useContext(Ctx)
  if (!v) {
    // Return default values when provider is not available (e.g., during SSR)
    return {
      status: "idle" as Status,
      scanned: false,
      startDemo: () => {},
      stopDemo: () => {},
      reset: () => {}
    }
  }
  return v
}

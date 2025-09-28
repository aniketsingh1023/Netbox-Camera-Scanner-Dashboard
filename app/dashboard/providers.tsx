"use client"
import { DemoScanProvider } from "@/components/scan/use-demo-scan"
import type React from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  return <DemoScanProvider>{children}</DemoScanProvider>
}

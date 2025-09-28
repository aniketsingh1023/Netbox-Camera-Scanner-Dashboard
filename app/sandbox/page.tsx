"use client"

import { useDemoScan } from "@/components/scan/use-demo-scan"
import { useDevices } from "@/components/data/use-devices"

export default function SandboxPage() {
  const { reset } = useDemoScan()
  const { devices } = useDevices()

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Sandbox / Demo Mode</h1>
      <button className="px-3 py-2 rounded-md border" onClick={reset}>
        Reset Demo State
      </button>
      <div className="text-sm text-muted-foreground">Devices loaded: {devices.length}</div>
    </div>
  )
}

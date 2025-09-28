"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useDemoScan } from "@/components/scan/use-demo-scan"
import ScanControls from "@/components/scan/scan-controls"
import { useDevices } from "@/components/data/use-devices"

export default function ScanPage() {
  const { status, startDemo, stopDemo, scanned } = useDemoScan()
  const { mutate } = useDevices()
  const router = useRouter()

  useEffect(() => {
    if (status === "completed") {
      mutate() // refresh views
    }
  }, [status, mutate])

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Scan Console</h1>
        <button className="px-3 py-2 rounded-md border" onClick={() => router.push("/alerts")}>
          View Timeline
        </button>
      </div>

      <ScanControls status={status} onStart={() => startDemo({ range: "10.0.0.0/24" })} onStop={stopDemo} />

      <div className="rounded-lg border p-4">
        <h2 className="font-medium mb-2">Scan Status</h2>
        <ul className="list-disc ml-5 text-sm space-y-1">
          <li>Mode: Demo (simulated)</li>
          <li>Devices updated on completion: yes</li>
          <li>Scanned dataset active: {scanned ? "Yes" : "No"}</li>
        </ul>
      </div>
    </div>
  )
}

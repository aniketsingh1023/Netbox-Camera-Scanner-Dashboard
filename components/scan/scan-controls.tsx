"use client"

import { useRole } from "@/components/auth/role-context"

export default function ScanControls({
  status,
  onStart,
  onStop,
}: {
  status: "idle" | "running" | "completed" | "stopped"
  onStart: () => void
  onStop: () => void
}) {
  const { role } = useRole()
  const canRun = role === "Admin" || role === "Analyst"

  return (
    <div className="rounded-lg border p-4 space-y-3">
      <div className="text-sm text-muted-foreground">This console simulates scans. No network calls are performed.</div>
      <div className="flex flex-wrap items-center gap-2">
        <button
          className="px-3 py-2 rounded-md bg-primary text-primary-foreground disabled:opacity-50"
          onClick={onStart}
          disabled={!canRun || status === "running"}
          aria-disabled={!canRun}
          title={!canRun ? "Insufficient role for running scans" : ""}
        >
          Start Demo Scan
        </button>
        <button className="px-3 py-2 rounded-md border" onClick={onStop} disabled={status !== "running"}>
          Stop
        </button>
        <span className="text-sm">Status: {status}</span>
      </div>
      <div className="grid grid-cols-3 gap-3 text-sm">
        <div className="rounded-md border p-3">
          <div className="text-muted-foreground">Discovery</div>
          <div className="font-semibold">
            {status === "running" ? "Scanning..." : status === "completed" ? "Updated" : "Idle"}
          </div>
        </div>
        <div className="rounded-md border p-3">
          <div className="text-muted-foreground">ML Classification</div>
          <div className="font-semibold">
            {status === "running" ? "Inferencing..." : status === "completed" ? "Ready" : "Pending"}
          </div>
        </div>
        <div className="rounded-md border p-3">
          <div className="text-muted-foreground">Reports</div>
          <div className="font-semibold">{status === "completed" ? "CSV/PDF available" : "N/A"}</div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useRouter } from "next/navigation"

export default function OnboardingModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
}) {
  const router = useRouter()
  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-black/40"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="w-[min(92vw,680px)] rounded-lg border bg-card p-5 space-y-4 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold">Welcome to V0 VAPT</h2>
        <ol className="list-decimal ml-5 text-sm space-y-1 text-pretty">
          <li>Discover devices on the Global Map</li>
          <li>Open Inventory to browse metadata & CVEs</li>
          <li>Run a safe demo scan from the Scan Console</li>
          <li>Review ML Insights and the Alerts Timeline</li>
          <li>Export findings in Reports</li>
        </ol>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-2 rounded-md bg-primary text-primary-foreground"
            onClick={() => {
              onOpenChange(false)
              router.push("/scan")
            }}
          >
            Run Demo Scan
          </button>
          <button className="px-3 py-2 rounded-md border" onClick={() => onOpenChange(false)}>
            Explore
          </button>
        </div>
      </div>
    </div>
  )
}

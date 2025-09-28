"use client"

import useSWR from "swr"
import RiskBadge from "@/components/common/risk-badge"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function AlertsTimeline() {
  const { data } = useSWR("/api/alerts", fetcher)
  const alerts: Array<{
    id: string
    time: string
    title: string
    severity: "High" | "Medium" | "Low"
    details: string
  }> = data?.alerts ?? []

  return (
    <div className="space-y-3">
      {alerts.map((a) => (
        <div key={a.id} className="rounded-lg border p-3 hover:shadow-sm transition">
          <div className="flex items-center justify-between">
            <div className="font-medium">{a.title}</div>
            <RiskBadge risk={a.severity} />
          </div>
          <div className="text-xs text-muted-foreground">{a.time}</div>
          <p className="text-sm mt-2">{a.details}</p>
        </div>
      ))}
    </div>
  )
}

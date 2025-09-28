"use client"

import AlertsTimeline from "@/components/alerts/alerts-timeline"

export default function AlertsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Alerts & Timeline</h1>
      <AlertsTimeline />
    </div>
  )
}

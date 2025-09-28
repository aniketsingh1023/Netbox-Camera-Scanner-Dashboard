"use client"

import { useInsights } from "@/components/data/use-insights"
import RiskBadge from "@/components/common/risk-badge"

export default function InsightsPage() {
  const { insights } = useInsights()

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">ML Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {insights.map((i) => (
          <div key={i.id} className="border rounded-lg p-4 hover:shadow-sm transition">
            <div className="flex items-center justify-between">
              <div className="font-medium">{i.vuln}</div>
              <RiskBadge risk={i.severity} />
            </div>
            <div className="text-sm text-muted-foreground">Confidence: {(i.confidence * 100).toFixed(0)}%</div>
            <div className="mt-3">
              <div className="text-sm font-medium">Exploitation (read-only)</div>
              <ol className="list-decimal ml-5 text-sm text-pretty">
                {i.exploitation.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ol>
            </div>
            <div className="mt-3">
              <div className="text-sm font-medium">Mitigation</div>
              <ul className="list-disc ml-5 text-sm">
                {i.mitigation.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

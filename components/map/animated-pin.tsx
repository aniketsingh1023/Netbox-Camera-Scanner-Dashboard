"use client"

import RiskBadge from "@/components/common/risk-badge"

export default function AnimatedPin({
  device,
}: {
  device: {
    id: string
    coords: { xPct: number; yPct: number }
    risk: "High" | "Medium" | "Low"
    make: string
    model: string
    country: string
  }
}) {
  const { xPct, yPct } = device.coords
  return (
    <div className="group absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${xPct}%`, top: `${yPct}%` }}>
      <div className="relative w-3 h-3 rounded-full bg-primary animate-bounce" />
      <div className="absolute inset-0 rounded-full animate-ping bg-primary/30" />
      <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-2 translate-y-1 group-hover:translate-y-0">
        <div className="rounded-md border bg-card p-2 shadow-sm min-w-48">
          <div className="text-xs text-muted-foreground">{device.country}</div>
          <div className="text-sm font-medium">
            {device.make} {device.model}
          </div>
          <RiskBadge risk={device.risk} className="mt-1" />
        </div>
      </div>
    </div>
  )
}

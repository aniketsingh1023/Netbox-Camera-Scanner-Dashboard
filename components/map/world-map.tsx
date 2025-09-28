"use client"

import AnimatedPin from "./animated-pin"

type Device = {
  id: string
  country: string
  coords: { xPct: number; yPct: number } // precomputed for demo map
  risk: "High" | "Medium" | "Low"
  make: string
  model: string
}

export default function WorldMap({ devices }: { devices: Device[] }) {
  return (
    <div className="relative w-full aspect-[16/9] rounded-lg border overflow-hidden bg-muted">
      {/* Using a placeholder silhouette for the world map */}
      <img
        src="/world-map-silhouette.jpg"
        alt="World map"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0">
        {devices.map((d) => (
          <AnimatedPin key={d.id} device={d} />
        ))}
      </div>
    </div>
  )
}

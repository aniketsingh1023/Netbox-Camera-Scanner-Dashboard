"use client"

import WorldMap from "@/components/map/world-map"
import { useDevices } from "@/components/data/use-devices"

export default function MapPage() {
  const { devices } = useDevices()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Global Discoveries</h1>
      </div>
      <WorldMap devices={devices} />
    </div>
  )
}

"use client"

import { useState, useMemo } from "react"
import { useDevices } from "@/components/data/use-devices"
import DeviceTable from "@/components/devices/device-table"

export default function InventoryPage() {
  const { devices } = useDevices()
  const [q, setQ] = useState("")
  const [risk, setRisk] = useState("")

  const filtered = useMemo(() => {
    return devices.filter((d) => {
      const matchesQ =
        !q ||
        d.make.toLowerCase().includes(q.toLowerCase()) ||
        d.model.toLowerCase().includes(q.toLowerCase()) ||
        d.ip.includes(q) ||
        d.country.toLowerCase().includes(q.toLowerCase())
      const matchesRisk = !risk || d.risk === risk
      return matchesQ && matchesRisk
    })
  }, [devices, q, risk])

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Device Inventory</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          placeholder="Search make / model / IP / country"
          className="border rounded-md px-3 py-2 bg-background"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select
          className="border rounded-md px-3 py-2 bg-background"
          value={risk}
          onChange={(e) => setRisk(e.target.value)}
        >
          <option value="">All risks</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      <DeviceTable devices={filtered} />
    </div>
  )
}

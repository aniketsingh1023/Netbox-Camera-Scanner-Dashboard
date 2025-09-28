import RiskBadge from "@/components/common/risk-badge"

export default function DeviceTable({
  devices,
}: {
  devices: Array<{
    id: string
    make: string
    model: string
    firmware: string
    ip: string
    country: string
    risk: "High" | "Medium" | "Low"
    cves: string[]
  }>
}) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full text-sm">
        <thead className="bg-muted/50">
          <tr className="text-left">
            <th className="p-3">Device</th>
            <th className="p-3">Firmware</th>
            <th className="p-3">IP</th>
            <th className="p-3">Country</th>
            <th className="p-3">Risk</th>
            <th className="p-3">CVEs</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((d) => (
            <tr key={d.id} className="border-t hover:bg-muted/30 transition">
              <td className="p-3">
                <div className="font-medium">
                  {d.make} {d.model}
                </div>
                <div className="text-muted-foreground">{d.id}</div>
              </td>
              <td className="p-3">{d.firmware}</td>
              <td className="p-3">{d.ip}</td>
              <td className="p-3">{d.country}</td>
              <td className="p-3">
                <RiskBadge risk={d.risk} />
              </td>
              <td className="p-3">
                <div className="flex flex-wrap gap-1">
                  {d.cves.slice(0, 3).map((c) => (
                    <span key={c} className="px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                      {c}
                    </span>
                  ))}
                  {d.cves.length > 3 && <span className="text-muted-foreground">+{d.cves.length - 3} more</span>}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

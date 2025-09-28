import { NextResponse } from "next/server"
import { devicesScanned } from "@/data/demo"

export async function GET() {
  const header = ["id", "make", "model", "firmware", "ip", "country", "risk", "cves"].join(",")
  const rows = devicesScanned.map((d) =>
    [d.id, d.make, d.model, d.firmware, d.ip, d.country, d.risk, d.cves.join("|")].join(","),
  )
  const csv = [header, ...rows].join("\n")
  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv;charset=utf-8",
      "Content-Disposition": 'attachment; filename="vapt-report.csv"',
    },
  })
}

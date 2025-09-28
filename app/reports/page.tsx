"use client"

import ExportButtons from "@/components/reports/export-buttons"

export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Reports</h1>
      <p className="text-sm text-muted-foreground">
        Export demo device inventory and findings. PDF export is a mocked endpoint.
      </p>
      <ExportButtons />
    </div>
  )
}

"use client"

export default function ExportButtons() {
  const exportCSV = () => {
    fetch("/api/reports/csv").then(async (r) => {
      const blob = await r.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "vapt-report.csv"
      a.click()
      URL.revokeObjectURL(url)
    })
  }

  const exportPDF = () => {
    fetch("/api/reports/pdf")
      .then((r) => r.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "vapt-report.pdf"
        a.click()
        URL.revokeObjectURL(url)
      })
  }

  return (
    <div className="flex gap-2">
      <button className="px-3 py-2 rounded-md bg-primary text-primary-foreground" onClick={exportCSV}>
        Export CSV
      </button>
      <button className="px-3 py-2 rounded-md border" onClick={exportPDF}>
        Export PDF
      </button>
    </div>
  )
}

import Link from "next/link"

export default function DashboardIndex() {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <p className="text-muted-foreground">Choose a section:</p>
      <div className="flex gap-2">
        <Link className="px-3 py-2 rounded-md border" href="/map">
          Global Map
        </Link>
        <Link className="px-3 py-2 rounded-md border" href="/inventory">
          Inventory
        </Link>
      </div>
    </div>
  )
}

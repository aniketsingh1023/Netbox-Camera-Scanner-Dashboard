"use client"

import { useRole } from "@/components/auth/role-context"

export default function SettingsPage() {
  const { role, setRole } = useRole()

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-xl font-semibold">Settings</h1>

      <section className="border rounded-lg p-4 space-y-3">
        <div className="font-medium">RBAC (demo only)</div>
        <div className="text-sm text-muted-foreground">Switch roles to preview permissions.</div>
        <select
          className="border rounded-md px-3 py-2 bg-background"
          value={role}
          onChange={(e) => setRole(e.target.value as any)}
        >
          <option>Admin</option>
          <option>Analyst</option>
          <option>Auditor</option>
          <option>Guest</option>
        </select>
      </section>

      <section className="border rounded-lg p-4 space-y-3">
        <div className="font-medium">API Keys</div>
        <div className="text-sm text-muted-foreground">Placeholder – Integrations can be connected later.</div>
        <input className="border rounded-md px-3 py-2 w-full bg-background" placeholder="API_KEY_****************" />
      </section>
    </div>
  )
}

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const roles = ["Admin", "Analyst", "Auditor", "Guest"] as const;

export default function LoginPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<(typeof roles)[number]>("Analyst");
  const [loading, setLoading] = useState(false); // loading state

  return (
    <div className="max-w-md mx-auto p-6 space-y-5">
      <h1 className="text-2xl font-semibold">Sign in</h1>
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Role</label>
        <select
          className="w-full border rounded-md px-3 py-2 bg-background"
          value={selected}
          onChange={(e) => setSelected(e.target.value as any)}
        >
          {roles.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <button
        className="w-full px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition disabled:opacity-60"
        disabled={loading}
        onClick={async () => {
          try {
            setLoading(true);
            const res = await fetch("/api/auth/login", { method: "POST" });
            if (!res.ok) throw new Error("Login failed");
            // Store the selected role in localStorage directly
            localStorage.setItem("demo-role", selected);
            router.push("/map");
          } finally {
            setLoading(false);
          }
        }}
      >
        {loading ? "Signing in..." : "Continue"}
      </button>
      <p className="text-sm text-muted-foreground">
        This is a demo. No real authentication is performed.
      </p>
    </div>
  );
}

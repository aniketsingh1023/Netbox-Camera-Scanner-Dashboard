"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Role = "Admin" | "Analyst" | "Auditor" | "Guest"
type Ctx = { role: Role; setRole: (r: Role) => void }

const RoleCtx = createContext<Ctx | null>(null)

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<Role>("Analyst")
  useEffect(() => {
    const saved = localStorage.getItem("demo-role") as Role | null
    if (saved) setRoleState(saved)
  }, [])
  const setRole = (r: Role) => {
    setRoleState(r)
    localStorage.setItem("demo-role", r)
  }
  return <RoleCtx.Provider value={{ role, setRole }}>{children}</RoleCtx.Provider>
}

export function useRole() {
  const ctx = useContext(RoleCtx)
  if (!ctx) throw new Error("useRole must be used inside RoleProvider")
  return ctx
}

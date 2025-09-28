import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { RoleProvider } from "@/components/auth/role-context"
import { ThemeToggle } from "@/components/theme-toggle"
import { RoleBadge } from "@/components/auth/role-badge"
import { Providers } from "./providers"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LogoutButton } from "@/components/auth/logout-button"

const nav = [
  { href: "/map", label: "Global Map" },
  { href: "/inventory", label: "Device Inventory" },
  { href: "/scan", label: "Scan Console" },
  { href: "/ml-insights", label: "ML Insights" },
  { href: "/alerts", label: "Alerts & Timeline" },
  { href: "/reports", label: "Reports" },
  { href: "/settings", label: "Settings" },
  { href: "/sandbox", label: "Sandbox / Demo" },
  { href: "/style-guide", label: "Style Guide" },
]

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = cookies()
  const authed = cookieStore.get("demo-auth")
  if (!authed) {
    redirect("/login")
  }

  return (
    <RoleProvider>
      <Providers>
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr]">
          <aside className="hidden md:flex flex-col bg-sidebar text-sidebar-foreground border-r border-border">
            <div className="h-16 px-4 flex items-center justify-between">
              <Link href="/" className="font-semibold tracking-tight">
                V0 VAPT
              </Link>
              <RoleBadge />
            </div>
            <nav className="px-2 py-2 space-y-1">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={cn("block px-3 py-2 rounded-md hover:bg-sidebar-accent transition-colors")}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </aside>
          <div className="flex flex-col">
            <header className="h-16 border-b border-border px-4 flex items-center justify-between bg-background/80 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <button
                        className="inline-flex items-center justify-center w-9 h-9 rounded-md border hover:bg-accent"
                        aria-label="Open menu"
                      >
                        <span className="sr-only">Open menu</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M4 6h16M4 12h16M4 18h16"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-72">
                      <div className="h-16 px-2 flex items-center justify-between">
                        <Link href="/" className="font-semibold tracking-tight">
                          V0 VAPT
                        </Link>
                        <RoleBadge />
                      </div>
                      <nav className="px-1 py-2 space-y-1">
                        {nav.map((n) => (
                          <Link
                            key={n.href}
                            href={n.href}
                            className={cn("block px-3 py-2 rounded-md hover:bg-sidebar-accent transition-colors")}
                          >
                            {n.label}
                          </Link>
                        ))}
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>
                <Link href="/" className="md:hidden font-semibold">
                  V0 VAPT
                </Link>
                <RoleBadge className="md:hidden" />
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Link
                  href="/scan"
                  className="inline-flex items-center px-3 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
                >
                  Run Demo Scan
                </Link>
                <LogoutButton />
              </div>
            </header>
            <main className="p-4">{children}</main>
          </div>
        </div>
      </Providers>
    </RoleProvider>
  )
}

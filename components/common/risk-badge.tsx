import { cn } from "@/lib/utils"

export default function RiskBadge({
  risk,
  className,
}: {
  risk: "High" | "Medium" | "Low"
  className?: string
}) {
  const styles =
    risk === "High"
      ? "bg-[oklch(0.645_0.246_16.439)]/15 text-[oklch(0.645_0.246_16.439)] border-[oklch(0.645_0.246_16.439)]/40"
      : risk === "Medium"
        ? "bg-[oklch(0.828_0.189_84.429)]/15 text-[oklch(0.828_0.189_84.429)] border-[oklch(0.828_0.189_84.429)]/40"
        : "bg-[oklch(0.6_0.118_184.704)]/15 text-[oklch(0.6_0.118_184.704)] border-[oklch(0.6_0.118_184.704)]/40"
  return <span className={cn("text-xs px-2 py-1 rounded border", styles, className)}>{risk}</span>
}

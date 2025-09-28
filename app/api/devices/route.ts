import { NextResponse } from "next/server"
import { devicesBase, devicesScanned } from "@/data/demo"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const scanned = searchParams.get("scanned") === "1"
  const devices = scanned ? devicesScanned : devicesBase
  return NextResponse.json({ devices })
}

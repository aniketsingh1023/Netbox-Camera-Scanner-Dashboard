import { NextResponse } from "next/server"
import { insights } from "@/data/demo"

export async function GET() {
  return NextResponse.json({ insights })
}

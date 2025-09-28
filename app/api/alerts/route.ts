import { NextResponse } from "next/server"
import { alerts } from "@/data/demo"

export async function GET() {
  return NextResponse.json({ alerts })
}

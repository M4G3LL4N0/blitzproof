import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "payments.json")

export async function GET() {
  try {
    const raw = fs.readFileSync(filePath, "utf-8")
    return NextResponse.json(JSON.parse(raw))
  } catch {
    return NextResponse.json([])
  }
}

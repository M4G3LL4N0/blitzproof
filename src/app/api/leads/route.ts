import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "leads.json")

export async function GET() {
  const raw = fs.readFileSync(filePath, "utf-8")
  return NextResponse.json(JSON.parse(raw))
}

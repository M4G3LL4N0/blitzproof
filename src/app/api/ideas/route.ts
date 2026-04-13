import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "ideas.json")

export async function GET() {
  const data = fs.readFileSync(filePath, "utf-8")
  return NextResponse.json(JSON.parse(data))
}

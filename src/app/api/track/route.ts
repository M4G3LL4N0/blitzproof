import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "ideas.json")

export async function POST(req: Request) {
  const { ideaId, type } = await req.json()

  const raw = fs.readFileSync(filePath, "utf-8")
  const ideas = JSON.parse(raw)

  const updated = ideas.map((idea: any) => {
    if (idea.id === ideaId) {
      if (type === "click") idea.metrics.clicks += 1
      if (type === "lead") idea.metrics.leads += 1
    }
    return idea
  })

  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2))

  return NextResponse.json({ ok: true })
}

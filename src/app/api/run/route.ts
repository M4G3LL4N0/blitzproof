import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { scoreIdea, decide } from "@/lib/engine"

const filePath = path.join(process.cwd(), "data", "ideas.json")

export async function POST() {
  const raw = fs.readFileSync(filePath, "utf-8")
  const ideas = JSON.parse(raw)

  const updated = ideas.map((idea: any) => {
    idea.metrics.clicks += Math.floor(Math.random() * 50)
    idea.metrics.leads += Math.floor(Math.random() * 5)
    idea.metrics.revenue += Math.random() > 0.8 ? 100 : 0

    idea.score = scoreIdea(idea)
    idea.stage = decide(idea)

    return idea
  })

  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2))

  return NextResponse.json(updated)
}

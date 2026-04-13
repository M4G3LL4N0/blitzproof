import { NextResponse } from "next/server"
import { addPayment } from "../../../lib/payments"
import fs from "fs"
import path from "path"

const ideasPath = path.join(process.cwd(), "data", "ideas.json")

export async function POST(req: Request) {
  const body = await req.json()

  const payment = {
    id: Date.now().toString(),
    ideaId: body.ideaId,
    amount: body.amount || 20,
    createdAt: new Date().toISOString()
  }

  addPayment(payment)

  const raw = fs.readFileSync(ideasPath, "utf-8")
  const ideas = JSON.parse(raw)

  const updated = ideas.map((idea: any) => {
    if (idea.id === body.ideaId) {
      idea.metrics.revenue += payment.amount
    }
    return idea
  })

  fs.writeFileSync(ideasPath, JSON.stringify(updated, null, 2))

  return NextResponse.json({ success: true })
}

import { NextResponse } from "next/server"
import { addLead } from "@/lib/db"

export async function POST(req: Request) {
  const body = await req.json()

  const lead = {
    id: Date.now().toString(),
    ideaId: body.ideaId,
    email: body.email,
    createdAt: new Date().toISOString()
  }

  addLead(lead)

  return NextResponse.json({ success: true })
}

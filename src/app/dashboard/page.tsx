"use client"

import { useEffect, useState } from "react"

export default function Dashboard() {
  const [ideas, setIdeas] = useState<any[]>([])
  const [payments, setPayments] = useState<any[]>([])

  async function load() {
    const ideasRes = await fetch("/api/ideas")
    const ideasData = await ideasRes.json()

    const paymentsRes = await fetch("/api/payments").catch(() => null)
    const paymentsData = paymentsRes ? await paymentsRes.json() : []

    setIdeas(ideasData)
    setPayments(paymentsData)
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-6">BlitzProof Revenue Engine</h1>

      <div className="grid gap-6">
        {ideas.map((idea) => (
          <div key={idea.id} className="border p-4 rounded">
            <h2 className="text-xl">{idea.name}</h2>
            <p>Stage: {idea.stage}</p>
            <p>Score: {idea.score}</p>
            <p>Revenue: ${idea.metrics.revenue}</p>
            <a href={`/i/${idea.id}`} className="text-blue-400">
              Open Funnel
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl mb-4">Payments</h2>
        {payments.map((p) => (
          <div key={p.id}>
            ${p.amount} → Idea {p.ideaId}
          </div>
        ))}
      </div>
    </main>
  )
}

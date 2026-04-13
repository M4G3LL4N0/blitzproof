"use client"

import { useEffect, useState } from "react"

export default function Dashboard() {
  const [ideas, setIdeas] = useState<any[]>([])

  async function load() {
    const res = await fetch("/api/ideas")
    const data = await res.json()
    setIdeas(data)
  }

  async function runEngine() {
    await fetch("/api/run", { method: "POST" })
    load()
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-6">BlitzProof Engine</h1>

      <button
        onClick={runEngine}
        className="mb-6 px-4 py-2 bg-white text-black rounded"
      >
        Run Engine
      </button>

      <div className="grid gap-4">
        {ideas.map((idea) => (
          <div key={idea.id} className="p-4 border border-white/20 rounded">
            <h2 className="text-xl">{idea.name}</h2>
            <p>Stage: {idea.stage}</p>
            <p>Score: {idea.score}</p>
            <p>Clicks: {idea.metrics.clicks}</p>
            <p>Leads: {idea.metrics.leads}</p>
            <p>Revenue: ${idea.metrics.revenue}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

"use client"

import { useEffect, useState } from "react"

export default function Dashboard() {
  const [ideas, setIdeas] = useState<any[]>([])
  const [leads, setLeads] = useState<any[]>([])

  async function load() {
    const ideasRes = await fetch("/api/ideas")
    const ideasData = await ideasRes.json()

    const leadsRes = await fetch("/api/leads").catch(() => null)
    const leadsData = leadsRes ? await leadsRes.json() : []

    setIdeas(ideasData)
    setLeads(leadsData)
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
      <h1 className="text-3xl mb-6">BlitzProof Live Engine</h1>

      <button
        onClick={runEngine}
        className="mb-6 px-4 py-2 bg-white text-black"
      >
        Run Engine
      </button>

      <div className="grid gap-6">
        {ideas.map((idea) => (
          <div key={idea.id} className="border p-4 rounded">
            <h2 className="text-xl">{idea.name}</h2>
            <p>Stage: {idea.stage}</p>
            <p>Score: {idea.score}</p>
            <p>Clicks: {idea.metrics.clicks}</p>
            <p>Leads: {idea.metrics.leads}</p>
            <p>Revenue: ${idea.metrics.revenue}</p>
            <a href={`/i/${idea.id}`} className="text-blue-400">
              View Landing Page
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl mb-4">Leads</h2>
        {leads.map((l) => (
          <div key={l.id}>{l.email}</div>
        ))}
      </div>
    </main>
  )
}

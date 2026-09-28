"use client"

import { useMemo, useState } from "react"
import { decideIdeaStage, scoreIdea, type Idea } from "../lib/engine"

export function ProofCheck() {
  const [clicks, setClicks] = useState(120)
  const [leads, setLeads] = useState(14)
  const [revenue, setRevenue] = useState(0)
  const idea = useMemo<Idea>(
    () => ({
      id: "sample",
      name: "Sample idea",
      score: 0,
      stage: "idea",
      metrics: { clicks, leads, revenue },
    }),
    [clicks, leads, revenue],
  )
  const score = scoreIdea(idea)
  const stage = decideIdeaStage({ ...idea, score })

  return (
    <section id="proof-check" className="relative mx-auto max-w-7xl px-6 pb-12 md:px-10">
      <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/45">Interactive demo</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Score the bet in front of you.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
          Enter clicks, leads, and revenue. BlitzProof returns a score and a stage from the five proof gates.
        </p>
        <form className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ["Clicks", clicks, setClicks],
            ["Leads", leads, setLeads],
            ["Revenue", revenue, setRevenue],
          ].map(([label, value, set]) => (
            <label key={String(label)} className="text-sm text-white/70">
              {label}
              <input
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-3 py-2 text-white"
                type="number"
                min={0}
                value={value as number}
                onChange={(event) => (set as (n: number) => void)(Number(event.target.value) || 0)}
              />
            </label>
          ))}
        </form>
        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
            <dt className="text-[11px] uppercase tracking-[0.18em] text-white/45">Score</dt>
            <dd className="mt-1 text-2xl font-semibold">{score}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
            <dt className="text-[11px] uppercase tracking-[0.18em] text-white/45">Stage</dt>
            <dd className="mt-1 text-2xl font-semibold capitalize">{stage}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

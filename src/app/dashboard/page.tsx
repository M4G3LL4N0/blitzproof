"use client"

import { useEffect, useMemo, useState } from "react"
import Glass from "../../components/ui/glass"
import GradientBG from "../../components/ui/gradient-bg"
import Fade from "../../components/ui/fade"
import Orb from "../../components/ui/orb"

type Idea = {
  id: string
  name: string
  score: number
  stage: string
  metrics: {
    clicks: number
    leads: number
    revenue: number
  }
}

type Payment = {
  id: string
  ideaId: string
  amount: number
}

export default function Dashboard() {
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [payments, setPayments] = useState<Payment[]>([])

  async function load() {
    const ideasRes = await fetch("/api/ideas")
    const ideasData = await ideasRes.json()

    const paymentsRes = await fetch("/api/payments")
    const paymentsData = await paymentsRes.json()

    setIdeas(ideasData)
    setPayments(paymentsData)
  }

  async function runEngine() {
    await fetch("/api/run", { method: "POST" })
    await load()
  }

  useEffect(() => {
    load()
  }, [])

  const totals = useMemo(() => {
    const clicks = ideas.reduce((sum, idea) => sum + (idea.metrics?.clicks || 0), 0)
    const leads = ideas.reduce((sum, idea) => sum + (idea.metrics?.leads || 0), 0)
    const revenue = ideas.reduce((sum, idea) => sum + (idea.metrics?.revenue || 0), 0)
    return { clicks, leads, revenue }
  }, [ideas])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <GradientBG />
      <Fade />
      <Orb className="left-[6%] top-28 h-40 w-40 bg-cyan-400/20" />
      <Orb className="right-[10%] top-44 h-48 w-48 bg-fuchsia-500/20" />

      <section className="relative mx-auto max-w-7xl px-6 pb-10 pt-24 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
              BlitzProof Control Layer
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Premium startup proof dashboard.
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/60 md:text-lg md:leading-8">
              Keep your validation engine, but present it like a real venture operating system:
              signal, scoring, funnels, and revenue proof in one premium command surface.
            </p>
          </div>

          <button
            onClick={runEngine}
            className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#ff9a4d,#ff6f91,#9b7bff)] px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_50px_rgba(255,120,120,0.35)] transition hover:scale-[1.01]"
          >
            Run Engine
          </button>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-7xl gap-5 px-6 pb-8 md:grid-cols-3 md:px-10">
        <Glass className="p-6">
          <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">Total Clicks</div>
          <div className="mt-3 text-4xl font-semibold tracking-[-0.04em]">{totals.clicks}</div>
          <div className="mt-3 text-sm text-white/55">Top-of-funnel demand signal across all active ideas.</div>
        </Glass>

        <Glass className="p-6">
          <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">Total Leads</div>
          <div className="mt-3 text-4xl font-semibold tracking-[-0.04em]">{totals.leads}</div>
          <div className="mt-3 text-sm text-white/55">Qualified interest captured from validation pages.</div>
        </Glass>

        <Glass className="p-6">
          <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">Total Revenue</div>
          <div className="mt-3 text-4xl font-semibold tracking-[-0.04em]">${totals.revenue}</div>
          <div className="mt-3 text-sm text-white/55">Money signal matters more than startup theater.</div>
        </Glass>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-8 md:px-10">
        <Glass className="p-6 md:p-8">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/45">
            Active Ventures
          </div>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Ideas organized like a premium portfolio layer.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/58 md:text-lg md:leading-8">
            Same ideas, same engine, same scoring. Better visual hierarchy, stronger depth, and
            clearer startup-status readability.
          </p>

          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {ideas.map((idea, index) => (
              <div
                key={idea.id}
                className="group relative min-h-[320px] overflow-hidden rounded-[30px] border border-white/10 bg-[#0b1120]"
              >
                <div
                  className={`absolute inset-0 ${
                    index % 3 === 0
                      ? "bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.55),transparent_35%),linear-gradient(135deg,#172554,#0f172a_60%,#050816)]"
                      : index % 3 === 1
                        ? "bg-[radial-gradient(circle_at_80%_15%,rgba(249,115,22,0.45),transparent_30%),linear-gradient(135deg,#3f1d1d,#111827_55%,#050816)]"
                        : "bg-[radial-gradient(circle_at_55%_10%,rgba(16,185,129,0.45),transparent_30%),linear-gradient(135deg,#052e2b,#0f172a_60%,#050816)]"
                  }`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(3,7,18,0.18),rgba(3,7,18,0.9))]" />

                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium tracking-[0.03em] text-white/75">
                  {idea.stage}
                </div>

                <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] font-medium tracking-[0.03em] text-white/80">
                  Score {idea.score}
                </div>

                <div className="absolute inset-x-4 bottom-4 rounded-[24px] border border-white/10 bg-black/35 p-5 backdrop-blur-md">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">{idea.name}</h3>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Clicks</div>
                      <div className="mt-2 text-lg font-semibold">{idea.metrics.clicks}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Leads</div>
                      <div className="mt-2 text-lg font-semibold">{idea.metrics.leads}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Revenue</div>
                      <div className="mt-2 text-lg font-semibold">${idea.metrics.revenue}</div>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <a
                      href={`/i/${idea.id}`}
                      className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
                    >
                      Open Funnel
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Glass>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <Glass className="p-6 md:p-8">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/45">
            Payments
          </div>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Revenue proof log.
          </h2>

          <div className="mt-8 grid gap-3">
            {payments.length === 0 ? (
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 text-white/55">
                No payments recorded yet.
              </div>
            ) : (
              payments.map((payment) => (
                <div
                  key={payment.id}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm text-white/50">Idea {payment.ideaId}</div>
                      <div className="mt-1 text-xl font-semibold tracking-[-0.03em]">
                        Payment captured
                      </div>
                    </div>
                    <div className="text-2xl font-semibold tracking-[-0.03em]">
                      ${payment.amount}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </Glass>
      </section>
    </main>
  )
}

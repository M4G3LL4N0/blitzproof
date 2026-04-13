"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Glass from "../../../components/ui/glass"
import GradientBG from "../../../components/ui/gradient-bg"
import Fade from "../../../components/ui/fade"
import Orb from "../../../components/ui/orb"

export default function IdeaPage() {
  const params = useParams()
  const id = params.id as string

  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [paid, setPaid] = useState(false)

  useEffect(() => {
    fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ideaId: id, type: "click" })
    })
  }, [id])

  async function submitLead() {
    await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ideaId: id, email })
    })

    await fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ideaId: id, type: "lead" })
    })

    setSubmitted(true)
  }

  async function simulatePayment() {
    await fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ideaId: id, amount: 25 })
    })

    setPaid(true)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <GradientBG />
      <Fade />
      <Orb className="left-[8%] top-24 h-40 w-40 bg-cyan-400/20" />
      <Orb className="right-[12%] top-36 h-48 w-48 bg-orange-400/20" />

      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 md:px-10">
        <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
              Startup Validation Funnel
            </div>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Premium proof page
              <span className="block bg-[linear-gradient(90deg,#ffd6be,#ff9b5e,#ff6f91)] bg-clip-text text-transparent">
                for live startup demand.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-xl md:leading-9">
              Capture interest, measure conversion intent, and move users toward payment in a cleaner,
              higher-trust funnel that feels like a real premium product surface.
            </p>

            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Goal</div>
                <div className="mt-2 text-lg font-semibold">Demand Proof</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Stage</div>
                <div className="mt-2 text-lg font-semibold">Lead Capture</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Next</div>
                <div className="mt-2 text-lg font-semibold">Revenue Test</div>
              </div>
            </div>
          </div>

          <Glass className="p-6 md:p-8">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/45">
              Early Access Flow
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Join the first user cohort.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/58 md:text-base">
              This preserves your existing click, lead, and payment logic. The upgrade is visual:
              stronger trust, better spacing, better conversion atmosphere.
            </p>

            {!submitted ? (
              <div className="mt-8">
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none placeholder:text-white/35"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={submitLead}
                  className="mt-4 w-full rounded-2xl bg-[linear-gradient(90deg,#ff9a4d,#ff6f91,#9b7bff)] px-5 py-4 text-sm font-semibold text-white shadow-[0_15px_50px_rgba(255,120,120,0.35)]"
                >
                  Join Waitlist
                </button>
              </div>
            ) : (
              <div className="mt-8">
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-200">
                  Lead captured successfully.
                </div>

                {!paid ? (
                  <button
                    onClick={simulatePayment}
                    className="mt-4 w-full rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-black"
                  >
                    Buy Now ($25)
                  </button>
                ) : (
                  <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-200">
                    Payment recorded. This startup now has real money signal.
                  </div>
                )}
              </div>
            )}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Funnel ID</div>
                <div className="mt-2 text-lg font-semibold">{id}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Mode</div>
                <div className="mt-2 text-lg font-semibold">Validation Active</div>
              </div>
            </div>
          </Glass>
        </div>
      </section>
    </main>
  )
}

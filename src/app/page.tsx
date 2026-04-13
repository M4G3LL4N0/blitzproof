import Link from "next/link"
import GradientBG from "../components/ui/gradient-bg"
import Fade from "../components/ui/fade"
import Glass from "../components/ui/glass"

const pillars = [
  {
    title: "Validation",
    text: "Pressure-test startup demand before wasting time building the wrong thing."
  },
  {
    title: "Lead Capture",
    text: "Turn traffic into measurable interest with funnel pages, waitlists, and proof loops."
  },
  {
    title: "Revenue Proof",
    text: "Track whether users actually pay so scaling decisions come from signal, not hope."
  }
]

const showcase = [
  {
    name: "Idea Scoring Engine",
    category: "Core System",
    text: "Rank startup opportunities by traction, conversion, and money signal."
  },
  {
    name: "Lead Funnels",
    category: "Proof Layer",
    text: "Launch focused pages per idea and capture measurable market interest."
  },
  {
    name: "Revenue Tracking",
    category: "Monetization",
    text: "See which ideas earn real dollars and deserve more execution energy."
  },
  {
    name: "Autonomous Loops",
    category: "Execution",
    text: "Move toward one-founder leverage with repeatable, systemized startup testing."
  }
]

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <GradientBG />
      <Fade />

      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pt-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
            BlitzProof Operating System
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-[92px]">
            One system for every
            <span className="block bg-[linear-gradient(90deg,#ffd6be,#ff9b5e,#ff6f91)] bg-clip-text text-transparent">
              startup you build.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/60 md:text-xl md:leading-9">
            BlitzProof is the validation engine for founders who want leverage. Test ideas,
            capture demand, prove revenue, and scale only what works without losing time to
            guesswork or founder bottlenecks.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#ff9a4d,#ff6f91,#9b7bff)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_15px_50px_rgba(255,120,120,0.35)] transition hover:scale-[1.01]"
            >
              Open Engine
            </Link>
            <Link
              href="/i/1"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white/85 transition hover:bg-white/[0.07]"
            >
              View Funnel
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-12 md:px-10">
        <Glass className="p-6 md:p-8 lg:p-10">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/45">
            System Layer
          </div>

          <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            A coordinated system of startup proof.
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/58 md:text-lg md:leading-8">
            Keep everything you already built, but present it like a premium operating layer:
            validation loops, funnels, scoring, dashboard visibility, and monetization signal
            organized into one cleaner venture surface.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6"
              >
                <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
                  {item.title}
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{item.text}</p>
              </div>
            ))}
          </div>
        </Glass>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <Glass className="p-6 md:p-8 lg:p-10">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/45">
            Portfolio Showcase
          </div>

          <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Premium presentation for the engine you already have.
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/58 md:text-lg md:leading-8">
            This upgrade does not remove your dashboard, funnel pages, APIs, scoring, or payment
            flow. It reorganizes the surface so BlitzProof feels like a premium product instead of
            a raw prototype.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {showcase.map((item, index) => (
              <div
                key={item.name}
                className="group relative min-h-[260px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1120]"
              >
                <div
                  className={`absolute inset-0 ${
                    index === 0
                      ? "bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.55),transparent_35%),linear-gradient(135deg,#172554,#0f172a_60%,#050816)]"
                      : index === 1
                        ? "bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.45),transparent_30%),linear-gradient(135deg,#3f1d1d,#111827_55%,#050816)]"
                        : index === 2
                          ? "bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.45),transparent_30%),linear-gradient(135deg,#052e2b,#0f172a_60%,#050816)]"
                          : "bg-[radial-gradient(circle_at_70%_10%,rgba(168,85,247,0.4),transparent_30%),linear-gradient(135deg,#2e1065,#111827_60%,#050816)]"
                  }`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(3,7,18,0.18),rgba(3,7,18,0.9))]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium tracking-[0.03em] text-white/75">
                  {item.category}
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-[24px] border border-white/10 bg-black/35 p-5 backdrop-blur-md">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Glass>
      </section>
    </main>
  )
}

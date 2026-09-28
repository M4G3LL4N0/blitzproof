import Link from "next/link"
import GradientBG from "../components/ui/gradient-bg"
import Fade from "../components/ui/fade"
import Glass from "../components/ui/glass"
import Orb from "../components/ui/orb"

const proofGates = [
  "Attention proof",
  "Interest proof",
  "Conversion proof",
  "Delivery proof",
  "Revenue proof"
]

const features = [
  {
    title: "Idea scoring",
    text: "The /dashboard engine ranks local demo ideas by clicks, leads, and recorded payment events — not founder excitement."
  },
  {
    title: "Validation funnels",
    text: "Open /i/1 to send traffic at a single offer page and see whether attention becomes a lead."
  },
  {
    title: "Revenue signal",
    text: "Payment records attach to an idea id so kill / iterate / scale is a money question, not a vibe."
  },
  {
    title: "Studio-ready",
    text: "One founder, many bets: the proof ladder is the same for every idea in the local engine."
  }
]

const sampleIdeas = [
  { name: "Sample · waitlist offer", clicks: 420, leads: 37, revenue: 0, gate: "Interest" },
  { name: "Sample · paid pilot", clicks: 188, leads: 12, revenue: 900, gate: "Revenue" },
  { name: "Sample · dead landing", clicks: 61, leads: 1, revenue: 0, gate: "Attention" },
]

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <GradientBG />
      <Fade />
      <Orb className="left-[7%] top-20 h-44 w-44 bg-cyan-400/20" />
      <Orb className="right-[10%] top-32 h-52 w-52 bg-fuchsia-500/20" />

      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pt-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
            Prototype · Demand validation
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-[92px]">
            Build many startups.
            <span className="block bg-[linear-gradient(90deg,#ffd6be,#ff9b5e,#ff6f91)] bg-clip-text text-transparent">
              Scale only the ones that prove themselves.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/60 md:text-xl md:leading-9">
            BlitzProof is a validation engine for founders and venture studios. Test demand,
            capture leads, record payment signal, and decide whether to kill, iterate, or scale
            before wasting months building the wrong thing.
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

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/45">Proof ladder</p>
            <ol className="mt-5 space-y-3">
              {proofGates.map((gate, index) => (
                <li key={gate} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                  <span className="text-sm font-semibold text-[#ff9b5e]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-base font-medium">{gate}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/45">Sample ideas · demo data</p>
            <ul className="mt-3 space-y-3">
              {sampleIdeas.map((idea) => (
                <li key={idea.name} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium">{idea.name}</span>
                    <span className="text-xs text-[#ff9b5e]">{idea.gate}</span>
                  </div>
                  <p className="mt-2 font-mono text-[11px] text-white/50">
                    {idea.clicks} clicks · {idea.leads} leads · ${idea.revenue} recorded
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-12 md:px-10">
        <Glass className="p-6 md:p-8 lg:p-10">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/45">
            Problem
          </div>
          <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Most startups are built before they are proven.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/58 md:text-lg md:leading-8">
            Founders spend too much time polishing products before they know if people want them,
            understand them, or will pay for them. BlitzProof flips that order.
          </p>
        </Glass>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-12 md:px-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative min-h-[280px] overflow-hidden rounded-[30px] border border-white/10 bg-[#0b1120]"
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
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(3,7,18,0.18),rgba(3,7,18,0.92))]" />
              <div className="absolute inset-x-4 bottom-4 rounded-[24px] border border-white/10 bg-black/35 p-5 backdrop-blur-md">
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <Glass className="p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/45">
                Current surface
              </div>
              <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                A proof engine for one founder running many bets.
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/58 md:text-lg md:leading-8">
                The current prototype uses local demo data so the validation flow can be shown
                and improved. It is not a claim of live customer traction.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/dashboard" className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black">
                Launch dashboard
              </Link>
              <Link href="/i/1" className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-center text-sm font-semibold text-white/85">
                Test funnel
              </Link>
            </div>
          </div>
        </Glass>
      </section>
    </div>
  );
}

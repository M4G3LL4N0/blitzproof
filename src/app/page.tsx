import GradientBG from "@/components/ui/gradient-bg"
import Fade from "@/components/ui/fade"
import Glass from "@/components/ui/glass"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
      <GradientBG />
      <Fade />

      <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
          One system for every
          <span className="block bg-gradient-to-r from-orange-300 to-pink-400 bg-clip-text text-transparent">
            venture you build.
          </span>
        </h1>

        <p className="mt-6 text-white/60 max-w-2xl text-lg leading-relaxed">
          BlitzProof is the validation engine for founders. Test ideas, capture demand,
          prove revenue, and scale only what works.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-black font-medium"
          >
            Open Engine
          </Link>

          <Link
            href="/i/1"
            className="px-6 py-3 rounded-full border border-white/20 text-white/80"
          >
            View Funnel
          </Link>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 pb-32">
        <Glass className="p-10">
          <h2 className="text-4xl font-semibold mb-4">
            A coordinated system of startups.
          </h2>

          <p className="text-white/60 mb-8 max-w-2xl">
            Each idea flows through validation, conversion, and revenue proof before
            scaling. No wasted builds. No guessing.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {["Validation", "Leads", "Revenue"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]"
              >
                <h3 className="text-xl font-medium">{item}</h3>
                <p className="text-white/50 mt-2">
                  Real-time tracking and proof-based scaling.
                </p>
              </div>
            ))}
          </div>
        </Glass>
      </section>
    </main>
  )
}

import type { ReactNode } from "react"

type GlassProps = {
  children: ReactNode
  className?: string
}

export default function Glass({ children, className = "" }: GlassProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
      {children}
    </div>
  )
}

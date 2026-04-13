export default function Glass({ children, className = "" }: any) {
  return (
    <div
      className={`relative rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-30 pointer-events-none" />
      {children}
    </div>
  )
}

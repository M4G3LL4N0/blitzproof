type OrbProps = {
  className?: string
}

export default function Orb({ className = "" }: OrbProps) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl opacity-60 ${className}`}
    />
  )
}

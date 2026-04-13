export type Idea = {
  id: string
  name: string
  score: number
  stage: "idea" | "testing" | "revenue" | "scale" | "killed"
  metrics: {
    clicks: number
    leads: number
    revenue: number
  }
}

export function scoreIdea(idea: Idea): number {
  const { clicks, leads, revenue } = idea.metrics

  let score = 0

  if (clicks > 100) score += 20
  if (leads > 10) score += 30
  if (revenue > 0) score += 50

  return Math.min(score, 100)
}

export function decide(idea: Idea): Idea["stage"] {
  const { clicks, leads, revenue } = idea.metrics

  if (revenue > 0 && leads > 5) return "scale"
  if (clicks > 100 && leads === 0) return "killed"
  if (leads > 0) return "testing"

  return "idea"
}

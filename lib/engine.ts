export type IdeaStage = "idea" | "testing" | "revenue" | "scale" | "killed"

export type Idea = {
  id: string
  name: string
  score: number
  stage: IdeaStage
  metrics: {
    clicks: number
    leads: number
    revenue: number
  }
}

export function scoreIdea(idea: Idea): number {
  const clicks = idea.metrics.clicks || 0
  const leads = idea.metrics.leads || 0
  const revenue = idea.metrics.revenue || 0

  const clickScore = Math.min(20, Math.floor(clicks / 10))
  const leadScore = Math.min(30, leads * 2)
  const revenueScore = Math.min(50, Math.floor(revenue / 10))

  return Math.min(100, clickScore + leadScore + revenueScore)
}

export function decideIdeaStage(idea: Idea): IdeaStage {
  const clicks = idea.metrics.clicks || 0
  const leads = idea.metrics.leads || 0
  const revenue = idea.metrics.revenue || 0

  if (revenue >= 250 && leads >= 10) return "scale"
  if (revenue > 0) return "revenue"
  if (leads > 0) return "testing"
  if (clicks > 150 && leads === 0) return "killed"

  return "idea"
}

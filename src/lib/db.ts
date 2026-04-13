import fs from "fs"
import path from "path"

const leadsPath = path.join(process.cwd(), "data", "leads.json")

export function getLeads() {
  const raw = fs.readFileSync(leadsPath, "utf-8")
  return JSON.parse(raw)
}

export function addLead(lead: any) {
  const leads = getLeads()
  leads.push(lead)
  fs.writeFileSync(leadsPath, JSON.stringify(leads, null, 2))
}

import fs from "fs"
import path from "path"

const paymentsPath = path.join(process.cwd(), "data", "payments.json")

export function getPayments() {
  try {
    const raw = fs.readFileSync(paymentsPath, "utf-8")
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export function addPayment(payment: any) {
  const payments = getPayments()
  payments.push(payment)
  fs.writeFileSync(paymentsPath, JSON.stringify(payments, null, 2))
}

"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"

export default function IdeaPage() {
  const params = useParams()
  const id = params.id as string

  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    fetch("/api/track", {
      method: "POST",
      body: JSON.stringify({ ideaId: id, type: "click" })
    })
  }, [id])

  async function submitLead() {
    await fetch("/api/lead", {
      method: "POST",
      body: JSON.stringify({ ideaId: id, email })
    })

    await fetch("/api/track", {
      method: "POST",
      body: JSON.stringify({ ideaId: id, type: "lead" })
    })

    setSubmitted(true)
  }

  async function simulatePayment() {
    await fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify({ ideaId: id, amount: 25 })
    })

    alert("Payment recorded")
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-10">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl mb-4">Startup Offer</h1>
        <p className="text-white/60 mb-6">
          Early access + exclusive offer.
        </p>

        {!submitted ? (
          <>
            <input
              className="w-full p-3 mb-4 bg-white text-black"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={submitLead}
              className="w-full p-3 bg-white text-black mb-4"
            >
              Join Waitlist
            </button>
          </>
        ) : (
          <button
            onClick={simulatePayment}
            className="w-full p-3 bg-green-500 text-black"
          >
            Buy Now ($25)
          </button>
        )}
      </div>
    </main>
  )
}

# Startup Journey: BlitzProof

## 1. Current Snapshot

- **Project name:** BlitzProof
- **Local folder:** `/Users/joshuadavis/startups/blitzproof`
- **Live URL:** https://blitzproof.noaerth.com
- **Live site status:** HTTP **200** (checked 2026-05-14)
- **Framework:** Next.js 16 App Router, TypeScript, Tailwind 4, Supabase client
- **Package manager:** pnpm
- **Build command:** `pnpm build`
- **Local review:** `pnpm dev` → http://localhost:3000
- **Current build status:** **PASS** (clean `node_modules` reinstall)
- **Deployment:** **Not run** (local review first)
- **Git remote:** `https://github.com/M4G3LL4N0/blitzproof.git`
- **Last updated:** 2026-05-14

## 2. Portfolio Score (0–100)

**Score: 78 / 100**

| Dimension | Notes |
|-----------|--------|
| Product clarity | Strong — validation engine for multi-startup founders |
| MVP depth | Good — `/dashboard`, `/i/[id]`, leads/payments/run APIs |
| Design | Premium dark gradient; studio-grade hero |
| Mobile | Improved this loop (sticky `SiteNav` + drawer) |
| Technical health | Build green after clean install |
| GTM | Live site + funnel demo route |
| Moat | Proof scoring + portfolio logic (needs data network later) |

**Triage:** **Keep & compound** — core Noaerth venture-OS pattern.

## 3. 10-Second Startup Explanation

- **What:** Venture studio OS to launch funnels, capture leads, record payment signal, and score ideas.
- **Who:** Founders and studios running many experiments in parallel.
- **Pain:** Startup theater without proof-of-work signal.
- **User action:** Open Engine → manage ideas, funnels, payments.
- **CTA:** Open Engine (`/dashboard`)

## 4. Founder Thesis

- **Belief:** Only ideas with measurable signal deserve scale.
- **Wedge:** Funnel + lead + payment hooks in one Next app.
- **Expansion:** Portfolio dashboards, cross-idea learning, studio billing.
- **Risk:** Feature sprawl before one killer loop (pick: funnel → pay → score).

## 5. Live Website Diagnosis

- **Works:** Hero, positioning, live 200, dashboard path.
- **Weak:** Duplicate nav on homepage vs global header (acceptable).
- **Next:** Dashboard empty states, `/i/[id]` sample data polish.

## 6. Local Codebase Diagnosis

- **Routes:** `/`, `/dashboard`, `/i/[id]`, APIs (`ideas`, `leads`, `payments`, `run`, `track`, `checkout`)
- **Risk:** Corrupt `node_modules` without clean install
- **This loop:** `components/SiteNav.tsx` + `app/layout.tsx`

## 7. Work Completed This Loop (2026-05-14)

- Added sticky site navigation with mobile drawer and scroll lock
- Wired `SiteNav` in root layout
- **Build:** PASS
- **Deploy:** skipped

## 8. Next Loop Plan

- Dashboard empty state + seeded demo idea
- Unify homepage CTA with global nav labels
- Optional: persist ideas via Supabase when env set

## 9. Local Review

```bash
cd /Users/joshuadavis/startups/blitzproof && pnpm dev
```

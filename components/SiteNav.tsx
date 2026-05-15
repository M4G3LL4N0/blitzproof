"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Engine" },
  { href: "/i/1", label: "Funnel demo" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-[-0.03em] text-white" onClick={() => setOpen(false)}>
          BlitzProof
        </Link>
        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className="rounded-full bg-[linear-gradient(90deg,#ff9a4d,#ff6f91,#9b7bff)] px-4 py-2 text-sm font-semibold text-white"
          >
            Open Engine
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/dashboard"
            className="rounded-full bg-[linear-gradient(90deg,#ff9a4d,#ff6f91,#9b7bff)] px-3 py-1.5 text-xs font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Engine
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white"
            aria-expanded={open}
            aria-controls="blitzproof-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="blitzproof-mobile-nav"
          className="border-t border-white/10 bg-[#050816]/98 px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block rounded-xl px-3 py-3 text-sm text-white/90 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

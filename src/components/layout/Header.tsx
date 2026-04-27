// components/layout/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = ["General", "Cosmetic", "Implants", "Invisalign", "Gleam Membership"];

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e2db] bg-[#fbf9f5]">
      <div className="px-4 py-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between">
          <Link href="/" className="flex flex-col leading-none">
            <span className="mb-1 text-[8px] uppercase tracking-[0.38em] font-inter text-[#8f8a84]">
              Calabasas
            </span>
            <span className="font-fraunces text-[28px] font-medium text-[#161616]">Smiles</span>
          </Link>

          <div className="hidden items-center justify-end gap-12 md:flex">
            <nav className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-[11px] font-medium text-[#2a2a2a] transition hover:text-black"
                >
                  {link}
                </Link>
              ))}
            </nav>

            <Link
              href="#"
              className="flex h-[44px] min-w-[196px] items-center justify-center rounded-[100px] bg-[#0A0E1A] px-8 text-[11px] font-medium text-white transition hover:opacity-90"
            >
              Book Appointment
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e2db] bg-white/60 text-[#161616] transition hover:bg-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden ${mobileOpen ? "block" : "hidden"} border-t border-[#e7e2db] bg-[#fbf9f5]`}
      >
        <div className="mx-auto w-full max-w-[1180px] px-4 py-4 sm:px-6 lg:px-10">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-sm font-medium text-[#2a2a2a] transition hover:text-black"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </Link>
            ))}
          </nav>
          <Link
            href="#"
            className="mt-5 flex h-[44px] w-full items-center justify-center rounded-[100px] bg-[#0A0E1A] px-6 text-[12px] font-medium text-white transition hover:opacity-90"
            onClick={() => setMobileOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}

// components/layout/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isGeneralPage = pathname.startsWith("/general");
  const navLinks = [
    { label: isGeneralPage ? "General Dentistry" : "General", href: "/general" },
    { label: "Cosmetic", href: "#" },
    { label: "Implants", href: "#" },
    { label: "Invisalign", href: "#" },
    { label: "Gleam Membership", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e2db] bg-white">
      <div className="px-4 py-4 sm:px-6 sm:py-5 md:px-8 lg:px-24 lg:py-6">
        <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between">
          <Link href="/" className="flex flex-col leading-none">
            <span className="mb-1 text-[9px] font-inter uppercase tracking-[0.24em] text-[#5A6578] sm:text-[10px]">
              {isGeneralPage ? "Advanced" : "Calabasas"}
            </span>
            <span className="font-fraunces text-[20px] font-semibold tracking-[-0.01em] text-[#0A0E1A] sm:text-[22px]">
              {isGeneralPage ? "Dentistry" : "Smiles"}
            </span>
          </Link>

          <div className="hidden items-center justify-end gap-8 lg:flex xl:gap-12">
            <nav className="flex items-center gap-6 xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-medium text-[#1C2333] transition hover:text-black xl:text-[14px]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="#"
              className="flex h-[40px] min-w-[176px] items-center justify-center rounded-[100px] bg-[#0A0E1A] px-6 text-[12px] font-semibold text-white transition hover:opacity-90 xl:min-w-[186px] xl:px-8 xl:text-[13px]"
            >
              Book Appointment
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e2db] bg-white/60 text-[#161616] transition hover:bg-white lg:hidden"
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
        className={`lg:hidden ${mobileOpen ? "block" : "hidden"} border-t border-[#e7e2db] bg-white`}
      >
        <div className="px-4 pb-6 pt-2 sm:px-6 md:px-8">
          <div className="mx-auto w-full max-w-[1180px]">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#2a2a2a] transition hover:text-black"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
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
      </div>
    </header>
  );
}

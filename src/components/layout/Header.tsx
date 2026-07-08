// components/layout/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavLink = { label: string; href: string };

const MAIN_LINKS: NavLink[] = [
  { label: "General", href: "/general" },
  { label: "Cosmetic", href: "/cosmetic" },
  { label: "Implants", href: "/implants" },
];

const MORE_LINKS: NavLink[] = [
  { label: "Invisalign", href: "/invisalign" },
  { label: "Restorative", href: "/restorative" },
  { label: "Emergency", href: "/emergency" },
  { label: "Oral Surgery", href: "/oral-surgery" },
];

const STORAGE_KEY = "headerPreviousMain";

const NAV_LINK_CLASS =
  "text-[13px] font-medium text-[#1C2333] transition hover:text-black xl:text-[14px]";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [previousMain, setPreviousMain] = useState<string | null>(null);
  const moreRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();
  const isGeneralPage = pathname.startsWith("/general");
  const isEmergencyPage = pathname.startsWith("/emergency");
  const isConsultationPage = [
    "/cosmetic",
    "/restorative",
    "/implants",
    "/invisalign",
    "/oral-surgery",
  ].some((route) => pathname.startsWith(route));

  const headerCtaLabel = isEmergencyPage
    ? "Call now"
    : isConsultationPage
      ? "Book Consultation"
      : "Book Appointment";
  const headerCtaHref = isEmergencyPage ? "tel:+18185550100" : "https://member.clerri.com/enrollment/accounts/create/?slug=QN5D";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMain = MAIN_LINKS.some((l) => l.href === pathname);
    if (isMain) {
      window.sessionStorage.setItem(STORAGE_KEY, pathname);
      setPreviousMain(pathname);
    } else {
      const stored = window.sessionStorage.getItem(STORAGE_KEY);
      if (stored) setPreviousMain(stored);
    }
  }, [pathname]);

  useEffect(() => {
    setMoreOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!moreOpen) return;
    function handleMouseDown(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMoreOpen(false);
    }
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [moreOpen]);

  const displayedMain: NavLink[] = [...MAIN_LINKS];
  const displayedMore: NavLink[] = [...MORE_LINKS];
  const currentMore = MORE_LINKS.find((l) => l.href === pathname);
  if (currentMore) {
    const originHref = previousMain ?? "/general";
    const originSlotIdx = MAIN_LINKS.findIndex((l) => l.href === originHref);
    const slotIdx = originSlotIdx >= 0 ? originSlotIdx : 0;
    const movedOut = displayedMain[slotIdx];
    displayedMain[slotIdx] = currentMore;
    const moreIdx = displayedMore.findIndex((l) => l.href === currentMore.href);
    if (moreIdx >= 0) displayedMore[moreIdx] = movedOut;
  }

  const renderLabel = (link: NavLink) => {
    if (link.href === "/general" && isGeneralPage) return "General Dentistry";
    return link.label;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e2db] bg-white">
      {isEmergencyPage ? (
        <div className="bg-[#E63946] px-4 py-2 shadow-[0px_4px_20px_0px_#E6394633] sm:px-6 md:px-8 lg:px-24">
          <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-white">
              <span className="inline-block h-2 w-2 rounded-full bg-white" />
              <p className="text-[12px] font-medium">Dental emergency? We see patients the same day.</p>
            </div>

            <Link
              href="tel:+18185550100"
              className="inline-flex h-8 items-center rounded-[100px] bg-white px-4 text-[12px] font-bold text-[#E63946] transition hover:opacity-90"
            >
              <span className="mr-1.5">📞</span> Call (951) 736-1822
            </Link>
          </div>
        </div>
      ) : null}
      <div className="px-4 py-2 sm:px-6 sm:py-5 md:px-8 lg:px-24 lg:py-2">
        <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/corona-logo.png"
              alt="Corona Advanced Dentistry"
              width={280}
              height={82}
              className="h-11 w-auto sm:h-14 md:h-14 lg:h-[82px]"
              priority
            />
          </Link>

          <div className="hidden items-center justify-end gap-2 lg:flex xl:gap-4">
            <nav className="flex items-center gap-6 xl:gap-10">
              {displayedMain.map((link) => (
                <Link key={link.href} href={link.href} className={NAV_LINK_CLASS}>
                  {renderLabel(link)}
                </Link>
              ))}

              <Link href="https://gleam-black.vercel.app/" target="_blank" className={NAV_LINK_CLASS}>
                Gleam Membership
              </Link>

              <div className="relative" ref={moreRef}>
                <button
                  type="button"
                  className={`${NAV_LINK_CLASS} inline-flex items-center gap-1 cursor-pointer`}
                  aria-expanded={moreOpen}
                  aria-haspopup="menu"
                  onClick={() => setMoreOpen((v) => !v)}
                >
                  More
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-3 w-3 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {moreOpen ? (
                  <div
                    role="menu"
                    className="absolute right-0 top-full z-50 mt-2 min-w-[180px] rounded-2xl border border-[#e7e2db] bg-white p-2 shadow-lg"
                  >
                    {displayedMore.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        role="menuitem"
                        className="block rounded-lg px-3 py-2 text-[13px] font-medium text-[#1C2333] transition hover:bg-[#f5f1ea] hover:text-black xl:text-[14px]"
                        onClick={() => setMoreOpen(false)}
                      >
                        {renderLabel(link)}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </nav>

            <Link
              href={headerCtaHref}
              className={`flex h-[40px] items-center justify-center rounded-[100px] px-6 transition hover:opacity-90 xl:min-w-[186px] xl:px-4 ${
                isEmergencyPage
                  ? "bg-[#E63946] font-inter text-[13px] font-bold text-white"
                  : "bg-[#0A0E1A] text-[12px] font-semibold text-white xl:text-[13px]"
              }`}
            >
              {headerCtaLabel}
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
              {displayedMain.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#2a2a2a] transition hover:text-black"
                  onClick={() => setMobileOpen(false)}
                >
                  {renderLabel(link)}
                </Link>
              ))}
              <Link
                href="/"
                className="text-sm font-medium text-[#2a2a2a] transition hover:text-black"
                onClick={() => setMobileOpen(false)}
              >
                Gleam Membership
              </Link>
              {displayedMore.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#2a2a2a] transition hover:text-black"
                  onClick={() => setMobileOpen(false)}
                >
                  {renderLabel(link)}
                </Link>
              ))}
            </nav>
            <Link
              href={headerCtaHref}
              className={`mt-5 flex h-[44px] w-full items-center justify-center rounded-[100px] px-6 transition hover:opacity-90 ${
                isEmergencyPage
                  ? "bg-[#E63946] font-inter text-[13px] font-bold text-white"
                  : "bg-[#0A0E1A] text-[12px] font-medium text-white"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {headerCtaLabel}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

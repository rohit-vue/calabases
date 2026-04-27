// components/layout/Footer.tsx
import Link from "next/link";

const accent = "#23CFBE";

const servicesLinks = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Invisalign",
  "Oral Surgery",
  "Pediatric Dentistry",
] as const;

const aboutLinks = [
  "Meet the Dentists",
  "Our Office",
  "Gleam Membership",
  "Insurance Accepted",
  "Patient Reviews",
] as const;

function LinkColumn({ title, links }: { title: string; links: readonly string[] }) {
  return (
    <div className="space-y-5">
      <h4 className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: accent }}>
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((label) => (
          <li key={label}>
            <Link
              href="#"
              className="text-[13px] leading-snug text-[#a7acb6] transition-colors duration-200 hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] font-sans text-white">
      <div className="px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div className="space-y-5 lg:pr-4">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#8d929e]">
                  CALABASAS
                </span>
                <span className="font-fraunces text-[2.2rem] font-normal leading-none tracking-tight text-white sm:text-[2.5rem]">
                  Smiles
                </span>
              </div>
              <p className="max-w-[295px] text-[13px] leading-[1.55] text-[#9fa5b0]">
                Trusted by Calabasas, Agoura Hills, and Hidden Hills families since 2010.
                Cosmetic, general, and emergency dental care with a focus on modern
                techniques and transparent pricing.
              </p>
            </div>

            <LinkColumn title="SERVICES" links={servicesLinks} />
            <LinkColumn title="ABOUT" links={aboutLinks} />

            <div className="space-y-5">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: accent }}>
                CONTACT
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="tel:+18185550100"
                    className="text-[13px] leading-snug text-[#a7acb6] transition-colors duration-200 hover:text-white"
                  >
                    (818) 555-0100
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[13px] leading-snug text-[#a7acb6] transition-colors duration-200 hover:text-white"
                  >
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[13px] leading-snug text-[#a7acb6] transition-colors duration-200 hover:text-white"
                  >
                    Dental Emergency
                  </Link>
                </li>
                <li className="h-3" aria-hidden="true" />
                <li>
                  <span className="text-[13px] leading-snug text-[#a7acb6]">Mon-Fri 8am-6pm</span>
                </li>
                <li>
                  <span className="text-[13px] leading-snug text-[#a7acb6]">Sat 9am-3pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-4 py-6 text-[#656c79] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <p className="text-[11px] leading-relaxed">
            © 2026 Calabasas Smiles · Advanced Dentistry · All Rights Reserved
          </p>
          <p className="text-[11px] leading-relaxed sm:text-right">
            Calabasas, CA · Agoura Hills · Hidden Hills
          </p>
        </div>
      </div>
    </footer>
  );
}

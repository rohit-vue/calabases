import Link from "next/link";

const accent = "#19B5B0";

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
      <h4 className="text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: accent }}>
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((label) => (
          <li key={label}>
            <Link
              href="#"
              className="text-[14px] leading-snug text-[#FFFFFFB2] transition-colors duration-200 hover:text-white"
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
    <footer className="bg-[#0A0E1A] font-sans text-white">
      <div className="px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-24 lg:py-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div className="col-span-2 space-y-5 lg:col-span-1 lg:pr-4">
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#FFFFFF80]">
                  CALABASAS
                </span>
                <span className="font-fraunces text-[2.2rem] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[24px]">
                  Smiles
                </span>
              </div>
              <p className="max-w-[295px] text-[14px] leading-[1.55] text-[#FFFFFF99]">
                Trusted by Calabasas, Agoura Hills, and Hidden
                Hills families since 2010. Cosmetic, general, and
                emergency dental care — with a focus on
                modern techniques and transparent pricing.
              </p>
            </div>

            <LinkColumn title="SERVICES" links={servicesLinks} />
            <LinkColumn title="ABOUT" links={aboutLinks} />

            <div className="space-y-5">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: accent }}>
                CONTACT
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="tel:+18185550100"
                    className="text-[14px] leading-snug text-[#FFFFFFB2] transition-colors duration-200 hover:text-white"
                  >
                    (818) 555-0100
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[14px] leading-snug text-[#FFFFFFB2] transition-colors duration-200 hover:text-white"
                  >
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[14px] leading-snug text-[#FFFFFFB2] transition-colors duration-200 hover:text-white"
                  >
                    Dental Emergency
                  </Link>
                </li>
                <li className="h-1" aria-hidden="true" />
                <li>
                  <span className="text-[14px] leading-snug text-[#FFFFFFB2]">Mon-Fri 8am-6pm <br />Sat 9am-3pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#FFFFFF1A]">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-4 px-4 py-6 text-center text-[#FFFFFF66] sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left md:px-8 lg:px-24">
          <p className="text-[13px] leading-relaxed">
            © 2026 Calabasas Smiles · Advanced Dentistry · All Rights Reserved
          </p>
          <p className="text-[13px] leading-relaxed sm:text-right">
            Calabasas, CA · Agoura Hills · Hidden Hills
          </p>
        </div>
      </div>
    </footer>
  );
}

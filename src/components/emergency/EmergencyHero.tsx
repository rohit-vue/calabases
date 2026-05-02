import Image from "next/image";
import Link from "next/link";

const urgentSigns = [
  "Knocked-out tooth",
  "Severe pain + facial swelling",
  "Heavy bleeding that won't stop",
  "Tooth pushed into the gum",
  "Jaw injury or suspected break",
  "Abscess with fever",
];

const bottomPoints = [
  "Same-day appointments Mon-Sat",
  "Treatment, not just pain meds",
  "15+ years experience · 5,000+ patients",
];

export default function EmergencyHero() {
  return (
    <section className="bg-[#FFFFFF] px-4 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-12 lg:px-20 lg:pb-10 lg:pt-14">
      <div className="mx-auto grid w-full max-w-[1240px] items-start gap-10 lg:grid-cols-[1fr_500px] lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F0D5D8] bg-[#FFF2F3] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#E73F4B]" />
            <p className="text-[12px] font-bold text-[#DE3040]">OPEN NOW · Same-Day Appointments Available</p>
          </div>

          <h1 className="mt-5 font-fraunces text-[42px] leading-[0.92] tracking-[-0.04em] text-[#0F1729] sm:text-[62px] lg:text-[60px]">
            In pain?<br />
            <span className="font-normal italic text-[#E53A4C]">We&apos;ll see you today.</span>
          </h1>

          <p className="mt-6 max-w-[700px] text-[22px] leading-[1.35] text-[#283346] sm:text-[30px] lg:text-[22px]">
            Calabasas&apos; trusted emergency dentist since 2010.
            <span className="font-semibold"> Same-day appointments </span> for toothaches, broken teeth, and
            dental trauma. Don&apos;t go to the ER — they can only prescribe painkillers. We can actually fix it.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:max-w-[620px]">
            <Link
              href="tel:+18185550100"
              className="flex flex-col gap-3 rounded-[24px] bg-[#E73D4A] px-6 py-5 text-white transition hover:opacity-95"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
                Call now — fastest
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Image
                    src="/images/📞.png"
                    alt=""
                    width={40}
                    height={40}
                    className="h-2 w-2 object-contain mix-blend-screen"
                  />
                </div>
                <p className="font-fraunces text-[38px] leading-[44.8px] tracking-wide sm:text-[45px] lg:text-[30px]">
                  <span className="block ">(818) 555-</span>
                  <span className="block">0100</span>
                </p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex flex-col gap-3 rounded-[24px] bg-[#0B0E14] px-6 py-6 text-white transition hover:opacity-95"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                OR BOOK ONLINE
              </p>
              <div className="flex items-center gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2D3139] text-[14px] font-light leading-none text-white"
                  aria-hidden
                >
                  →
                </span>
                <span className="font-fraunces text-[36px] leading-[0.95] sm:text-[43px] lg:text-[18px]">
                  Request Slot
                </span>
              </div>
            </Link>
          </div>

          <div className="mt-8 border-t border-[#E0E3E6] pt-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {bottomPoints.map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <Image
                    src="/images/✓.svg"
                    alt=""
                    width={14}
                    height={11}
                    className="mt-[4px] shrink-0"
                  />
                  <p className="text-[14px] leading-[1.45] text-[#4A5668]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="box-content rounded-[18px] border border-[#E4E6EA] bg-[#f8f9fa] p-6">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#E2515E] font-bold">▲ Call immediately if</p>
          <h2 className="mt-3 font-fraunces text-[28px] leading-[1.0] text-[#111A2C] sm:text-[36px] lg:text-[28px]">
            These need care in the{" "}
            <span className="font-light italic text-[#E2515E]">next hour.</span>
          </h2>

          <ul className="mt-1 divide-y divide-[#E9EBEE] border-y border-[#E9EBEE]">
            {urgentSigns.map((sign) => (
              <li key={sign} className="flex items-center gap-3 py-3">
                <Image src="/images/arrow.svg" alt="" width={11} height={11} className="shrink-0" />
                <span className="text-[20px] text-[#1A2436] sm:text-[23px] lg:text-[15px]">{sign}</span>
              </li>
            ))}
          </ul>

          <Link
            href="tel:+18185550100"
            className="mt-5 inline-flex h-[52px] w-full items-center justify-center rounded-full bg-[#E73D4A] font-semibold text-white transition hover:opacity-90"
          >
            Call Us Now <span className="ml-2 lg:text-[10px]">→</span>
          </Link>
        </aside>
      </div>
    </section>
  );
}

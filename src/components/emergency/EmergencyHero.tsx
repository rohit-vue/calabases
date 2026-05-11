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
    <section className="bg-[#FFFFFF] px-4 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-12 lg:px-32 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1240px] items-start gap-10 lg:grid-cols-[1fr_500px] lg:gap-16">
        <div>
          <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-[#F0D5D8] bg-[#FFF2F3] px-3 py-1.5 sm:px-4">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#E73F4B]" />
            <p className="min-w-0 text-[10px] font-bold leading-snug text-[#DE3040] sm:text-[12px]">
              OPEN NOW · Same-Day Appointments Available
            </p>
          </div>

          <h1 className="mt-5 font-fraunces text-[32px] leading-[0.92] tracking-[-0.04em] text-[#0F1729] sm:text-[48px] lg:text-[60px]">
            In pain?<br />
            <span className="font-normal italic text-[#E53A4C]">We&apos;ll see you today.</span>
          </h1>

          <p className="mt-6 max-w-[700px] text-[15px] leading-[1.35] text-[#283346] sm:text-[22px] lg:text-[22px]">
            Encino&apos;s trusted emergency dentist since 2010.
            <span className="font-semibold"> Same-day appointments </span> for toothaches, broken teeth, and
            dental trauma. Don&apos;t go to the ER — they can only prescribe painkillers. We can actually fix it.
          </p>

          {/* Mobile: two CTAs side-by-side; each card = label + row (icon left, text right). sm+/lg: unchanged. */}
          <div className="mt-8 flex w-full min-w-0 flex-row items-stretch gap-2 sm:max-w-[620px] sm:gap-3">
            <Link
              href="tel:+18185550100"
              className="flex min-h-0 min-w-0 flex-1 flex-col gap-2 rounded-[24px] bg-[#E73D4A] px-3 py-4 text-left text-white transition hover:opacity-95 sm:gap-3 sm:px-6 sm:py-5"
            >
              <p className="max-sm:text-[9px] max-sm:leading-snug text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
                Call now — fastest
              </p>
              <div className="flex min-w-0 w-full flex-row flex-nowrap items-center gap-2 sm:gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 sm:h-8 sm:w-8">
                  <Image
                    src="/images/📞.png"
                    alt=""
                    width={20}
                    height={20}
                    className="h-3.5 w-3.5 object-contain sm:h-3.5 sm:w-3.5"
                  />
                </div>
                <p className="min-w-0 flex-1 font-fraunces leading-[1.05] tracking-tight text-white max-sm:text-[12px] sm:text-[26px] lg:text-[30px]">
                  <span className="block sm:hidden">(818) 555-</span>
                  <span className="block sm:hidden">0100</span>
                  <span className="hidden sm:inline">(818) 555-0100</span>
                </p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex min-h-0 min-w-0 flex-1 flex-col gap-2 rounded-[24px] bg-[#0B0E14] px-3 py-4 text-left text-white transition hover:opacity-95 sm:gap-3 sm:px-6 sm:py-6"
            >
              <p className="max-sm:text-[9px] max-sm:leading-snug text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                OR BOOK ONLINE
              </p>
              <div className="flex min-w-0 w-full flex-row flex-nowrap items-center gap-2 sm:gap-4">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2D3139] text-[14px] font-light leading-none text-white sm:h-8 sm:w-8"
                  aria-hidden
                >
                  →
                </span>
                <span className="min-w-0 flex-1 font-fraunces leading-none max-sm:text-[13px] sm:text-[20px] lg:text-[18px]">
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
          <h2 className="mt-3 font-fraunces text-[18px] leading-[1.0] text-[#111A2C] sm:text-[24px] lg:text-[28px]">
            These need care in the{" "}
            <span className="font-light italic text-[#E2515E]">next hour.</span>
          </h2>

          <ul className="mt-1 divide-y divide-[#E9EBEE] border-y border-[#E9EBEE]">
            {urgentSigns.map((sign) => (
              <li key={sign} className="flex items-center gap-3 py-3">
                <Image src="/images/arrow.svg" alt="" width={11} height={11} className="shrink-0" />
                <span className="text-[14px] text-[#1A2436] sm:text-[16px] lg:text-[15px]">{sign}</span>
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

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
    <section className="bg-[#F6F7F5] px-4 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-12 lg:px-20 lg:pb-20 lg:pt-14">
      <div className="mx-auto grid w-full max-w-[1240px] items-start gap-10 lg:grid-cols-[1fr_470px] lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F0D5D8] bg-[#FFF2F3] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#E73F4B]" />
            <p className="text-[12px] font-semibold text-[#DE3040]">OPEN NOW · Same-Day Appointments Available</p>
          </div>

          <h1 className="mt-5 font-fraunces text-[48px] leading-[0.92] tracking-[-0.04em] text-[#0F1729] sm:text-[68px] lg:text-[96px]">
            In pain?
            <br />
            <span className="font-light italic text-[#E53A4C]">We&apos;ll see you today.</span>
          </h1>

          <p className="mt-6 max-w-[700px] text-[22px] leading-[1.35] text-[#283346] sm:text-[30px] lg:text-[42px]">
            Calabasas&apos; trusted emergency dentist since 2010.
            <span className="font-semibold"> Same-day appointments</span> for toothaches, broken teeth, and
            dental trauma. Don&apos;t go to the ER - they can only prescribe painkillers. We can actually fix it.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:max-w-[620px]">
            <Link href="tel:+18185550100" className="rounded-[18px] bg-[#E73D4A] px-6 py-5 text-white">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#FFD8DB]">Call now - fastest</p>
              <p className="mt-2 font-fraunces text-[38px] leading-[0.95] sm:text-[45px] lg:text-[53px]">(818) 555-0100</p>
            </Link>

            <Link href="#" className="rounded-[18px] bg-[#061025] px-6 py-5 text-white">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#A9B5CA]">Or book online</p>
              <p className="mt-2 font-fraunces text-[36px] leading-[0.95] sm:text-[43px] lg:text-[50px]">Request Slot</p>
            </Link>
          </div>

          <div className="mt-8 border-t border-[#E0E3E6] pt-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {bottomPoints.map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <span className="mt-[4px] text-[#21B7AA]">✓</span>
                  <p className="text-[15px] leading-[1.45] text-[#4A5668]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="rounded-[18px] border border-[#E4E6EA] bg-[#FAFBFA] p-6">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#E2515E]">▲ Call immediately if</p>
          <h2 className="mt-3 font-fraunces text-[36px] leading-[0.95] text-[#111A2C] sm:text-[44px] lg:text-[56px]">
            These need care in the <span className="font-light italic text-[#E2515E]">next hour.</span>
          </h2>

          <ul className="mt-5 divide-y divide-[#E9EBEE] border-y border-[#E9EBEE]">
            {urgentSigns.map((sign) => (
              <li key={sign} className="flex items-center gap-3 py-3">
                <span className="text-[#E2515E]">→</span>
                <span className="text-[20px] text-[#1A2436] sm:text-[23px] lg:text-[27px]">{sign}</span>
              </li>
            ))}
          </ul>

          <Link
            href="tel:+18185550100"
            className="mt-5 inline-flex h-[52px] w-full items-center justify-center rounded-full bg-[#E73D4A] font-semibold text-white transition hover:opacity-90"
          >
            Call Us Now <span className="ml-2">→</span>
          </Link>
        </aside>
      </div>
    </section>
  );
}

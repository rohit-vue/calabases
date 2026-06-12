import Link from "next/link";

export default function RestorativeHero() {
  return (
    <section
      className="px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-9 md:px-8 lg:px-20 lg:pb-20 lg:pt-12"
      style={{
        background:
          "linear-gradient(0deg, #F7F2E7, #F7F2E7), radial-gradient(141.42% 141.42% at 100% 100%, rgba(25, 181, 176, 0.06) 0%, rgba(25, 181, 176, 0) 50%), radial-gradient(141.42% 141.42% at 0% 0%, rgba(184, 115, 51, 0.08) 0%, rgba(184, 115, 51, 0) 50%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1160px]">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.17em] text-[#5A6578] lg:text-left">
          Home / Services / Restorative Dentistry
        </p>

        <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4 lg:justify-start">
          <span className="h-px w-8 bg-[#C9A961] sm:w-10" />
          <p className="font-fraunces text-[10px] font-medium uppercase tracking-[0.26em] text-[#C9A961] sm:text-[11px] sm:tracking-[0.3em]">
            Est. 2010 - Corona&apos;s Restorative Specialists
          </p>
          <span className="h-px w-8 bg-[#C9A961] sm:w-10" />
        </div>

        <div className="mt-6 grid items-start gap-8 sm:gap-10 lg:grid-cols-[1fr_430px] lg:gap-16">
          <div className="text-center lg:text-left">
            <h1 className="font-fraunces text-[34px] font-light leading-[0.92] tracking-[-0.0523em] text-[#0A0E1A] sm:text-[48px] md:text-[64px] lg:text-[80px]">
              The art of
              <br />
              <span className="italic text-[#B87333]">rebuilding</span> teeth.
            </h1>

            <p className="mx-auto mt-5 max-w-[560px] border-l-2 border-[#B87333] pl-4 text-left font-fraunces text-[18px] font-light italic leading-[1.28] text-[#1C2333] sm:mt-6 sm:text-[22px] md:text-[24px] lg:mx-0 lg:mt-6 lg:text-[26px] lg:leading-[1.25]">
              The average American loses <span className="font-normal text-[#0A0E1A]"> 12 teeth </span> by age 50.
              Modern restorative dentistry makes that statistic obsolete.
            </p>

            <p className="mx-auto mt-5 max-w-[460px] text-[14px] leading-[1.65] text-[#5A6578] sm:mt-6 sm:text-[15px] lg:mx-0 lg:text-[16px] lg:leading-[1.85]">
              Crowns, bridges, inlays, onlays, dentures - crafted from materials stronger than the teeth nature gave you.
              3,000+ restorations placed since 2010, with a 5-year warranty on every piece.
            </p>

            <div className="mt-6 flex w-full flex-col gap-2.5 sm:mt-8 sm:gap-3 lg:flex-row lg:flex-wrap lg:items-center">
              <Link
                href="https://member.clerri.com/enrollment/accounts/create/?slug=TE3V"
                target="_blank"
                className="flex h-[46px] w-full items-center justify-center rounded-[100px] border-2 border-[#000000] bg-[#0A0E1A] px-6 text-[13px] font-semibold tracking-[0.02em] text-white transition hover:opacity-90 sm:px-7 sm:text-[14px] lg:inline-flex lg:w-auto"
              >
                Book a Consultation <span className="ml-2">→</span>
              </Link>
              <Link
                href="https://member.clerri.com/enrollment/accounts/create/?slug=TE3V"
                target="_blank"
                className="flex h-[46px] w-full items-center justify-center rounded-[100px] border border-[#0A0E1A] bg-transparent px-6 text-[13px] font-semibold tracking-[0.02em] text-[#0A0E1A] transition hover:bg-[#F6F2E6] sm:px-7 lg:inline-flex lg:w-auto"
              >
                Explore Restorations
              </Link>
            </div>

            <div className="mt-8 border-t border-[#E4DDC8] pt-4 sm:mt-10 sm:pt-5 lg:mt-10">
              <div className="grid justify-items-center gap-3 text-center sm:grid-cols-3 sm:gap-4 sm:gap-y-4 lg:justify-items-start lg:gap-6 lg:text-left">
                <div>
                  <p className="font-fraunces text-[30px] italic tracking-[-0.017em] leading-none text-[#0A0E1A] sm:text-[34px] lg:text-[32px]">
                    <span className="text-[#B87333]">3,000</span>+
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-[#5A6578]">
                    Restorations placed
                  </p>
                </div>
                <div>
                  <p className="font-fraunces text-[30px] italic tracking-[-0.017em] leading-none sm:text-[34px] lg:text-[32px]">
                    <span className="text-[#0A0E1A]">5</span>
                    <span className="text-[#B87333]">-yr</span>
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-[#5A6578]">
                    Warranty standard
                  </p>
                </div>
                <div>
                  <p className="font-fraunces text-[30px] italic tracking-[-0.017em] leading-none sm:text-[34px] lg:text-[32px]">
                    <span className="text-[#0A0E1A]">{"<"}</span>
                    <span className="text-[#B87333]">2</span>
                    <span className="text-[#0A0E1A]">%</span>
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-[#5A6578]">
                    5-year failure rate
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="mx-auto w-full max-w-[430px] rounded-[8px] bg-[linear-gradient(141.34deg,#EFE7D3_0%,#E8D5B7_100%)] p-4 sm:p-5 lg:mx-0">
            <div className="rounded-[6px] border border-[#8B5A2B33] p-3 sm:p-4">
              <div className="flex items-center justify-between border-b border-[#8B5A2B33] pb-2">
                <p className="font-fraunces text-[12px]  uppercase italic tracking-[0.11em] text-[#8B5A2B]">
                  Specimen No. 01
                </p>
                <p className="font-fraunces text-[12px] text-[#8B5A2B] tracking-[0.11em]">Zirconia Crown</p>
              </div>

              <div className="h-[240px] sm:h-[320px] md:h-[380px] lg:h-[460px]" />

              <div className="mt-3 flex items-center justify-between border-t border-[#8B5A2B33] pt-2">
                <p className="font-fraunces text-[13px] italic text-[#0A0E1A]">
                  <span className="mr-2 inline-block h-[8px] w-[8px] rounded-[4px] bg-[#B87333]" />
                  Hand-crafted
                </p>
                <p className="font-fraunces text-[13px] italic text-[#0A0E1A]">15-25 yr lifespan</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

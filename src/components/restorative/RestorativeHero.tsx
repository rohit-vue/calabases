import Link from "next/link";

export default function RestorativeHero() {
  return (
    <section
      className="px-4 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-10 lg:px-20 lg:pb-20 lg:pt-12"
      style={{
        background:
          "linear-gradient(0deg, #F7F2E7, #F7F2E7), radial-gradient(141.42% 141.42% at 100% 100%, rgba(25, 181, 176, 0.06) 0%, rgba(25, 181, 176, 0) 50%), radial-gradient(141.42% 141.42% at 0% 0%, rgba(184, 115, 51, 0.08) 0%, rgba(184, 115, 51, 0) 50%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1160px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.17em] text-[#5A6578]">Home / Services / Restorative Dentistry</p>

        <div className="mt-4 flex items-center gap-4">
          <span className="h-px w-10 bg-[#C9A961]" />
          <p className="font-fraunces text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A961]">
            Est. 2010 - Calabasas&apos; Restorative Specialists
          </p>
          <span className="h-px w-10 bg-[#C9A961]" />
        </div>

        <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1fr_430px] lg:gap-16">
          <div>
            <h1 className="font-fraunces text-[44px] leading-[0.92] font-light tracking-[-0.0523em] text-[#0A0E1A] sm:text-[64px] lg:text-[80px]">
              The art of
              <br />
              <span className="italic text-[#B87333]">rebuilding</span> teeth.
            </h1>

            <p className="mt-6 max-w-[560px] border-l-2 border-[#B87333] pl-4 font-fraunces font-light text-[22px] italic leading-[1.25] text-[#1C2333] sm:text-[28px] lg:text-[26px]">
              The average American loses <span className="font-normal text-[#0A0E1A]"> 12 teeth </span>  by age 50. Modern restorative dentistry makes that statistic obsolete.
            </p>

            <p className="mt-6 max-w-[460px] text-[16px] leading-[1.85] text-[#5A6578]">
              Crowns, bridges, inlays, onlays, dentures - crafted from materials stronger than the teeth
              nature gave you. 3,000+ restorations placed since 2010, with a 5-year warranty on every
              piece.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#"
                className="inline-flex h-[46px] items-center border-2 border-[#000000] rounded-[100px] bg-[#0A0E1A] px-7 text-[14px] tracking-[0.02em] font-semibold text-white transition hover:opacity-90"
              >
                Book a Consultation <span className="ml-2">→</span>
              </Link>
              <Link
                href="#"
                className="inline-flex h-[46px] items-center rounded-[100px] border border-[#0A0E1A] bg-transparent px-7 text-[13px] font-semibold text-[#0A0E1A] tracking-[0.02em] transition hover:bg-[#F6F2E6]"
              >
                Explore Restorations
              </Link>
            </div>

            <div className="mt-10 border-t border-[#E4DDC8] pt-5">
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
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

          <aside className="mx-auto w-full max-w-[430px] rounded-[8px] bg-[linear-gradient(141.34deg,#EFE7D3_0%,#E8D5B7_100%)] p-4 sm:p-5">
            <div className="rounded-[6px] border border-[#8B5A2B33] p-3 sm:p-4">
              <div className="flex items-center justify-between border-b border-[#8B5A2B33] pb-2">
                <p className="font-fraunces text-[12px]  uppercase italic tracking-[0.11em] text-[#8B5A2B]">
                  Specimen No. 01
                </p>
                <p className="font-fraunces text-[12px] text-[#8B5A2B] tracking-[0.11em]">Zirconia Crown</p>
              </div>

              <div className="h-[460px] " />

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

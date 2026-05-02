import Link from "next/link";

const restorativeStats = [
  { value: "3,000+", label: "Restorations placed" },
  { value: "5-yr", label: "Warranty standard" },
  { value: "<2%", label: "5-year failure rate" },
];

export default function RestorativeHero() {
  return (
    <section className="bg-[#EFEBDD] px-4 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-10 lg:px-20 lg:pb-20 lg:pt-12">
      <div className="mx-auto w-full max-w-[1160px]">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[#8B8A82]">Home / Services / Restorative Dentistry</p>

        <div className="mt-4 flex items-center gap-4">
          <span className="h-px w-10 bg-[#CFC6B1]" />
          <p className="font-fraunces text-[12px] uppercase tracking-[0.18em] text-[#9A8762]">
            Est. 2010 - Calabasas&apos; Restorative Specialists
          </p>
          <span className="hidden h-px flex-1 bg-[#D8D0BC] md:block" />
        </div>

        <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1fr_430px] lg:gap-16">
          <div>
            <h1 className="font-fraunces text-[44px] leading-[0.92] tracking-[-0.03em] text-[#0B1020] sm:text-[64px] lg:text-[84px]">
              The art of
              <br />
              <span className="font-light italic text-[#B7804F]">rebuilding</span> teeth.
            </h1>

            <p className="mt-6 max-w-[560px] border-l border-[#C9BDA6] pl-4 font-fraunces text-[22px] italic leading-[1.25] text-[#374051] sm:text-[28px] lg:text-[34px]">
              The average American loses 12 teeth by age 50. Modern restorative dentistry makes that statistic obsolete.
            </p>

            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.85] text-[#5E6571]">
              Crowns, bridges, inlays, onlays, dentures - crafted from materials stronger than the teeth
              nature gave you. 3,000+ restorations placed since 2010, with a 5-year warranty on every
              piece.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#"
                className="inline-flex h-[46px] items-center rounded-full bg-[#040C1C] px-7 text-[13px] font-semibold text-white transition hover:opacity-90"
              >
                Book a Consultation <span className="ml-2">→</span>
              </Link>
              <Link
                href="#"
                className="inline-flex h-[46px] items-center rounded-full border border-[#B8B1A1] bg-transparent px-7 text-[13px] font-semibold text-[#212B39] transition hover:bg-[#F6F2E6]"
              >
                Explore Restorations
              </Link>
            </div>

            <div className="mt-10 border-t border-[#D7CFBB] pt-5">
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                {restorativeStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-fraunces text-[30px] italic leading-none text-[#A97348] sm:text-[34px] lg:text-[38px]">{stat.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#6B6F75]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="mx-auto w-full max-w-[430px] border border-[#D8CCB1] bg-[#EFE4CE] p-4 sm:p-5">
            <div className="flex items-center justify-between border-b border-[#D8CCB1] pb-2">
              <p className="font-fraunces text-[11px] uppercase tracking-[0.15em] text-[#9A8A6F]">Specimen No. 01</p>
              <p className="font-fraunces text-[12px] text-[#8A7A61]">Zirconia Crown</p>
            </div>

            <div className="mt-3 h-[460px] border border-[#DED2B8] bg-[#F2E8D2]" />

            <div className="mt-3 flex items-center justify-between border-t border-[#D8CCB1] pt-2">
              <p className="font-fraunces text-[12px] italic text-[#8E7A59]">
                <span className="mr-2 inline-block h-[6px] w-[6px] rounded-full bg-[#C28A58]" />
                Hand-crafted
              </p>
              <p className="font-fraunces text-[11px] italic text-[#8E7A59]">15-25 yr lifespan</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

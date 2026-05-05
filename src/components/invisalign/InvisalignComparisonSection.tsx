const comparisonRows = [
  {
    metric: "Visibility",
    invisalign: "Nearly invisible",
    braces: "Very visible",
  },
  {
    metric: "Average treatment time",
    invisalign: "12-18 months",
    braces: "18-24+ months",
  },
  {
    metric: "Food restrictions",
    invisalign: "None",
    braces: "30+ foods",
  },
  {
    metric: "Cleaning difficulty",
    invisalign: "Easy",
    braces: "70% harder",
  },
  {
    metric: "Comfort",
    invisalign: "Smooth plastic",
    braces: "Brackets irritate",
  },
  {
    metric: "Office visits",
    invisalign: "Every 6-8 weeks",
    braces: "Every 4 weeks",
  },
  {
    metric: "Emergency visits",
    invisalign: "Rare",
    braces: "Common",
  },
  {
    metric: "Stains/decalcification",
    invisalign: "None",
    braces: "50% of patients",
  },
];

export default function InvisalignComparisonSection() {
  return (
    <section className="bg-[#020918] px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[820px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-[28px] bg-[#C9A961]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C9A961]">The comparison</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[34px] font-light leading-[0.92] tracking-tighter text-[#EEF2F8] sm:text-[48px] md:text-[58px] lg:text-[65px]">
            Invisalign vs. <span className="font-light italic text-[#C9A961]">traditional braces.</span>
          </h2>

          <p className="mt-5 max-w-[740px] text-[15px] font-light leading-normal text-[#8E98AC] sm:text-[18px] md:text-[20px] lg:text-[19px]">
            Both straighten teeth. The experience is dramatically different. Here&apos;s the side-by-side
            for every metric that actually matters.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_84px_minmax(0,1fr)] lg:items-stretch">
          <article className="flex h-full flex-col rounded-[16px] border border-[#9E7A3A] bg-[linear-gradient(160deg,#0A1327_0%,#091224_100%)] px-5 py-6 sm:px-7">
            <header className="min-h-[108px] sm:min-h-[118px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A961]">Recommended</p>
              <h3 className="mt-3 font-fraunces text-[32px] font-light italic leading-none text-[#C9A961] sm:text-[42px] md:text-[49px] lg:text-[36px]">
                Invisalign
              </h3>
            </header>
            <div className="mt-5 border-t border-[#27324A]">
              {comparisonRows.map((row) => (
                <div
                  key={row.metric}
                  className="flex min-h-[52px] items-center justify-between gap-4 border-b border-[#27324A] py-3.5"
                >
                  <p className="min-w-0 flex-1 pr-3 text-[14px] leading-snug text-[#8F9AB0]">{row.metric}</p>
                  <p className="shrink-0 text-right font-fraunces text-[15px] font-light leading-none text-[#C9A961] sm:text-[20px] lg:text-[15px]">
                    {row.invisalign}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <div
            className="hidden shrink-0 flex-col items-center self-start pt-[calc(theme(spacing.6)+108px+theme(spacing.5)-29px)] sm:pt-[calc(theme(spacing.6)+118px+theme(spacing.5)-29px)] lg:flex"
            aria-hidden
          >
            <span className="inline-flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white font-fraunces text-[26px] italic text-[#0F1626]">
              vs.
            </span>
          </div>

          <article className="flex h-full flex-col rounded-[16px] border border-[#1A2742] bg-[linear-gradient(160deg,#0A1327_0%,#091224_100%)] px-5 py-6 sm:px-7">
            <header className="min-h-[108px] sm:min-h-[118px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7D8AA2]">Traditional</p>
              <h3 className="mt-3 font-fraunces text-[32px] font-light leading-none text-[#EEF2F8] sm:text-[42px] md:text-[49px] lg:text-[36px]">
                Metal Braces
              </h3>
            </header>
            <div className="mt-5 border-t border-[#27324A]">
              {comparisonRows.map((row) => (
                <div
                  key={row.metric}
                  className="flex min-h-[52px] items-center justify-between gap-4 border-b border-[#27324A] py-3.5"
                >
                  <p className="min-w-0 flex-1 pr-3 text-[14px] leading-snug text-[#8F9AB0]">{row.metric}</p>
                  <p className="shrink-0 text-right font-fraunces text-[15px] font-light leading-none text-[#EEF2F8] sm:text-[20px] lg:text-[15px]">
                    {row.braces}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

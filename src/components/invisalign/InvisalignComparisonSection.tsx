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
    <section className="bg-[#020918] px-4 py-14 sm:px-8 sm:py-16 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[820px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-[28px] bg-[#C9A961]" />
            <p className="text-[9px] uppercase tracking-[0.24em] text-[#C9A961]">The comparison</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[42px] leading-[0.92] tracking-tighter text-[#EEF2F8] sm:text-[58px] lg:text-[74px]">
            Invisalign vs. <span className="font-light italic text-[#C9A961]">traditional braces.</span>
          </h2>

          <p className="mt-5 max-w-[740px] text-[17px] leading-normal text-[#8E98AC] sm:text-[20px] lg:text-[22px]">
            Both straighten teeth. The experience is dramatically different. Here&apos;s the side-by-side
            for every metric that actually matters.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_84px_minmax(0,1fr)] lg:items-center">
          <article className="rounded-[16px] border border-[#9E7A3A] bg-[linear-gradient(160deg,#0A1327_0%,#091224_100%)] px-5 py-6 sm:px-7">
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#C9A961]">Recommended</p>
            <h3 className="mt-3 font-fraunces text-[42px] italic leading-none text-[#C9A961] sm:text-[49px] lg:text-[56px]">Invisalign</h3>
            <div className="mt-5 border-t border-[#27324A]">
              {comparisonRows.map((row) => (
                <div
                  key={row.metric}
                  className="grid grid-cols-[1.2fr_1fr] items-center border-b border-[#27324A] py-3.5"
                >
                  <p className="text-[14px] text-[#8F9AB0]">{row.metric}</p>
                  <p className="text-right font-fraunces text-[20px] leading-none text-[#C9A961] sm:text-[23px] lg:text-[27px]">{row.invisalign}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="hidden items-center justify-center lg:flex">
            <span className="inline-flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white font-fraunces text-[26px] text-[#0F1626]">
              vs.
            </span>
          </div>

          <article className="rounded-[16px] border border-[#1A2742] bg-[linear-gradient(160deg,#0A1327_0%,#091224_100%)] px-5 py-6 sm:px-7">
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#7D8AA2]">Traditional</p>
            <h3 className="mt-3 font-fraunces text-[42px] leading-none text-[#EEF2F8] sm:text-[49px] lg:text-[56px]">Metal Braces</h3>
            <div className="mt-5 border-t border-[#27324A]">
              {comparisonRows.map((row) => (
                <div
                  key={row.metric}
                  className="grid grid-cols-[1.2fr_1fr] items-center border-b border-[#27324A] py-3.5"
                >
                  <p className="text-[14px] text-[#8F9AB0]">{row.metric}</p>
                  <p className="text-right font-fraunces text-[20px] leading-none text-[#EEF2F8] sm:text-[23px] lg:text-[27px]">{row.braces}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

const comparisonRows = [
  {
    label: "Lifespan",
    implants: "20+ years (often lifetime)",
    bridges: "10-15 years",
    dentures: "5-10 years",
  },
  {
    label: "Prevents bone loss",
    implants: "✓ Yes",
    bridges: "✕ No",
    dentures: "✕ Accelerates it",
    bridgesNegative: true,
    denturesNegative: true,
  },
  {
    label: "Feels natural",
    implants: "✓ Yes",
    bridges: "Close",
    dentures: "✕ No",
    denturesNegative: true,
  },
  {
    label: "Success rate",
    implants: "95-98%",
    bridges: "85-90%",
    dentures: "N/A",
  },
  {
    label: "Alters neighboring teeth",
    implants: "✓ No",
    bridges: "✕ Yes (grinds 2 teeth)",
    dentures: "✓ No",
    bridgesNegative: true,
  },
  {
    label: "Eat what you want",
    implants: "✓ Yes",
    bridges: "Mostly",
    dentures: "✕ Limited",
    denturesNegative: true,
  },
  {
    label: "Daily maintenance",
    implants: "Normal brushing",
    bridges: "Normal brushing",
    dentures: "✕ Remove & soak",
    denturesNegative: true,
  },
  {
    label: "20-year total cost",
    implants: "$4,000 (once)",
    bridges: "$8,000-$12,000",
    dentures: "$15,000-$25,000",
  },
];

export default function ImplantsComparisonSection() {
  return (
    <section className="bg-[#F4F3EB] px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-24 lg:pb-24 lg:pt-14">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-2.5">
            <span className="text-[14px] text-[#C3A66A]">⛓</span>
            <p className="text-[9px] uppercase tracking-[0.24em] text-[#BDA670]">The Real Math</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[42px] leading-[0.92] tracking-tighter text-[#101624] sm:text-[58px] lg:text-[74px]">
            Implants vs. bridges <span className="font-light italic text-[#C9A961]">vs. dentures.</span>
          </h2>

          <p className="mt-5 max-w-[760px] text-[17px] leading-normal text-[#687286] sm:text-[20px] lg:text-[23px]">
            People often default to bridges or dentures because the upfront cost is lower. Here&apos;s what
            20 years actually looks like - the math usually favors implants.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-[14px] border border-[#DFDDD3] bg-[#F8F8F6]">
          <div className="grid min-w-[860px] grid-cols-[1.6fr_1fr_1fr_1fr] border-b border-[#E0DED4]">
            <div className="bg-[#F8F8F6]" />
            <div className="border-l border-[#DCCB9D] bg-[#C9A961] px-4 py-2">
              <p className="text-[8px] uppercase tracking-[0.22em] text-[#0F1624]">Best Option</p>
              <p className="mt-1 font-fraunces text-[27px] leading-none text-[#111827]">Implants</p>
            </div>
            <div className="border-l border-[#202D49] bg-[#020918] px-4 py-2">
              <p className="text-[8px] uppercase tracking-[0.22em] text-[#8D98AE]">Alternative</p>
              <p className="mt-1 font-fraunces text-[27px] leading-none text-[#EEF2F8]">Bridges</p>
            </div>
            <div className="border-l border-[#202D49] bg-[#020918] px-4 py-2">
              <p className="text-[8px] uppercase tracking-[0.22em] text-[#8D98AE]">Alternative</p>
              <p className="mt-1 font-fraunces text-[27px] leading-none text-[#EEF2F8]">Dentures</p>
            </div>
          </div>

          {comparisonRows.map((row) => (
            <div key={row.label} className="grid min-w-[860px] grid-cols-[1.6fr_1fr_1fr_1fr] border-t border-[#E0DED4]">
              <div className="px-4 py-4 text-[14px] font-semibold text-[#222A39]">{row.label}</div>
              <div className="border-l border-[#E0DED4] px-4 py-4 text-[14px] font-semibold text-[#B4873E]">{row.implants}</div>
              <div
                className={`border-l border-[#E0DED4] px-4 py-4 text-[14px] ${
                  row.bridgesNegative ? "font-semibold text-[#D17662]" : "text-[#354055]"
                }`}
              >
                {row.bridges}
              </div>
              <div
                className={`border-l border-[#E0DED4] px-4 py-4 text-[14px] ${
                  row.denturesNegative ? "font-semibold text-[#D17662]" : "text-[#354055]"
                }`}
              >
                {row.dentures}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

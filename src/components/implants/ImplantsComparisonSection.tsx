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
            <span className="text-[#5A6578] italic">§</span>
            <p className="font-jetbrains text-[11px] uppercase tracking-[0.24em] text-[#BDA670]">The Real Math</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[42px] font-light leading-[0.92] tracking-tighter text-[#0A0E1A] sm:text-[58px] lg:text-[62px]">
            Implants vs. bridges <span className="font-light font-fraunces italic text-[#B87333]">vs. dentures.</span>
          </h2>

          <p className="font-inter font-light mt-5 max-w-[760px] text-[20px] leading-normal text-[#5A6578]">
            People often default to bridges or dentures because the upfront cost is lower. Here&apos;s what
            20 years actually looks like - the math usually favors implants.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-[14px] border border-[#DFDDD3] bg-[#FAF8F3]">
          <div className="grid min-w-[860px] grid-cols-[1.6fr_1fr_1fr_1fr] border-b border-[#E0DED4]">
            <div className="bg-[#FAF8F3]" />
            <div className="grid grid-rows-[32px_1fr] border-l border-[#DCCB9D] bg-[#C9A961]">
              <div className="flex items-center justify-center border-b border-[#0F1624] bg-[#0F1624]">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#C9A961]">Best Option</p>
              </div>
              <div className="px-6 pt-1 pb-4">
                <p className="font-fraunces text-[17px] leading-none text-[#0A0E1A]">Implants</p>
              </div>
            </div>
            <div className="grid grid-rows-[32px_1fr] border-l border-[#202D49] bg-[#020918] px-4">
              <div className="flex items-end">
                <p className="pb-1 text-[8px] uppercase tracking-[0.22em] text-[#0A0E1A]">Alternative</p>
              </div>
              <div className="px-1">
                <p className="font-fraunces text-[17px] leading-none text-[#FFFFFF]">Bridges</p>
              </div>
            </div>
            <div className="grid grid-rows-[32px_1fr] border-l border-[#202D49] bg-[#020918] px-4">
              <div className="flex items-end">
                <p className="pb-1 text-[8px] uppercase tracking-[0.22em] text-[#0A0E1A]">Alternative</p>
              </div>
              <div className="px-1">
                <p className="font-fraunces text-[17px] leading-none text-[#FFFFFF]">Dentures</p>
              </div>
            </div>
          </div>

          {comparisonRows.map((row) => (
            <div key={row.label} className="grid min-w-[860px] grid-cols-[1.6fr_1fr_1fr_1fr] border-t border-[#E0DED4]">
              <div className="p-4 font-inter text-[14px] font-semibold text-[#0A0E1A] bg-[#FAF8F3]">{row.label}</div>
              <div className="border-l border-[#E0DED4] px-4 py-4 text-[14px] bg-[#FAF8F3] font-semibold text-[#B4873E]">{row.implants}</div>
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

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
  const getComparisonCellClass = (value: string, isNegative?: boolean) => {
    if (isNegative) return "font-semibold text-[#FF4444]";
    if (value.includes("✓ No")) return "font-semibold text-[#B87333]";
    return "text-[#1C2333]";
  };

  return (
    <section className="bg-[#FFFFFF] px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-24 lg:pb-24 lg:pt-14">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-2.5">
            <span className="text-[#5A6578] tracking-[2.2px] italic">§</span>
            <p className="font-jetbrains text-[11px] uppercase tracking-[2.2px] font-medium text-[#C9A961]">The Real Math</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[42px] font-light leading-[0.92] tracking-[-2.28px] text-[#0A0E1A] sm:text-[58px] lg:text-[52px]">
            Implants vs. bridges <span className="font-fraunces italic text-[#B87333]">vs. dentures.</span>
          </h2>

          <p className="font-inter font-light mt-5 max-w-[760px] text-[16px] leading-normal text-[#5A6578]">
            People often default to bridges or dentures because the upfront cost is lower. Here&apos;s what
            20 years actually looks like - the math usually favors implants.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-[14px] border border-[#E4E0D6] bg-[#ffffff]">
          <div className="grid min-w-[860px] grid-cols-[1.6fr_1fr_1fr_1fr] border-b border-[#E4E0D6]">
            <div className="bg-[#FAF8F3]" />
            <div className="grid grid-rows-[32px_1fr] border-l border-[#DCCB9D] bg-[#FAF8F3]">
              <div className="flex items-center justify-center bg-[#0A0E1A]">
                <p className=" font-jetbrains text-[9px] uppercase tracking-[1.8px] font-bold text-[#C9A961]">Best Option</p>
              </div>
              <div className="px-6 pt-1 pb-4">
                <p className="font-fraunces text-[17px] leading-none text-[#0A0E1A]">Implants</p>
              </div>
            </div>
            <div className="grid grid-rows-[32px_1fr] border-l border-[#FFFFFF1A] bg-[#0A0E1A] px-4">
              <div className="flex items-end">
                <p className="pb-1 text-[8px] uppercase tracking-[0.22em] text-[#0A0E1A]">Alternative</p>
              </div>
              <div className="px-1">
                <p className="font-fraunces text-[17px] leading-none text-[#FFFFFF]">Bridges</p>
              </div>
            </div>
            <div className="grid grid-rows-[32px_1fr] border-l border-[#FFFFFF1A] bg-[#0A0E1A] px-4">
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
              <div className="bg-[#FAF8F3] p-4 font-inter text-[14px] font-semibold text-[#0A0E1A]">{row.label}</div>
              <div className="border-l border-[#E4E0D6] bg-[#C9A9610F] px-4 py-4 text-[14px] font-semibold text-[#B87333]">{row.implants}</div>
              <div
                className={`border-l border-[#E4E0D6] px-4 py-4 text-[14px] ${
                  getComparisonCellClass(row.bridges, row.bridgesNegative)
                }`}
              >
                {row.bridges}
              </div>
              <div
                className={`border-l border-[#E4E0D6] px-4 py-4 text-[14px] ${
                  getComparisonCellClass(row.dentures, row.denturesNegative)
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

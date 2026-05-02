type ComparisonRow = {
  label: string;
  dentist: string;
  er: string;
};

const comparisonRows: ComparisonRow[] = [
  { label: "Can actually treat the tooth", dentist: "✓ Yes", er: "✕ No" },
  { label: "Average cost", dentist: "$150-$1,500", er: "$1,500-$5,000+" },
  { label: "Average wait time", dentist: "30 min-2 hours", er: "4-8+ hours" },
  { label: "Resolves the problem", dentist: "✓ Yes", er: "Pain meds only" },
  { label: "Can prescribe antibiotics", dentist: "✓ Yes", er: "✓ Yes" },
  { label: "Can do X-rays & diagnosis", dentist: "✓ Full dental imaging", er: "Limited" },
  { label: "Follow-up care", dentist: "✓ Same office, same dentist", er: "Referral required" },
];

export default function EmergencyAvoidErSection() {
  return (
    <section className="bg-[#F6F7F5] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px]">
        <div className="max-w-[980px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#20B6B7]" />
            <p className="text-[12px] uppercase tracking-[0.24em] text-[#22B3B4]">Avoid the ER</p>
          </div>
          <h2 className="mt-4 font-fraunces text-[44px] leading-[0.95] tracking-[-0.03em] text-[#0F182B] sm:text-[60px] lg:text-[78px]">
            Don&apos;t go to the hospital <span className="font-light italic text-[#EC4252]">for a tooth.</span>
          </h2>
          <p className="mt-5 max-w-[820px] text-[17px] leading-[1.6] text-[#687281] sm:text-[22px] lg:text-[31px]">
            2 million Americans end up in the ER every year for dental emergencies. It&apos;s almost always the
            wrong choice. Here&apos;s why.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-[18px] border border-[#E8E8E5] bg-white">
          <div className="grid min-w-[900px] grid-cols-[1.5fr_0.75fr_0.75fr]">
            <div className="border-b border-[#ECEDE9] bg-white px-4 py-3 sm:px-6" />

            <div className="border-b border-[#D4ECEB] bg-[#16C2C4] px-4 py-2 sm:px-6">
              <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#04292B]">
                Best Choice
              </p>
              <p className="mt-1 font-fraunces text-[34px] text-[#062428]">Emergency Dentist</p>
            </div>

            <div className="border-b border-[#1A263C] bg-[#050D20] px-4 py-2 sm:px-6">
              <p className="mt-[16px] font-fraunces text-[34px] text-white">Hospital ER</p>
            </div>
          </div>

          {comparisonRows.map((row) => (
            <div key={row.label} className="grid min-w-[900px] grid-cols-[1.5fr_0.75fr_0.75fr]">
              <div className="border-b border-[#ECEDE9] px-4 py-4 sm:px-6">
                <p className="text-[29px] font-semibold text-[#0E182B]">{row.label}</p>
              </div>
              <div className="border-b border-[#DDEEEE] bg-[#F1FCFC] px-4 py-4 sm:px-6">
                <p className="text-[31px] font-semibold text-[#039EA2]">{row.dentist}</p>
              </div>
              <div className="border-b border-[#ECEDE9] px-4 py-4 sm:px-6">
                <p className={`text-[31px] font-semibold ${row.er === "✕ No" ? "text-[#EC4252]" : "text-[#1B2538]"}`}>
                  {row.er}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

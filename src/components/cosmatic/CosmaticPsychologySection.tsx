const studyStats = [
  {
    value: "45",
    suffix: "%",
    description: "more likely to be perceived as employable.",
  },
  {
    value: "58",
    suffix: "%",
    description: "more likely to be seen as successful.",
  },
  {
    value: "99.7",
    suffix: "%",
    description: "say a smile is an important social asset.",
  },
];

export default function CosmaticPsychologySection() {
  return (
    <section className="bg-[#FFFFFF] px-4 py-14 sm:px-8 sm:py-16 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="mx-auto max-w-[860px]">
          <div className="flex items-center gap-3">
            <span className="h-[0.2px] w-[28px] bg-[#C9A961]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A961]">The psychology of a smile</p>
          </div>

          <h2 className="mt-4 font-fraunces font-light text-[30px] leading-[0.97] tracking-[-0.033em] text-[#0A0E1A] sm:text-[40px] md:text-[46px] lg:text-[52px]">
            A 2019 AACD study <span className="font-light italic text-[#C9A961]">measured</span> what most of us
            have always felt.
          </h2>

          <p className="mt-6 max-w-[540px] text-[15px] leading-normal font-light text-[#5A6578] sm:text-[16px] lg:text-[16px]">
            People with straight, white teeth aren&apos;t just perceived as more attractive - they&apos;re judged
            to be more successful, more intelligent, and more hireable. Fair or not, your smile is the
            single most-judged feature on your face.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[860px] border-y border-[#E4E0D6]">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {studyStats.map((item, idx) => (
              <div
                key={item.value}
                className={`px-4 py-8 text-center sm:px-6 sm:py-10 md:px-8 md:py-11 ${idx < studyStats.length - 1 ? "border-b border-[#E4E0D6] sm:border-b-0 sm:border-r" : ""}`}
              >
                <p className="font-fraunces font-light text-[48px] leading-[0.9] tracking-[-0.067em] text-[#0A0E1A] sm:text-[58px] md:text-[72px] lg:text-[90px]">
                  {item.value}
                  <span className="ml-1 align-top text-[22px] font-light text-[#C9A961] sm:text-[26px] md:text-[28px] lg:text-[32px]">
                    {item.suffix}
                  </span>
                </p>
                <p className="mx-auto mt-4 max-w-[230px] font-fraunces text-[15px] italic leading-[1.2] text-[#1C2333] sm:text-[17px] md:text-[18px] lg:text-[16px]">
                  {item.description}
                </p>
                <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.15em] text-[#A2A7B2]">AACD Study, 2019</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-[540px] px-1 text-center font-fraunces text-[20px] italic leading-[1.24] font-light tracking-tight text-[#1D2230] sm:mt-12 sm:text-[24px] md:text-[26px] lg:text-[22px]">
          The cosmetic dentistry market has grown <span>400% in the last decade. </span> But the quality hasn&apos;t kept
          up. Rushed veneers, over-bleached teeth, &quot;Hollywood smile&quot; work that ages poorly - it&apos;s
          everywhere, especially in LA. Done well, cosmetic work looks effortless. Done poorly, it&apos;s
          expensive, obvious, and often irreversible.
        </p>
      </div>
    </section>
  );
}

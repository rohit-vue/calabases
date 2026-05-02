const processSteps = [
  {
    numeral: "I",
    title: "Consultation",
    description:
      "We listen first. Understand what you want, what you don't like about your current smile, and what your lifestyle demands.",
    timing: "60 Minutes",
  },
  {
    numeral: "II",
    title: "Digital Preview",
    description:
      "We create a 3D mockup of your proposed smile. You approve the shape, shade, and proportions before anything becomes permanent.",
    timing: "Same Visit",
  },
  {
    numeral: "III",
    title: "Crafting",
    description:
      "Your case is sent to our master ceramist lab. For veneers and cosmetic crowns, each piece is hand-layered for natural translucency.",
    timing: "2-3 Weeks",
  },
  {
    numeral: "IV",
    title: "Reveal",
    description:
      "Final fitting and placement. You walk out with the smile you approved - no surprises, no compromises, no regrets.",
    timing: "Final Visit",
  },
];

export default function CosmaticProcessSection() {
  return (
    <section className="bg-[#FAF8F3] px-4 py-14 sm:px-8 sm:py-16 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-3">
            <span className="h-[0.2px] w-[28px] bg-[#C9A961]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C9A961]">The Process</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[44px] font-light leading-[0.95] tracking-[-0.03em] text-[#0A0E1A] sm:text-[58px] lg:text-[52px]">
            Your smile, <span className="italic text-[#C9A961]">designed.</span>
          </h2>

          <p className="mt-5 max-w-[680px] text-[18px] leading-[1.45] text-[#5A6578] font-light sm:text-[22px] lg:text-[17px]">
            Cosmetic dentistry shouldn&apos;t be a guessing game. Our 4-step digital smile design process lets
            you see and approve your final result before we ever touch a tooth.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.numeral}
              className="rounded-[14px] border border-[#E4E0D6] bg-[#FFFFFF] px-5 py-6 sm:px-6 sm:py-7"
            >
              <p className="font-fraunces text-[44px] italic leading-none font-light tracking-[-0.056em] text-[#C9A961] sm:text-[52px] lg:text-[64px]">{step.numeral}</p>
              <h3 className="mt-4 font-fraunces text-[28px] leading-[1.05] text-[#0A0E1A] tracking-[-0.007em] sm:text-[31px] lg:text-[22px]">{step.title}</h3>
              <p className="mt-4 min-h-[96px] text-[14px] leading-[1.62] text-[#5A6578] lg:min-h-[114px]">{step.description}</p>
              <div className="mt-6 border-t border-[#E4E0D6] pt-4">
                <p className="text-[10px] uppercase font-semibold tracking-[0.22em] text-[#C9A961]">{step.timing}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

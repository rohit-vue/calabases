type ProcessStep = {
  numeral: string;
  title: string;
  duration: string;
  description: string;
};

const processSteps: ProcessStep[] = [
  {
    numeral: "I",
    title: "Diagnosis & Planning",
    duration: "60-minute visit",
    description:
      "Comprehensive exam, digital X-rays, and 3D imaging to evaluate the tooth, surrounding bone, and bite alignment. We walk through every option with you, including cost and timeline.",
  },
  {
    numeral: "II",
    title: "Tooth Preparation",
    duration: "45-90 minutes",
    description:
      "Under local anesthesia, we shape the tooth precisely to receive the restoration. For crowns, we remove only what's necessary - typically 1.5-2mm of enamel. Minimally invasive, maximally preservation-focused.",
  },
  {
    numeral: "III",
    title: "Digital Impression",
    duration: "5-10 minutes",
    description:
      "No gooey trays. A digital scanner captures your tooth in 3D with sub-millimeter precision. The scan is instantly sent to our master ceramist lab - or, for same-day cases, directly to our in-office CEREC milling machine.",
  },
  {
    numeral: "IV",
    title: "Crafting",
    duration: "Same-day or 2 weeks",
    description:
      "Your restoration is hand-crafted by a master ceramist for maximum aesthetic quality, or milled in-office same-day using CEREC. While you wait (for multi-visit cases), a temporary crown protects the prepared tooth.",
  },
  {
    numeral: "V",
    title: "Final Fitting",
    duration: "45-minute visit",
    description:
      "The restoration is checked for fit, color, and bite alignment. If anything isn't perfect, we adjust or remake it - we never compromise on fit. Once approved, we cement permanently.",
  },
  {
    numeral: "VI",
    title: "Follow-Up & Warranty",
    duration: "At your next cleaning",
    description:
      "Every restoration comes with a 5-year craftsmanship warranty. We check the fit and integrity at every 6-month cleaning. If anything goes wrong during the warranty period, we repair or replace at no additional cost.",
  },
];

export default function RestorativeProcessSection() {
  return (
    <section className="bg-[#EFE7D3] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px]">
        <p className="text-center font-fraunces text-[11px] uppercase tracking-[0.19em] text-[#B87333] lg:text-left">§ The Process</p>

        <h2 className="mt-3 text-center font-fraunces text-[36px] font-light leading-[0.97] tracking-[-0.035em] text-[#0A0E1A] sm:mt-4 sm:text-[48px] md:text-[58px] lg:text-left lg:text-[64px]">
          How a restoration is <span className="italic text-[#B87333]">made.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-[700px] text-center text-[16px] font-light leading-[1.58] text-[#5A6578] sm:mt-6 sm:text-[20px] md:text-[21px] lg:mx-0 lg:mt-6 lg:text-left lg:text-[17px] lg:leading-[1.62]">
          The difference between a great restoration and a rushed one is in the process. Here&apos;s every
          step we take, from your first visit to final placement.
        </p>

        <div className="relative mt-8 sm:mt-10">
          <div className="absolute bottom-4 left-[30px] top-4 hidden w-px bg-[#D6B58B] md:left-[36px] md:block" />

          <div className="space-y-4 sm:space-y-6">
            {processSteps.map((step) => (
              <article key={step.numeral} className="grid items-start gap-3 sm:gap-4 md:grid-cols-[84px_1fr] md:gap-5">
                <div className="relative z-10 flex justify-center md:justify-center">
                  <div className="inline-flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 border-[#B87333] bg-[#F7F2E7] font-fraunces text-[20px] italic text-[#B87333] sm:h-[64px] sm:w-[64px] sm:text-[22px] md:h-[70px] md:w-[70px] md:text-[24px]">
                    {step.numeral}
                  </div>
                </div>

                <div className="flex min-h-0 flex-col justify-center rounded-[16px] border border-[#E4DDC8] bg-[#FFFFFF] px-4 pb-3.5 pt-3.5 sm:min-h-[170px] sm:px-6 sm:pb-5 sm:pt-4 lg:min-h-[170px]">
                  <div className="flex flex-col gap-2 border-b border-[#E4DDC8] pb-2.5 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-3 sm:pb-3">
                    <h3 className="font-fraunces text-[22px] leading-tight tracking-[-0.0064em] text-[#0A0E1A] sm:text-[27px] md:text-[30px] lg:text-[24px]">
                      {step.title}
                    </h3>
                    <span className="inline-flex h-[26px] w-fit items-center rounded-[100px] bg-[#F7F2E7] px-2.5 font-fraunces text-[12px] italic text-[#8B5A2B] sm:px-3 sm:text-[13px]">
                      {step.duration}
                    </span>
                  </div>

                  <p className="mt-2.5 text-[15px] leading-[1.62] text-[#5A6578] sm:mt-3 sm:text-[16px] md:text-[17px] lg:text-[15px] lg:leading-[1.66]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

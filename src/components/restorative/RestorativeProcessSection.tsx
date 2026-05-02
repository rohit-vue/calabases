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
    <section className="bg-[#EFE7D3] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px]">
        <p className="font-fraunces text-[11px] uppercase tracking-[0.19em] text-[#B87333]">§ The Process</p>

        <h2 className="mt-4 font-fraunces text-[44px] font-light leading-[0.97] tracking-[-0.035em] text-[#0A0E1A] sm:text-[58px] lg:text-[64px]">
          How a restoration is <span className="italic text-[#B87333]">made.</span>
        </h2>

        <p className="mt-6 max-w-[700px] text-[18px] leading-[1.62] text-[#5A6578] font-light sm:text-[22px] lg:text-[17px]">
          The difference between a great restoration and a rushed one is in the process. Here&apos;s every
          step we take, from your first visit to final placement.
        </p>

        <div className="relative mt-10">
          <div className="absolute bottom-4 left-[36px] top-4 hidden w-px bg-[#D6B58B] md:block" />

          <div className="space-y-6">
            {processSteps.map((step) => (
              <article key={step.numeral} className="grid items-start gap-4 md:grid-cols-[84px_1fr] md:gap-5">
                <div className="relative z-10 flex justify-center">
                  <div className="inline-flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-[#B87333] bg-[#F7F2E7] font-fraunces text-[24px] italic text-[#B87333]">
                    {step.numeral}
                  </div>
                </div>

                <div className="rounded-[16px] border border-[#E4DDC8] bg-[#FFFFFF] px-5 pb-4 pt-4 sm:px-6 sm:pb-5 min-h-[170px] flex flex-col justify-center">
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#E4DDC8] pb-3">
                    <h3 className="font-fraunces text-[27px] leading-tight text-[#0A0E1A] tracking-[-0.0064em] sm:text-[32px] lg:text-[24px]">{step.title}</h3>
                    <span className="inline-flex h-[26px] items-center rounded-[100px] bg-[#F7F2E7] px-3 font-fraunces text-[13px] italic text-[#8B5A2B]">
                      {step.duration}
                    </span>
                  </div>

                  <p className="mt-3 text-[16px] leading-[1.66] text-[#5A6578] sm:text-[17px] lg:text-[15px]">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

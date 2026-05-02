type RecoveryStep = {
  marker: string;
  title: string;
  description: string;
  filledDots: number;
};

const recoverySteps: RecoveryStep[] = [
  {
    marker: "Hour 1",
    title: "Immediately after",
    description:
      "You'll wake up groggy if you had IV sedation. Gauze is in place to control bleeding. A family member drives you home. First dose of ibuprofen starts here. No driving for 24 hours.",
    filledDots: 2,
  },
  {
    marker: "Day 1",
    title: "First 24 hours",
    description:
      "Mild to moderate discomfort managed with ibuprofen. Swelling peaks. Stay on soft, cool foods (yogurt, smoothies, mashed potatoes). Ice packs on-off every 20 minutes for the first 12 hours.",
    filledDots: 2,
  },
  {
    marker: "Day 2-3",
    title: "Peak swelling + ease-back",
    description:
      "Swelling typically peaks around day 2, then starts resolving. Switch to warm compresses. Introduce soft-texture foods (eggs, soft pasta). Most patients return to desk work or school by day 3.",
    filledDots: 2,
  },
  {
    marker: "Day 4-5",
    title: "Back to normal",
    description:
      "Most discomfort is gone. Swelling has subsided. You can typically eat anything soft, and many patients start reintroducing normal foods. Avoid vigorous exercise and anything with seeds (popcorn, berries) for another week.",
    filledDots: 1,
  },
  {
    marker: "Day 7-10",
    title: "Follow-up appointment",
    description:
      "Quick 15-minute check-in at our office. We ensure healing is on track, remove any sutures if needed, and clear you for full activity. Most patients feel completely back to normal by this point.",
    filledDots: 0,
  },
];

export default function OralSurgeryRecoverySection() {
  return (
    <section className="bg-[#F2F3F0] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px]">
        <div className="max-w-[900px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#8BA09D]" />
            <p className="text-[12px] uppercase tracking-[0.24em] text-[#708180]">What to Expect</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[44px] leading-[0.96] tracking-[-0.03em] text-[#121C2E] sm:text-[58px] lg:text-[76px]">
            Recovery, <span className="font-light italic text-[#6F8682]">hour by hour.</span>
          </h2>

          <p className="mt-5 max-w-[860px] text-[17px] leading-[1.62] text-[#667181] sm:text-[22px] lg:text-[30px]">
            Knowing what comes next makes everything easier. Here&apos;s a realistic recovery timeline for a
            typical wisdom teeth extraction - the most involved routine procedure we do.
          </p>
        </div>

        <div className="relative mt-10">
          <div className="absolute bottom-8 left-[48px] top-8 hidden w-px bg-[#C9DEDA] md:block" />

          <div className="space-y-4">
            {recoverySteps.map((step) => (
              <article key={step.marker} className="grid items-start gap-4 md:grid-cols-[96px_1fr] md:gap-5">
                <div className="relative z-10 flex justify-center pt-3">
                  <div className="flex h-[52px] w-[52px] flex-col items-center justify-center rounded-full border border-[#95B2AC] bg-[#F2F3F0] font-fraunces text-[#6C8784]">
                    <span className="text-[10px] uppercase leading-none tracking-[0.12em]">
                      {step.marker.split(" ")[0]}
                    </span>
                    <span className="mt-1 text-[12px] leading-none">{step.marker.split(" ").slice(1).join(" ")}</span>
                  </div>
                </div>

                <div className="rounded-[14px] border border-[#E3E5E2] bg-[#F8F9F7] px-5 pb-4 pt-4 sm:px-6 sm:pb-5">
                  <div className="flex items-start justify-between gap-4 border-b border-[#E2E4E1] pb-3">
                    <h3 className="font-fraunces text-[30px] leading-tight text-[#1B2536] sm:text-[36px] lg:text-[43px]">{step.title}</h3>
                    <div className="mt-1 flex items-center gap-1.5">
                      {[0, 1, 2, 3, 4].map((idx) => (
                        <span
                          key={idx}
                          className={`h-2.5 w-2.5 rounded-full ${
                            idx < step.filledDots ? "bg-[#93ADA7]" : "bg-[#E2DCCF]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-[16px] leading-[1.7] text-[#667181] sm:text-[18px] lg:text-[20px]">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

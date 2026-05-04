type RecoveryStep = {
  /** Two lines inside the 56×56 circle (matches Figma e.g. HOUR / 1). */
  markerTop: string;
  markerBottom: string;
  title: string;
  description: string;
};

const recoverySteps: RecoveryStep[] = [
  {
    markerTop: "HOUR",
    markerBottom: "1",
    title: "Immediately after",
    description:
      "You'll wake up groggy if you had IV sedation. Gauze is in place to control bleeding. A family member drives you home. First dose of ibuprofen starts here. No driving for 24 hours.",
  },
  {
    markerTop: "DAY",
    markerBottom: "1",
    title: "First 24 hours",
    description:
      "Mild to moderate discomfort managed with ibuprofen. Swelling peaks. Stay on soft, cool foods (yogurt, smoothies, mashed potatoes). Ice packs on-off every 20 minutes for the first 12 hours.",
  },
  {
    markerTop: "DAY",
    markerBottom: "2-3",
    title: "Peak swelling + ease-back",
    description:
      "Swelling typically peaks around day 2, then starts resolving. Switch to warm compresses. Introduce soft-texture foods (eggs, soft pasta). Most patients return to desk work or school by day 3.",
  },
  {
    markerTop: "DAY",
    markerBottom: "4-5",
    title: "Back to normal",
    description:
      "Most discomfort is gone. Swelling has subsided. You can typically eat anything soft, and many patients start reintroducing normal foods. Avoid vigorous exercise and anything with seeds (popcorn, berries) for another week.",
  },
  {
    markerTop: "DAY",
    markerBottom: "7-10",
    title: "Follow-up appointment",
    description:
      "Quick 15-minute check-in at our office. We ensure healing is on track, remove any sutures if needed, and clear you for full activity. Most patients feel completely back to normal by this point.",
  },
];

/** Filled dots from the left per card (1:1 with `recoverySteps` order) — matches design. */
const RECOVERY_CARD_FILLED_DOTS = [2, 3, 2, 1, 0] as const;

export default function OralSurgeryRecoverySection() {
  return (
    <section className="bg-[#F7FAF9] px-4 py-14 sm:px-10 sm:py-20 lg:py-[128px]">
      <div className="mx-auto w-full max-w-[1216px]">
        {/* Intro — Figma x≈352 relative to 1216 canvas */}
        <div className="max-w-[693px]">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-6 shrink-0 bg-[#8FA99F]" />
            <p className="text-[11px] font-semibold uppercase leading-[19.2px] tracking-[3px] text-[#8FA99F]">
              What to Expect
            </p>
          </div>

          <h2 className="mt-5 font-fraunces text-[32px] font-light leading-[1.08] tracking-[-1.6px] text-[#0A0E1A] sm:text-[48px] md:text-[56px] lg:text-[56px] lg:leading-[1.02] lg:tracking-[-2.16px]">
            Recovery,{" "}
            <span className="italic leading-[inherit] text-[#5E7267]">hour by hour.</span>
          </h2>

          <p className="mt-6 text-[15px] font-normal leading-[26px] text-[#5A6578] sm:text-[16px] sm:leading-[27px] lg:text-[17px] lg:leading-[28.9px]">
            Knowing what comes next makes everything easier. Here&apos;s a realistic recovery timeline for a typical
            wisdom teeth extraction — the most involved routine procedure we do.
          </p>
        </div>

        {/* Timeline + cards — continuous sage line through center of 56px markers */}
        <div className="relative mt-10 sm:mt-12 lg:mx-[50px] lg:mt-[108px]">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-[27px] top-0 z-0 w-[2px] bg-[linear-gradient(180deg,#8FA99F_0%,#E6EEEA_100%)]"
          />

          <div className="flex flex-col gap-6 sm:gap-8">
            {recoverySteps.map((step, stepIndex) => (
              <article
                key={`${step.markerTop}-${step.markerBottom}`}
                className="grid grid-cols-[56px_minmax(0,1fr)] items-start gap-x-4 gap-y-4 sm:gap-x-8 sm:gap-y-6 md:gap-x-8"
              >
                <div className="relative z-10 flex justify-start">
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full border-2 border-[#8FA99F] bg-white text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                    <span className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.14em] text-[#5E7267]">
                      {step.markerTop}
                    </span>
                    <span className="mt-1 font-sans text-[12px] font-semibold italic leading-none tracking-[-0.02em] text-[#5E7267]">
                      {step.markerBottom}
                    </span>
                  </div>
                </div>

                <div className="min-w-0 rounded-[16px] border border-[#E4E0D6] bg-white px-5 pb-6 pt-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:px-7 sm:pb-7 sm:pt-7 lg:px-[33px] lg:pb-[29px] lg:pt-[29px]">
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#E4E0D6] pb-[14px]">
                    <h3 className="font-fraunces text-[19px] font-normal leading-7 tracking-[-0.02em] text-[#0A0E1A] sm:text-[21px] lg:text-[22px]">
                      {step.title}
                    </h3>
                    <div className="flex shrink-0 items-center gap-[3px] pt-0.5">
                      {[0, 1, 2, 3, 4].map((dotIdx) => {
                        const filled = dotIdx < (RECOVERY_CARD_FILLED_DOTS[stepIndex] ?? 0);
                        return (
                          <span
                            key={dotIdx}
                            className={`size-2 rounded-full ${
                              filled ? "bg-[#8FA99F]" : "bg-[#E4E0D6]"
                            }`}
                            aria-hidden
                          />
                        );
                      })}
                    </div>
                  </div>
                  <p className="mt-[14px] text-[14px] font-normal leading-[24px] text-[#5A6578] sm:text-[15px] sm:leading-[26px] lg:leading-[28.9px]">
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
const phases = [
  {
    number: "01",
    title: "iTero Digital Scan",
    description: "A precise 3D map of your teeth captured in 5 minutes. No impression, no goo, no gag reflex.",
    timing: "5 min",
  },
  {
    number: "02",
    title: "Treatment Preview",
    description: "See your exact final smile on screen - before committing to anything. Adjust if needed.",
    timing: "Same visit",
  },
  {
    number: "03",
    title: "Custom Aligners",
    description: "Thin manufactured aligners arrive at our office - typically 20-40 trays depending on your case.",
    timing: "2-3 weeks",
  },
  {
    number: "04",
    title: "Progress Checkups",
    description: "Brief visits every 6-8 weeks to track progress and hand off the next set of trays.",
    timing: "Every 6-8 wks",
  },
  {
    number: "05",
    title: "Retention",
    description: "After active treatment, custom retainers with a night lock in your results for life.",
    timing: "Permanent",
  },
];

export default function InvisalignPhasesSection() {
  return (
    <section className="bg-[#F0F4F7] px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-9 md:px-8 md:pb-16 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-[28px] bg-[#D9CCAD]" />
            <p className="text-[11px] uppercase font-semibold tracking-[0.24em] text-[#C9A961]">How it works</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[34px] font-light leading-[0.92] tracking-tighter text-[#0A0E1A] sm:text-[48px] md:text-[58px] lg:text-[68px]">
            Five phases. One <span className="font-light italic text-[#B87333]">straight smile.</span>
          </h2>

          <p className="mt-5 max-w-[780px] text-[15px] font-light leading-normal text-[#687286] sm:text-[18px] md:text-[20px] lg:text-[19px]">
            Invisalign uses a series of clear, custom-molded plastic aligners to shift your teeth 0.2-0.3mm
            per tray. You wear each for 1-2 weeks, 22 hours per day. No metal. No wires. No monthly adjustments.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {phases.map((phase, idx) => (
            <article
              key={phase.number}
              className="relative rounded-[14px] border border-[#E3E0D7] bg-[#F8F8F6] px-5 py-6 sm:px-6"
            >
              {idx < phases.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute right-[-8px] top-1/2 hidden h-px w-[16px] bg-[#E4E1D7] lg:block"
                />
              ) : null}

              <p className="font-fraunces text-[36px] font-light italic leading-none text-[#C9A961] sm:text-[42px] md:text-[48px] lg:text-[54px]">{phase.number}</p>
              <h3 className="mt-3 font-fraunces text-[22px] leading-[0.98] text-[#0A0E1A] sm:text-[25px] md:text-[28px] lg:text-[21px]">{phase.title}</h3>
              <p className="mt-3 min-h-[88px] flex-1 text-[14px] leading-[1.55] text-[#667081]">{phase.description}</p>
              <div className="mt-4  pt-3">
                <span className="inline-flex items-center rounded-[7px] bg-[#F0EDE4] px-2.5 py-1.5 text-[10px] font-bold uppercase leading-none tracking-[0.06em] text-[#C9A961]">
                  {phase.timing}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

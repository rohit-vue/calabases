const phases = [
  {
    number: "01",
    title: "CBCT Imaging",
    description:
      "3D scan maps bone density, nerve location, and sinus position with sub-millimeter precision.",
    timing: "45 min visit",
  },
  {
    number: "02",
    title: "Placement",
    description:
      "45-90 minute surgical procedure under local anesthesia or IV sedation. Minimally invasive.",
    timing: "Day of surgery",
  },
  {
    number: "03",
    title: "Osseointegration",
    description:
      "The bone fuses to the titanium post. You wear a natural-looking temporary tooth during healing.",
    timing: "3-4 months",
  },
  {
    number: "04",
    title: "Crown Placement",
    description:
      "Custom-crafted porcelain crown attached to the implant. Matches your natural teeth exactly.",
    timing: "Final visit",
  },
];

export default function ImplantsPhasesSection() {
  return (
    <section className="bg-[#F4F3EB] px-4 pb-16 pt-8 sm:px-8 sm:pb-18 sm:pt-10 lg:px-24 lg:pb-20 lg:pt-12">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[780px]">
          <div className="flex items-center gap-2.5">
            <span className="text-[14px] text-[#C3A66A]">⛓</span>
            <p className="text-[9px] uppercase tracking-[0.24em] text-[#BDA670]">How it Works</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[42px] leading-[0.92] tracking-tighter text-[#101624] sm:text-[58px] lg:text-[76px]">
            Four phases. One <span className="font-light italic text-[#C9A961]">permanent tooth.</span>
          </h2>

          <p className="mt-5 max-w-[760px] text-[17px] leading-normal text-[#687286] sm:text-[21px] lg:text-[24px]">
            A dental implant is a titanium post - 3-5mm wide, 10-15mm long - surgically placed into your
            jawbone. Over 3-6 months, the bone fuses to the implant in a process called osseointegration.
            The implant literally becomes part of your skeleton.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {phases.map((phase, idx) => (
            <article key={phase.number} className="relative">
              {idx < phases.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute right-[-14px] top-[28px] hidden h-px w-[26px] bg-[#E0DDCF] lg:block"
                />
              ) : null}
              <div className="mx-auto flex h-[66px] w-[66px] items-center justify-center rounded-full border border-[#CFBD8E] font-fraunces text-[38px] leading-none text-[#171E2D]">
                {phase.number}
              </div>
              <h3 className="mt-5 text-center font-fraunces text-[30px] leading-[0.98] text-[#141B2A] sm:text-[35px] lg:text-[40px]">{phase.title}</h3>
              <p className="mx-auto mt-3 max-w-[240px] text-center text-[15px] leading-[1.6] text-[#667081]">
                {phase.description}
              </p>
              <div className="mt-4 flex justify-center">
                <span className="rounded-full bg-[#EEE9DB] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#BDA670]">
                  {phase.timing}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[12px] border border-[#E4E1D7] bg-[#F8F8F6] px-5 py-4 sm:px-6">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#EFE7D2] text-[12px] text-[#B99D66]">
              ⏱
            </span>
            <p className="font-fraunces text-[18px] italic leading-[1.4] text-[#2A3240] sm:text-[20px] lg:text-[22px]">
              Total treatment time: 4-7 months from start to finish. Most of that is healing - active
              dental work is typically just 2-3 appointments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

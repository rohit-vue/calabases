const phases = [
  {
    number: "01",
    title: "CBCT Imaging",
    description:
      "3D scan maps bone density, nerve location, and sinus position with sub-millimeter precision.",
    timing: "60 min visit",
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
    timing: "3-6 months",
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
    <section className="bg-[#FAF8F3] px-4 pb-16 pt-8 sm:px-8 sm:pb-18 sm:pt-10 lg:px-24 lg:pb-20 lg:pt-12">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[780px]">
          <div className="flex items-center gap-2.5">
            <span className="text-[14px] text-[#5A6578] italic">§</span>
            <p className="font-jetbrains text-[11px] font-medium uppercase tracking-[2.2px] text-[#C9A961]">How it Works</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[36px] font-light leading-[0.95] tracking-[-1.5px] text-[#0A0E1A] sm:text-[44px] md:text-[48px] lg:text-[52px] lg:leading-[0.92] lg:tracking-[-2.28px]">
            Four phases. One <span className="font-light italic text-[#B87333]">permanent tooth.</span>
          </h2>

          <p className="font-inter mt-5 max-w-[600px] text-[16px] leading-[30.4px] text-[#5A6578] font-light">
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
              <div className="mx-auto flex h-[74px] w-[74px] items-center justify-center  rounded-[50px] border border-[#C9A961] bg-[#FFFFFF] font-fraunces text-[26px] leading-none text-[#0A0E1A]">
                {phase.number}
              </div>
              <h3 className="mx-auto mt-5 max-w-[210px] text-center font-fraunces text-[22px] tracking-[-0.22px] leading-[0.96] text-[#0A0E1A]">
                {phase.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[250px] text-center text-[14px] leading-[1.6] text-[#5A6578]">
                {phase.description}
              </p>
              <div className="mt-4 flex justify-center">
                <span className="rounded-full bg-[#FFFFFF] font-bold px-3 py-1 text-[10px] uppercase tracking-[1px] text-[#B87333] border border-[#E4E0D6]">
                  {phase.timing}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[12px] border border-[#E4E0D6] bg-[#FFFFFF] px-5 py-4 sm:px-6">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#C9A9615C] text-[12px] text-[#0A0E1A]">
              ⏱
            </span>
            <p className="font-fraunces text-[17px] italic leading-[1.4] text-[#1C2333]">
              Total treatment time: 4-7 months from start to finish. Most of that is healing - active
              dental work is typically just 2-3 appointments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

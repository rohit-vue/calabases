const timeline = [
  {
    year: "Year 1",
    title: "Bone begins to disappear.",
    description:
      "Within 12 months, you lose 25% of the bone width where your tooth used to be. Your jaw literally reshapes itself because the bone no longer has a root to support.",
  },
  {
    year: "Year 3",
    title: "Teeth start drifting.",
    description:
      "Adjacent teeth tilt into the empty space. Opposing teeth grow longer. Your bite shifts. What was one gap becomes a cascade of misalignment.",
  },
  {
    year: "Year 10",
    title: "Implant placement gets harder.",
    description:
      "By year 10, bone loss is severe enough that implant placement requires bone grafting - adding 6-12 months and thousands of dollars to the procedure.",
  },
];

export default function ImplantsProblemSection() {
  return (
    <section className="bg-[#F4F3EB] px-4 pb-14 pt-6 sm:px-8 sm:pb-16 sm:pt-8 lg:px-24 lg:pb-20 lg:pt-10">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-2.5">
            <span className="text-[14px] text-[#C3A66A]">⛓</span>
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#BDA670]">The Problem</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[44px] leading-[0.9] tracking-tighter text-[#101624] sm:text-[62px] lg:text-[78px]">
            Lose a tooth. Then <span className="font-light italic text-[#C9A961]">keep losing.</span>
          </h2>

          <p className="mt-5 max-w-[620px] text-[17px] leading-normal text-[#687286] sm:text-[21px] lg:text-[24px]">
            Here&apos;s what most people don&apos;t know about missing teeth: the damage doesn&apos;t stop when
            the tooth comes out. It starts.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-14">
          <div className="relative pl-6">
            <div className="absolute left-2 top-1 h-[calc(100%-12px)] w-px bg-[#D8CFBB]" />
            <div className="space-y-7">
              {timeline.map((item) => (
                <div key={item.year} className="relative">
                  <span className="absolute left-[-18px] top-1.5 h-2.5 w-2.5 rounded-full border border-[#CBB381] bg-[#F4F3EB]" />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#C0A96F]">{item.year}</p>
                  <h3 className="mt-2 font-fraunces text-[32px] leading-[0.95] tracking-[-0.03em] text-[#121927] sm:text-[38px] lg:text-[44px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[470px] text-[16px] leading-[1.6] text-[#606A7B]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[14px] bg-[#020918] px-7 py-8 text-[#D5DBE7] shadow-[0_10px_28px_rgba(0,0,0,0.16)] sm:px-8 sm:py-9">
            <p className="text-[9px] uppercase tracking-[0.26em] text-[#C2A868]">The Free Insight</p>
            <p className="mt-3 font-fraunces text-[58px] leading-[0.9] tracking-tighter text-[#F2F5FB] sm:text-[76px] lg:text-[100px]">
              25%
            </p>
            <p className="mt-1 max-w-[440px] font-fraunces text-[28px] italic leading-[1.12] text-[#EFF3FA] sm:text-[36px] lg:text-[46px]">
              of your jawbone is gone within the first year of losing a tooth.
            </p>
            <p className="mt-5 max-w-[470px] text-[16px] leading-[1.6] text-[#94A0B5]">
              Bridges and dentures sit on top of the gum and accelerate bone loss. Implants are the only
              solution that stops this cascade - because they integrate with your jawbone and stimulate it
              the way a natural tooth root does.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

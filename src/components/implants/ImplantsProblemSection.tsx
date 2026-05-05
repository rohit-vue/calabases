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
    <section className="bg-[#FFFFFF] px-4 pb-14 pt-6 sm:px-8 sm:pb-16 sm:pt-8 lg:px-24 lg:pb-20 lg:pt-10">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-2.5">
            <span className="font-fraunces text-[14px] tracking-[2.2px] italic leading-none text-[#5A6578]">§</span>
            <p className="font-jetbrains text-[11px] font-medium uppercase tracking-[2.2px] text-[#C9A961]">
              The Problem
            </p>
          </div>

          <h2 className="mt-4 font-fraunces text-[36px] font-light leading-[1.04] tracking-[-1.6px] text-[#0A0E1A] sm:text-[44px] sm:leading-none md:text-[48px] lg:text-[52px] lg:leading-[76px]">
            Lose a tooth. Then
            <span className="italic text-[#C9A961]"> keep losing.</span>
          </h2>

          <p className="mt-5 max-w-[660px] font-inter text-[15px] font-light leading-[1.7] text-[#5A6578] sm:text-[16px] sm:leading-[30.4px]">
            Here&apos;s what most people don&apos;t know about missing teeth: the damage doesn&apos;t stop when
            the tooth comes out. It starts.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-14">
          <div className="relative pl-6">
            <div
              className="absolute left-[10px] top-[11px] h-[calc(100%-11px)] w-[2px]"
              style={{ background: "linear-gradient(180deg, #C9A961 0%, #C9A961 100%)" }}
            />
            <div className="space-y-7">
              {timeline.map((item) => (
                <div key={item.year} className="relative">
                  <span className="absolute left-[-18px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#C9A961] bg-[#FFFFFF]" />
                  <p className="font-jetbrains text-[11px] font-medium uppercase leading-[17.6px] tracking-[1.65px] text-[#5A6578]">{item.year}</p>
                  <h3 className="mt-1 font-fraunces text-[32px] leading-[44.8px] tracking-[-0.56px] text-[#0A0E1A] sm:text-[38px] lg:text-[28px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[470px] text-[14px] leading-[25.5px] text-[#5A6578]">
                    {item.year === "Year 1" ? (
                      <>
                        Within <span className="font-semibold text-[#0A0E1A]">12 months</span>, you lose 25% of the bone width
                        where your tooth used to be. Your jaw literally reshapes itself because the bone no longer
                        has a root to support.
                      </>
                    ) : item.year === "Year 3" ? (
                      <>
                        Adjacent teeth tilt into the empty space. Opposing teeth grow longer. Your bite shifts.
                        What was one gap becomes a <span className="font-semibold text-[#0A0E1A]">cascade of misalignment</span>.
                      </>
                    ) : (
                      <>
                        By year 10, bone loss is severe enough that implant placement requires{" "}
                        <span className="font-semibold text-[#0A0E1A]">bone grafting</span> - adding 6-12 months and thousands
                        of dollars to the procedure.
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[14px] bg-[#0A0E1A] px-8 py-9 text-[#D5DBE7] shadow-[0_10px_28px_rgba(0,0,0,0.16)] sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <p className="text-[11px] uppercase tracking-[2.2px] leading-[40px] text-[#C9A961]">The Core Insight</p>
            <p className="mt-4 font-fraunces text-[52px] font-light leading-none tracking-[-3.2px] text-[#FFFFFF] sm:text-[58px] lg:text-[70px]">
              25<span className="italic">%</span>
            </p>
            <p className="mt-3 max-w-[440px] font-fraunces text-[22px] font-light italic leading-[1.18] text-[#FFFFFF]">
              of your jawbone is gone within the first year of losing a tooth.
            </p>
            <p className="mt-5 max-w-[470px] text-[15px] leading-[25.5px] text-[#FFFFFFA6s]">
              Bridges and dentures sit on top of the gum and accelerate bone loss. Implants are the <span className="font-bold text-[#C9A961]">only
              solution</span> that stops this cascade - because they integrate with your jawbone and stimulate it
              the way a natural tooth root does.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

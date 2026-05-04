const cardStats = [
  { main: "<2", suffix: "%", label: "5-year failure rate" },
  { main: "8-15", suffix: "%", label: "National avg. failure" },
  { main: "15-25", suffix: "", label: "Years of crown lifespan" },
  { main: "~2", suffix: "hr", label: "Same-day crown time" },
] as const;

export default function RestorativeCraftSection() {
  return (
    <section className="bg-[#ffffff] px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-9 md:px-8 lg:px-20 lg:pb-24 lg:pt-12">
      <div className="mx-auto grid w-full max-w-[1160px] items-start gap-8 sm:gap-10 lg:grid-cols-[1fr_470px] lg:gap-16">
        <div className="max-w-[620px]">
          <p className="font-fraunces text-[11px] italic uppercase tracking-[0.19em] text-[#8B5A2B]">§ Our Craft</p>

          <h2 className="mt-3 font-fraunces text-[32px] font-light leading-[0.98] tracking-[-0.03em] text-[#0a0e1a] sm:mt-4 sm:text-[44px] md:text-[52px] lg:text-[56px]">
            Built to last <span className="italic text-[#B87333]">longer than</span>
            <br />
            <span className="italic text-[#B87333]">the teeth they replace.</span>
          </h2>

          <div className="mt-6 space-y-4 text-[15px] leading-[1.6] text-[#5A6578] sm:mt-8 sm:space-y-5 sm:text-[17px] md:text-[18px] lg:mt-8 lg:text-[17px] lg:leading-[1.65]">
            <p>
              Restorative dentistry has advanced more in the last 15 years than in the previous 100.
              <span className="font-semibold text-[#0A0E1A]"> Zirconia crowns are now stronger than natural teeth.</span>{" "}
              Digital impressions have replaced gooey trays. Same-day CEREC crowns mean you walk in
              with a broken tooth and walk out with a permanent restoration in under 2 hours.
            </p>
            <p>
              The difference between a great restoration and a mediocre one is measured in{" "}
              <span className="font-semibold text-[#0A0E1A]">decades.</span> A well-made zirconia crown lasts
              15-25 years. A rushed, poorly-fitted crown can fail in 3-5.
            </p>
            <p>
              We&apos;ve placed over 3,000 crowns, bridges, inlays, onlays, and dentures since 2010. Our
              5-year failure rate is under 2% - compared to the national average of 8-15%.
            </p>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-[24px] bg-[#F7F2E7] p-5 sm:p-7 lg:p-9">
          <div className="flex flex-col items-center justify-center">
            <p className="w-full font-fraunces text-[48px] font-light leading-none tracking-[-0.084em] text-[#B87333] sm:text-[62px] md:text-[78px] lg:text-[120px]">
              3,000
              <span className="text-[22px] font-light tracking-[0.02em] text-[#5A6578] sm:text-[28px] md:text-[32px] lg:text-[30px]">
                +
              </span>
            </p>
            <p className="mt-3 max-w-[390px] text-center font-fraunces text-[19px] italic leading-[1.35] text-[#243041] sm:mt-4 sm:text-[22px] md:text-[24px] lg:mt-4 lg:text-[22px]">
              Restorations placed since 2010. Every piece custom-made, every patient seen by the same dentist, every
              fitting hand-checked.
            </p>

            <div className="mt-6 w-full border-t border-[#0A0E1A1A] pt-4 sm:mt-8 sm:pt-6 lg:mt-8">
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-6">
                {cardStats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <p className="font-fraunces text-[28px] italic leading-none tracking-[-0.015em] sm:text-[36px] md:text-[42px] lg:text-[36px]">
                      <span className="text-[#B87333]">{stat.main}</span>
                      {stat.suffix ? <span className="text-[#0A0E1A]">{stat.suffix}</span> : null}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#5A6578]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        
        </aside>
      </div>
    </section>
  );
}

const cardStats = [
  { value: "<2%", label: "5-year failure rate" },
  { value: "8-15%", label: "National avg. failure" },
  { value: "15-25", label: "Years of crown lifespan" },
  { value: "~2hr", label: "Same-day crown time" },
];

export default function RestorativeCraftSection() {
  return (
    <section className="bg-[#F2EEE2] px-4 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-20 lg:pb-24 lg:pt-12">
      <div className="mx-auto grid w-full max-w-[1160px] items-start gap-10 lg:grid-cols-[1fr_470px] lg:gap-16">
        <div className="max-w-[620px]">
          <p className="font-fraunces text-[11px] uppercase tracking-[0.2em] text-[#A88A62]">§ Our Craft</p>

          <h2 className="mt-4 font-fraunces text-[38px] leading-[0.98] tracking-[-0.03em] text-[#171D2C] sm:text-[52px] lg:text-[64px]">
            Built to last <span className="font-light italic text-[#B18458]">longer than</span>
            <br />
            <span className="font-light italic text-[#B18458]">the teeth they replace.</span>
          </h2>

          <div className="mt-8 space-y-5 text-[17px] leading-[1.65] text-[#505965] sm:text-[19px] lg:text-[21px]">
            <p>
              Restorative dentistry has advanced more in the last 15 years than in the previous 100.
              <span className="font-semibold text-[#2A3342]"> Zirconia crowns are now stronger than natural teeth.</span>{" "}
              Digital impressions have replaced gooey trays. Same-day CEREC crowns mean you walk in
              with a broken tooth and walk out with a permanent restoration in under 2 hours.
            </p>
            <p>
              The difference between a great restoration and a mediocre one is measured in{" "}
              <span className="font-semibold text-[#2A3342]">decades.</span> A well-made zirconia crown lasts
              15-25 years. A rushed, poorly-fitted crown can fail in 3-5.
            </p>
            <p>
              We&apos;ve placed over 3,000 crowns, bridges, inlays, onlays, and dentures since 2010. Our
              5-year failure rate is under 2% - compared to the national average of 8-15%.
            </p>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-2xl border border-[#DFD5BE] bg-[#ECE6D8] p-7 sm:p-9">
          <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(244,237,224,0.95)_0%,rgba(236,230,216,0)_72%)]" />

          <p className="font-fraunces text-[62px] leading-none tracking-[-0.04em] text-[#B07C49] sm:text-[78px] lg:text-[96px]">
            3,000<span className="align-top text-[28px] font-light sm:text-[32px] lg:text-[38px]">+</span>
          </p>
          <p className="mt-4 max-w-[370px] font-fraunces text-[24px] italic leading-[1.35] text-[#243041] sm:text-[28px] lg:text-[33px]">
            Restorations placed since 2010. Every piece custom-made, every patient seen by the same
            dentist, every fitting hand-checked.
          </p>

          <div className="mt-8 border-t border-[#D8CEB8] pt-6">
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              {cardStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-fraunces text-[36px] italic leading-none text-[#A87446] sm:text-[42px] lg:text-[49px]">{stat.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#737679]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

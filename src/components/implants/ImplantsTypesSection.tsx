const implantTypes = [
  {
    tag: "Most Common",
    title: "Single Tooth",
    subtitle: "For one missing tooth.",
    description:
      "One titanium implant + one custom crown. The gold standard for replacing a single tooth - better than a bridge because it doesn't require grinding down healthy neighboring teeth.",
    timeline: "4-6 months",
    implants: "1",
    successRate: "98%",
    price: "$3,500 - $5,500",
  },
  {
    tag: "Multi-Tooth",
    title: "Multiple Implants",
    subtitle: "For 2-3 missing teeth.",
    description:
      "Individual implants placed for each missing tooth. Preserves bone in every location and gives you independent teeth that look and function like the originals.",
    timeline: "4-7 months",
    implants: "2-5",
    successRate: "97%",
    price: "$7,000 - $16,000",
  },
  {
    tag: "Efficient",
    title: "Implant Bridge",
    subtitle: "For multiple missing teeth.",
    description:
      "Fewer implants supporting multiple teeth. When you're missing 3-4 teeth in a row, a 2-implant bridge is often more cost-effective than individual implants.",
    timeline: "5-7 months",
    implants: "2-3",
    successRate: "96%",
    price: "$8,000 - $14,000",
  },
  {
    tag: "Full Arch",
    title: "All-on-4",
    subtitle: "Replace every tooth in an arch.",
    description:
      "Just 4 strategically placed implants support a full arch of permanent teeth. Life-changing for denture wearers and patients with extensive tooth loss.",
    timeline: "6-8 months",
    implants: "4 per arch",
    successRate: "95%",
    price: "$18,000 - $30,000",
  },
];

export default function ImplantsTypesSection() {
  return (
    <section className="bg-[#020918] px-4 py-14 sm:px-8 sm:py-16 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[820px]">
          <div className="flex items-center gap-2.5">
            <span className="text-[14px] text-[#5A6578] italic">§</span>
            <p className="font-jetbrains text-[11px] uppercase tracking-[0.24em] text-[#C9A961]">Implant Types</p>
          </div>

          <h2 className="mt-4 max-w-none font-fraunces text-[74px] font-light leading-[0.92] tracking-tighter text-[#EEF2F8] lg:whitespace-nowrap">
            One tooth. Several teeth. A <span className="font-light italic text-[#C9A961]">full arch.</span>
          </h2>

          <p className="mt-5 max-w-[700px] text-[19px] leading-normal text-[#FFFFFF99] font-inter font-light">
            Every case is different. Here are the four implant solutions we offer, with real price ranges
            and what each is built for.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {implantTypes.map((item) => (
            <article
              key={item.title}
              className="grid h-full min-h-[560px] grid-rows-[auto_104px_minmax(180px,auto)_auto_auto] rounded-[14px] border border-[#1A2742] bg-[linear-gradient(160deg,#0A1327_0%,#091224_100%)] px-5 py-6 sm:px-6"
            >
              <p className="font-jetbrains text-[10px] uppercase tracking-[0.24em] text-[#C9A961]">{item.tag}</p>
              <div className="flex flex-col gap-2 pt-4">
                <h3 className="font-fraunces text-[33px] leading-[0.95] text-[#EFF3F9] sm:text-[38px] lg:text-[28px]">
                  {item.title}
                </h3>
                <p className="font-fraunces text-[18px] font-light italic leading-[1.2] text-[#C9A961] sm:text-[20px] lg:text-[13px]">
                  {item.subtitle}
                </p>
              </div>
              <div className="pt-6">
                <p className="max-w-[240px] font-inter text-[14px] leading-[1.8] text-[#FFFFFFA6]">{item.description}</p>
              </div>

              <div className="border-t border-[#1A2742] pt-4">
                <div className="space-y-2">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 text-[13px] text-[#FFFFFF80]">
                    <span>Timeline</span>
                    <span className="text-right text-[#D6DCE8]">{item.timeline}</span>
                  </div>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 text-[13px] text-[#FFFFFF80]">
                    <span>Implants</span>
                    <span className="text-right text-[#D6DCE8]">{item.implants}</span>
                  </div>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 text-[13px] text-[#FFFFFF80]">
                    <span>Success rate</span>
                    <span className="text-right text-[#D6DCE8]">{item.successRate}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 border-t border-[#1A2742] pt-4">
                <p className="font-fraunces text-[36px] leading-[0.95] text-[#FFFFFF] sm:text-[42px] lg:text-[32px]">{item.price}</p>
                <p className="font-jetbrains mt-1 text-[12px] text-[#C9A961]">Gleam members save 20%</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

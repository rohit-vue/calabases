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
    subtitle: "For 2-5 missing teeth.",
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
            <span className="text-[14px] text-[#C3A66A]">⛓</span>
            <p className="text-[9px] uppercase tracking-[0.24em] text-[#BDA670]">Implant Types</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[42px] leading-[0.92] tracking-tighter text-[#EEF2F8] sm:text-[58px] lg:text-[74px]">
            One tooth. Several teeth. A <span className="font-light italic text-[#C9A961]">full arch.</span>
          </h2>

          <p className="mt-5 max-w-[700px] text-[17px] leading-normal text-[#8D98AC] sm:text-[21px] lg:text-[24px]">
            Every case is different. Here are the four implant solutions we offer, with real price ranges
            and what each is built for.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {implantTypes.map((item) => (
            <article
              key={item.title}
              className="rounded-[14px] border border-[#1A2742] bg-[linear-gradient(160deg,#0A1327_0%,#091224_100%)] px-5 py-6 sm:px-6"
            >
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#C7A861]">{item.tag}</p>
              <h3 className="mt-4 font-fraunces text-[33px] leading-[0.95] text-[#EFF3F9] sm:text-[38px] lg:text-[43px]">{item.title}</h3>
              <p className="mt-2 font-fraunces text-[18px] italic leading-[1.2] text-[#C8CEDC] sm:text-[20px] lg:text-[23px]">{item.subtitle}</p>
              <p className="mt-4 text-[15px] leading-[1.58] text-[#99A5BB]">{item.description}</p>

              <div className="mt-5 border-t border-[#1A2742] pt-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[13px] text-[#8390A8]">
                    <span>Timeline</span>
                    <span className="text-[#D6DCE8]">{item.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between text-[13px] text-[#8390A8]">
                    <span>Implants</span>
                    <span className="text-[#D6DCE8]">{item.implants}</span>
                  </div>
                  <div className="flex items-center justify-between text-[13px] text-[#8390A8]">
                    <span>Success rate</span>
                    <span className="text-[#D6DCE8]">{item.successRate}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-[#1A2742] pt-4">
                <p className="font-fraunces text-[36px] leading-[0.95] text-[#F4F7FC] sm:text-[42px] lg:text-[47px]">{item.price}</p>
                <p className="mt-1 text-[11px] italic text-[#C9A961]">Gleam members save 20%</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

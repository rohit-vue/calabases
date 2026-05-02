type PricingCard = {
  eyebrow: string;
  title: string;
  subtitle: string;
  price: string;
  priceNote: string;
  memberLabel: string;
  memberValue: string;
  bullets: string[];
};

const pricingCards: PricingCard[] = [
  {
    eyebrow: "Most Common",
    title: "Tooth Extraction",
    subtitle: "Simple to surgical extraction, per tooth.",
    price: "$200-$600",
    priceNote: "Complexity-based pricing",
    memberLabel: "Gleam 20% off",
    memberValue: "$160-$480",
    bullets: [
      "Local anesthesia included",
      "Digital imaging",
      "Same-day implant consultation",
      "Written aftercare plan",
      "Follow-up visit included",
    ],
  },
  {
    eyebrow: "Tooth-Saving",
    title: "Root Canal",
    subtitle: "Most patients complete in a single visit.",
    price: "$900-$1,500",
    priceNote: "Based on tooth location",
    memberLabel: "Gleam 20% off",
    memberValue: "$720-$1,200",
    bullets: [
      "Digital imaging + diagnosis",
      "Local anesthesia included",
      "Single-visit completion",
      "Crown planning consultation",
      "Follow-up visit included",
    ],
  },
  {
    eyebrow: "Preventive Care",
    title: "Wisdom Teeth Removal",
    subtitle: "All four teeth under IV sedation.",
    price: "$1,500-$3,000",
    priceNote: "All four, including sedation",
    memberLabel: "Gleam 20% off",
    memberValue: "$1,200-$2,400",
    bullets: [
      "3D CBCT imaging included",
      "IV sedation available",
      "Pre-surgery consultation",
      "Aftercare kit included",
      "1-week check-in visit",
    ],
  },
  {
    eyebrow: "Add-On Comfort",
    title: "IV Sedation",
    subtitle: "Add deep sedation to any procedure.",
    price: "$450-$800",
    priceNote: "Per procedure, billed separately",
    memberLabel: "Gleam 20% off",
    memberValue: "$360-$640",
    bullets: [
      "Board-certified anesthesia",
      "Continuous monitoring",
      "No memory of procedure",
      "Recovery in private room",
      "Driver required for pickup",
    ],
  },
  {
    eyebrow: "Emergency Add-On",
    title: "Abscess Drainage",
    subtitle: "Relief from infection, same-day.",
    price: "$200-$400",
    priceNote: "Plus follow-up treatment",
    memberLabel: "Gleam 20% off",
    memberValue: "$160-$320",
    bullets: [
      "Same-day appointment",
      "Antibiotic prescription",
      "Pain management plan",
      "Follow-up procedure planning",
      "Emergency priority scheduling",
    ],
  },
  {
    eyebrow: "Save On Everything",
    title: "Gleam Membership",
    subtitle: "20% off all surgical procedures.",
    price: "$297 / year",
    priceNote: "Covers cleanings + exams, 20% off all work",
    memberLabel: "On wisdom teeth alone",
    memberValue: "Save $300-$600",
    bullets: [
      "2 cleanings/year included",
      "All X-rays + exams included",
      "20% off every procedure",
      "No deductibles or waiting periods",
      "Pays for itself in one surgery",
    ],
  },
];

export default function OralSurgeryPricingSection() {
  return (
    <section className="bg-[#F2F3F0] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px]">
        <div className="max-w-[920px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#8A9998]" />
            <p className="text-[12px] uppercase tracking-[0.24em] text-[#72817F]">Transparent Pricing</p>
          </div>

        <h2 className="mt-4 font-fraunces text-[44px] leading-[0.96] tracking-[-0.03em] text-[#141E2F] sm:text-[58px] lg:text-[76px]">
            No surprises, <span className="font-light italic text-[#758B87]">ever.</span>
          </h2>

        <p className="mt-5 max-w-[900px] text-[17px] leading-[1.6] text-[#667180] sm:text-[22px] lg:text-[30px]">
            All pricing includes consultation, digital imaging, the procedure itself, and first follow-up
            visit. Sedation fees listed separately. Gleam members save 20% on every procedure.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pricingCards.map((card) => (
            <article
              key={`${card.eyebrow}-${card.title}`}
              className="rounded-[16px] border border-[#E3E5E2] bg-[#F6F8F6] px-5 pb-5 pt-5 sm:px-6 sm:pb-6"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#7A8A87]">{card.eyebrow}</p>
              <h3 className="mt-3 font-fraunces text-[32px] leading-tight text-[#1A2436] sm:text-[37px] lg:text-[45px]">{card.title}</h3>
              <p className="mt-1 min-h-[46px] font-fraunces text-[18px] italic text-[#7A8593]">{card.subtitle}</p>

              <div className="mt-3 border-t border-[#DFE3DF] pt-3">
                <p className="font-fraunces text-[40px] leading-none text-[#121C2F] sm:text-[48px] lg:text-[58px]">{card.price}</p>
                <p className="mt-1 text-[14px] text-[#6D7786]">{card.priceNote}</p>
              </div>

              <div className="mt-4 rounded-[10px] border border-[#E0E4DF] bg-white px-3 py-2">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7D8A88]">{card.memberLabel}</p>
                  <p className="font-fraunces text-[22px] italic text-[#8B9B98] sm:text-[26px] lg:text-[30px]">{card.memberValue}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5 border-t border-[#DFE3DF] pt-4">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-[16px] leading-normal text-[#526073]">
                    <span className="mt-[8px] inline-block text-[12px] text-[#8BA09C]">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

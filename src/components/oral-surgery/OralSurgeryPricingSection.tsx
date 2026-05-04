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
    price: "$200–$600",
    priceNote: "Complexity-based pricing",
    memberLabel: "Gleam 20% off",
    memberValue: "$160–$480",
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
    price: "$900–$1,500",
    priceNote: "Based on tooth location",
    memberLabel: "Gleam 20% off",
    memberValue: "$720–$1,200",
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
    price: "$1,500–$3,000",
    priceNote: "All four, including sedation",
    memberLabel: "Gleam 20% off",
    memberValue: "$1,200–$2,400",
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
    price: "$450–$800",
    priceNote: "Per procedure, billed separately",
    memberLabel: "Gleam 20% off",
    memberValue: "$360–$640",
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
    price: "$200–$400",
    priceNote: "Plus follow-up treatment",
    memberLabel: "Gleam 20% off",
    memberValue: "$160–$320",
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
    memberValue: "Save $300–$600",
    bullets: [
      "2 cleanings/year included",
      "All X-rays + exams included",
      "20% off every procedure",
      "No deductibles or waiting periods",
      "Pays for itself in one surgery",
    ],
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" aria-hidden fill="none">
      <path
        d="M3.5 8.2 6.4 11l6.1-6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OralSurgeryPricingSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-10 sm:py-20 lg:py-[128px]">
      <div className="mx-auto w-full max-w-[1216px]">
        <div className="max-w-[693px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 shrink-0 bg-[#8FA99F]" aria-hidden />
            <p className="text-[11px] font-semibold uppercase leading-[19.2px] tracking-[3px] text-[#5E7267]">
              Transparent Pricing
            </p>
          </div>

          <h2 className="mt-5 font-fraunces text-[32px] font-light leading-[1.08] tracking-[-1.6px] text-[#0A0E1A] sm:text-[48px] md:text-[56px] lg:text-[56px] lg:leading-[1.02] lg:tracking-[-2.16px]">
            No surprises, <span className="font-light italic text-[#5E7267]">ever.</span>
          </h2>

          <p className="mt-6 text-[15px] font-normal leading-[26px] text-[#5A6578] sm:text-[16px] sm:leading-[27px] lg:text-[17px] lg:leading-[28.9px]">
            All pricing includes consultation, digital imaging, the procedure itself, and first follow-up visit. Sedation
            fees listed separately. Gleam members save 20% on every procedure.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:mt-16 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {pricingCards.map((card) => (
            <article
              key={`${card.eyebrow}-${card.title}`}
              className="rounded-[20px] border border-[#E4E0D6] bg-[#F3F7F6] px-6 py-7 sm:px-8 sm:py-9 lg:px-9 lg:py-10"
            >
              <p className="text-[11px] font-inter font-bold uppercase leading-[16px] tracking-[0.2em] text-[#5E7267]">{card.eyebrow}</p>

              <h3 className="mt-4 font-fraunces text-[21px] font-normal leading-[1.2] tracking-[-0.02em] text-[#0A0E1A] sm:mt-6 sm:text-[23px] lg:text-[24px]">
                {card.title}
              </h3>
              <p className="mt-4 text-[12px] font-normal italic leading-[1.5] text-[#5A6578] sm:mt-6 sm:text-[13px]">{card.subtitle}</p>

              <div className="mt-5 sm:mt-6">
                <p className="font-fraunces text-[30px] font-normal leading-none tracking-[-0.02em] text-[#0A0E1A] sm:text-[34px] lg:text-[36px]">
                  {card.price}
                </p>
                <p className="mt-2 text-[12px] font-normal leading-[1.4] text-[#5A6578]">{card.priceNote}</p>
              </div>

              <div className="mt-6 flex flex-col gap-2 rounded-[10px] border border-[#E4E0D6] bg-[#FFFFFF] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <p className="min-w-0 text-[12px] font-medium leading-[1.4] text-[#5E7267]">{card.memberLabel}</p>
                <p className="shrink-0 font-fraunces text-[17px] font-normal italic leading-none text-[#5E7267] sm:text-right">
                  {card.memberValue}
                </p>
              </div>

              <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-[14px]">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-[13px] font-normal leading-[1.45] text-[#1C2333] sm:text-[13px]">
                    <CheckIcon className="mt-[3px] shrink-0 text-[#5E7267] font-bold text-[13px]" />
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
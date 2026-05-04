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
    title: "Single Crown",
    subtitle: "One custom-made cap to restore a damaged tooth.",
    price: "$1,800-$2,500",
    priceNote: "Zirconia or Emax material",
    memberLabel: "Gleam members save 20%",
    memberValue: "$1,440-$2,000",
    bullets: [
      "Digital impression",
      "Master ceramist lab work",
      "Custom shade matching",
      "5-year warranty",
      "Same-day available with CEREC",
    ],
  },
  {
    eyebrow: "3-Unit Bridge",
    title: "Dental Bridge",
    subtitle: "Replaces a missing tooth using neighbors as anchors.",
    price: "$3,000-$5,500",
    priceNote: "Per 3-unit bridge",
    memberLabel: "Gleam members save 20%",
    memberValue: "$2,400-$4,400",
    bullets: [
      "Zirconia or PFM materials",
      "Full shade matching",
      "Pre-bridge exam included",
      "5-year warranty",
      "2-3 visits over 2-3 weeks",
    ],
  },
  {
    eyebrow: "Conservative Option",
    title: "Inlay / Onlay",
    subtitle: "When a cavity is too big for a filling, too small for a crown.",
    price: "$900-$1,800",
    priceNote: "Custom-fabricated and bonded",
    memberLabel: "Gleam members save 20%",
    memberValue: "$720-$1,440",
    bullets: [
      "Preserves 30-40% more tooth",
      "Emax or porcelain material",
      "Bonded, not cemented",
      "5-year warranty",
      "Same-day available",
    ],
  },
  {
    eyebrow: "Full or Partial",
    title: "Traditional Dentures",
    subtitle: "Modern acrylic dentures with custom-shaped teeth.",
    price: "$1,500-$4,500",
    priceNote: "Full arch or partial set",
    memberLabel: "Gleam members save 20%",
    memberValue: "$1,200-$3,600",
    bullets: [
      "Custom impressions",
      "Shade and shape matching",
      "Free adjustments for 1 year",
      "3-5 visits over 4-6 weeks",
      "5-10 year lifespan",
    ],
  },
  {
    eyebrow: "Premium Option",
    title: "Implant-Supported Dentures",
    subtitle: "Dentures that snap onto 2-4 dental implants.",
    price: "$6,500-$18,000",
    priceNote: "Per arch, including implants",
    memberLabel: "Gleam members save 20%",
    memberValue: "$5,200-$14,400",
    bullets: [
      "2-4 implants per arch",
      "No adhesive needed",
      "Prevents bone loss",
      "Near-permanent stability",
      "Implant + denture warranty",
    ],
  },
  {
    eyebrow: "Gleam Membership",
    title: "$297 / year",
    subtitle: "The lowest-friction way to save on restorative work.",
    price: "Save 20%",
    priceNote: "on every restoration, every visit",
    memberLabel: "On a single crown",
    memberValue: "Save $360-$500",
    bullets: [
      "Covers 2 cleanings/year",
      "All X-rays & exams included",
      "20% off all procedures",
      "No deductibles or waiting periods",
      "Pays for itself in one crown",
    ],
  },
];

export default function RestorativePricingSection() {
  return (
    <section className="bg-[#F7F2E7] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px]">
        <p className="text-center font-fraunces text-[11px] uppercase tracking-[0.26em] text-[#B87333] lg:text-left">§ Transparent Pricing</p>

        <h2 className="mt-3 text-center font-fraunces text-[36px] font-light leading-[0.98] tracking-[-0.035em] text-[#0A0E1A] sm:mt-4 sm:text-[48px] md:text-[56px] lg:text-left lg:text-[64px]">
          Every restoration, <span className="italic text-[#B87333]">every price.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-[860px] text-center text-[15px] font-light leading-[1.55] text-[#5A6578] sm:mt-5 sm:text-[18px] md:text-[20px] lg:mx-0 lg:mt-5 lg:text-left lg:text-[17px] lg:leading-[1.58]">
          All pricing includes consultation, digital imaging, tooth preparation, digital impression, lab
          work, and final placement. No hidden fees.
        </p>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
          {pricingCards.map((card) => (
            <article
              key={`${card.eyebrow}-${card.title}`}
              className="rounded-[20px] border border-[#E4DDC8] bg-[#FFFFFF] px-4 pb-4 pt-4 sm:px-6 sm:pb-6 sm:pt-5"
            >
              <p className="font-fraunces text-[11px] uppercase tracking-[0.17em] text-[#B87333] sm:text-[12px]">{card.eyebrow}</p>

              <h3 className="mt-1.5 font-fraunces text-[28px] leading-tight tracking-[-0.006em] text-[#0A0E1A] sm:mt-2 sm:text-[32px] md:text-[35px] lg:text-[24px]">
                {card.title}
              </h3>
              <p className="mt-1 min-h-0 font-fraunces text-[12px] italic leading-[1.4] text-[#5A6578] sm:min-h-[45px] sm:text-[13px]">{card.subtitle}</p>

              <div className="mt-2.5 border-t border-[#E4DDC8] pt-2.5 sm:mt-3 sm:pt-3">
                <p className="font-fraunces text-[34px] leading-none tracking-[-0.02em] text-[#0A0E1A] sm:text-[40px] md:text-[44px] lg:text-[36px]">{card.price}</p>
                <p className="mt-1 text-[11px] text-[#5A6578] sm:text-[12px]">{card.priceNote}</p>
              </div>

              <div className="mt-3 rounded-[12px] bg-[#F7F2E7] px-3 py-2 sm:mt-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <p className="text-[11px] font-semibold uppercase text-[#8B5A2B] sm:text-[12px]">{card.memberLabel}</p>
                  <p className="font-fraunces text-[18px] italic text-[#B87333] sm:text-[20px] md:text-[22px] lg:text-[18px]">{card.memberValue}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-[13px] leading-[1.45] text-[#1C2333]">
                    <span className=" text-[10px] text-[#B87333]" >◆</span>
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

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
    <section className="bg-[#ECE9DF] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px]">
        <p className="font-fraunces text-[12px] uppercase tracking-[0.24em] text-[#B1824D]">§ Transparent Pricing</p>

        <h2 className="mt-4 font-fraunces text-[44px] leading-[0.98] tracking-[-0.03em] text-[#10192B] sm:text-[56px] lg:text-[74px]">
          Every restoration, <span className="font-light italic text-[#B77D45]">every price.</span>
        </h2>

        <p className="mt-5 max-w-[860px] text-[17px] leading-[1.58] text-[#66707F] sm:text-[21px] lg:text-[26px]">
          All pricing includes consultation, digital imaging, tooth preparation, digital impression, lab
          work, and final placement. No hidden fees.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {pricingCards.map((card) => (
            <article
              key={`${card.eyebrow}-${card.title}`}
              className="rounded-[14px] border border-[#DDDDDD] bg-[#F3F3F3] px-5 pb-5 pt-5 sm:px-6 sm:pb-6"
            >
              <p className="font-fraunces text-[11px] uppercase tracking-[0.2em] text-[#BC8752]">{card.eyebrow}</p>

              <h3 className="mt-2 font-fraunces text-[32px] leading-tight text-[#172133] sm:text-[37px] lg:text-[43px]">{card.title}</h3>
              <p className="mt-1 min-h-[45px] font-fraunces text-[17px] italic leading-[1.4] text-[#738091]">{card.subtitle}</p>

              <div className="mt-3 border-t border-[#DDDDDD] pt-3">
                <p className="font-fraunces text-[40px] leading-none text-[#111B2D] sm:text-[47px] lg:text-[55px]">{card.price}</p>
                <p className="mt-1 text-[14px] text-[#6A7483]">{card.priceNote}</p>
              </div>

              <div className="mt-4 rounded-[10px] bg-[#ECE5D7] px-3 py-2">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9D7F5B]">{card.memberLabel}</p>
                  <p className="font-fraunces text-[20px] italic text-[#B57B45] sm:text-[22px] lg:text-[24px]">{card.memberValue}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-[15px] leading-[1.45] text-[#4D5869]">
                    <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[#B87D45]" />
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

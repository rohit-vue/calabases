import Link from "next/link";

const plans = [
  {
    name: "Brighten",
    subtitle: "Start here if your smile is mostly healthy.",
    price: "$450",
    range: " - $650",
    memberNote: "Gleam members save 20%",
    features: [
      "Professional in-office whitening",
      "6-8 shade improvement",
      "60-minute appointment",
      "Take-home touch-up kit included",
      "Results last 1-3 years",
    ],
  },
  {
    name: "Transform",
    subtitle: "Clear vision, permanent smile design package.",
    price: "$14,400",
    range: " - $20,000",
    memberNote: "Gleam members save $2,800 - $4,000",
    features: [
      "8 porcelain veneers (upper front)",
      "Digital smile design preview",
      "Emax or Empress materials",
      "Master ceramist lab work",
      "Pre-whitening included",
      "5-year craftsmanship warranty",
    ],
    featured: true,
  },
  {
    name: "Refine",
    subtitle: "Precision adjustments for a balanced smile.",
    price: "$800",
    range: " - $2,500",
    memberNote: "Gleam members save 20%",
    features: [
      "Gummy smile correction",
      "Bonding for chips or gaps",
      "Minor shape adjustments",
      "Soft tissue laser treatments",
      "Single-visit completion",
    ],
  },
];

export default function CosmaticPricingSection() {
  return (
    <section className="bg-[#FFFFFF] px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-24 lg:pb-24 lg:pt-14">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="mx-auto">
          <div className="flex items-center gap-3">
            <span className="h-[0.2px] w-[28px] bg-[#C9A961]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C9A961]">Transparent Pricing</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[44px] font-light leading-[0.95] tracking-[-0.03em] text-[#0A0E1A] sm:text-[56px] lg:text-[52px]">
            Three paths to a <span className="italic text-[#C9A961]">better smile.</span>
          </h2>

          <p className="mt-5 max-w-[700px] text-[18px] leading-[1.45] text-[#5A6578] font-light sm:text-[22px] lg:text-[17px]">
            Every cosmetic plan is custom - but here&apos;s what most Calabasas patients invest. All prices
            include consultation, digital smile design, and placement.
          </p>
        </div>

        <div className="mx-auto mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-[14px] border px-5 py-6 sm:px-6 ${plan.featured ? "border-[#C9A961] bg-[#0A0E1A] text-[#E8EDF5]" : "border-[#E4E0D6] bg-[#FAF8F3] text-[#0F1523]"}`}
            >
              {plan.featured ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#C9A961] px-4 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#0A0E1A]">
                  Most Popular
                </div>
              ) : null}

              <h3 className={`font-fraunces text-[34px] leading-[0.95] tracking-[-0.007em] sm:text-[38px] lg:text-[28px] ${plan.featured ? "text-[#FFFFFF]" : "text-[#0A0E1A]"}`}>
                {plan.name}
              </h3>
              <p className={`mt-3 font-fraunces text-[13px] italic leading-[1.3] ${plan.featured ? "text-[#FFFFFF80]" : "text-[#5A6578]"}`}>
                {plan.subtitle}
              </p>

              <div className={`mt-5 ${plan.featured ? "text-[#FFFFFF]" : "text-[#0A0E1A]"}`}>
                <span className="font-fraunces text-[44px] leading-none tracking-[-0.03em] sm:text-[50px] lg:text-[48px]">{plan.price}</span>
                <span className={`text-[18px] sm:text-[19px] lg:text-[16px] tracking-[-0.03em] ${plan.featured ? "text-[#FFFFFF80]" : "text-[#5A6578]"}`}>{plan.range}</span>
                <p className="mt-1 text-[13px] italic text-[#C9A961]">{plan.memberNote}</p>
              </div>

              <div className={`mt-5 border-t pt-5 ${plan.featured ? "border-[#1A2642]" : "border-[#E3E2DF]"}`}>
                <ul className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-2 text-[14px] leading-[1.45] ${plan.featured ? "text-[#FFFFFFD9]" : "text-[#1C2333]"}`}
                    >
                      <span className="mt-1 text-[14px] text-[#C9A961]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="#"
                className={`mt-7 flex h-[42px] w-full items-center justify-center rounded-full text-[12px] font-semibold transition ${plan.featured ? "bg-[#C9A961] text-[#0A0E1A] hover:brightness-95" : "bg-[#0A0E1A] text-white hover:opacity-90"}`}
              >
                Book Consultation
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type PricingItem = {
  eyebrow: string;
  title: string;
  subtitle: string;
  price: string;
  note: string;
  memberLabel: string;
  memberValue: string;
};

const pricingItems: PricingItem[] = [
  {
    eyebrow: "Most Common",
    title: "Emergency Exam + X-Ray",
    subtitle: "Diagnostic visit to identify the issue",
    price: "$150-$250",
    note: "Typical same-day visit",
    memberLabel: "Gleam members",
    memberValue: "Included",
  },
  {
    eyebrow: "Same-Day Fix",
    title: "Emergency Extraction",
    subtitle: "When a tooth can't be saved",
    price: "$200-$600",
    note: "Simple to surgical extraction",
    memberLabel: "Gleam members save 20%",
    memberValue: "$160-$480",
  },
  {
    eyebrow: "Save The Tooth",
    title: "Emergency Root Canal",
    subtitle: "Infection reaching the nerve",
    price: "$900-$1,500",
    note: "Depends on tooth location",
    memberLabel: "Gleam members save 20%",
    memberValue: "$720-$1,200",
  },
  {
    eyebrow: "Immediate Relief",
    title: "Abscess Drainage",
    subtitle: "Drain infection + antibiotics",
    price: "$200-$400",
    note: "Plus follow-up treatment plan",
    memberLabel: "Gleam members save 20%",
    memberValue: "$160-$320",
  },
  {
    eyebrow: "Fast Restoration",
    title: "Crown or Filling Repair",
    subtitle: "Reseat lost crown or replace filling",
    price: "$150-$1,500",
    note: "Temporary repair to full crown",
    memberLabel: "Gleam members save 20%",
    memberValue: "$120-$1,200",
  },
  {
    eyebrow: "For The Uninsured",
    title: "Gleam Membership",
    subtitle: "Priority emergency scheduling",
    price: "$297/year",
    note: "Covers exams + X-rays, 20% off everything",
    memberLabel: "Most emergencies",
    memberValue: "Pay for itself",
  },
];

export default function EmergencyPricingSection() {
  return (
    <section className="bg-[#F6F7F5] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px]">
        <div className="max-w-[980px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#21B8B8]" />
            <p className="text-[12px] uppercase tracking-[0.24em] text-[#20B2B2]">What It Costs</p>
          </div>
          <h2 className="mt-4 font-fraunces text-[44px] leading-[0.96] tracking-[-0.03em] text-[#111A2C] sm:text-[58px] lg:text-[76px]">
            Transparent pricing, <span className="font-light italic text-[#EC4252]">even in an emergency.</span>
          </h2>
          <p className="mt-5 max-w-[900px] text-[17px] leading-[1.6] text-[#697382] sm:text-[22px] lg:text-[30px]">
            No hidden fees. No surprise bills. We&apos;ll tell you the cost before we do anything - and Gleam
            members save 20% on all emergency procedures.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pricingItems.map((item) => (
            <article key={item.title} className="rounded-[16px] border border-[#E4E7E4] bg-[#F8FAF8] px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#22B0B0]">{item.eyebrow}</p>
              <h3 className="mt-3 font-fraunces text-[32px] leading-tight text-[#121C2E] sm:text-[37px] lg:text-[45px]">{item.title}</h3>
              <p className="mt-1 min-h-[42px] font-fraunces text-[18px] italic text-[#818A9A]">{item.subtitle}</p>
              <p className="mt-3 font-fraunces text-[40px] leading-none text-[#121C2E] sm:text-[48px] lg:text-[58px]">{item.price}</p>
              <p className="mt-1 text-[14px] text-[#6E7888]">{item.note}</p>

              <div className="mt-4 border-t border-[#E1E5E1] pt-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#22ACAC]">{item.memberLabel}</p>
                  <p className="font-fraunces text-[27px] italic text-[#20A9A9] sm:text-[31px] lg:text-[37px]">{item.memberValue}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

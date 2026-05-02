const treatCards = [
  {
    icon: "↔",
    title: "Crowding",
    description: "When teeth don't have enough room and overlap each other. The most common issue Invisalign corrects.",
  },
  {
    icon: "⟷",
    title: "Spacing / Gaps",
    description: "Gaps between teeth from missing teeth, small teeth, or natural spacing. Closes predictably.",
  },
  {
    icon: "↕",
    title: "Overbite",
    description: "Upper teeth overlap lower teeth significantly. Causes wear and jaw strain if untreated.",
  },
  {
    icon: "↘",
    title: "Underbite",
    description: "Lower teeth sit in front of upper teeth. Affects chewing, speech, and jaw alignment.",
  },
  {
    icon: "⇄",
    title: "Crossbite",
    description: "Upper and lower teeth don't align properly when biting. Can cause asymmetric jaw growth.",
  },
  {
    icon: "↻",
    title: "Relapse",
    description: "Teeth that shifted back after childhood braces - 70% of previously-braced adults experience this.",
  },
];

export default function InvisalignTreatsSection() {
  return (
    <section className="bg-[#F4F3EB] px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-24 lg:pb-24 lg:pt-14">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[900px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-[28px] bg-[#D9CCAD]" />
            <p className="text-[9px] uppercase tracking-[0.24em] text-[#C2B189]">What it treats</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[42px] leading-[0.92] tracking-tighter text-[#101624] sm:text-[58px] lg:text-[74px]">
            Nine out of ten <span className="font-light italic text-[#C9A961]">orthodontic cases.</span>
          </h2>

          <p className="mt-5 max-w-[820px] text-[17px] leading-normal text-[#687286] sm:text-[20px] lg:text-[22px]">
            Invisalign treats the vast majority of orthodontic issues - from minor crowding to complex
            bite corrections. Here's what we can fix.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {treatCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[14px] border border-[#E3E0D7] bg-[#F8F8F6] px-5 py-5 sm:px-6 sm:py-6"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#F2ECDC] font-fraunces text-[18px] text-[#1A2232]">
                {card.icon}
              </span>
              <h3 className="mt-4 font-fraunces text-[30px] leading-[0.98] text-[#121927] sm:text-[34px] lg:text-[38px]">{card.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#667081]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type ComparisonCard = {
  era: "The 1990s" | "Today";
  text: string;
};

const comparisonCards: ComparisonCard[] = [
  {
    era: "The 1990s",
    text: "Days of swelling, prescription opioids, living on applesauce.",
  },
  {
    era: "Today",
    text: "Back to normal in 3-4 days. Ibuprofen usually enough for pain.",
  },
  {
    era: "The 1990s",
    text: "Open referral. Two consultations. Weeks of waiting.",
  },
  {
    era: "Today",
    text: "Same office. Same dentist. In-house surgery suite.",
  },
];

export default function OralSurgeryModernEraSection() {
  return (
    <section className="bg-[#F3F3F1] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1180px] items-start gap-10 lg:grid-cols-[1fr_500px] lg:gap-16">
        <div className="max-w-[610px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#A2A7B0]" />
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#6E7686]">The Modern Era</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[42px] leading-[0.95] tracking-[-0.03em] text-[#1B2434] sm:text-[56px] lg:text-[72px]">
            This isn&apos;t <span className="font-light italic text-[#5E6675]">your mother&apos;s</span>
            <br />
            <span className="font-light italic text-[#5E6675]">surgery.</span>
          </h2>

          <div className="mt-7 space-y-5 text-[18px] leading-[1.82] text-[#626C7B] sm:text-[20px]">
            <p>
              If your mental image of oral surgery is the 1990s - days of swelling, bottles of
              prescription painkillers, a week of applesauce - it&apos;s out of date. Surgical techniques,
              anesthesia protocols, and imaging technology have advanced dramatically.
            </p>
            <p>
              A routine extraction today takes <span className="font-semibold text-[#253041]">10-20 minutes.</span>{" "}
              A root canal is no more uncomfortable than a filling. Wisdom teeth are typically removed under
              IV sedation - you sleep through it, wake up with no memory of the procedure, and most patients
              are <span className="font-semibold text-[#253041]">back to normal activities within 3-4 days.</span>
            </p>
            <p>
              We handle most oral surgery in-house. No referrals. No second consultations. No waiting weeks
              to see a separate surgeon across town. If you can be treated safely in our office, you&apos;ll be
              treated by the dentists you already know and trust.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {comparisonCards.map((card, index) => {
            const showVs = index === 1 || index === 3;
            return (
              <div key={`${card.era}-${index}`}>
                <article className="rounded-[14px] border border-[#E3E3E3] bg-[#F8F8F7] px-5 py-4 shadow-[0_3px_10px_rgba(16,24,40,0.08)] sm:px-6 sm:py-5">
                  <p
                    className={`text-[10px] uppercase tracking-[0.22em] ${
                      card.era === "The 1990s" ? "text-[#BF8761]" : "text-[#6E7788]"
                    }`}
                  >
                    {card.era}
                  </p>
                  <p className="mt-2 font-fraunces text-[28px] leading-[1.15] text-[#202A3B] sm:text-[32px] lg:text-[36px]">{card.text}</p>
                </article>
                {showVs ? (
                  <p className="py-2 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A93A2]">
                    vs today
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type CommitmentItem = {
  icon: string;
  title: string;
  description: string;
};

const commitmentItems: CommitmentItem[] = [
  {
    icon: "🎧",
    title: "Music you choose",
    description:
      "Bluetooth headphones with your Spotify. Many patients say they barely remember the sounds of the procedure.",
  },
  {
    icon: "📋",
    title: "Written aftercare plan",
    description: "Step-by-step instructions for the first 72 hours, including exactly when to call us.",
  },
  {
    icon: "📞",
    title: "Direct access for 7 days",
    description:
      "Every surgical patient gets our direct phone number for the first week. Call or text anytime.",
  },
  {
    icon: "💊",
    title: "Modern pain protocol",
    description:
      "Most patients manage with ibuprofen. Opioids only when truly necessary. We take pain management seriously.",
  },
  {
    icon: "🗓️",
    title: "Scheduled follow-up",
    description: "Every surgical patient has a check-in appointment within 7-10 days to ensure proper healing.",
  },
  {
    icon: "❤️",
    title: "No judgment, ever",
    description:
      "Anxious patients, first-time surgery patients, people who haven't been to the dentist in years — you're welcome here.",
  },
];

export default function OralSurgeryCommitmentSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0E1A] px-4 py-14 sm:px-10 sm:py-20 lg:py-[120px]">
      {/* Figma node 1:3350 — ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[100px] -top-[200px] size-[600px] rounded-full opacity-90"
        style={{
          background:
            "radial-gradient(circle at center, rgba(90, 114, 95, 0.22) 0%, rgba(10, 12, 16, 0) 65%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1216px] items-start gap-12 lg:grid-cols-[minmax(0,442px)_minmax(0,1fr)] lg:gap-x-[92px] lg:gap-y-0">
        <div className="max-w-[442px] my-auto">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-6 shrink-0 bg-[#8FA99F]" />
            <p className="text-[11px] font-semibold uppercase leading-[19.2px] tracking-[3px] text-[#8FA99F]">
              Our Commitment
            </p>
          </div>

          <h2 className="mt-5 font-fraunces text-[32px] font-light leading-[1.1] tracking-[-0.02em] text-white sm:text-[40px] md:text-[48px] lg:text-[56px] lg:leading-[1.05]">
            Your comfort,
            <br />
            <span className="font-light italic text-[#8FA99F]">engineered.</span>
          </h2>

          <div className="mt-8 space-y-6 text-[15px] font-normal leading-[26px] text-[#FFFFFFB2] sm:text-[16px] sm:leading-[27px] lg:text-[17px] lg:leading-[28.9px]">
            <p>
              Comfort isn&apos;t a bonus at our office — it&apos;s the protocol. Every surgical patient receives the
              same care, from the moment they arrive to the moment they&apos;re back to normal.
            </p>
            <p>
              We&apos;ve built our surgical process around{" "}
              <span className="font-semibold text-[#FFFFFF]">one question</span>: what do we wish had happened when
              we had surgery ourselves? Then we made that the standard.
            </p>
          </div>
        </div>

       
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
          {commitmentItems.map((item) => (
            <article
              key={item.title}
              className="flex h-full min-h-[200px] w-full flex-col rounded-[16px] border border-[#FFFFFF14] bg-[#FFFFFF08] p-5 sm:min-h-[228px] sm:p-[29px]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#8FA99F26] text-[24px] leading-none">
                <span aria-hidden className="select-none">
                  {item.icon}
                </span>
              </div>
              <h3 className="mt-5 font-fraunces text-[18px] font-normal leading-7 text-[#FFFFFF] sm:text-[19px] lg:text-[20px] lg:leading-8">
                {item.title}
              </h3>
              <p className="mt-3 text-[14px] font-normal leading-[1.5] text-[#FFFFFF99] sm:text-[15px]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
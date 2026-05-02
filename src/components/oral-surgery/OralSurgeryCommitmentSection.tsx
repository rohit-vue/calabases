type CommitmentItem = {
  icon: string;
  title: string;
  description: string;
};

const commitmentItems: CommitmentItem[] = [
  {
    icon: "◔",
    title: "Music you choose",
    description: "Bluetooth headphones with your Spotify. Many patients say they remember the sounds of the procedure.",
  },
  {
    icon: "◼",
    title: "Written aftercare plan",
    description: "Step-by-step instructions for the first 72 hours, including exactly when to call us.",
  },
  {
    icon: "◒",
    title: "Direct access for 7 days",
    description: "Every surgical patient gets our direct phone number for the first week. Call or text anytime.",
  },
  {
    icon: "◉",
    title: "Modern pain protocol",
    description: "Most patients manage with ibuprofen. Opioids only when truly necessary. We take pain management seriously.",
  },
  {
    icon: "◧",
    title: "Scheduled follow-up",
    description: "Every surgical patient has a check-in appointment within 7-10 days to ensure proper healing.",
  },
  {
    icon: "♥",
    title: "No judgment, ever",
    description: "Anxious patients, first-time surgery patients, people who haven't been to the dentist in years - you're welcome here.",
  },
];

export default function OralSurgeryCommitmentSection() {
  return (
    <section className="bg-[#020A1B] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1250px] items-start gap-10 lg:grid-cols-[340px_1fr] lg:gap-16">
        <div className="pt-2">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#6E7686]" />
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#8E97A8]">Our Commitment</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[44px] leading-[0.95] tracking-[-0.03em] text-[#E8ECF4] sm:text-[56px] lg:text-[72px]">
            Your comfort,
            <br />
            <span className="font-light italic text-[#9CA8BC]">engineered.</span>
          </h2>

          <div className="mt-6 space-y-4 text-[17px] leading-[1.72] text-[#9AA4B5] sm:text-[20px] lg:text-[23px]">
            <p>
              Comfort isn&apos;t a bonus at our office - it&apos;s the protocol. Every surgical patient receives
              the same care, from the moment they arrive to the moment they&apos;re back to normal.
            </p>
            <p>
              We&apos;ve built our surgical process around one question: what do we wish had happened when we
              had surgery ourselves? Then we made that the standard.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {commitmentItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[14px] border border-[#1A253A] bg-[linear-gradient(180deg,#0E1728_0%,#0A1323_100%)] px-4 pb-4 pt-4 sm:px-5 sm:pb-5"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] border border-[#253247] bg-[#0D182A] text-[13px] text-[#D2DAE7]">
                {item.icon}
              </span>
              <h3 className="mt-3 font-fraunces text-[28px] leading-tight text-[#EEF2F8] sm:text-[31px] lg:text-[35px]">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#8F9AAE] sm:text-[16px] lg:text-[18px]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

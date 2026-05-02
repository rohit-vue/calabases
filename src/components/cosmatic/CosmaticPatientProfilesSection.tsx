const profiles = [
  {
    icon: "📸",
    title: "The 80% Club",
    description:
      "The 80% of adults who are self-conscious about their teeth in photos — and finally want to not be.",
  },
  {
    icon: "💼",
    title: "On-Camera Professionals",
    description:
      "Executives, real estate agents, creators, and anyone whose career involves being seen on camera or in meetings.",
  },
  {
    icon: "💍",
    title: "Life Event Patients",
    description:
      "Cosmetic consults spike 300% in the six months before a wedding. Photos last forever — so should your smile.",
  },
  {
    icon: "⏳",
    title: "The \"Finally\" Crowd",
    description:
      "Patients who've thought about it for 3-10+ years and decided this is the year they stop waiting.",
  },
];

export default function CosmaticPatientProfilesSection() {
  return (
    <section className="bg-[#F5F2EB] px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-24 lg:pb-24 lg:pt-14">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-3">
            <span className="h-[0.2px] w-[28px] bg-[#C9A961]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C9A961]">Who Chooses Cosmetic Work</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[44px] font-light leading-[0.95] tracking-[-0.03em] text-[#0A0E1A] sm:text-[56px] lg:text-[52px]">
            Not who you&apos;d <span className="italic text-[#C9A961]">expect.</span>
          </h2>

          <p className="mt-5 max-w-[650px] text-[17px] leading-[1.45] text-[#5A6578] font-light sm:text-[20px] lg:text-[17px]">
            The typical cosmetic patient isn&apos;t a celebrity or a 22-year-old influencer. It&apos;s people
            who&apos;ve been thinking about it for years, and finally have the life circumstances to make it
            happen.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile) => (
            <article
              key={profile.title}
              className="rounded-[16px] border border-[#E4E0D6] bg-[#FFFFFF] px-5 py-5 sm:px-6 sm:py-9"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[32px]">
                {profile.icon}
              </span>
              <h3 className="mt-8 max-w-[210px] font-fraunces text-[28px] leading-[1.03] tracking-[-0.006em] text-[#0A0E1A] sm:text-[32px] lg:text-[20px]">
                {profile.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.62] text-[#5A6578]">{profile.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

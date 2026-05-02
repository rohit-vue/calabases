const adultsBenefits = [
  "Virtually invisible in photos and video calls",
  "Remove for important meetings or events",
  "Eat and drink anything without restrictions",
  "Ideal for post-childhood-braces relapse",
  "Perfect for pre-wedding smile prep",
];

const teensBenefits = [
  "No 'metal mouth' photos through high school",
  "Blue compliance dots show actual wear time",
  "Up to 6 replacement aligners included",
  "Removable for sports, music, photos",
  "Designed for still-erupting adult teeth",
];

function AudienceCard({
  eyebrow,
  titleMain,
  titleEmphasis,
  description,
  benefits,
  highlighted,
}: {
  eyebrow: string;
  titleMain: string;
  titleEmphasis: string;
  description: string;
  benefits: string[];
  highlighted?: boolean;
}) {
  return (
    <article
      className={`rounded-[16px] border px-6 py-7 sm:px-8 sm:py-8 ${
        highlighted
          ? "border-[#ECE3CF] bg-[#F5F0DD]"
          : "border-[#E5E7ED] bg-[#FAFBFC] shadow-[0_8px_24px_rgba(11,16,33,0.06)]"
      }`}
    >
      <p className="text-[9px] uppercase tracking-[0.24em] text-[#9BA5B7]">{eyebrow}</p>
      <h3 className="mt-3 font-fraunces text-[40px] leading-[0.92] tracking-tighter text-[#101624] sm:text-[52px] lg:text-[64px]">
        {titleMain} <span className="font-light italic text-[#C9A961]">{titleEmphasis}</span>
      </h3>
      <p className="mt-4 text-[16px] leading-[1.62] text-[#667081]">{description}</p>

      <ul className="mt-6 border-t border-[#E1E0D7]">
        {benefits.map((item) => (
          <li key={item} className="flex items-center gap-3 border-b border-[#E7E6DD] py-3 text-[15px] text-[#303A4B]">
            <span className="text-[#C9A961]">✦</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function InvisalignAudienceSection() {
  return (
    <section className="bg-[#F4F3EB] px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-24 lg:pb-24 lg:pt-14">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[900px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-[28px] bg-[#D9CCAD]" />
            <p className="text-[9px] uppercase tracking-[0.24em] text-[#C2B189]">Who it's for</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[42px] leading-[0.92] tracking-tighter text-[#101624] sm:text-[58px] lg:text-[74px]">
            Designed for <span className="font-light italic text-[#C9A961]">every age.</span>
          </h2>

          <p className="mt-5 max-w-[860px] text-[17px] leading-normal text-[#687286] sm:text-[20px] lg:text-[22px]">
            Whether you&apos;re a professional who doesn&apos;t want metal in board meetings, a teen who
            doesn&apos;t want braces in prom photos, or an adult whose teeth shifted back after childhood
            braces - Invisalign meets you where you are.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AudienceCard
            eyebrow="For adults"
            titleMain="Discreet. Flexible."
            titleEmphasis="Professional."
            description="Adults make up 1 in 4 orthodontic patients today - and most of them choose Invisalign specifically because it fits into professional life. No one notices in meetings. You can remove them for important presentations. You're never 'that adult in braces.'"
            benefits={adultsBenefits}
            highlighted
          />
          <AudienceCard
            eyebrow="For teens"
            titleMain="No metal. No"
            titleEmphasis="awkward photos."
            description="Invisalign Teen is designed specifically for growing smiles - with built-in compliance indicators that track wear time and replacement aligners in case one gets lost. Perfect for parents who want the result without the drama of metal braces."
            benefits={teensBenefits}
          />
        </div>
      </div>
    </section>
  );
}

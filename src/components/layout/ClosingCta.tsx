import Link from "next/link";

type ClosingCtaStat = {
  value: string;
  label: string;
};

/** Main content area (gradient + copy) — cosmetic landing uses this spacing. */
export const CLOSING_CTA_MAIN_WRAPPER_CLASSES =
  "relative px-4 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-24 lg:pb-20 lg:pt-24";

type ClosingCtaProps = {
  eyebrow?: string;
  titleStart?: string;
  titleEmphasis?: string;
  titleEnd?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  stats?: ClosingCtaStat[];
  footerText?: string;
  /** Override padding on the main inner wrapper; default matches cosmetic spacing. */
  mainWrapperClassName?: string;
  /** Hide the small uppercase line above the headline (cosmetic page). */
  hideEyebrow?: boolean;
  /** Optional glow behind the central content block (cosmetic page). */
  contentWrapperClassName?: string;
};

const defaultStats: ClosingCtaStat[] = [
  { value: "1,200+", label: "Cosmetic Procedures" },
  { value: "15+", label: "Years in Calabasas" },
  { value: "4.9 ★", label: "564 Reviews" },
];

export default function ClosingCta({
  eyebrow = "Ready When You Are",
  titleStart = "Your best smile is",
  titleEmphasis = "designed,",
  titleEnd = "not accidental.",
  subtitle = "Book a complimentary smile consultation. See your digital preview. Decide if it's the right year.",
  primaryCtaLabel = "Book Your Consultation",
  primaryCtaHref = "#",
  secondaryCtaLabel = "Call Us Directly",
  secondaryCtaHref = "tel:+18185550100",
  stats = defaultStats,
  footerText = "© 2026 Advanced Dentistry · Calabasas, CA · All Rights Reserved",
  mainWrapperClassName = CLOSING_CTA_MAIN_WRAPPER_CLASSES,
  hideEyebrow = false,
  contentWrapperClassName = "",
}: ClosingCtaProps) {
  return (
    <section className="overflow-hidden bg-[#020918]">
      <div className={mainWrapperClassName}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(56%_70%_at_50%_52%,rgba(34,52,98,0.6)_0%,rgba(2,9,24,0)_100%)]" />
        <div className="mx-auto w-full max-w-[1180px]">
          <div className={`relative z-10 mx-auto max-w-[760px] text-center ${contentWrapperClassName}`}>
            {hideEyebrow ? null : (
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#8E9AB0]">{eyebrow}</p>
            )}
            <h2 className="font-fraunces text-[54px] font-light leading-[0.95] tracking-[-0.045em] text-[#FFFFFF] sm:text-[68px]">
              {titleStart}
              <br />
              <span className="italic text-[#C9A961]">{titleEmphasis}</span> {titleEnd}
            </h2>

            <p className="mx-auto mt-5 max-w-[540px] font-fraunces text-[24px] font-light italic leading-[1.3] text-[#FFFFFF] sm:text-[22px]">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={primaryCtaHref}
                className="inline-flex h-[44px] items-center rounded-full border-2 border-[#000000] tracking-[0.023em] bg-[#C9A961] px-6 text-[14px] font-semibold text-[#0A0E1A] transition hover:brightness-95"
              >
                {primaryCtaLabel} <span className="ml-2">→</span>
              </Link>
              <Link
                href={secondaryCtaHref}
                className="inline-flex h-[44px] items-center rounded-full border border-[#FFFFFF4D] px-6 text-[14px] tracking-[0.023em] font-semibold text-[#E4E9F2] transition hover:bg-white/5"
              >
                {secondaryCtaLabel}
              </Link>
            </div>

            <div
              className={`mx-auto mt-10 grid max-w-[760px] border-t border-[#FFFFFF1A] pt-6 ${
                stats.length === 4 ? "grid-cols-2 gap-y-6 sm:grid-cols-4" : "grid-cols-3"
              }`}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-fraunces text-[43px] font-tight tracking-[-0.024em] leading-none text-[#C9A961] sm:text-[48px]">{stat.value}</p>
                  <p className="mt-2 text-[12px] uppercase tracking-[0.2em] text-[#FFFFFF80]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#FFFFFF14] bg-[#0A0E1A] px-4 py-8 sm:px-8 lg:px-24">
        <p className="mx-auto w-full max-w-[1180px] text-center text-[10px] text-[#FFFFFF66]">
          {footerText}
        </p>
      </div>
    </section>
  );
}

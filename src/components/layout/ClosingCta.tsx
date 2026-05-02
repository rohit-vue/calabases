import Link from "next/link";

export type ClosingCtaStat = {
  value: string;
  label: string;
};

/** Main content area (gradient + copy) — cosmetic landing uses this spacing. */
export const CLOSING_CTA_MAIN_WRAPPER_CLASSES =
  "relative px-4 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-24 lg:pb-20 lg:pt-24";

export type ClosingCtaProps = {
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
  /** Outer section background (solid or gradient). */
  background?: string;
  /** Full CSS background for the atmospheric overlay (radial-gradient, etc.). */
  heroOverlayGradient?: string;
  eyebrowColor?: string;
  headlineColor?: string;
  titleEmphasisColor?: string;
  subtitleColor?: string;
  primaryCtaBackground?: string;
  primaryCtaTextColor?: string;
  primaryCtaBorderColor?: string;
  secondaryCtaBorderColor?: string;
  secondaryCtaTextColor?: string;
  statsValueColor?: string;
  statsLabelColor?: string;
  statsDividerColor?: string;
  footerBarBackground?: string;
  footerBarBorderColor?: string;
  footerTextColor?: string;
  /** When true, renders horizontal rules on both sides of the eyebrow (italic Fraunces). */
  eyebrowLined?: boolean;
  /** Color for the side rules; defaults to `eyebrowColor`. */
  eyebrowLineColor?: string;
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
  background = "#020918",
  heroOverlayGradient =
    "radial-gradient(56% 70% at 50% 52%, rgba(34, 52, 98, 0.6) 0%, rgba(2, 9, 24, 0) 100%)",
  eyebrowColor = "#8E9AB0",
  headlineColor = "#FFFFFF",
  titleEmphasisColor = "#C9A961",
  subtitleColor = "#FFFFFF",
  primaryCtaBackground = "#C9A961",
  primaryCtaTextColor = "#0A0E1A",
  primaryCtaBorderColor = "#000000",
  secondaryCtaBorderColor = "rgba(255, 255, 255, 0.3)",
  secondaryCtaTextColor = "#E4E9F2",
  statsValueColor = "#C9A961",
  statsLabelColor = "rgba(255, 255, 255, 0.5)",
  statsDividerColor = "rgba(255, 255, 255, 0.1)",
  footerBarBackground = "#0A0E1A",
  footerBarBorderColor = "rgba(255, 255, 255, 0.08)",
  footerTextColor = "rgba(255, 255, 255, 0.4)",
  eyebrowLined = false,
  eyebrowLineColor,
}: ClosingCtaProps) {
  const ruleColor = eyebrowLineColor ?? eyebrowColor;

  return (
    <section className="overflow-hidden" style={{ background }}>
      <div className={mainWrapperClassName}>
        <div className="pointer-events-none absolute inset-0" style={{ background: heroOverlayGradient }} />
        <div className="mx-auto w-full max-w-[1180px]">
          <div className={`relative z-10 mx-auto max-w-[760px] text-center ${contentWrapperClassName}`}>
            {hideEyebrow ? null : eyebrowLined ? (
              <div className="flex items-center justify-center gap-3 sm:gap-5">
                <span
                  aria-hidden
                  className="h-px w-8 shrink-0 sm:w-9"
                  style={{ backgroundColor: ruleColor }}
                />
                <p
                  className="font-fraunces text-[10px] font-light italic uppercase tracking-[0.28em] sm:text-[11px]"
                  style={{ color: eyebrowColor }}
                >
                  {eyebrow}
                </p>
                <span
                  aria-hidden
                  className="h-px w-8 shrink-0 sm:w-9"
                  style={{ backgroundColor: ruleColor }}
                />
              </div>
            ) : (
              <p className="text-[14px] uppercase tracking-[0.3em]" style={{ color: eyebrowColor }}>
                {eyebrow}
              </p>
            )}
            <h2
              className={`font-fraunces text-[54px] font-light leading-[0.95] tracking-[-0.045em] sm:text-[68px] ${
                eyebrowLined ? "mt-2 sm:mt-3" : ""
              }`}
              style={{ color: headlineColor }}
            >
              {titleStart}{" "}
              <span className="italic" style={{ color: titleEmphasisColor }}>
                {titleEmphasis}
              </span>{" "}
              {titleEnd}
            </h2>

            <p
              className="mx-auto mt-5 max-w-[540px] font-fraunces text-[24px] font-light italic leading-[1.3] sm:text-[22px]"
              style={{ color: subtitleColor }}
            >
              {subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={primaryCtaHref}
                className="inline-flex h-[44px] items-center rounded-[100px] border-2 px-6 text-[14px] font-semibold tracking-[0.023em] transition hover:brightness-95"
                style={{
                  backgroundColor: primaryCtaBackground,
                  color: primaryCtaTextColor,
                  borderColor: primaryCtaBorderColor,
                }}
              >
                {primaryCtaLabel} <span className="ml-2">→</span>
              </Link>
              <Link
                href={secondaryCtaHref}
                className="inline-flex h-[44px] items-center rounded-[100px] border px-6 text-[14px] font-semibold tracking-[0.023em] transition hover:bg-white/5"
                style={{
                  borderColor: secondaryCtaBorderColor,
                  color: secondaryCtaTextColor,
                }}
              >
                {secondaryCtaLabel}
              </Link>
            </div>

            <div
              className={`mx-auto mt-10 grid max-w-[760px] border-t border-solid pt-6 ${
                stats.length === 4 ? "grid-cols-2 gap-y-6 sm:grid-cols-4" : "grid-cols-3"
              }`}
              style={{ borderTopColor: statsDividerColor }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-fraunces text-[43px] font-light leading-none tracking-[-0.029em] sm:text-[44px]"
                    style={{ color: statsValueColor }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[12px] max-w-[150px] mx-auto text-center uppercase tracking-[0.2em]" style={{ color: statsLabelColor }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="border-t border-solid px-4 py-8 sm:px-8 lg:px-24"
        style={{
          backgroundColor: footerBarBackground,
          borderTopColor: footerBarBorderColor,
        }}
      >
        <p className="mx-auto w-full max-w-[1180px] text-center text-[13px]" style={{ color: footerTextColor }}>
          {footerText}
        </p>
      </div>
    </section>
  );
}

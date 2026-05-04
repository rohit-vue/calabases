export type TestimonialSectionProps = {
  quote: string;
  authorName: string;
  authorSubtext: string;
  authorInitials: string;
  /** Section background: solid color or CSS `linear-gradient(...)` */
  background: string;
  /** Eyebrow, star row, and default avatar fill unless `avatarBackground` is set */
  accentColor: string;
  quoteColor: string;
  authorNameColor: string;
  authorMetaColor: string;
  /** Large decorative opening quotation mark */
  quoteMarkColor: string;
  avatarTextColor: string;
  /** CSS background for the avatar (solid or gradient). Defaults to `accentColor`. */
  avatarBackground?: string;
  /** Small uppercase line above the quote (omit when unused) */
  label?: string;
  /** Renders a five-star row above the quote */
  showStars?: boolean;
  /** Star color; defaults to `accentColor` */
  starsColor?: string;
};

/** Shared testimonial block: spacing and type scale match the cosmetic page standard site-wide. */
export default function TestimonialSection({
  quote,
  authorName,
  authorSubtext,
  authorInitials,
  background,
  accentColor,
  quoteColor,
  authorNameColor,
  authorMetaColor,
  quoteMarkColor,
  avatarTextColor,
  avatarBackground,
  label,
  showStars,
  starsColor,
}: TestimonialSectionProps) {
  const starTint = starsColor ?? accentColor;
  const avatarBg = avatarBackground ?? accentColor;

  return (
    <section className="px-4 py-10 sm:px-8 sm:py-14 md:py-16 lg:px-24 lg:py-24" style={{ background }}>
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="relative mx-auto max-w-[900px] text-center">
          <span
            aria-hidden="true"
            className="absolute left-0 top-[-10px] font-fraunces text-[100px] leading-none sm:left-[-12px] sm:text-[140px] md:left-[-20px] md:text-[160px] lg:left-[-25px] lg:text-[180px]"
            style={{ color: quoteMarkColor }}
          >
            "
          </span>

          {showStars ? (
            <p
              className="text-[16px] tracking-[0.22em] sm:text-[18px] lg:text-[20px] lg:tracking-[0.3em]"
              style={{ color: starTint }}
            >
              ★★★★★
            </p>
          ) : null}

          {label ? (
            <p
              className="mt-3 text-center font-fraunces text-[12px] uppercase tracking-[0.2em] sm:mt-4 sm:text-[13px] lg:mt-0 lg:text-[14px]"
              style={{ color: accentColor }}
            >
              {label}
            </p>
          ) : null}

          <blockquote
            className="mx-auto mt-4 max-w-[760px] text-center font-fraunces text-[22px] font-light italic leading-[1.28] tracking-[-0.02em] sm:mt-5 sm:text-[26px] sm:leading-[1.26] md:text-[30px] md:leading-[1.24] lg:mt-6 lg:text-[40px] lg:leading-[1.22]"
            style={{ color: quoteColor }}
          >
            {quote}
          </blockquote>

          <div className="mt-6 flex items-center justify-center gap-2.5 sm:mt-8 sm:gap-3 lg:mt-10">
            <span
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[24px] text-[16px] font-semibold lg:h-12 lg:w-12 lg:rounded-[28px] lg:text-[20px]"
              style={{
                background: avatarBg,
                color: avatarTextColor,
              }}
            >
              {authorInitials}
            </span>
            <div className="text-left">
              <p className="text-[15px] font-semibold lg:text-[16px]" style={{ color: authorNameColor }}>
                {authorName}
              </p>
              <p className="mt-0.5 text-[12px] lg:text-[13px]" style={{ color: authorMetaColor }}>
                {authorSubtext}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

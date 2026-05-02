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
    <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-24 lg:py-24" style={{ background }}>
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="relative mx-auto max-w-[900px] text-center">
          <span
            aria-hidden="true"
            className="absolute left-[-25px] top-0 font-fraunces text-[160px] leading-none sm:text-[180px]"
            style={{ color: quoteMarkColor }}
          >
            "
          </span>

          {showStars ? (
            <p className="text-[20px] tracking-[0.3em]" style={{ color: starTint }}>
              ★★★★★
            </p>
          ) : null}

          {label ? (
            <p
              className="text-center font-fraunces text-[14px] uppercase tracking-[0.2em]"
              style={{ color: accentColor }}
            >
              {label}
            </p>
          ) : null}

          <blockquote
            className="mx-auto mt-6 max-w-[760px] text-center font-fraunces text-[30px] font-light italic leading-[1.22] tracking-[-0.02em] sm:text-[44px] lg:text-[40px]"
            style={{ color: quoteColor }}
          >
            {quote}
          </blockquote>

          <div className="mt-10 flex items-center justify-center gap-3">
            <span
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[28px] text-[20px] font-semibold"
              style={{
                background: avatarBg,
                color: avatarTextColor,
              }}
            >
              {authorInitials}
            </span>
            <div className="text-left">
              <p className="text-[16px] font-semibold" style={{ color: authorNameColor }}>
                {authorName}
              </p>
              <p className="mt-0.5 text-[13px]" style={{ color: authorMetaColor }}>
                {authorSubtext}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

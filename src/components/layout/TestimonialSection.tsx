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
            className="pointer-events-none absolute left-3 top-[-25px] w-[30px] sm:left-[-12px] sm:w-[140px] md:left-[30px] md:w-[45px] lg:left-[-145px] lg:w-[58px]"
          >
            <svg
              className="block h-auto w-full"
              viewBox="0 0 87 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M67.2 129.6C66.6667 129.6 66.2 129.4 65.8 129C65.4 128.6 65.1333 127.934 65 127L51.8 26.2004C50.3333 17.8004 51.0667 11.3337 54 6.80037C56.9333 2.26705 61.7333 0.000385284 68.4 0.000385284C75.2 0.000385284 80 2.26705 82.8 6.80037C85.6 11.3337 86.1333 17.7337 84.4 26.0004L69.4 127C69.1333 128.067 68.8 128.8 68.4 129.2C68 129.467 67.6 129.6 67.2 129.6ZM17.6 129.8C17.0667 129.8 16.6 129.6 16.2 129.2C15.8 128.8 15.5333 128.134 15.4 127.2L2.2 26.4004C0.733334 18.0004 1.46667 11.5337 4.4 7.00038C7.33333 2.46704 12.1333 0.200371 18.8 0.200371C25.6 0.200371 30.4 2.46704 33.2 7.00038C36 11.5337 36.5333 17.9337 34.8 26.2004L19.8 127.2C19.5333 128.267 19.2 129 18.8 129.4C18.4 129.667 18 129.8 17.6 129.8Z"
                fill={quoteMarkColor}
              />
            </svg>
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
            className="mx-auto mt-4 max-w-[760px] px-1 text-center font-fraunces text-[18px] font-light italic leading-[1.28] tracking-[-0.02em] sm:mt-5 sm:px-0 sm:text-[22px] sm:leading-[1.26] md:text-[28px] md:leading-[1.24] lg:mt-6 lg:text-[40px] lg:leading-[1.22]"
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

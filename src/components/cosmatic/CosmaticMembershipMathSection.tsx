import Link from "next/link";

type MembershipRow = {
  treatment: string;
  standard: string;
  gleam: string;
  save: string;
};

type CosmaticMembershipMathSectionProps = {
  eyebrow?: string;
  titleStart?: string;
  titleEmphasis?: string;
  subtitle?: React.ReactNode;
  body?: string;
  tableHeaderFirstCol?: string;
  rows?: MembershipRow[];
  footerLabel?: string;
  footerPrice?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const defaultRows: MembershipRow[] = [
  { treatment: "Teeth Whitening", standard: "$650", gleam: "$520", save: "$130" },
  { treatment: "Gummy Smile Correction", standard: "$1,800", gleam: "$1,440", save: "$360" },
  { treatment: "Single Veneer", standard: "$2,500", gleam: "$2,000", save: "$500" },
  { treatment: "8-Veneer Smile Makeover", standard: "$20,000", gleam: "$16,000", save: "$4,000" },
];

export default function CosmaticMembershipMathSection({
  eyebrow = "Gleam Membership",
  titleStart = "The math is",
  titleEmphasis = "simple.",
  subtitle = "Gleam Membership pays for itself before you finish your first treatment.",
  body = "For $297/year, you save 20% on every cosmetic procedure - plus free cleanings, exams, and X-rays. Most cosmetic patients save 10x the cost of membership in a single visit.",
  tableHeaderFirstCol = "Treatment",
  rows = defaultRows,
  footerLabel = "Gleam Membership",
  footerPrice = "$297/yr",
  ctaLabel = "Join Today",
  ctaHref = "#",
}: CosmaticMembershipMathSectionProps) {
  return (
    <section className="bg-[linear-gradient(106.66deg,#F5EDD8_0%,#EDE2C2_100%)] px-4 py-14 sm:px-8 sm:py-16 lg:px-24 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
        <div className="min-w-0 max-w-[470px] mx-auto text-center lg:mx-0 lg:text-left">
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <span className="font-fraunces text-[#5A6578] italic uppercase">§</span>
            <p className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B87333]">
              {eyebrow}
            </p>
          </div>

          <h2 className="mt-4 font-fraunces font-light text-[32px] leading-[0.95] tracking-[-0.029em] text-[#0A0E1A] sm:text-[44px] md:text-[50px] lg:text-[56px]">
            {titleStart} <span className="italic text-[#B87333]">{titleEmphasis}</span>
          </h2>

          <p className="mt-4 max-w-[420px] mx-auto font-fraunces text-[18px] font-light italic leading-[1.22] text-[#1C2333] sm:text-[22px] lg:mx-0 lg:text-[20px]">
            {subtitle}
          </p>

          <p className="mt-6 max-w-[460px] mx-auto text-[14px] leading-[1.62] text-[#1C2333] sm:text-[15px] lg:mx-0 lg:text-[15px]">
            {body}
          </p>
        </div>

        <div className="min-w-0 overflow-hidden rounded-[10px] border border-[#E4E0D6] bg-[#F8F8F7] shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <div className="grid w-full min-w-0 grid-cols-4 gap-x-0.5 bg-[#FAF8F3] px-2 py-2.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-[#5A6578] sm:gap-x-2 sm:px-4 sm:py-3 sm:text-[10px] sm:tracking-[0.16em] lg:px-5">
            <p className="min-w-0 wrap-break-word">{tableHeaderFirstCol}</p>
            <p className="min-w-0 wrap-break-word text-center">Standard</p>
            <p className="min-w-0 wrap-break-word text-center">Gleam Price</p>
            <p className="min-w-0 wrap-break-word text-center">You Save</p>
          </div>

          <div>
            {rows.map((row) => (
              <div
                key={row.treatment}
                className="grid w-full min-w-0 grid-cols-4 items-center gap-x-0.5 border-t border-[#E4E0D6] px-2 py-3 sm:gap-x-2 sm:px-4 sm:py-4 lg:px-5"
              >
                <p className="min-w-0 text-[11px] font-inter font-semibold leading-snug text-[#0A0E1A] sm:text-[13px] lg:text-[14px]">
                  {row.treatment}
                </p>
                <p className="min-w-0 text-center text-[11px] leading-tight text-[#5A6578] line-through sm:text-[13px] lg:text-[14px]">
                  {row.standard}
                </p>
                <p className="min-w-0 text-center text-[11px] font-semibold leading-tight text-[#B87333] sm:text-[13px] lg:text-[14px]">
                  {row.gleam}
                </p>
                <p className="min-w-0 text-center text-[11px] font-semibold leading-tight text-[#FF6B35] sm:text-[13px] lg:text-[14px]">
                  {row.save}
                </p>
              </div>
            ))}
          </div>

          <div className="flex w-full min-w-0 flex-row flex-nowrap items-center justify-between gap-2 bg-[#020918] px-3 py-3 text-white md:grid md:grid-cols-4 md:items-center md:gap-x-3 md:gap-y-0 md:px-4 md:py-3 lg:px-5">
            <p className="min-w-0 shrink font-fraunces text-[10px] italic leading-tight text-[#FFFFFF] sm:text-[11px] md:text-left md:text-[18px] md:leading-none lg:text-[14px]">
              {footerLabel}
            </p>
            <p className="min-w-0 shrink whitespace-nowrap text-center text-[10px] leading-none text-[#FFFFFF80] sm:text-[11px] md:text-center md:text-[14px] md:leading-none md:whitespace-nowrap lg:text-[14px]">
              {footerPrice}
            </p>
            <div className="flex min-w-0 shrink justify-end md:justify-start">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-0.5 font-fraunces text-[11px] font-semibold leading-none text-[#FFFFFF] transition hover:text-white sm:text-[12px] md:gap-1 md:text-[22px] md:whitespace-nowrap lg:text-[20px]"
              >
                {ctaLabel}
                <span
                  aria-hidden="true"
                  className="ml-0.5 text-[12px] font-bold leading-none text-[#C9A961] md:ml-2 md:text-[18px]"
                >
                  →
                </span>
              </Link>
            </div>
            <div className="hidden min-w-0 md:block" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

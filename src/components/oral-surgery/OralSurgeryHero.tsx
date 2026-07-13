import Link from "next/link";

/** Radial gold arcs at 12 / 3 / 6 / 9 o'clock — matches Figma comfort badge (node ~1-3018). */
function ComfortRatingRing({ className }: { className?: string }) {
  const cx = 120;
  const cy = 120;
  const r = 100;
  const gold = "#C9A961";
  const base = "#E4E0D6";
  const strokeBase = 9;
  const strokeGold = 10;
  /** Degrees of each gold arc (gaps are implicit between the four segments). */
  const arcDeg = 38;

  const rad = (deg: number) => (deg * Math.PI) / 180;
  /** SVG coords: 0° = 3 o'clock, clockwise (y down). */
  const pt = (deg: number) => ({
    x: cx + r * Math.cos(rad(deg)),
    y: cy + r * Math.sin(rad(deg)),
  });

  const arcPath = (centerDeg: number) => {
    const half = arcDeg / 2;
    const a0 = centerDeg - half;
    const a1 = centerDeg + half;
    const p0 = pt(a0);
    const p1 = pt(a1);
    const large = arcDeg > 180 ? 1 : 0;
    return `M ${p0.x} ${p0.y} A ${r} ${r} 0 ${large} 1 ${p1.x} ${p1.y}`;
  };

  /** Clock positions → SVG angle from 3 o'clock clockwise: 12=-90°, 3=0°, 6=90°, 9=180°. */
  const centers = [-90, 0, 90, 180];

  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx={cx} cy={cy} r={r} stroke={base} strokeWidth={strokeBase} />
      {centers.map((c, i) => (
        <path
          key={i}
          d={arcPath(c)}
          stroke={gold}
          strokeWidth={strokeGold}
          strokeLinecap="round"
          fill="none"
        />
      ))}
    </svg>
  );
}

const heroStats = [
  {
    value: (
      <>
        <span className="font-fraunces italic text-[#5E7267]">500</span>
        <span className="font-fraunces text-[#0A0E1A]">+</span>
      </>
    ),
    label: "Procedures Yearly",
  },
  {
    value: (
      <>
        <span className="font-fraunces text-[#0A0E1A]">95</span>
        <span className="font-fraunces text-[#5E7267]">%</span>
      </>
    ),
    label: "Patient Satisfaction",
  },
  {
    value: (
      <>
        <span className="font-fraunces italic text-[#5E7267]">4</span>
        <span className="font-fraunces text-[#0A0E1A]"> Levels</span>
      </>
    ),
    label: "Sedation Options",
  },
];

export default function OralSurgeryHero() {
  return (
    <section
      className="relative overflow-hidden pb-14 pt-8 sm:pb-20 sm:pt-10 lg:pb-[5.5rem] lg:pt-12"
      style={{
        backgroundImage: "linear-gradient(179.66deg, rgb(255, 255, 255) 53.73%, rgb(228, 221, 200) 99.45%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[10%] -left-[10%] size-[500px] rounded-[250px] opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(143, 169, 159, 0.12) 0%, rgba(143, 169, 159, 0) 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1216px] px-4 sm:px-10 lg:px-8 xl:px-0">
        <p className="break-words text-center text-[10px] font-medium uppercase leading-[19.2px] tracking-[1.5px] text-[#5A6578] sm:text-[11px] sm:tracking-[1.8px] lg:text-left">
          Home / Services / Oral Surgery
        </p>

        <div className="mx-auto mt-5 flex min-h-[41px] max-w-full flex-wrap items-center justify-center gap-2 rounded-[100px] border border-[#E4E0D6] bg-white py-2 pl-4 pr-5 shadow-[0px_1px_3px_0px_#00000005] sm:py-0 sm:pl-5 sm:pr-6 lg:mx-0 lg:inline-flex lg:justify-start">
          <span className="size-2 shrink-0 rounded-[4px] bg-[#8FA99F]" aria-hidden />
          <p className="text-[11px] font-semibold uppercase leading-[18px] tracking-[1.5px] text-[#5E7267] sm:text-[11px] sm:leading-[19.2px] sm:tracking-[1.8px]">
            Calm, Modern Surgical Suite · In-House
          </p>
        </div>

        <div className="mt-10 grid items-start gap-12 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_505px] lg:gap-x-12 xl:gap-x-16">
          <div className="text-center lg:text-left">
            <h1 className="mx-auto max-w-[520px] font-fraunces text-[36px] font-light leading-[0.95] tracking-[-2.5px] text-[#0A0E1A] sm:text-[52px] sm:leading-[0.98] sm:tracking-[-4.32px] md:text-[72px] lg:mx-0 lg:text-[96px] xl:text-[86px] xl:leading-[99px] xl:tracking-[-4.32px]">
              <span className="block">
                Surgery,{" "}
                <span className="italic text-[#B87333]">softer</span>
              </span>
              <span className="block">than you</span>
              <span className="block">remember it.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-[540px] font-fraunces text-[17px] font-light italic leading-[1.45] text-[#1C2333] sm:text-[20px] sm:leading-[33.6px] lg:mx-0 lg:text-[22px] lg:leading-[1.4]">
              <span className="block">
                Modern oral surgery has cut recovery time by{" "}
                <span className="font-normal not-italic text-[#0A0E1A]">60%</span>
              </span>
              <span className="block">
                and pain scores by{" "}
                <span className="font-normal not-italic text-[#0A0E1A]">75%</span>. It&apos;s nothing like it used to
                be.
              </span>
            </p>

            <p className="mx-auto mt-6 max-w-[500px] text-[12px] leading-[24px] text-[#5A6578] sm:text-[16px] sm:leading-[27.2px] lg:mx-0">
              Extractions. Root canals. Wisdom teeth removal. 500+ surgical procedures performed annually — in-house,
              with IV sedation available for every patient who wants it. No referrals. No strangers in scrubs.
            </p>

            <div className="mt-9 flex w-full flex-col gap-3 sm:gap-4 lg:flex-row lg:flex-wrap lg:items-center">
              <Link
                href="https://app.nexhealth.com/appts/advanced-dentists-group/appt-type?lid=354035"
                target="_blank"
                className="flex h-[52px] w-full items-center justify-center rounded-[100px] border-2 border-[#000000] bg-[#0A0E1A] px-6 text-[13px] font-semibold tracking-[-0.28px] text-white transition hover:opacity-95 lg:inline-flex lg:h-[46px] lg:w-auto lg:px-[30px] lg:text-[14px]"
              >
                Book a Consultation <span className="ml-2 font-bold">→</span>
              </Link>
              <Link
                href="https://app.nexhealth.com/appts/advanced-dentists-group/appt-type?lid=354035"
                target="_blank"
                className="flex h-[52px] w-full items-center justify-center rounded-[100px] border border-[#E4E0D6] bg-white px-6 text-[13px] font-semibold tracking-[-0.28px] text-[#0A0E1A] transition hover:bg-[#fafafa] lg:inline-flex lg:h-[46px] lg:w-auto lg:px-[29px] lg:text-[14px]"
              >
                See Procedures
              </Link>
            </div>

            <div className="mt-10 border-t border-[#E4E0D6] pt-[30px]">
              <div className="grid justify-items-center gap-8 text-center sm:grid-cols-3 sm:gap-6 lg:max-w-[631px] lg:justify-items-start lg:text-left">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-fraunces text-[22px] leading-none tracking-[-0.56px] sm:text-[26px] lg:text-[28px]">{stat.value}</p>
                    <p className="mt-2.5 text-[10px] font-medium uppercase leading-[16px] tracking-[1.5px] text-[#5A6578] sm:text-[11px] sm:leading-[17.6px] sm:tracking-[1.65px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-[505px] rounded-[20px] border border-[#E4E0D6] bg-white p-6 shadow-[0px_30px_60px_rgba(0,0,0,0.06)] sm:p-8 lg:mx-0 lg:mt-9 lg:p-10">
            <div className="flex flex-wrap items-end justify-between gap-2 border-b border-[#E4E0D6] pb-[10px]">
              <p className="text-[9px] font-bold uppercase leading-4 tracking-[2.5px] text-[#5E7267] sm:text-[10px] sm:tracking-[2.5px]">Comfort Report · Q1 2026</p>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-sm bg-[#C9A961]" aria-hidden />
                <p className="text-[11px] font-semibold text-[#5E7267]">Verified</p>
              </div>
            </div>

            <div className="relative pt-6">
              <div className="relative mx-auto flex h-[200px] w-[200px] items-center justify-center sm:h-[220px] sm:w-[220px] lg:h-[240px] lg:w-[240px]">
                <ComfortRatingRing className="pointer-events-none absolute inset-0 size-full max-h-full max-w-full" />
                <div className="relative z-[1] flex flex-col items-center text-center">
                  <div className="flex items-start justify-center gap-0">
                    <span className="font-fraunces text-[54px] font-light leading-none tracking-[-2.4px] text-[#0A0E1A] sm:text-[64px] sm:tracking-[-2.88px] lg:text-[72px]">
                      95
                    </span>
                    <span className="ml-0.5 mt-0.5 font-fraunces text-[22px] font-light italic leading-none text-[#5E7267] sm:tracking-[-2.88px] sm:mt-1 sm:text-[26px] lg:mt-1.5 lg:text-[28px]">
                      %
                    </span>
                  </div>
                  <p className="mt-1.5 font-fraunces text-[13px] italic leading-[20px] text-[#5A6578] sm:mt-2 sm:text-[14px] sm:leading-[22.4px]">
                    comfort rating
                  </p>
                </div>
              </div>

              <p className="mt-6 text-center font-fraunces text-[17px] leading-[24px] tracking-[-0.2px] text-[#0A0E1A] sm:text-[19px] lg:text-[20px] lg:leading-[26px]">
                &quot;Easier than I expected.&quot;
              </p>
              <p className="mx-auto mt-3 max-w-[360px] text-center text-[12px] leading-[18px] text-[#5A6578] sm:text-[13px] sm:leading-[19.5px]">
                The most common thing patients say after their surgical appointment.
              </p>
            </div>

            <div className="mt-8 flex items-start justify-between border-t border-[#E4E0D6] pt-6">
              <div>
                <p className="text-[10px] font-semibold uppercase leading-4 tracking-[1.5px] text-[#5A6578]">Pain score</p>
                <p className="mt-2 font-fraunces text-[14px] italic leading-[22.4px] text-[#0A0E1A]">2.1 / 10</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-semibold uppercase leading-4 tracking-[1.5px] text-[#5A6578]">Recovery</p>
                <p className="mt-2 font-fraunces text-[14px] italic leading-[22.4px] text-[#0A0E1A]">2-3 days typical</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
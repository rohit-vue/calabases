import Link from "next/link";

const heroStats = [
  { value: "★★★★★", subValue: "564 Google Reviews" },
  { value: "5,000 +", subValue: "patients served" },
  { value: "Same-day", subValue: "emergencies" },
];

const bottomStats = [
  { value: "4.9 ★", label: "564 Reviews" },
  { value: "5,000+", label: "Patients Served" },
  { value: "15+", label: "Years in Calabasas" },
  { value: "7 days", label: "Same-Week Appts" },
];

export default function GeneralHero() {
  return (
    <section className="px-4 pb-10 pt-8 sm:px-12 sm:pb-16 sm:pt-12 lg:px-32 lg:pb-20 lg:pt-14">
      <div className="mx-auto w-full max-w-[1180px]">
        <p className="mb-6 text-[10px] font-normal uppercase tracking-[0.14em] text-[#5A6578]">
          Home / Services / General Dentistry
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,65%)_minmax(0,35%)] lg:items-stretch lg:gap-10">
          <div className="min-w-0 max-w-[620px] lg:max-w-none">
            <h1 className="font-fraunces text-[40px] font-normal leading-[0.93] text-[#0A0E1A] sm:text-[62px] tracking-[-0.06em]">
              General <span className="text-[#C9A961] font-light italic">Dentistry</span>
              <br />
              in Calabasas.
            </h1>

            <div className="mt-5 border-l-[3px] border-[#C9A961] pl-3">
              <p className="max-w-[620px] font-fraunces text-[17px] font-light italic leading-[1.3] text-[#1C2333]">
                <span className="not-italic font-semibold">1 in 4</span> American adults has an untreated
                cavity right now.
                <br />
                Don&apos;t be one of them.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-1 border-y-[0.5px] border-black sm:grid-cols-3">
              {heroStats.map((stat, idx) => (
                <div
                  key={stat.subValue}
                  className={`relative flex flex-col items-center justify-center py-3 text-center ${idx > 0 ? "border-t-[0.5px] border-black sm:border-t-0 sm:before:absolute sm:before:bottom-2 sm:before:left-0 sm:before:top-2 sm:before:w-[0.5px] sm:before:bg-black sm:before:content-['']" : ""} sm:px-6`}
                >
                  <p
                    className={`leading-none ${idx === 0 ? "text-[#F4A261] text-[22px]" : "font-bold text-black text-[15px]"}`}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 font-helvetica-neue text-[14px] font-normal leading-[1.1] text-black">
                    {stat.subValue}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="#"
                className="w-full rounded-full bg-[#0A0E1A] px-6 py-3 text-[12px] font-semibold text-white transition hover:opacity-90 sm:w-auto"
              >
                <span className="inline-flex items-center">
                  Book Your Appointment <span className="ml-2" aria-hidden="true">→</span>
                </span>
              </Link>
              <Link
                href="#"
                className="w-full rounded-full border-2 border-[#0A0E1A] px-6 py-3 text-[12px] font-semibold text-[#0A0E1A] transition hover:bg-white sm:w-auto"
              >
                See Gleam Membership
              </Link>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-[#e3ddd4] pt-4 sm:grid-cols-4">
              {bottomStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[16px] font-normal font-fraunces text-[#0A0E1A]">{stat.value}</p>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-[#5A6578]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto flex h-full w-full max-w-[360px] flex-col lg:mx-0 lg:max-w-none">
            <div className="flex min-h-0 flex-1 flex-col rounded-[24px] bg-[linear-gradient(to_bottom_right,#1A2332,#0A0E1A)] p-[14px]">
              <aside className="flex h-full min-h-0 flex-col rounded-[10px] bg-white px-6 pb-5 pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#C9A961]">As low as</p>
                <div className="mt-2.5 flex items-end gap-1.5">
                  <span className="font-fraunces text-[62px] leading-[0.85] text-[#0A0E1A] sm:text-[82px]">$297</span>
                  <span className="pb-2 text-[13px] leading-none text-[#5A6578] sm:pb-2.5 sm:text-[14px]">/year</span>
                </div>

                <p className="mt-2 inline-block w-fit pt-0.5 text-[12px] text-[#C9A961] line-through">
                  - vs $1,200+ dental insurance
                </p>

                <h3 className="mt-3 font-fraunces text-[20px] leading-[1.02] text-[#0A0E1A]">
                  Gleam Membership
                </h3>

                <ul className="mt-6 flex-1 space-y-1 text-[12px] text-[#1C2333] sm:mt-8">
                  <li className="flex items-center gap-2.5">
                    <span className="text-[13px] text-[#c8a65e]">✓</span>
                    <span>Unlimited Cleanings</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[13px] text-[#c8a65e]">✓</span>
                    <span>Unlimited X-Rays &amp; Exams</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[13px] text-[#c8a65e]">✓</span>
                    <span>20% Off All Procedures</span>
                  </li>
                </ul>

                <Link
                  href="#"
                  className="mt-auto flex h-[40px] w-full items-center justify-center rounded-full bg-[#C9A961] text-[11px] font-semibold text-white transition hover:brightness-95"
                >
                  <span className="inline-flex items-center">
                    Join in 60 seconds <span className="ml-1.5" aria-hidden="true">→</span>
                  </span>
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const heroStats = [
  { value: "500+", label: "Procedures yearly" },
  { value: "95%", label: "Patient satisfaction" },
  { value: "4 Levels", label: "Sedation options" },
];

export default function OralSurgeryHero() {
  return (
    <section className="bg-[#F0EEDF] px-4 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-10 lg:px-20 lg:pb-20 lg:pt-12">
      <div className="mx-auto w-full max-w-[1180px]">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[#8D95A4]">Home / Services / Oral Surgery</p>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E2DED1] bg-[#F6F4EC] px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B58A58]" />
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#9A8B74]">Calm, Modern Surgical Suite - In-House</p>
        </div>

        <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1fr_430px] lg:gap-16">
          <div>
            <h1 className="max-w-[640px] font-fraunces text-[46px] leading-[0.92] tracking-[-0.03em] text-[#0B1222] sm:text-[64px] lg:text-[90px]">
              Surgery, <span className="font-light italic text-[#B37C47]">softer</span>
              <br />
              than you
              <br />
              remember it.
            </h1>

            <p className="mt-6 max-w-[610px] font-fraunces text-[24px] italic leading-[1.28] text-[#313949] sm:text-[28px] lg:text-[34px]">
              Modern oral surgery has cut recovery time by 60% and pain scores by 75%. It&apos;s nothing like
              it used to be.
            </p>

            <p className="mt-6 max-w-[620px] text-[16px] leading-[1.85] text-[#5E6777]">
              Extractions. Root canals. Wisdom teeth removal. 500+ surgical procedures performed annually -
              in-house, with IV sedation available for every patient who wants it. No referrals. No
              strangers in scrubs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#"
                className="inline-flex h-[46px] items-center rounded-full bg-[#020918] px-7 text-[13px] font-semibold text-white transition hover:opacity-90"
              >
                Book a Consultation <span className="ml-2">→</span>
              </Link>
              <Link
                href="#"
                className="inline-flex h-[46px] items-center rounded-full border border-[#D7D2C4] bg-[#F7F5EE] px-7 text-[13px] font-semibold text-[#1E2839] transition hover:bg-white"
              >
                See Procedures
              </Link>
            </div>

            <div className="mt-10 border-t border-[#DAD4C4] pt-5">
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                <p className="font-fraunces text-[30px] leading-none text-[#283446] sm:text-[34px] lg:text-[38px]">{stat.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#727A89]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="mx-auto w-full max-w-[430px] rounded-[14px] border border-[#DDDAD0] bg-[#F6F6F4] p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-[#E0DDD3] pb-3">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#98A1AF]">Comfort Report - Q1 2026</p>
              <p className="text-[10px] font-semibold text-[#9E8C72]">● Verified</p>
            </div>

            <div className="pt-7 text-center">
              <div className="mx-auto flex h-[180px] w-[180px] items-center justify-center rounded-full border-[6px] border-[#D7D4CA]">
                <div className="flex h-[144px] w-[144px] items-center justify-center rounded-full border-4 border-[#BE945E]">
                  <div>
                    <p className="font-fraunces text-[58px] leading-none text-[#1C2636]">95%</p>
                    <p className="mt-1 font-fraunces text-[14px] italic text-[#8A909A]">comfort rating</p>
                  </div>
                </div>
              </div>

              <p className="mt-7 font-fraunces text-[24px] italic text-[#1E2738] sm:text-[29px] lg:text-[34px]">&quot;Easier than I expected.&quot;</p>
              <p className="mx-auto mt-2 max-w-[320px] text-[14px] leading-[1.55] text-[#8A929F]">
                The most common thing patients say after their surgical appointment.
              </p>
            </div>

            <div className="mt-7 flex items-center justify-between border-t border-[#E0DDD3] pt-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#8F98A6]">Pain score</p>
                <p className="mt-1 font-fraunces text-[20px] italic text-[#1E293A]">2.1 / 10</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#8F98A6]">Recovery</p>
                <p className="mt-1 font-fraunces text-[20px] italic text-[#1E293A]">2-3 days typical</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

const topStats = [
  {
    value: "15M",
    blackSuffix: "+",
    label: "Patients treated globally",
    accent: true,
  },
  { value: "12-18", suffix: "mo", label: "Average treatment time" },
  { value: "400+", label: "Cases completed here" },
  { value: "22", suffix: "hr", label: "Daily wear = 2hrs free" },
];

const rightFacts = [
  { label: "Cavity risk with misaligned teeth", value: "+30%" },
  { label: "Gum disease risk increase", value: "+40%" },
  { label: "Previously-braced adults with relapse", value: "70%" },
  { label: "Adults treated with Invisalign", value: "1 in 4" },
];

export default function InvisalignWhySection() {
  return (
    <section className="bg-[#FFFFFF] px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-8 md:px-8 md:pb-14 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="grid grid-cols-2 gap-y-6 border-b border-[#E2DED2] py-4 sm:grid-cols-4 sm:gap-y-0 sm:py-5">
          {topStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`px-2 text-center sm:px-4 md:px-6 ${idx < topStats.length - 1 ? "border-r border-[#E2DED2]" : ""}`}
            >
              <p className={`font-fraunces text-[28px] font-light leading-none sm:text-[36px] md:text-[44px] lg:text-[53px] ${stat.accent ? "text-[#C9A961]" : "text-[#111827]"}`}>
                {stat.value}
                {"blackSuffix" in stat && stat.blackSuffix ? (
                  <span className="text-[#111827]">{stat.blackSuffix}</span>
                ) : null}
                {stat.suffix ? <span className="ml-0.5 align-top text-[12px] italic text-[#C9A961] sm:text-[15px] md:text-[18px] lg:text-[20px]">{stat.suffix}</span> : null}
              </p>
              <p className="mt-1.5 text-[8px] uppercase tracking-[0.16em] text-[#7A8599] font-medium sm:mt-2 sm:text-[9px] sm:tracking-[0.18em]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-[28px] bg-[#D9CCAD]" />
              <p className="text-[11px] uppercase font-semibold tracking-[0.24em] text-[#C2B189]">Why straight teeth matter</p>
            </div>

            <h2 className="mt-4 font-fraunces font-light text-[34px] leading-[0.92] tracking-tighter text-[#101624] sm:text-[44px] md:text-[52px] lg:text-[56px]">
              Not just about <span className="font-light  text-[#C9A961]">looks.</span>
            </h2>

            <div className="mt-5 space-y-4 text-[14px] leading-[1.62] text-[#667081] sm:text-[15px]">
              <p>
                Research from the American Dental Association shows that misaligned teeth aren&apos;t just a
                cosmetic concern - they <strong className="text-[#232A3A]">increase cavity risk by 30%, gum disease risk by 40% </strong> , and are
                linked to TMJ disorders, chronic headaches, and premature tooth wear.
              </p>
              <p>
                Crooked teeth literally wear themselves out faster. They&apos;re harder to clean, trap more
                food, and distribute bite forces unevenly - which is why orthodontic treatment is
                increasingly seen as preventive medicine, not just vanity.
              </p>
              <p>
                Invisalign has been the fastest-growing orthodontic solution in history because it finally
                made treatment <strong className="text-[#232A3A]"> accessible to adults</strong>- the 75% of Americans who wanted straighter teeth but
                couldn&apos;t imagine two years of metal braces.
              </p>
            </div>
          </div>

          <div className="rounded-[16px] border border-[#E6E3DB] bg-[#F7F9FB] px-6 py-5 sm:px-7">
            {rightFacts.map((fact, idx) => (
              <div
                key={fact.label}
                className={`flex items-center justify-between gap-6 py-5 ${idx < rightFacts.length - 1 ? "border-b border-[#E2E8F0]" : ""}`}
              >
                <p className="text-[12px] text-[#4E596E]">{fact.label}</p>
                <p className="shrink-0 font-fraunces text-[24px] leading-none text-[#C9A961] sm:text-[28px] md:text-[32px] lg:text-[30px]">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

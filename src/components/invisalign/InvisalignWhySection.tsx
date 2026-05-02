const topStats = [
  { value: "15M+", label: "Patients treated globally", accent: true },
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
    <section className="bg-[#F4F3EB] px-4 pb-14 pt-2 sm:px-8 sm:pb-18 sm:pt-4 lg:px-24 lg:pb-22 lg:pt-6">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="grid grid-cols-2 border-y border-[#E2DED2] py-5 sm:grid-cols-4">
          {topStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`px-3 text-center sm:px-6 ${idx < topStats.length - 1 ? "border-r border-[#E2DED2]" : ""}`}
            >
              <p className={`font-fraunces text-[36px] leading-none sm:text-[44px] lg:text-[53px] ${stat.accent ? "text-[#C9A961]" : "text-[#111827]"}`}>
                {stat.value}
                {stat.suffix ? <span className="ml-0.5 align-top text-[15px] italic text-[#C9A961] sm:text-[18px] lg:text-[20px]">{stat.suffix}</span> : null}
              </p>
              <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#7A8599]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-[28px] bg-[#D9CCAD]" />
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#C2B189]">Why straight teeth matter</p>
            </div>

            <h2 className="mt-4 font-fraunces text-[42px] leading-[0.92] tracking-tighter text-[#101624] sm:text-[58px] lg:text-[74px]">
              Not just about <span className="font-light italic text-[#C9A961]">looks.</span>
            </h2>

            <div className="mt-5 space-y-4 text-[16px] leading-[1.62] text-[#667081]">
              <p>
                Research from the American Dental Association shows that misaligned teeth aren&apos;t just a
                cosmetic concern - they increase cavity risk by 30%, gum disease risk by 40%, and are
                linked to TMJ disorders, chronic headaches, and premature tooth wear.
              </p>
              <p>
                Crooked teeth literally wear themselves out faster. They&apos;re harder to clean, trap more
                food, and distribute bite forces unevenly - which is why orthodontic treatment is
                increasingly seen as preventive medicine, not just vanity.
              </p>
              <p>
                Invisalign has been the fastest-growing orthodontic solution in history because it finally
                made treatment accessible to adults - the 75% of Americans who wanted straighter teeth but
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
                <p className="text-[15px] text-[#4E596E]">{fact.label}</p>
                <p className="shrink-0 font-fraunces text-[30px] leading-none text-[#C9A961] sm:text-[36px] lg:text-[42px]">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const visitSteps = [
  {
    number: "01",
    title: "Arrival & Paperwork",
    duration: "10 min",
    description:
      "Fill out your health history online before you arrive to save time. When you get here, we'll verify everything and walk you back.",
  },
  {
    number: "02",
    title: "Digital X-Rays & Photos",
    duration: "10 min",
    description:
      "We use modern digital X-rays (90% less radiation than film). You'll see your own teeth on a screen - we don't diagnose patients who can't see what we're talking about.",
  },
  {
    number: "03",
    title: "Comprehensive Exam",
    duration: "15 min",
    description:
      "The dentist examines every tooth, checks your gums, screens for oral cancer, and evaluates your bite. We look for problems, but also for what's healthy and working.",
  },
  {
    number: "04",
    title: "Cleaning",
    duration: "30-45 min",
    description:
      "Our hygienists remove plaque, tartar, and surface stains. Most patients comment on how much smoother their teeth feel afterward.",
  },
  {
    number: "05",
    title: "Treatment Plan Discussion",
    duration: "10-15 min",
    description:
      "You sit with the dentist and we walk through exactly what we found. If there are any issues, we'll show you the X-rays, explain your options, and give you transparent pricing. No pressure. No scare tactics.",
  },
];

export default function FirstVisitTimelineSection() {
  return (
    <section className="bg-[#f3f3f2] px-4 py-14 sm:px-12 lg:px-32">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[860px]">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C9A961]">
            Your First Visit
          </p>

          <h2 className="font-fraunces text-[40px] leading-[0.95] text-[#0A0E1A] tracking-[-0.03em] sm:text-[50px]">
            Start to<span className="italic font-light text-[#C9A961]">finish.</span>
          </h2>

          <p className="mt-4 max-w-[780px] text-[15px] leading-[1.58] text-[#5A6578]">
            We know switching dentists is stressful. Here&apos;s exactly what to expect on your first
            appointment - no surprises, no upsells, no hidden fees.
          </p>
        </div>

        <div className="mt-10 max-w-[1060px]">
          {visitSteps.map((step, index) => (
            <div key={step.number} className="grid grid-cols-[44px_minmax(0,1fr)] gap-5 sm:grid-cols-[60px_minmax(0,1fr)] sm:gap-7">
              <div className="flex flex-col items-center">
                <div className="flex aspect-square h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c9a96a] bg-white text-[20px] font-fraunces text-[#c9a96a] sm:h-[56px] sm:w-[56px] sm:text-[26px]">
                  {step.number}
                </div>
                {index < visitSteps.length - 1 && <div className="mt-1 h-full w-px bg-[#ded8cc]" />}
              </div>

              <div className="pb-8 mt-[20px]">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-fraunces text-[22px] leading-none text-[#0A0E1A] sm:text-[21px]">
                    {step.title}
                  </h3>
                  <span className="text-[12px] italic text-[#8d95a2] sm:text-[12px]">{step.duration}</span>
                </div>
                <p className="mt-3 max-w-[950px] text-[14px] leading-[1.62] text-[#5A6578] sm:text-[13px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 grid max-w-[1060px] grid-cols-[44px_minmax(0,1fr)] gap-5 sm:grid-cols-[60px_minmax(0,1fr)] sm:gap-7">
          <div aria-hidden className="min-w-0" />
          <div className="flex w-full min-w-0 flex-col justify-between gap-6 rounded-[16px] bg-[#0A0E1A] px-6 py-5 sm:flex-row sm:items-center sm:px-8 sm:py-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#FFFFFF99]">Total Time</p>
              <p className="mt-1 font-fraunces text-[26px] leading-none text-[#ffffff] sm:text-[26px]">
                75 - 95 minutes
              </p>
            </div>

            <Link
              href="#"
              className="inline-flex h-[48px] shrink-0 items-center rounded-[100px] bg-[#C9A961] px-8 text-[13px] font-medium text-white transition hover:brightness-95"
            >
              Book Your First Visit <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function InvisalignPricingSection() {
  return (
    <section className="bg-[#FFFFFF] px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10 md:px-8 md:pb-16 lg:px-20 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
        <div className="max-w-[520px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-[28px] bg-[#D9CCAD]" />
            <p className="text-[11px] font-semibold  uppercase tracking-[0.24em] text-[#B87333]">Pricing</p>
          </div>

          <h2 className="mt-4 font-fraunces font-light text-[34px] leading-[0.92] tracking-tighter text-[#0A0E1A] sm:text-[48px] md:text-[58px] lg:text-[50px]">
            Transparent, with <span className="font-light italic text-[#C9A961]">zero surprises.</span>
          </h2>

          <div className="mt-6 space-y-4 text-[14px] leading-[1.62] text-[#667081] sm:text-[15px] md:text-[16px]">
            <p>
              Most Calabasas Invisalign cases run between <span className="font-semibold text-[#111827]">$4,500</span>{" "}
              and <span className="font-semibold text-[#111827]">$6,500</span> depending on complexity. All
              pricing includes your initial iTero scan, every aligner tray, all progress checkups, and your
              first set of retainers.
            </p>
            <p>
              We offer <span className="font-semibold text-[#111827]">0% APR financing</span> through CareCredit
              for qualified patients - most cases work out to $150-$250/month over 24 months.
            </p>
            <p>
              Gleam members save <span className="font-semibold text-[#111827]">20% on Invisalign treatment</span> -
              which typically means $900-$1,300 in savings on a single case. That&apos;s 3-4x the cost of
              annual Gleam membership, earned on one procedure.
            </p>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.08)]"
          style={{
           background: "radial-gradient(circle at 92% 0%, rgba(25, 181, 176, 0.2) 0%, rgba(25, 181, 176, 0) 52%), #0D1117", 
          }}
        >
          <div className="relative z-[1] flex flex-col px-7 py-8 sm:px-10 sm:py-9">
            <header className="flex flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A961]">Example · Mid-Complexity Case</p>
              <h3 className="mt-3 font-fraunces text-[26px] font-light leading-[0.98] text-white sm:text-[34px] md:text-[40px] lg:text-[38px]">
                Full Invisalign Treatment
              </h3>
              <p className="mt-2 font-fraunces text-[15px] italic leading-snug text-[#8A99AD]">iTero scan + 30 aligners + retainers</p>
            </header>

            <div className="mt-6 border-t border-[rgba(255,255,255,0.08)] pt-6">
              <div className="flex items-center justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] py-4">
                <span className="text-[12px] text-[#FFFFFF66] lg:text-[14px]">Standard pricing</span>
                <span className="shrink-0 font-fraunces text-[13px] font-light leading-none text-[rgba(255,255,255,0.42)] sm:text-[28px] lg:text-[18px]">
                  $6,500
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] py-4">
                <span className="text-[12px] text-[#FFFFFFB2] lg:text-[14px]">Gleam member pricing</span>
                <span className="shrink-0 font-fraunces text-[13px] font-light leading-none text-white sm:text-[28px] lg:text-[30px]">
                  $5,200
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] py-4">
                <span className="text-[12px] text-[#FFFFFFB2] lg:text-[14px]">You save</span>
                <span className="shrink-0 font-fraunces text-[15px] font-light leading-none text-[#C9A961] sm:text-[28px] lg:text-[30px]">
                  $1,300
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 py-5 sm:py-6">
                <span className="text-[12px] text-[#FFFFFFB2] lg:text-[14px]">Monthly with 0% APR</span>
                <span className="shrink-0 font-fraunces text-[18px] font-medium leading-none text-[#C9A961] sm:text-[36px] lg:text-[28px]">
                  ~$217/mo
                </span>
              </div>
            </div>

            <Link
              href="https://member.clerri.com/enrollment/accounts/create/?slug=TE3V"
              target="_blank"
              className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#C9A961] px-6 text-[13px] font-semibold text-[#050A14] transition hover:brightness-95 sm:mt-9 sm:min-h-[54px]"
            >
              Book your free scan <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

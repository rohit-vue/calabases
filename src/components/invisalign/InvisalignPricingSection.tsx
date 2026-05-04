import Link from "next/link";

export default function InvisalignPricingSection() {
  return (
    <section className="bg-[#F4F3EB] px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-24 lg:pb-24 lg:pt-14">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
        <div className="max-w-[520px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-[28px] bg-[#D9CCAD]" />
            <p className="text-[12px] font-semibold  uppercase tracking-[0.24em] text-[#C2B189]">Pricing</p>
          </div>

          <h2 className="mt-4 font-fraunces font-light text-[42px] leading-[0.92] tracking-tighter text-[#101624] sm:text-[58px] lg:text-[50px]">
            Transparent, with <span className="font-light italic text-[#C9A961]">zero surprises.</span>
          </h2>

          <div className="mt-6 space-y-4 text-[16px] leading-[1.62] text-[#667081]">
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

        <div className="relative overflow-hidden rounded-[36px] border border-[rgba(255,255,255,0.08)] bg-[#050A14] text-[#D0D8E6] sm:rounded-[40px]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-28 h-[min(60vw,340px)] w-[min(60vw,340px)] rounded-full bg-[#0c2030] opacity-35 blur-[90px]"
          />
          <div className="relative z-[1] flex flex-col px-7 py-8 sm:px-10 sm:py-9">
            <header className="flex flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C5A86D]">Example · Mid-Complexity Case</p>
              <h3 className="mt-3 font-fraunces text-[34px] font-light leading-[0.98] text-white sm:text-[40px] lg:text-[38px]">
                Full Invisalign Treatment
              </h3>
              <p className="mt-2 font-sans text-[13px] italic leading-snug text-[#8A99AD]">iTero scan + 30 aligners + retainers</p>
            </header>

            <div className="mt-6 border-t border-[rgba(255,255,255,0.08)] pt-6">
              <div className="flex items-center justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] py-4">
                <span className="text-[14px] text-[#8A99AD]">Standard pricing</span>
                <span className="shrink-0 font-fraunces text-[26px] font-light leading-none text-[rgba(255,255,255,0.42)] sm:text-[28px] lg:text-[18px]">
                  $6,500
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] py-4">
                <span className="text-[14px] text-[#8A99AD]">Gleam member pricing</span>
                <span className="shrink-0 font-fraunces text-[26px] font-light leading-none text-white sm:text-[28px] lg:text-[30px]">
                  $5,200
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] py-4">
                <span className="text-[14px] text-[#8A99AD]">You save</span>
                <span className="shrink-0 font-fraunces text-[26px] font-light leading-none text-[#C5A86D] sm:text-[28px] lg:text-[30px]">
                  $1,300
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 py-5 sm:py-6">
                <span className="text-[14px] text-[#8A99AD]">Monthly with 0% APR</span>
                <span className="shrink-0 font-fraunces text-[32px] font-medium leading-none text-[#C5A86D] sm:text-[36px] lg:text-[28px]">
                  ~$217/mo
                </span>
              </div>
            </div>

            <Link
              href="#"
              className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#C5A86D] px-6 text-[13px] font-semibold text-[#050A14] transition hover:brightness-95 sm:mt-9 sm:min-h-[54px]"
            >
              Book your free scan <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

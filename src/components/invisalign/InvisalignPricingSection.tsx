import Link from "next/link";

export default function InvisalignPricingSection() {
  return (
    <section className="bg-[#F4F3EB] px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-24 lg:pb-24 lg:pt-14">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
        <div className="max-w-[520px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-[28px] bg-[#D9CCAD]" />
            <p className="text-[9px] uppercase tracking-[0.24em] text-[#C2B189]">Pricing</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[42px] leading-[0.92] tracking-tighter text-[#101624] sm:text-[58px] lg:text-[74px]">
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

        <div className="overflow-hidden rounded-[16px] border border-[#1A2742] bg-[linear-gradient(160deg,#0A1327_0%,#091224_100%)] px-6 py-6 text-[#D0D8E6] sm:px-7 sm:py-7">
          <p className="text-[9px] uppercase tracking-[0.22em] text-[#C9A961]">Example · Mid-Complexity Case</p>
          <h3 className="mt-3 font-fraunces text-[40px] leading-[0.95] text-[#EFF3FA] sm:text-[46px] lg:text-[52px]">Full Invisalign Treatment</h3>
          <p className="mt-2 text-[13px] italic text-[#8D9AB1]">iTero scan + 30 aligners + retainers</p>

          <div className="mt-6 border-t border-[#24314C]">
            <div className="flex items-center justify-between border-b border-[#24314C] py-4">
              <span className="text-[14px] text-[#8F9BB0]">Standard pricing</span>
              <span className="font-fraunces text-[30px] leading-none text-[#EEF2F8] sm:text-[34px] lg:text-[38px]">$6,500</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#24314C] py-4">
              <span className="text-[14px] text-[#8F9BB0]">Gleam member pricing</span>
              <span className="font-fraunces text-[30px] leading-none text-[#EEF2F8] sm:text-[34px] lg:text-[38px]">$5,200</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#24314C] py-4">
              <span className="text-[14px] text-[#8F9BB0]">You save</span>
              <span className="font-fraunces text-[34px] leading-none text-[#C9A961] sm:text-[39px] lg:text-[44px]">$1,300</span>
            </div>
            <div className="flex items-center justify-between py-4">
              <span className="text-[14px] text-[#8F9BB0]">Monthly with 0% APR</span>
              <span className="font-fraunces text-[34px] leading-none text-[#C9A961] sm:text-[39px] lg:text-[44px]">~$217/mo</span>
            </div>
          </div>

          <Link
            href="#"
            className="mt-5 inline-flex h-[44px] w-full items-center justify-center rounded-full bg-[#C9A961] text-[12px] font-semibold text-[#0A0E1A] transition hover:brightness-95"
          >
            Book your free scan <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

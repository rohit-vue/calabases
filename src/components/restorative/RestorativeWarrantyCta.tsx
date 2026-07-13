import Link from "next/link";

export default function RestorativeWarrantyCta() {
  return (
    <section
      className="px-4 py-7 sm:px-6 sm:py-8 md:px-8 lg:px-20 lg:py-11"
      style={{ background: "linear-gradient(101.42deg, #0A0E1A 0%, #1C2333 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[1250px] flex-col items-stretch justify-between gap-5 overflow-hidden rounded-none px-4 py-5 sm:gap-6 sm:px-6 sm:py-6 md:px-8 lg:flex-row lg:items-center lg:gap-6 lg:px-10 lg:py-8">
        <div className="flex w-full items-start gap-4 sm:gap-6 md:gap-7 lg:w-auto">
          <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border-2 border-[#c08240] sm:h-[120px] sm:w-[120px] md:h-[160px] md:w-[160px] sm:overflow-visible lg:border-[#B87333]">
            <div className="absolute inset-[6px] rounded-full border border-[#c08240] lg:border-[#B87333]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-1.5 pb-1 pt-0.5 sm:px-2 sm:pb-1.5 sm:pt-1">
              <span className="font-fraunces text-[26px] font-light leading-none text-[#c08240] sm:text-[44px] md:text-[56px] lg:text-[#B87333]">
                5
              </span>
              <div className="mt-0.5 text-center sm:hidden">
                <span className="block font-fraunces text-[8px] font-medium uppercase leading-[1.05] tracking-[0.12em] text-[#c08240]">
                  Year
                </span>
                <span className="mt-px block font-fraunces text-[6px] font-medium uppercase leading-[1.05] tracking-[0.12em] text-[#c08240]">
                  Warranty
                </span>
              </div>
              <span className="mt-0.5 hidden font-fraunces text-[11px] uppercase tracking-[0.2em] text-[#c08240] sm:block lg:text-[#B87333] text-center">
                Year Warranty
              </span>
            </div>
          </div>

          <div className="min-w-0 max-w-[720px]">
            <h2 className="font-fraunces text-[28px] font-light leading-[1.05] tracking-[-0.02em] text-[#FFFFFF] sm:text-[38px] md:text-[44px] lg:text-[40px] lg:leading-[1.02]">
              Standing behind{" "}
              <span className="italic text-[#c08240] lg:text-[#B87333]">every restoration.</span>
            </h2>
            <p className="mt-2 max-w-[760px] text-[15px] leading-[1.58] text-[#d1d5db] sm:text-[17px] md:text-[18px] lg:text-base lg:leading-[1.62] lg:text-[rgba(255,255,255,0.698)]">
              Every crown, bridge, inlay, onlay, and denture we place comes with a{" "}
              <span className="font-semibold text-[#FFFFFF]">5-year craftsmanship warranty.</span> If anything fails
              due to defect or our workmanship during that period, we repair or replace it at no additional
              cost. We can offer this because our 5-year failure rate is under 2% - dramatically lower than
              the national average.
            </p>
          </div>
        </div>

        <Link
          href="https://app.nexhealth.com/appts/advanced-dentists-group/appt-type?lid=354035"
          target="_blank"
          className="inline-flex h-[48px] w-full shrink-0 items-center justify-center rounded-[100px] bg-[#c08240] px-8 text-[14px] font-bold text-black transition hover:brightness-95 lg:inline-flex lg:w-auto lg:bg-[#B87333] lg:text-[#0A0E1A]"
        >
          Book Consultation <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function RestorativeWarrantyCta() {
  return (
    <section className="bg-[#020A1B] px-4 py-9 sm:px-8 sm:py-10 lg:px-20 lg:py-11">
      <div className="mx-auto flex w-full max-w-[1250px] flex-col items-start justify-between gap-6 overflow-hidden rounded-none bg-[radial-gradient(ellipse_at_center,rgba(22,35,58,0.9)_0%,rgba(2,10,27,1)_70%)] px-5 py-6 sm:px-8 sm:py-7 lg:flex-row lg:items-center lg:px-10 lg:py-8">
        <div className="flex items-start gap-5 sm:gap-7">
          <div className="relative h-[84px] w-[84px] rounded-full border border-[#B57942] sm:h-[94px] sm:w-[94px]">
            <div className="absolute inset-[6px] rounded-full border border-[#B57942]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-fraunces text-[37px] leading-none text-[#C3884B]">5</span>
              <span className="mt-0.5 font-fraunces text-[8px] uppercase tracking-[0.2em] text-[#B57942]">
                Year Warranty
              </span>
            </div>
          </div>

          <div className="max-w-[720px]">
            <h2 className="font-fraunces text-[34px] leading-[1.02] tracking-[-0.02em] text-[#EEE8DA] sm:text-[46px] lg:text-[62px]">
              Standing behind <span className="font-light italic text-[#BC7D42]">every restoration.</span>
            </h2>
            <p className="mt-2 max-w-[760px] text-[16px] leading-[1.62] text-[#B0B8C6] sm:text-[18px] lg:text-[20px]">
              Every crown, bridge, inlay, onlay, and denture we place comes with a{" "}
              <span className="font-semibold text-[#DEE3EC]">5-year craftsmanship warranty.</span> If anything fails
              due to defect or our workmanship during that period, we repair or replace it at no additional
              cost. We can offer this because our 5-year failure rate is under 2% - dramatically lower than
              the national average.
            </p>
          </div>
        </div>

        <Link
          href="#"
          className="inline-flex h-[48px] shrink-0 items-center rounded-full bg-[#C8843E] px-8 text-[13px] font-semibold text-[#0C111B] transition hover:brightness-95"
        >
          Book Consultation <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}

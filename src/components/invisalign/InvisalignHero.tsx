import Image from "next/image";
import Link from "next/link";

export default function InvisalignHero() {
  return (
    <section
      className="relative isolate overflow-hidden px-4 pb-10 pt-6 sm:px-8 sm:pb-16 sm:pt-12"
      style={{
        background:
          "linear-gradient(130.54deg, #F7F2E7 58.86%, #C9A961 135.77%)",
      }}
    >
      <div className="pointer-events-none absolute left-[-3%] top-[24%] -z-10 rotate-[-18deg] sm:left-[2%] sm:top-[8%] block lg:z-0 lg:hidden">
        <Image
          src="/images/invisalign.png"
          alt=""
          width={320}
          height={190}
          className="h-auto w-[min(36vw,170px)] scale-x-[-1] opacity-90 sm:w-[min(42vw,260px)]"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute top-[50%] right-[-12%] -z-10 scale-105 sm:top-auto sm:bottom-[10%] sm:right-[-7%] block lg:z-0 lg:hidden">
        <Image
          src="/images/invisalign.png"
          alt=""
          width={360}
          height={210}
          className="h-auto w-[min(40vw,190px)] opacity-90 sm:w-[min(48vw,320px)]"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute left-[14%] rotate-[-20deg] top-[11%] hidden lg:block">
        <Image
          src="/images/invisalign.png"
          alt=""
          width={420}
          height={250}
          className="h-auto w-[370px] scale-x-[-1] opacity-95"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute right-[6%] top-[55%] scale-125 hidden lg:block ">
        <Image
          src="/images/invisalign.png"
          alt=""
          width={520}
          height={300}
          className="h-auto w-[450px] opacity-95"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-[1180px] lg:z-10">
        <div className="mx-auto max-w-[330px] text-center sm:max-w-[760px]">
          <p className="text-[8px] uppercase tracking-[0.2em] text-[#8E97A9] font-medium sm:text-[9px] sm:tracking-[0.22em]">Home / Services / Invisalign</p>

          <div className="mx-auto mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#D6D7DB] bg-[#F8F8F7] px-3 py-1 sm:mt-5 sm:gap-2 sm:px-4 sm:py-1.5">
            <span className="h-1 w-1 rounded-full bg-[#20B4B0] sm:h-1.5 sm:w-1.5" />
            <p className="text-[8px] uppercase tracking-[0.14em] text-[#1DA6A2] font-medium sm:text-[10px] sm:tracking-[0.18em]">
              Certified Invisalign Provider · 400+ Cases
            </p>
          </div>

          <h1 className="mt-5 font-fraunces font-light text-[50px] leading-[0.88] tracking-[-0.02em] text-[#0D1321] sm:mt-7 sm:text-[68px] lg:text-[98px]">
            Straight teeth.
            <br />
            <span className="font-light italic text-[#B87333]">No metal.</span>
          </h1>

          <p className="mx-auto mt-3 max-w-[320px] font-fraunces text-[20px] font-extralight italic leading-[1.18] text-[#2A3240] sm:mt-5 sm:max-w-[760px] sm:text-[32px] lg:text-[41px]">
            <strong>1 in 4</strong> &nbsp; orthodontic patients today is an adult. Invisalign treats most cases in 30-50% less
            time than traditional braces - with aligners most people won&apos;t even notice you&apos;re wearing.
          </p>

          <p className="mx-auto mt-4 max-w-[320px] text-[14px] leading-[1.45] text-[#647083] sm:mt-6 sm:max-w-[660px] sm:text-[16px] sm:leading-[1.6]">
            iTero digital scanning. Custom-molded aligners. 12-18 month average treatment. Certified
            providers with 400+ completed cases since 2010.
          </p>

          <div className="mt-5 flex flex-col items-stretch justify-center gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <Link
              href="https://member.clerri.com/enrollment/accounts/create/?slug=TE3V"
              target="_blank"
              className="inline-flex h-[44px] w-full items-center justify-center rounded-full bg-[#0A0E1A] px-3 text-[11px] font-semibold text-white transition hover:opacity-90 sm:w-auto sm:h-[44px] sm:px-6 sm:text-[12px]"
            >
              Book a Free Smile Scan <span className="ml-1.5">→</span>
            </Link>
            <Link
              href="https://member.clerri.com/enrollment/accounts/create/?slug=TE3V"
              target="_blank"
              className="inline-flex h-[44px] w-full items-center justify-center rounded-full border border-[#D4CCBA] bg-[#F8F6EF] px-3 text-[11px] font-semibold text-[#1C2535] transition hover:bg-white sm:w-auto sm:h-[44px] sm:px-6 sm:text-[12px]"
            >
              See Pricing
            </Link>
          </div>

          <div className="mt-4 inline-flex max-w-[310px] flex-wrap items-center justify-center gap-2 text-[11px] text-[#6D7789] sm:mt-6 sm:max-w-none sm:gap-3 sm:text-[13px]">
            <span>Treatment from</span>
            <span className="font-semibold text-[#1B2433]">$4,500</span>
            <span className="text-[#A3ACBC]">•</span>
            <span>0% APR financing available</span>
          </div>
        </div>
      </div>
    </section>
  );
}

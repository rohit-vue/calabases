import Image from "next/image";
import Link from "next/link";

export default function InvisalignHero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F3EB] px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-12 lg:px-24 lg:pb-20 lg:pt-14">
      <div className="pointer-events-none absolute left-[7%%] rotate-[-20deg] top-[20%] hidden lg:block">
        <Image
          src="/images/invisalign.png"
          alt=""
          width={420}
          height={250}
          className="h-auto w-[370px] scale-x-[-1] opacity-95"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute right-[2%] top-[42%] hidden lg:block">
        <Image
          src="/images/invisalign.png"
          alt=""
          width={520}
          height={300}
          className="h-auto w-[450px] opacity-95"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[9px] uppercase tracking-[0.22em] text-[#8E97A9]">Home / Services / Invisalign</p>

          <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-[#D6D7DB] bg-[#F8F8F7] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#20B4B0]" />
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#1DA6A2]">
              Certified Invisalign Provider · 400+ Cases
            </p>
          </div>

          <h1 className="mt-7 font-fraunces text-[46px] leading-[0.9] tracking-tighter text-[#0D1321] sm:text-[68px] lg:text-[98px]">
            Straight teeth.
            <br />
            <span className="font-light italic text-[#C9A961]">No metal.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[760px] font-fraunces text-[24px] italic leading-[1.2] text-[#2A3240] sm:text-[32px] lg:text-[41px]">
            1 in 4 orthodontic patients today is an adult. Invisalign treats most cases in 30-50% less
            time than traditional braces - with aligners most people won&apos;t even notice you&apos;re wearing.
          </p>

          <p className="mx-auto mt-6 max-w-[660px] text-[16px] leading-[1.6] text-[#647083]">
            iTero digital scanning. Custom-molded aligners. 12-18 month average treatment. Certified
            providers with 400+ completed cases since 2010.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#"
              className="inline-flex h-[44px] items-center rounded-full bg-[#020918] px-6 text-[12px] font-semibold text-white transition hover:opacity-90"
            >
              Book a Free Smile Scan <span className="ml-2">→</span>
            </Link>
            <Link
              href="#"
              className="inline-flex h-[44px] items-center rounded-full border border-[#D4CCBA] bg-[#F8F6EF] px-6 text-[12px] font-semibold text-[#1C2535] transition hover:bg-white"
            >
              See Pricing
            </Link>
          </div>

          <div className="mt-6 inline-flex items-center gap-3 text-[13px] text-[#6D7789]">
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

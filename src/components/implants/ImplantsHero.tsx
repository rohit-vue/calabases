import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Success Rate", value: "95-98%" },
  { label: "Lifespan", value: "20+ yrs" },
  { label: "Placed", value: "800+" },
  { label: "Since", value: "2010" },
];

export default function ImplantsHero() {
  return (
    <section
      className="px-4 py-10 sm:px-8 sm:py-14 lg:px-24 lg:py-16"
      style={{
        background:
          "linear-gradient(0deg, #F7F2E7, #F7F2E7), linear-gradient(90deg, rgba(255, 255, 255, 0.024) 2.5%, rgba(255, 255, 255, 0) 2.5%), linear-gradient(180deg, rgba(255, 255, 255, 0.024) 2.5%, rgba(255, 255, 255, 0) 2.5%)",
      }}
    >
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
        <div className="max-w-[520px] text-center lg:text-left">
          <p className="font-jetbrains text-[11px] uppercase tracking-[1.1px] text-[#C9A961]">
            Home / Services / Dental Implants
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-start lg:gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B87333]" />
            <p className="text-center text-[11px] uppercase tracking-[1.65px] text-[#B87333] lg:text-left">
              Specification n°04 - Permanent Tooth Replacement
            </p>
          </div>

          <h1 className="mt-6 font-fraunces text-[48px] font-light leading-[0.88] tracking-[-4.4px] text-[#0A0E1A] sm:text-[66px] lg:text-[80px]">
            Built to <span className="font-light italic text-[#B87333]">last</span>
            <br />
            a lifetime.
          </h1>

          <p className="mx-auto mt-5 max-w-[500px] font-fraunces text-[22px] leading-[1.15] tracking-[-0.01em] sm:text-[29px] lg:mx-0 lg:text-[22px]">
            <span className="text-[#0A0E1A] border-b-2 border-b-[#B87333]">120 million Americans</span>
            <span className="text-[#0A0E1AD9] font-light italic text-[20px]"> are missing at least one tooth.</span>
            <br />
            <span className="text-[#0A0E1AD9] font-light italic text-[20px]">
              Dental implants are the only solution that doesn&apos;t get worse over time.
            </span>
          </p>

          <p className="mx-auto mt-6 max-w-[500px] font-sans text-[15px] font-normal leading-[1.6] text-[#0A0E1A99] lg:mx-0">
            95-98% success rate. 20+ year lifespan. 800+ implants placed in Encino since 2010. Planned
            with 3D CBCT imaging for sub-millimeter precision.
          </p>

          <div className="mx-auto mt-7 flex w-full max-w-[420px] flex-col items-stretch gap-3 lg:mx-0 lg:max-w-none lg:flex-row lg:flex-wrap lg:items-center">
            <Link
              href="https://member.clerri.com/enrollment/accounts/create/?slug=TE3V"
              target="_blank"
              className="inline-flex h-[44px] w-full items-center justify-center rounded-[100px] bg-[#0A0E1A] border-2 border-[#000000] tracking-[0.28px] px-6 text-[12px] font-semibold text-white transition hover:opacity-90 lg:w-auto"
            >
              Book a Consultation <span className="ml-2">→</span>
            </Link>
            <Link
              href="https://member.clerri.com/enrollment/accounts/create/?slug=TE3V"
              target="_blank"
              className="inline-flex h-[44px] w-full items-center justify-center rounded-[100px] px-5 text-[12px] font-semibold text-[#0A0E1A] border border-[#FFFFFF4D] transition hover:text-black lg:w-auto"
            >
              Explore Options
            </Link>
          </div>

          <div className="mx-auto mt-10 grid max-w-[500px] grid-cols-4 gap-x-6 pt-5 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:gap-x-14">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <p className="font-jetbrains text-[10px] uppercase tracking-[1.5px] text-[#C9A961]">{stat.label}</p>
                <p className="mt-2 whitespace-nowrap font-fraunces text-[18px] leading-none tracking-[-0.52px] text-[#0A0E1A] sm:text-[22px] lg:text-[26px]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px]">
          <div className="overflow-hidden rounded-[12px] border border-[#D6D3C9] bg-black shadow-[0px_4px_34.6px_0px_#00000040]">
            <Image
              src="/images/implantshero.jpg"
              alt="Dental implants before and after"
              width={1024}
              height={1024}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

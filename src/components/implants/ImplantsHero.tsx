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
    <section className="bg-[#F4F3EB] px-4 py-10 sm:px-8 sm:py-14 lg:px-24 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
        <div className="max-w-[520px]">
          <p className="text-[9px] uppercase tracking-[0.22em] text-[#9EA4B0]">
            Home / Services / Dental Implants
          </p>

          <div className="mt-5 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A961]" />
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#B99D66]">
              Specification n°04 - Permanent Tooth Replacement
            </p>
          </div>

          <h1 className="mt-6 font-fraunces text-[48px] leading-[0.88] tracking-[-0.05em] text-[#101624] sm:text-[66px] lg:text-[84px]">
            Built to <span className="font-light italic text-[#C9A961]">last</span>
            <br />
            a lifetime.
          </h1>

          <p className="mt-5 max-w-[500px] font-fraunces text-[24px] italic leading-[1.2] text-[#2B3240] sm:text-[29px] lg:text-[34px]">
            120 million Americans are missing at least one tooth. Dental implants are the only solution
            that doesn&apos;t get worse over time.
          </p>

          <p className="mt-6 max-w-[500px] text-[16px] leading-[1.6] text-[#5D6677]">
            95-98% success rate. 20+ year lifespan. 800+ implants placed in Calabasas since 2010. Planned
            with 3D CBCT imaging for sub-millimeter precision.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="#"
              className="inline-flex h-[44px] items-center rounded-full bg-[#020918] px-6 text-[12px] font-semibold text-white transition hover:opacity-90"
            >
              Book a Consultation <span className="ml-2">→</span>
            </Link>
            <Link
              href="#"
              className="inline-flex h-[44px] items-center rounded-full px-5 text-[12px] font-semibold text-[#1A2234] transition hover:text-black"
            >
              Explore Options
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#E1DED2] pt-5 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#BDA670]">{stat.label}</p>
                <p className="mt-2 font-fraunces text-[32px] leading-none text-[#111827] sm:text-[37px] lg:text-[42px]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[560px] lg:mx-0">
          <div className="overflow-hidden rounded-[12px] border border-[#D6D3C9] bg-black shadow-[0_10px_28px_rgba(0,0,0,0.18)]">
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

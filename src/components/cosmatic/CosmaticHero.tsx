import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "1,200+", label: "Cosmetic Cases" },
  { value: "15+", label: "Years in Calabasas" },
  { value: "4.9 ★", label: "564 Reviews" },
];

export default function CosmaticHero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0E1A] px-4 py-10 sm:px-8 sm:py-14 lg:px-24 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
        <div className="relative z-10 max-w-[520px] text-white">
          <p className="text-[11px] uppercase tracking-[0.17em] text-[#FFFFFF66]">
            Home / Services / Cosmetic Dentistry
          </p>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-[0.2px] w-[46px] bg-[#C9A961]" />
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A961]">Issue no2 - The art of the smile</p>
            <span className="h-[0.2px] w-[46px] bg-[#C9A961]" />
          </div>

          <h1 className="mt-7 font-fraunces font-light text-[48px] leading-[0.9] tracking-[-0.05em] text-[#FFFFFF] sm:text-[60px] lg:text-[72px]">
            Cosmetic
            <br />
            <span className="italic text-[#C9A961]">dentistry,</span>
            <br />
            done right.
          </h1>

          <p className="mt-5 max-w-[460px] border-l-2 font-normal border-[#C9A961] pl-5 font-fraunces text-[20px] leading-[1.22] text-[#FFFFFFD9] sm:pl-6 sm:text-[22px] lg:text-[22px]">
            74% <span className="font-light italic">of Americans believe an unattractive smile can hurt their career. Your smile is an
            investment - here&apos;s how to get it right.</span>
          </p>

          <p className="mt-6 max-w-[470px] text-[13px] leading-[1.55] text-[#FFFFFF99]">
            Veneers. Whitening. Smile design. Over 1,200 cosmetic procedures completed in Calabasas
            since 2010 - with a digital preview of your final smile before we ever begin.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#"
              className="inline-flex h-[42px] items-center rounded-[100px] border-2 border-black bg-[#C9A961] px-6 text-[14px] tracking-[0.02em] font-semibold text-[#0A0E1A] transition hover:brightness-95"
            >
              Book a Smile Consultation <span className="ml-2">→</span>
            </Link>
            <Link
              href="#"
              className="inline-flex h-[42px] items-center rounded-[100px] border border-[#FFFFFF4D] px-6 text-[14px] font-semibold tracking-[0.02em] text-[#DEE3EC] transition hover:bg-white/5"
            >
              Explore Treatments
            </Link>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-4 border-t border-[#FFFFFF1A] pt-5 sm:grid-cols-3 sm:gap-0">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-fraunces text-[24px] tracking-[-0.023em] leading-none text-[#FFFFFF]">{stat.value}</p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#FFFFFF80]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:mx-0 lg:ml-auto lg:max-w-[520px] lg:pr-2">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(90.61%_78.75%_at_30%_50%,rgba(201,169,97,0.15)_0%,rgba(201,169,97,0)_60%)] sm:-inset-12 lg:-inset-14"
          />
          <div className="relative overflow-hidden rounded-[18px] bg-black shadow-[0_20px_40px_rgba(0,0,0,0.45)] sm:rounded-[20px]">
            <Image
              src="/images/cosmatichero.jpg"
              alt="Cosmetic dentistry transformation"
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

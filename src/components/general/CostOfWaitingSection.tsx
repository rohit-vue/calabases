import Link from "next/link";

export default function CostOfWaitingSection() {
  return (
    <section className="bg-[#0A0E1A] px-4 py-12 sm:px-12 sm:py-16 lg:px-32 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[560px]">
          <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C9A961]">The Reality</p>

          <h2 className="font-fraunces text-[38px] leading-[0.95] text-[#f1ede4] sm:text-[50px]">
            The Cost of <span className="text-[#c8aa70] font-light tracking-[-0.06em] italic">Waiting.</span>
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <div className="max-w-[560px]">

          <div className="mt-5 space-y-4 text-[14px] leading-[1.65] text-[#FFFFFFB2] sm:text-[14px]">
            <p>
              By age 34, the average American has had 3 cavities and is missing at least one tooth.
              By age 50, that number climbs to 12 missing or decayed teeth. The reason isn&apos;t genetics
              or bad luck - it&apos;s that most people stop going to the dentist until something hurts.
            </p>

            <p>
              By then, a problem that could&apos;ve been solved with a $200 filling has become a $2,500 crown,
              or a $4,500 implant.
            </p>

            <p>
              General dentistry is the most cost-effective healthcare investment you can make. A 30-minute
              cleaning twice a year prevents the kind of compounding damage that slowly destroys most
              American adults&apos; smiles.
            </p>
          </div>
        </div>

          <div className="relative overflow-hidden rounded-[18px] border border-[#19B5B033] bg-[linear-gradient(120.09deg,rgba(25,181,176,0.1)_0%,rgba(25,181,176,0.02)_100%)] p-6 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(205,170,104,0.14),transparent_45%)]" />

            <div className="relative">
              <div className="flex items-end gap-1">
                <span className="font-fraunces text-[70px] font-light leading-[0.85] tracking-[-0.06em] text-[#C9A961] sm:text-[100px]">
                  $50
                </span>
                <span className="pb-2.5 font-fraunces text-[34px] font-light tracking-[-0.06em] leading-none text-[#8f9ab1] sm:text-[38px]">
                  /$1
                </span>
              </div>

              <p className="mt-3 max-w-[420px] font-fraunces text-[20px] italic font-light leading-[1.08] text-[#ffffff] sm:text-[17px]">
                Every $1 spent on prevention saves up to <span className="text-[#C9A961] font-normal"> $50 </span>in future restorative work.
              </p>

              <p className="mt-4 text-[10px] uppercase tracking-[0.12em] text-[#5f6d89]">Source: CDC</p>
            </div>
          </div>
        </div>

        <Link
          href="#"
          className="mt-8 inline-flex h-[46px] items-center rounded-[100px] bg-[#C9A961] px-8 text-[12px] font-semibold text-white transition hover:brightness-95"
        >
          Book Your Appointment →
        </Link>
      </div>
    </section>
  );
}

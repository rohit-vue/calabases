import Image from "next/image";

const dentistStats = [
  { value: "15+", label: "YEARS OF PRACTICE" },
  { value: "5,000+", label: "PATIENTS SERVED" },
  { value: "564", label: "5-STAR REVIEWS" },
];

export default function MeetDentistSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 md:px-8 lg:px-24">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[920px]">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C9A961]">
            Meet Your Dentist
          </p>
          <h2 className="font-fraunces text-[30px] leading-[0.95] text-[#0A0E1A] tracking-[-0.03em] sm:text-[34px] lg:text-[50px]">
            Calabasas&apos; most-reviewed <span className="italic font-light text-[#C9A961]">dental team.</span>
          </h2>
        </div>

        <div className="mt-8 rounded-[24px] bg-[#FAF8F3] p-8 sm:p-10 lg:rounded-[24px] lg:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,248px)_minmax(0,1fr)] lg:items-stretch lg:gap-14">
            <div className="mx-auto flex h-full w-full max-w-[248px] min-h-[300px] lg:mx-0 lg:max-w-none lg:min-h-0">
              <div className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[20px] bg-[linear-gradient(143.13deg,#0A0E1A_0%,#1C2333_100%)] shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
                <div className="flex min-h-0 flex-1 flex-col px-4 pt-5 sm:pt-6">
                  <div className="relative min-h-[220px] w-full min-w-0 flex-1 lg:min-h-0">
                    <Image
                      src="/images/isaacimg.png"
                      alt="Dr. Isaac Kashani"
                      fill
                      className="object-contain object-center"
                      sizes="(min-width: 1024px) 220px, (min-width: 640px) 240px, 90vw"
                    />
                  </div>
                </div>
                <p className="px-4 pb-5 pt-2 text-left font-fraunces text-[10px] font-normal uppercase tracking-[0.22em] text-white">
                  Dr. Isaac Kashani
                </p>
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="font-fraunces text-[36px] font-normal leading-[0.98] tracking-[-0.03em] text-[#0A0E1A] sm:text-[36px] lg:text-[38px]">
                Dr. Isaac Kashani
              </h3>
              <p className="mt-2 font-fraunces text-[18px] font-light italic leading-tight text-[#C9A961] sm:text-[18px] lg:text-[15px]">
                Lead Dentist &amp; Founder
              </p>

              <div className="mt-7 grid grid-cols-3 gap-5 border-b border-[#E3DFD6] pb-6 sm:gap-8 lg:gap-10">
                {dentistStats.map((stat) => (
                  <div key={stat.label} className="min-w-0">
                    <p className="font-fraunces text-[24px] font-normal leading-none tracking-[-0.02em] text-[#0A0E1A] sm:text-[24px] lg:text-[28px]">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-sans text-[9px] font-normal uppercase leading-tight tracking-[0.18em] text-[#5A6578]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4 text-[14px] leading-[1.6] text-[#5A6578] tracking-[-0.02em] sm:text-[15px]">
                <p>
                  Dr. Kashani founded Advanced Dentistry in 2010 with a simple belief: patients should
                  understand everything that&apos;s happening to their teeth, and never feel rushed or
                  pressured. That philosophy has built one of the most-reviewed dental practices in
                  Calabasas.
                </p>
                <p>
                  His approach combines modern technology - digital X-rays, CEREC same-day crowns, 3D
                  imaging - with a conservative, prevention-first treatment philosophy. He handles
                  everything from routine cleanings to complex restorative cases in-house.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

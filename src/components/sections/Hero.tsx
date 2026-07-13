// components/sections/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#FAF8F3] px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10 md:px-8 lg:px-24 lg:pb-16">
      <div className="mx-auto grid w-full min-w-0 max-w-[1180px] grid-cols-1 gap-8 sm:gap-10 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] md:items-center md:gap-10 lg:gap-16">
        {/* Left Column: Text & CTA */}
        <div className="flex min-w-0 flex-col gap-6 sm:gap-8 md:h-full md:min-h-0 md:justify-between lg:gap-10">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="space-y-3">
              <h1 className="font-fraunces text-[clamp(2.65rem,9.5vw,4.75rem)] leading-[0.9] tracking-[-0.07em] text-[#111827] sm:text-[clamp(3.25rem,8vw,5rem)] lg:text-[76px]">
                Welcome to
                <br />
                Corona Advanced
                <br />
                Dentistry
              </h1>
              <p className="max-w-[34ch] pt-1 text-[clamp(0.95rem,2.8vw,1.2rem)] leading-[1.2] text-[#1C2333] lg:text-[20px]">
              Providing Cosmetic, General, and Emergency Care in the
              City of Corona
              </p>
            </div>

            {/* Rating Card */}
            <div className="flex w-full max-w-[340px] items-center gap-3 sm:gap-4 md:gap-5">
              <div className="shrink-0 text-center">
                <p className="font-fraunces text-[clamp(2.6rem,8vw,3.125rem)] leading-none text-[#0A0E1A]">
                  4.9
                </p>
              </div>
              <div className="min-w-0 space-y-1.5 sm:space-y-2">
                <div className="flex flex-wrap gap-1.5 sm:gap-2.5" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="text-[clamp(0.95rem,3vw,1.15rem)] leading-none text-[#f7a54d]"
                      aria-hidden="true"
                    >
                      {"\u2605"}
                    </span>
                  ))}
                </div>
                <p className="text-[12px] font-semibold leading-none text-[#0A0E1A] sm:text-[13px]">
                  Overall Rating
                </p>
                <p className="text-[10px] text-[#5A6578] sm:text-[11px]">Based on 584 reviews</p>
              </div>
            </div>
          </div>

          {/* Book Appointment Card */}
          <div className="flex w-full min-w-0 flex-col items-stretch justify-between gap-5 rounded-[20px] bg-[#DCEEFB] px-5 py-6 sm:gap-6 sm:px-8 sm:py-8 md:flex-row md:items-center md:gap-5 lg:mt-4 lg:px-7 lg:py-7">
            <div className="min-w-0">
              <h3 className="font-fraunces text-[clamp(1.5rem,5vw,1.75rem)] leading-[1] tracking-[-0.05em] text-[#111827] lg:text-[28px]">
                Book Your Visit
              </h3>
              <p className="mt-2 max-w-[360px] text-[12px] leading-[1.35] text-[#1C2333] sm:mt-3 sm:text-[13px]">
                Same-week appointments. Modern care. No pressure.
              </p>
            </div>
            <a
              href="https://app.nexhealth.com/appts/advanced-dentists-group/appt-type?lid=354035"
              target="_blank"
              className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full bg-white px-7 py-3 text-center text-[13px] font-semibold text-[#0A0E1A] transition hover:bg-white/90 sm:w-auto sm:text-[14px]"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Right Content: Image with Overlaid Glass Cards */}
        <div className="relative mx-auto aspect-[0.82] w-full min-w-0 max-w-[430px] overflow-hidden rounded-[28px] sm:max-w-[500px] md:mx-0 md:max-w-none md:aspect-[0.86]">
          <Image
            src="/images/hero-face.jpg"
            alt="Smiling patient"
            fill
            className="rounded-[28px] object-cover object-[center_18%]"
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 38vw, 100vw"
            priority
          />

          {/* Overlay cards wrapper */}
          <div className="absolute inset-x-2.5 bottom-2.5 flex items-stretch gap-2 sm:inset-x-3 sm:bottom-3 sm:gap-2.5 md:gap-3">
            <div className="flex min-h-[104px] min-w-0 flex-[0.95] flex-col rounded-[16px] bg-[rgba(250,247,244,0.95)] px-3 py-2.5 shadow-[0px_4px_19.3px_0px_#00000040] backdrop-blur-[10px] sm:min-h-[116px] sm:rounded-[18px] sm:px-3.5 sm:py-3 md:px-4 lg:flex-none lg:w-[176px]">
              <h4 className="max-w-[9rem] text-[11px] font-semibold leading-[1.05] text-[#0A0E1A] sm:max-w-[130px] sm:text-[12px] md:text-[17px] lg:text-[16px]">
                No Insurance?
                <br />
                No Problem
              </h4>

              <div className="mt-auto flex items-end gap-1 sm:gap-1.5">
                <span className="font-fraunces text-[clamp(1.25rem,5vw,2rem)] font-medium leading-none tracking-[-0.02em] text-[#0A0E1A] lg:text-[24px]">
                  $297
                </span>
                <span className="pb-0.5 text-[10px] font-medium text-[#5A6578] sm:text-[12px]">/ year</span>
              </div>
            </div>

            <div className="flex min-h-[104px] min-w-0 flex-[1.35] flex-col justify-between rounded-[16px] bg-[#FFFFFF52] px-3 py-2.5 shadow-[0_12px_28px_rgba(84,58,42,0.14)] backdrop-blur-[10px] sm:min-h-[116px] sm:rounded-[18px] sm:px-4 sm:py-3 md:px-5 lg:flex-none lg:w-[224px]">
              <div className="min-w-0">
                <h4 className="font-fraunces max-w-[10rem] text-[12px] font-bold leading-[0.95] text-[#fffaf6] sm:max-w-[150px] sm:text-[14px] md:text-[20px]">
                  Our Unlimited Membership
                </h4>
              </div>

              <div className="flex items-end justify-between gap-1.5 sm:gap-2">
                <ul className="min-w-0 space-y-0.5 text-[8px] leading-[1.2] text-[#f7ece5] sm:space-y-1 sm:text-[9px] md:text-[10px] md:leading-[1.25]">
                  <li>Unlimited Cleanings</li>
                  <li>Unlimited X-Rays</li>
                  <li>Unlimited Exams</li>
                </ul>
                <a
                  href="https://app.nexhealth.com/appts/advanced-dentists-group/appt-type?lid=354035"
                  target="_blank"
                  className="mb-1 mr-1 shrink-0 rounded-[100px] bg-white px-2.5 py-1 text-[9px] font-semibold text-[#0A0E1A] shadow-sm transition hover:bg-white/90 sm:mb-4 sm:mr-3.5 sm:px-3 sm:py-1.5 sm:text-[10px] md:px-3.5 md:py-2 md:text-[11px]"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

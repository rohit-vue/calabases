// components/sections/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#FAF8F3] px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10 lg:px-10 lg:pb-16">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] md:items-center md:gap-10 lg:gap-16">

        {/* Left Column: Text & CTA */}
        <div className="flex flex-col gap-8 md:h-full md:min-h-0 md:justify-between lg:gap-10">
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#8b8c98] sm:text-[11px]">
                Calabasas Smiles
              </p>
              <h1 className="font-fraunces text-[4.2rem] leading-[0.9] tracking-[-0.05em] text-[#111827] sm:text-[5rem] md:text-[5.2rem] lg:text-[5.8rem]">
                Calabasas
                <br /> Dentist
              </h1>
              <p className="max-w-[470px] pt-1 text-[1.05rem] leading-[1.12] text-[#2f3746] sm:text-[1.2rem] lg:text-[1.05rem]">
                Cosmetic, general, and emergency care in Calabasas, Agoura Hills, and Hidden Hills.
              </p>
            </div>

            {/* Rating Card */}
            <div className="flex w-full max-w-[340px] items-center gap-4 sm:gap-5">
              <div className="text-center">
                <p className="font-fraunces text-[3.4rem] leading-none text-[#111827] sm:text-[4rem]">4.9</p>
              </div>
              <div className="space-y-1">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[1.15rem] leading-none text-[#f7a54d]" aria-hidden="true">{"\u2605"}</span>
                  ))}
                </div>
                <p className="text-[0.95rem] font-semibold leading-none text-[#111827]">Overall Rating</p>
                <p className="text-[0.78rem] text-[#7b8492]">Based on 584 reviews</p>
              </div>
            </div>
          </div>

          {/* Book Appointment Card */}
          <div className="flex flex-col items-start justify-between gap-6 rounded-[30px] bg-[#dcecf9] px-7 py-7 sm:px-8 sm:py-8 md:flex-row md:items-center md:gap-5 lg:mt-4 lg:px-7 lg:py-7">
            <div className="min-w-0">
              <h3 className="font-fraunces text-[28px] leading-[1] text-[#111827] sm:text-[2.2rem] lg:text-[2rem]">
                Book Your Visit
              </h3>
              <p className="mt-3 max-w-[360px] text-[0.95rem] leading-[1.35] text-[#334155]">
                Same-week appointments. Modern care. No pressure.
              </p>
            </div>
            <button className="whitespace-nowrap rounded-full bg-white px-7 py-3 text-[0.95rem] font-semibold text-[#111827] shadow-[0_4px_14px_rgba(15,23,42,0.12)] transition hover:bg-white/90">
              Book Appointment
            </button>
          </div>
        </div>

        {/* Right Content: Image with Overlaid Glass Cards */}
        <div className="relative mx-auto w-full max-w-[430px] aspect-[0.82] overflow-hidden rounded-[28px] sm:max-w-[500px] md:max-w-none md:aspect-[0.86]">
          <Image
            src="/images/hero-face.jpg"
            alt="Smiling patient"
            fill
            className="rounded-[28px] object-cover object-[center_18%]"
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 38vw, 100vw"
            priority
          />

          {/* Overlay cards wrapper */}
          <div className="absolute inset-x-3 bottom-3 hidden items-stretch justify-between gap-3 sm:flex">
            <div className="flex h-[116px] w-[162px] flex-col rounded-[18px] bg-[rgba(250,247,244,0.95)] px-4 py-3 shadow-[0_12px_28px_rgba(84,58,42,0.14)] backdrop-blur-[10px] md:w-[168px] lg:w-[176px]">
              <h4 className="max-w-[130px] text-[18px] font-bold leading-[1.05] text-[#1f2937] md:text-[15px]">
                No Insurance?
                <br />
                No Problem
              </h4>

              <div className="mt-auto flex items-end gap-1.5">
                <span className="text-[24px] font-fraunces font-medium leading-none text-[#1f2937] md:text-[26px]">$297</span>
                <span className="pb-0.5 text-[11px] font-medium text-[#6b7a90]">/ year</span>
              </div>
            </div>

            <div className="flex h-[116px] w-[206px] flex-col justify-between rounded-[18px] bg-[rgba(207,158,135,0.78)] px-5 py-3 shadow-[0_12px_28px_rgba(84,58,42,0.14)] backdrop-blur-[10px] md:w-[214px] lg:w-[224px]">
              <div className="min-w-0">
                <h4 className="font-fraunces max-w-[150px] text-[15px] leading-[0.92] text-[#fffaf6] md:text-[16px]">
                    Our Unlimited Membership
                </h4>
              </div>

              <div className="flex items-end justify-between gap-2">
                <ul className="space-y-1 text-[10px] leading-[1.25] text-[#f7ece5]">
                  <li>Unlimited Cleanings</li>
                  <li>Unlimited X-Rays</li>
                  <li>Unlimited Exams</li>
                </ul>
                <button className="shrink-0 rounded-full bg-white px-3.5 py-2 text-[11px] font-semibold text-[#111827] shadow-sm transition hover:bg-white/90">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile versions (Stacked below image) */}
        <div className="grid grid-cols-1 gap-4 sm:hidden">
          <div className="rounded-[22px] bg-[rgba(249,243,239,0.94)] px-5 py-4 shadow-sm backdrop-blur-md">
            <h4 className="max-w-[150px] text-[18px] font-bold leading-[1.05] text-[#1f2937]">
              No Insurance?
              <br />
              No Problem
            </h4>
            <div className="mt-3 flex items-end gap-1.5">
              <span className="text-[28px] font-bold leading-none text-[#1f2937]">$297</span>
              <span className="pb-0.5 text-[12px] font-medium text-[#6b7a90]">/ year</span>
            </div>
          </div>
          <div className="flex items-end justify-between gap-4 rounded-[22px] bg-[rgba(209,159,136,0.82)] px-5 py-4 shadow-sm backdrop-blur-md">
            <div className="flex min-w-0 flex-1 flex-col">
              <div>
                <h4 className="font-fraunces max-w-[145px] text-[16px] leading-[0.9] text-white">
                  Our Unlimited Membership
                </h4>
              </div>
              <div className="mt-3.5">
                <ul className="space-y-1 text-[10px] leading-[1.25] text-[#f5ede8]">
                  <li>Unlimited Cleanings</li>
                  <li>Unlimited X-Rays</li>
                  <li>Unlimited Exams</li>
                </ul>
              </div>
            </div>
            <div className="shrink-0 pb-0.5">
              <button className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-[#111827] shadow-sm">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

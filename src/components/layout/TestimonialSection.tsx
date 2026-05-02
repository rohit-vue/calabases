export default function TestimonialSection() {
  return (
    <section className="bg-[#0A0E1A] px-4 py-16 sm:px-8 sm:py-20 lg:px-24 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="relative mx-auto max-w-[900px] text-center">
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 font-fraunces text-[140px] leading-none text-[#121C35] sm:text-[180px]"
          >
            &ldquo;
          </span>

          <p className="text-[20px] tracking-[0.3em] text-[#C9A961]">★★★★★</p>

          <blockquote className="mx-auto mt-6 max-w-[760px] font-fraunces text-[30px] font-light italic leading-[1.22] tracking-[-0.02em] text-[#FFFFFF] sm:text-[44px] lg:text-[44px]">
            I&apos;d been thinking about veneers for ten years. I was terrified of looking fake. Dr.
            Kashani&apos;s digital preview sold me - I could see exactly what my smile would look like
            before we started. The result is so natural that my own mother didn&apos;t notice at first.
            She just said I looked rested.
          </blockquote>

          <div className="mt-10 inline-flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-[28px] bg-[linear-gradient(135deg,#C9A961_0%,#F5EDD8_100%)] text-[20px] font-semibold text-[#0A0E1A]">
              R
            </span>
            <div className="text-left">
              <p className="text-[16px] font-semibold text-[#FFFFFF]">Rachel K</p>
              <p className="text-[13px] text-[#FFFFFF80]">8 Veneers • Calabasas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

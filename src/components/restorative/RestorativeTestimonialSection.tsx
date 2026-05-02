export default function RestorativeTestimonialSection() {
  return (
    <section className="bg-[#ECE7D8] px-4 py-14 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="relative mx-auto max-w-[980px]">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-2 -top-16 font-fraunces text-[180px] italic leading-none text-[#E5D7BE] sm:-left-8 sm:text-[210px]"
          >
            &ldquo;
          </span>

          <p className="text-center font-fraunces text-[12px] uppercase tracking-[0.22em] text-[#A1855E]">
            Patient Portfolio - Calabasas
          </p>

          <blockquote className="mx-auto mt-3 max-w-[840px] text-center font-fraunces text-[30px] italic leading-[1.28] text-[#252E3D] sm:text-[42px] lg:text-[54px]">
            &quot;I had a 20-year-old crown that finally failed. Dr. Kashani replaced it with zirconia -
            and honestly, it looks better than the real teeth next to it. Three years later, it still
            feels exactly the same as the day he put it in. He genuinely cares about the craftsmanship. It
            shows.&quot;
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#B97C3F] font-fraunces text-[17px] text-[#F8F1E4]">
              T
            </div>
            <div>
              <p className="font-semibold text-[#1E2839]">Thomas R.</p>
              <p className="mt-0.5 text-[13px] text-[#7A838F]">Zirconia crown replacement - Calabasas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

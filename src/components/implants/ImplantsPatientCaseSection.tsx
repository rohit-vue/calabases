export default function ImplantsPatientCaseSection() {
  return (
    <section className="bg-[#020918] px-4 py-14 sm:px-8 sm:py-16 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5">
            <span className="text-[14px] text-[#C3A66A]">⛓</span>
            <p className="text-[9px] uppercase tracking-[0.24em] text-[#BDA670]">Patient Case</p>
          </div>
          <h2 className="mx-auto mt-4 max-w-[980px] font-fraunces text-[42px] leading-[0.92] tracking-tighter text-[#EEF2F8] sm:text-[56px] lg:text-[72px]">
            A 20-year denture-wearer.{" "}
            <span className="font-light italic text-[#C9A961]">One 6-month treatment.</span>
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[980px] grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-12">
          <aside className="rounded-[14px] border border-[#1A2742] bg-[linear-gradient(160deg,#0A1327_0%,#091224_100%)] px-6 py-6 text-[#D0D8E6]">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#75839E]">Case n°247</p>

            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#70809C]">Treatment</p>
                <p className="mt-2 font-fraunces text-[30px] leading-[0.95] text-[#EEF2F8] sm:text-[34px] lg:text-[40px]">All-on-4,</p>
                <p className="font-fraunces text-[30px] leading-[0.95] text-[#EEF2F8] sm:text-[34px] lg:text-[40px]">Upper Arch</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#70809C]">Duration</p>
                <p className="mt-2 font-fraunces text-[30px] leading-[0.95] text-[#EEF2F8] sm:text-[34px] lg:text-[40px]">6.5 months</p>
              </div>
              <div className="border-t border-[#1A2742] pt-4">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#70809C]">Implants placed</p>
                <p className="mt-2 font-fraunces text-[30px] leading-none text-[#EEF2F8] sm:text-[34px] lg:text-[40px]">4</p>
              </div>
              <div className="border-t border-[#1A2742] pt-4">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#70809C]">Outcome</p>
                <p className="mt-2 font-fraunces text-[30px] leading-[0.95] text-[#C9A961] sm:text-[34px] lg:text-[40px]">Full success</p>
              </div>
            </div>

            <p className="mt-6 border-t border-[#1A2742] pt-4 text-[13px] text-[#8C99B0]">
              Follow-up at 3 years: Stable. No complications.
            </p>
          </aside>

          <div>
            <blockquote className="font-fraunces text-[30px] italic leading-[1.18] tracking-[-0.02em] text-[#EEF2F8] sm:text-[40px] lg:text-[49px]">
              I wore dentures for 20 years. I stopped smiling in photos. I couldn&apos;t eat corn on the cob.
              After All-on-4, I forgot within a month that they weren&apos;t my real teeth. I eat whatever I
              want. I laugh without covering my mouth. Dr. Kashani didn&apos;t just fix my teeth - he gave me
              back something I didn&apos;t know I&apos;d lost.
            </blockquote>

            <div className="mt-8 inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[15px] font-semibold text-[#111827]">
                D
              </span>
              <div>
                <p className="text-[16px] font-semibold text-[#E8EDF6]">David M.</p>
                <p className="text-[13px] text-[#7C899F]">All-on-4 • Calabasas • 3-year follow-up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

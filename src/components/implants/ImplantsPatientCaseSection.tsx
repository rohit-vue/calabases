export default function ImplantsPatientCaseSection() {
  return (
    <section className="bg-[#020918] px-4 py-14 sm:px-8 sm:py-16 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5">
            <span className="font-fraunces italic uppercase text-[#5A6578]">§</span>
            <p className="text-[11px] font-jetbrains font-medium uppercase tracking-[2.2px] text-[#C9A961]">Patient Case</p>
          </div>
          <h2 className="mx-auto mt-4 max-w-[980px] font-fraunces font-light leading-[0.92] tracking-tighter text-[#FFFFFF] lg:text-[46px]">
            A 20-year denture-wearer.{" "}
            <span className="font-light italic text-[#C9A961]">One 6-month treatment.</span>
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[980px] grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-12">
          <aside className="rounded-[14px] border border-[#FFFFFF14] bg-[#FFFFFF08] px-6 py-6">
            <p className="text-[9px] font-jetbrains uppercase tracking-[0.22em] text-[#C9A961]">Case n°247</p>

            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4">
              <div>
                <p className="font-inter text-[9px] uppercase tracking-[1.65px] text-[#FFFFFF80]">Treatment</p>
                <p className="mt-2 font-fraunces text-[30px] leading-[0.95] text-[#FFFFFF] sm:text-[34px] lg:text-[22px] py-2">All-on-4 ·</p>
                <p className="font-fraunces text-[30px] leading-[0.95] text-[#FFFFFF] sm:text-[34px] lg:text-[22px]">Upper Arch</p>
              </div>
              <div>
                <p className="font-inter text-[9px] uppercase tracking-[1.65px] text-[#FFFFFF80]">Duration</p>
                <p className="mt-2 font-fraunces leading-[0.95] text-[#FFFFFF] lg:text-[22px]">6.5 months</p>
              </div>
              <div className="pt-4">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#FFFFFF80]">Implants placed</p>
                <p className="mt-2 font-fraunces leading-none text-[#FFFFFF] lg:text-[22px]">4</p>
              </div>
              <div className="pt-4">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#FFFFFF80]">Outcome</p>
                <p className="mt-2 font-fraunces leading-[0.95] text-[#C9A961] lg:text-[22px]">Full success</p>
              </div>
            </div>

            <p className="font-jetbrains mt-6 border-t border-[#FFFFFF1A] pt-4 text-[14px] text-[#FFFFFF80]">
              Follow-up at 3 years: Stable. No complications.
            </p>
          </aside>

          <div>
            <blockquote className="font-fraunces italic leading-[1.18] text-[#FFFFFF] font-light lg:text-[24px]">
              &quot;I wore dentures for 20 years. I stopped smiling in photos. I couldn&apos;t eat corn on the cob.
              After All-on-4, I forgot within a month that they weren&apos;t my real teeth. I eat whatever I
              want. I laugh without covering my mouth. Dr. Kashani didn&apos;t just fix my teeth - he gave me
              back something I didn&apos;t know I&apos;d lost.&quot;
            </blockquote>

            <div className="mt-8 inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#FFFFFF_0%,#FFFFFF_100%)] text-[15px] font-semibold text-[#111827]">
                D
              </span>
              <div>
                <p className="text-[16px] font-semibold text-[#FFFFFF]">David M.</p>
                <p className="text-[13px] text-[#FFFFFF80]">All-on-4 • Calabasas • 3-year follow-up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

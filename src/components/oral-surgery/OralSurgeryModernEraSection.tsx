function VsTodayDivider() {
  return (
    <div className="flex items-center gap-0 py-3">
      <div className="h-px min-w-0 flex-1 bg-[#E4E0D6]" />
      <p className="shrink-0 px-4 text-center text-[12px] font-semibold uppercase leading-[19.2px] tracking-[1.8px] text-[#5A6578]">
        vs today
      </p>
      <div className="h-px min-w-0 flex-1 bg-[#E4E0D6]" />
    </div>
  );
}

export default function OralSurgeryModernEraSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-10 sm:py-16 lg:py-[120px]">
      <div className="mx-auto grid w-full max-w-[1216px] gap-12 lg:grid-cols-[minmax(0,558px)_minmax(0,558px)] lg:gap-x-20 xl:gap-x-[100px]">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-6 bg-[#8FA99F]" />
            <p className="text-[11px] font-semibold uppercase leading-[19.2px] tracking-[3px] text-[#5E7267]">The Modern Era</p>
          </div>

          <h2 className="mt-5 font-fraunces text-[32px] font-light leading-[1.06] tracking-[-1px] text-[#0A0E1A] sm:text-[40px] md:text-[48px] lg:text-[56px] lg:leading-[56px] lg:tracking-[-1.68px]">
            <span className="">This isn&apos;t </span>
            <span className=" font-light italic text-[#5E7267]">your mother&apos;s surgery</span>
            
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-[26px] text-[#5A6578] sm:text-[16px] sm:leading-[27px] lg:text-[17px] lg:leading-[28.9px]">
            <p>
              If your mental image of oral surgery is the 1990s — days of swelling, bottles of prescription
              painkillers, a week of applesauce — it&apos;s out of date. Surgical techniques, anesthesia
              protocols, and imaging technology have advanced dramatically.
            </p>
            <p>
              A routine extraction today takes <span className="font-semibold text-[#0A0E1A]">10-20 minutes</span>. A
              root canal is no more uncomfortable than a filling. Wisdom teeth are typically removed under IV
              sedation — you sleep through it, wake up with no memory of the procedure, and most patients are{" "}
              <span className="font-semibold text-[#0A0E1A]">back to normal activities within 3-4 days.</span>
            </p>
            <p>
              We handle most oral surgery in-house. No referrals. No second consultations. No waiting weeks to see a
              separate surgeon across town. If you can be treated safely in our office, you&apos;ll be treated by
              the dentists you already know and trust.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-0">
          <article className="rounded-2xl bg-white px-6 py-6 shadow-[0px_4px_10px_rgba(0,0,0,0.12)] sm:px-8 sm:py-7">
            <p className="text-[11px] font-bold uppercase leading-[17.6px] tracking-[2.2px] text-[#B85450]">
              The 1990s
            </p>
            <p className="mt-4 font-fraunces text-[17px] leading-[24px] tracking-[-0.2px] text-[#0A0E1A] sm:text-[19px] lg:text-[20px] lg:leading-[26px]">
              Days of swelling, prescription opioids, living on{" "}
              <br className="hidden sm:block" />
              applesauce.
            </p>
          </article>

          <VsTodayDivider />

          <article className="rounded-2xl bg-white px-6 py-6 shadow-[0px_4px_9px_rgba(0,0,0,0.12)] sm:px-8 sm:py-7">
            <p className="text-[11px] font-bold uppercase leading-[17.6px] tracking-[2.2px] text-[#5E7267]">Today</p>
            <p className="mt-4 font-fraunces text-[17px] leading-[24px] tracking-[-0.2px] text-[#0A0E1A] sm:text-[19px] lg:text-[20px] lg:leading-[26px]">
              Back to normal in 3-4 days. Ibuprofen usually <br className="hidden sm:block" />
              enough for pain.
            </p>
          </article>

          <VsTodayDivider />

          <article className="rounded-2xl bg-white px-6 py-6 shadow-[0px_4px_10px_rgba(0,0,0,0.12)] sm:px-8 sm:py-7">
            <p className="text-[11px] font-bold uppercase leading-[17.6px] tracking-[2.2px] text-[#B85450]">
              The 1990s
            </p>
            <p className="mt-4 font-fraunces text-[17px] leading-[24px] tracking-[-0.2px] text-[#0A0E1A] sm:text-[19px] lg:text-[20px] lg:leading-[26px]">
              Open referral. Two consultations. Weeks of waiting.
            </p>
          </article>

          <VsTodayDivider />

          <article className="rounded-2xl bg-white px-6 py-6 shadow-[0px_4px_9px_rgba(0,0,0,0.12)] sm:px-8 sm:py-7">
            <p className="text-[11px] font-bold uppercase leading-[17.6px] tracking-[2.2px] text-[#5E7267]">Today</p>
            <p className="mt-4 font-fraunces text-[17px] leading-[24px] tracking-[-0.2px] text-[#0A0E1A] sm:text-[19px] lg:text-[20px] lg:leading-[26px]">
              Same office. Same dentist. In-house surgery suite.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
const insuranceLogos = [
  "Delta Dental",
  "MetLife",
  "Cigna",
  "Aetna",
  "Guardian",
  "United",
  "BCBS",
  "Principal",
  "Humana",
  "Ameritas",
];

export default function InsuranceAcceptedSection() {
  return (
    <section className="bg-[#F5F2EB] px-4 pb-20 pt-10 sm:px-6 md:px-8 lg:px-24">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center lg:gap-14">
        <div className="max-w-[520px]">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C9A961]">
            Insurance Accepted
          </p>

          <h2 className="font-fraunces text-[30px] leading-[0.95] text-[#0A0E1A] tracking-[-0.03em] sm:text-[34px] lg:text-[38px] max-w-[420px]">
            We work with <span className="italic font-light text-[#C9A961]">most plans.</span>
          </h2>

          <p className="mt-4 text-[14px] leading-[1.55] text-[#5A6578] sm:text-[15px]">
            We accept most major PPO dental insurance. If you don&apos;t see yours, call us - we can
            still process your claim and you&apos;ll pay out-of-pocket for the difference.
          </p>

          <p className="mt-4 text-[14px] leading-[1.55] text-[#5A6578] sm:text-[15px]">
            <span className="font-bold text-[#0A0E1A]">No insurance? No problem.</span> Join Gleam
            for $297/year - no deductibles, no waiting periods, no denied claims.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-4">
          {insuranceLogos.map((logo) => (
            <div
              key={logo}
              className="flex min-h-[72px] w-full min-w-0 items-center justify-center whitespace-normal rounded-[12px] border border-[#E4E0D6] bg-white px-5 py-5 text-center text-[11px] font-semibold tracking-[-0.01em] text-[#343a46] sm:whitespace-nowrap sm:px-8 sm:py-5 lg:px-10"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

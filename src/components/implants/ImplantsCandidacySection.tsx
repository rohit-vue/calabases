const greatCandidates = [
  {
    title: "Missing one or more teeth",
    description: "From a single tooth to a full arch - implant solutions exist for every scenario.",
  },
  {
    title: "Current denture or bridge wearers",
    description:
      "Ready to stop dealing with slippage, adhesive, or failing restorations that need replacement every 10-15 years.",
  },
  {
    title: "Lost a tooth recently",
    description: "The sooner you replace, the less bone loss you'll face. Ideal to start planning within 3-6 months of extraction.",
  },
  {
    title: "Want to avoid damaging healthy teeth",
    description: "Bridges require grinding down two adjacent teeth. Implants don't touch the teeth next to them.",
  },
  {
    title: "Have good general health",
    description: "Non-smokers, patients with controlled diabetes, and most adults in reasonable health qualify.",
  },
];

const extraSteps = [
  {
    title: "Significant bone loss",
    description: "May need bone grafting first. Adds 4-6 months to treatment but makes implants possible.",
  },
  {
    title: "Active gum disease",
    description: "Must be treated before implant placement. Deep cleaning or periodontal therapy comes first.",
  },
  {
    title: "Heavy smokers",
    description: "Smoking triples implant failure rates. We recommend quitting at least 3 months before surgery.",
  },
  {
    title: "Uncontrolled diabetes",
    description: "Elevated blood sugar impairs healing. With your physician's help, this can be managed.",
  },
  {
    title: "Still growing (under 18)",
    description: "Jawbones need to finish developing. Temporary solutions available until full maturity.",
  },
];

export default function ImplantsCandidacySection() {
  return (
    <section className="bg-[#F4F3EB] px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-24 lg:pb-24 lg:pt-14">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[900px]">
          <div className="flex items-center gap-2.5">
            <span className="font-fraunces italic uppercase text-[#5A6578]">§</span>
            <p className="text-[11px] font-jetbrains uppercase tracking-[0.24em] text-[#C9A961]">Candidacy</p>
          </div>

          <h2 className="mt-4 font-fraunces font-light leading-[0.92] tracking-tighter text-[#101624] lg:text-[56px]">
            Are implants <span className="font-light italic text-[#C9A961]">right for you?</span>
          </h2>

          <p className="mt-5 max-w-[620px] font-inter font-light leading-normal text-[#5A6578] lg:text-[17px]">
            Most adults missing one or more teeth are candidates for implants - but not everyone is a fit
            on day one. Here&apos;s what we look for during your consultation.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h3 className="font-fraunces leading-none text-[#1D8D84] sm:text-[39px] lg:text-[28px]">✓ Great candidates</h3>
            <div className="mt-2 border-t border-[#DDDACE]">
              {greatCandidates.map((item) => (
                <div key={item.title} className="border-t border-[#E3E0D6] pt-8 pb-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E7F5F3] text-[14px] leading-none text-[#1D8D84]">
                      ✓
                    </span>
                    <div>
                      <p className="font-inter font-semibold leading-none text-[#121927] sm:text-[24px] lg:text-[15px]">{item.title}</p>
                      <p className="mt-2 font-inter text-[14px] leading-[1.58] text-[#5A6578]">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex font-fraunces gap-2 leading-none text-[#1C2333] lg:text-[28px]"><svg
              className="w-7 h-7 text-yellow-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L1 21h22L12 2z" />
              <rect x="11" y="9" width="2" height="5" fill="black" />
              <rect x="11" y="16" width="2" height="2" fill="black" />
            </svg> May need extra steps</h3>
            <div className="mt-4 border-t border-[#DDDACE]">
              {extraSteps.map((item) => (
                <div key={item.title} className="border-t border-[#E3E0D6] pt-8 pb-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFE5E5] text-[14px] leading-none text-[#CC4444]">
                      !
                    </span>
                    <div>
                      <p className="font-inter font-bold leading-none text-[#0A0E1A] sm:text-[24px] lg:text-[15px]">{item.title}</p>
                      <p className="mt-2 font-inter text-[14px] leading-[1.58] text-[#5A6578]">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

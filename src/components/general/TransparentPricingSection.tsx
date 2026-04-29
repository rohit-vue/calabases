const pricingRows = [
  {
    label: "Annual Cost",
    insurance: "$300-$600+ premiums",
    payPerVisit: "$0",
    member: "$297/year",
  },
  {
    label: "Cleanings (2x/year)",
    insurance: "Usually covered",
    payPerVisit: "$150 each",
    member: "Included",
  },
  {
    label: "Exams (2x/year)",
    insurance: "Usually covered",
    payPerVisit: "$120 each",
    member: "Included",
  },
  {
    label: "X-Rays",
    insurance: "Usually included",
    payPerVisit: "$80-$250/year",
    member: "Included",
  },
  {
    label: "Fillings",
    insurance: "50-80% covered",
    payPerVisit: "Full price",
    member: "20% off",
  },
  {
    label: "Other Procedures",
    insurance: "10-50% covered",
    payPerVisit: "Full price",
    member: "20% off",
  },
  {
    label: "Deductibles",
    insurance: "Yes ($50-$200)",
    payPerVisit: "No",
    member: "None",
  },
  {
    label: "Annual Maximum",
    insurance: "Yes ($1,000-$2,000)",
    payPerVisit: "No",
    member: "None",
  },
  {
    label: "Waiting Periods",
    insurance: "Yes (6-12 months)",
    payPerVisit: "No",
    member: "None",
  },
  {
    label: "Denied Claims",
    insurance: "Common",
    payPerVisit: "N/A",
    member: "Never",
  },
];

export default function TransparentPricingSection() {
  return (
    <section className="bg-[#FFFFFF] px-4 py-14 sm:px-12 lg:px-32">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[760px]">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C9A961]">
            Transparent Pricing
          </p>
          <h2 className="font-fraunces text-[40px] leading-[0.95] text-[#0A0E1A] tracking-[-0.03em] sm:text-[50px]">
            No surprise <span className="italic font-light text-[#C9A961]">bills.</span>
          </h2>
          <p className="mt-4 max-w-[720px] text-[15px] leading-[1.58] text-[#5A6578]">
            Most dental offices won&apos;t tell you what something costs until after they&apos;ve done it.
            We do it backwards - you see every price before you sit in the chair. Compare your options
            below.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-[24px] border border-[#E4E0D6]">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="bg-[#f3f1ec]">
                <th className="w-[40%] border-b border-r border-[#d8d3c7] px-4 py-4 text-[14px] font-medium text-[#2c313c] sm:px-5">
                  &nbsp;
                </th>
                <th className="w-[20%] border-b border-r border-[#d8d3c7] px-4 py-4 text-[14px] font-fraunces font-normal text-[#0A0E1A] sm:px-5">
                  With Insurance
                </th>
                <th className="w-[20%] border-b border-r border-[#d8d3c7] px-4 py-4 text-[14px] font-fraunces font-normal text-[#0A0E1A] sm:px-5">
                  Pay-Per-Visit
                </th>
                <th className="w-[20%] border-b border-[#d8d3c7] px-0 py-0 align-top">
                  <div className="overflow-hidden rounded-tr-[16px]">
                    <div className="bg-[#3AA716] px-3 py-1 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                      Recommended
                    </div>
                    <div className="bg-[#C9A961] px-4 pb-4 text-[14px] tracking-[-0.03em] font-fraunces font-normal text-[#FFFFFF]">
                      Gleam Membership
                    </div>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {pricingRows.map((row) => (
                <tr key={row.label} className="bg-white">
                  <td className="border-b border-r border-[#E4E0D6] px-4 py-4 text-[12px] font-semibold text-[#0A0E1A] sm:px-5">
                    {row.label}
                  </td>
                  <td className="border-b border-r border-[#E4E0D6] px-4 py-4 text-[12px] font-normal text-[#1C2333] sm:px-5">
                    {row.insurance}
                  </td>
                  <td className="border-b border-r border-[#E4E0D6] px-4 py-4 text-[12px] font-normal text-[#1C2333] sm:px-5">
                    {row.payPerVisit}
                  </td>
                  <td className="border-b border-[#E4E0D6] bg-[#C9A96136] px-4 py-4 text-[12px] font-semibold text-[#090909] sm:px-5">
                    {row.member}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-[24px] border border-[#C9A961] bg-[linear-gradient(99.29deg,#E8F7F6_0%,#FFFFFF_100%)] px-6 py-5 sm:px-8 sm:py-7">
          <h3 className="font-fraunces text-[22px] leading-[0.95] text-[#0A0E1A] font-normal tracking-[-0.01em] sm:text-[21px]">
            The math for an uninsured patient.
          </h3>
          <p className="mt-3 max-w-[980px] text-[14px] leading-[1.65] text-[#1C2333] font-normal sm:text-[14px]">
            Two cleanings + two exams + X-rays at pay-per-visit pricing = <strong>$540</strong>. Gleam
            Membership is <strong>$297</strong>. You save <strong>$243 in your first year</strong> - and
            get 20% off everything else. Most members break even by their second visit.
          </p>
        </div>
      </div>
    </section>
  );
}

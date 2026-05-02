"use client";
type ErVariant = "default" | "red" | "tealYes";

const rows: { id: string; label: string; dentist: string; er: string; erVariant?: ErVariant }[] = [
  { id: "treat", label: "Can actually treat the tooth", dentist: "✓ Yes", er: "✖ No", erVariant: "red" },
  { id: "cost", label: "Average cost", dentist: "$150 – $1,500", er: "$1,500 – $5,000+" },
  { id: "wait", label: "Average wait time", dentist: "30 min – 2 hours", er: "4 – 8+ hours" },
  { id: "resolve", label: "Resolves the problem", dentist: "✓ Yes", er: "Pain meds only" },
  { id: "rx", label: "Can prescribe antibiotics", dentist: "✓ Yes", er: "✓ Yes", erVariant: "tealYes" },
  { id: "xray", label: "Can do X-rays & diagnosis", dentist: "✓ Full dental imaging", er: "Limited" },
  { id: "followup", label: "Follow-up care", dentist: "✓ Same office, same dentist", er: "Referral required" },
];

const tealText = "text-[14px] font-medium text-[#1a9b8a]";

function DentistCellText({ text }: { text: string }) {
  if (text.startsWith("✓")) {
    return (
      <span className={tealText}>
        <span className="font-semibold">✓</span>
        {text.slice(1)}
      </span>
    );
  }
  return <span className={tealText}>{text}</span>;
}

function ErCellText({ text, variant }: { text: string; variant: ErVariant }) {
  if (variant === "red") {
    return <span className="text-[15px] font-medium text-[#E14B4B]">{text}</span>;
  }
  if (variant === "tealYes") {
    return <span className={tealText}>{text}</span>;
  }
  return <span className="text-[15px] font-medium text-[#1C2333]">{text}</span>;
}

export default function EmergencyAvoidEr() {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="max-w-[720px]">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#22B3B4] font-bold">Avoid the ER</p>
          <h2 className="mt-4 font-fraunces text-[44px] leading-[0.95] tracking-[-0.03em] text-[#0F182B] sm:text-[60px] lg:text-[45px]">
            Don&apos;t go to the hospital <span className="font-light italic text-[#EC4252]">for a tooth.</span>
          </h2>
          <p className="mt-4 text-[18px] leading-normal text-[#5a6578]">
            2 million Americans end up in the ER every year for dental emergencies. It&apos;s almost always the wrong
            choice. Here&apos;s why.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[680px] overflow-hidden rounded-2xl border border-[#dce1e8] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
            <div className="grid grid-cols-[minmax(200px,1.15fr)_1fr_1fr]">
              {/* Header row */}
              <div className="rounded-tl-2xl border-b border-r border-[#dce1e8] bg-[#fafbfc]" aria-hidden />
              <div className="flex flex-col border-b border-r border-[#dce1e8]">
                <div className="bg-[#0A0E1A] px-4 py-2 text-center">
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#19B5B0]">Best choice</p>
                </div>
                <div className="flex flex-1 items-center justify-center bg-[#26A69A] px-4 py-5">
                  <p className="text-center font-fraunces text-[20px] font-semibold leading-tight text-[#0A0E1A] sm:text-[13px] lg:text-[17px]">
                    Emergency Dentist
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-tr-2xl border-b border-[#dce1e8] bg-[#0A0E1A] px-4 py-6">
                <p className="text-center font-fraunces text-[20px] font-semibold text-white sm:text-[22px] lg:text-[17px]">Hospital ER</p>
              </div>

              {rows.map((row, i) => {
                const isLast = i === rows.length - 1;
                const rowDivider = !isLast ? "border-b border-[#dce1e8]" : "";
                return (
                  <div key={row.id} className="contents">
                    <div
                      className={`border-r border-[#dce1e8] bg-[#fafbfc] px-4 py-5 text-[14px] font-bold text-[#374151] ${rowDivider} ${isLast ? "rounded-bl-2xl" : ""}`}
                                    >
                      {row.label}
                    </div>
                    <div className={`border-r border-[#dce1e8] bg-[#ecf8f6] px-4 py-3.5 ${rowDivider}`}>
                      <DentistCellText text={row.dentist} />
                    </div>
                    <div className={`bg-white px-4 py-3.5 ${rowDivider} ${isLast ? "rounded-br-2xl" : ""}`}>
                      <ErCellText text={row.er} variant={row.erVariant ?? "default"} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

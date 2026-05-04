type SedationOption = {
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
};

const sedationOptions: SedationOption[] = [
  {
    title: "Local Anesthesia",
    subtitle: "Awake · Numb only",
    description:
      "Numbs the area being treated. You're fully awake and conversational. Standard for fillings, simple extractions, and most routine procedures. Drive yourself home.",
    metrics: [
      { label: "Duration", value: "2-4 hours" },
      { label: "Driver needed", value: "No" },
      { label: "Recovery", value: "Immediate" },
    ],
  },
  {
    title: "Nitrous Oxide",
    subtitle: "Relaxed · Laughing gas",
    description:
      "Mild sedation through a nose mask. You stay awake and alert but feel floaty and calm. Wears off in 5 minutes after we stop. Good for anxiety-prone patients who need to drive afterward.",
    metrics: [
      { label: "Onset", value: "3-5 minutes" },
      { label: "Driver needed", value: "No" },
      { label: "Recovery", value: "5-10 minutes" },
    ],
  },
  {
    title: "Oral Sedation",
    subtitle: "Drowsy · Calm & aware",
    description:
      "A pill taken an hour before your appointment. You'll feel deeply relaxed, possibly drowsy, but still responsive. Many patients don't remember much of the procedure. You'll need a ride.",
    metrics: [
      { label: "Onset", value: "45-60 minutes" },
      { label: "Driver needed", value: "Yes" },
      { label: "Recovery", value: "4-6 hours" },
    ],
  },
  {
    title: "IV Sedation",
    subtitle: "Asleep · No memory",
    description:
      "Administered through an IV by our anesthesia team. You'll sleep through the procedure with no memory of it. The gold standard for wisdom teeth, complex extractions, and anxious patients.",
    metrics: [
      { label: "Onset", value: "Immediate" },
      { label: "Driver needed", value: "Yes" },
      { label: "Recovery", value: "2-4 hours" },
    ],
  },
];

export default function OralSurgerySedationSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-10 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1216px]">
        <div className="max-w-[986px]">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-6 bg-[#8FA99F]" />
            <p className="text-[11px] font-semibold uppercase leading-[19.2px] tracking-[3px] text-[#5E7267]">Sedation Options</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[32px] font-light leading-[1.08] tracking-[-0.03em] text-[#0A0E1A] sm:text-[48px] md:text-[56px] lg:text-[56px]">
            Four comfort levels. <span className="italic text-[#5E7267]">You choose.</span>
          </h2>

          <p className="mt-6 max-w-[734px] text-[15px] leading-[26px] text-[#5A6578] sm:text-[17px] sm:leading-[27px] lg:text-[17px] lg:leading-[28px]">
            The right sedation makes the difference between &quot;I dreaded it for weeks&quot; and &quot;that was easier
            than I thought.&quot; We offer every level, from nothing to deep IV sedation — tell us what you want,
            and we&apos;ll plan around it.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {sedationOptions.map((option, optionIndex) => (
            <article
              key={option.title}
              className="flex h-full min-h-0 flex-col rounded-2xl border border-[#E4E0D6] bg-[#F3F7F6] px-5 pb-5 pt-7 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] sm:px-6 sm:pb-6 sm:pt-8"
            >
              <div className="mb-6 flex shrink-0 justify-center gap-1.5">
                {Array.from({ length: 4 }, (_, segIndex) => {
                  const active = segIndex < optionIndex + 1;
                  return (
                    <span
                      key={segIndex}
                      className={`h-1 w-6 rounded-full ${active ? "bg-[#8FA99F]" : "bg-[#E4E0D6]"}`}
                      aria-hidden
                    />
                  );
                })}
              </div>

              <h3 className="shrink-0 font-fraunces text-[24px] font-normal leading-[24px] tracking-[-0.24px] text-[#0A0E1A] sm:text-[28px] lg:text-[24px]">
                {option.title}
              </h3>
              <p className="mt-2 shrink-0 text-[16px] font-fraunces italic text-[#5E7267] sm:text-[17px] lg:text-[14px]">{option.subtitle}</p>

              <p className="mt-5 min-h-0 flex-1 text-[13px] leading-[1.7] text-[#1C2333] sm:text-[14px] sm:leading-[1.75]">
                {option.description}
              </p>

              <div className="mt-6 shrink-0 border-t border-[#E4E0D6] pt-5">
                <div className="space-y-3">
                  {option.metrics.map((metric) => (
                    <div key={metric.label} className="flex items-center justify-between gap-3">
                      <p className="min-w-0 flex-1 text-[12px] text-[#5A6578]">{metric.label}</p>
                      <p className="text-right text-[14px] font-medium text-[#0A0E1A] sm:text-[12px]">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
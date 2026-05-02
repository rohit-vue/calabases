type SedationOption = {
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
};

const sedationOptions: SedationOption[] = [
  {
    title: "Local Anesthesia",
    subtitle: "Awake - Numb only",
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
    subtitle: "Relaxed - Laughing gas",
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
    subtitle: "Drowsy - Calm & aware",
    description:
      "A pill taken an hour before your appointment. You'll feel deeply relaxed, possibly drowsy, but still responsive. Many patients don't remember much of the procedure. You'll need a ride.",
    metrics: [
      { label: "Onset", value: "45-60 minutes" },
      { label: "Driver needed", value: "Yes" },
      { label: "Recovery", value: "4-8 hours" },
    ],
  },
  {
    title: "IV Sedation",
    subtitle: "Asleep - No memory",
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
    <section className="bg-[#EEF1F4] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px]">
        <div className="max-w-[930px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#7E8898]" />
            <p className="font-fraunces text-[12px] uppercase tracking-[0.24em] text-[#6F7989]">Sedation Options</p>
          </div>

          <h2 className="mt-4 font-fraunces text-[44px] leading-[0.96] tracking-[-0.03em] text-[#141E30] sm:text-[58px] lg:text-[76px]">
            Four comfort levels. <span className="font-light italic text-[#495569]">You choose.</span>
          </h2>

          <p className="mt-5 max-w-[900px] text-[17px] leading-[1.62] text-[#677383] sm:text-[22px] lg:text-[29px]">
            The right sedation makes the difference between &quot;I dread it for weeks&quot; and &quot;that was easier
            than I thought.&quot; We offer every level, from nothing to deep IV sedation - tell us what you
            want, and we&apos;ll plan around it.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {sedationOptions.map((option) => (
            <article
              key={option.title}
              className="rounded-[16px] border border-[#E2E4E7] bg-[#F4F6F6] px-5 pb-5 pt-5 sm:px-6 sm:pb-6"
            >
              <div className="mb-4 flex gap-1.5">
                <span className="h-1 w-8 rounded-full bg-[#7F9F9A]" />
                <span className="h-1 w-6 rounded-full bg-[#CAD5D2]" />
                <span className="h-1 w-6 rounded-full bg-[#E5DDD1]" />
              </div>

              <h3 className="font-fraunces text-[32px] leading-[1.02] text-[#1A2537] sm:text-[37px] lg:text-[43px]">{option.title}</h3>
              <p className="mt-1 font-fraunces text-[20px] italic text-[#7E8794]">{option.subtitle}</p>

              <p className="mt-4 text-[16px] leading-[1.7] text-[#5B6676] sm:text-[18px] lg:text-[20px]">{option.description}</p>

              <div className="mt-5 border-t border-[#DFE2E5] pt-4">
                <div className="space-y-2.5">
                  {option.metrics.map((metric) => (
                    <div key={metric.label} className="flex items-center justify-between gap-3">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-[#7D8694]">{metric.label}</p>
                      <p className="font-semibold text-[#293447]">{metric.value}</p>
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

import Image from "next/image";
import Link from "next/link";

type ProcedureMetric = {
  label: string;
  value: string;
  note: string;
};

type ProcedureItem = {
  chapter: string;
  titleMain: string;
  titleEmphasis: string;
  subtitle: string;
  bodyTop: string;
  bodyBottom: string;
  cta: string;
  specimen: string;
  specimenTag: string;
  imageSrc: string;
  imageAlt: string;
  leftMetric: ProcedureMetric;
  rightMetric: ProcedureMetric;
  textMetrics: ProcedureMetric[];
};

const procedures: ProcedureItem[] = [
  {
    chapter: "Procedure 01 - Extractions",
    titleMain: "Tooth",
    titleEmphasis: "extractions.",
    subtitle: "When a tooth can't be saved, a modern extraction is quick, precise, and followed by a clear plan for what comes next.",
    bodyTop:
      "Extractions are needed when decay reaches the root, a tooth fractures below the gumline, or gum disease has destroyed the supporting bone. A modern routine extraction takes 10-20 minutes under local anesthesia and recovery is typically 2-3 days.",
    bodyBottom:
      "When appropriate, we discuss implant replacement during the same consultation - and for qualified cases, we can place the implant in the same visit as the extraction, saving 3-6 months of treatment time.",
    cta: "Explore Extractions",
    specimen: "Procedure N*I",
    specimenTag: "Routine",
    imageSrc: "/images/cosmatichero.jpg",
    imageAlt: "Tooth extraction procedure",
    leftMetric: { label: "Duration", value: "10-20 min", note: "" },
    rightMetric: { label: "Recovery", value: "2-3 days", note: "" },
    textMetrics: [
      { label: "Procedure time", value: "10-20 minutes", note: "Routine extraction" },
      { label: "Anesthesia", value: "Local or IV", note: "Your comfort preference" },
      { label: "Recovery", value: "2-3 days", note: "Back to normal typically" },
      { label: "Investment", value: "$200-$900", note: "Gleam members save 20%" },
    ],
  },
  {
    chapter: "Procedure 02 - Root Canals",
    titleMain: "Root",
    titleEmphasis: "canals.",
    subtitle: "The procedure with the worst reputation and the best outcomes. 95% success rate. Less uncomfortable than a filling.",
    bodyTop:
      "The root canal's reputation is worse than the procedure itself. Modern root canals score lower on pain scales than routine fillings. The success rate is 95%, and a root-canaled tooth can last a lifetime.",
    bodyBottom:
      "Without the procedure, the alternative is extraction - which sets off the bone loss cascade. Saving your natural tooth is almost always the right call. We'll talk you through it honestly, and use IV sedation if you want it.",
    cta: "Explore Root Canals",
    specimen: "Procedure N*II",
    specimenTag: "Tooth-saving",
    imageSrc: "/images/isaacimg.png",
    imageAlt: "Root canal treatment",
    leftMetric: { label: "Success rate", value: "95%", note: "" },
    rightMetric: { label: "Duration", value: "45-90 min", note: "" },
    textMetrics: [
      { label: "Procedure time", value: "45-90 min", note: "Single visit typical" },
      { label: "Success rate", value: "95%", note: "When done properly" },
      { label: "Pain score", value: "Lower than fillings", note: "Per modern clinical study" },
      { label: "Investment", value: "$900-$1,500", note: "Gleam members save 20%" },
    ],
  },
  {
    chapter: "Procedure 03 - Wisdom Teeth",
    titleMain: "Wisdom teeth",
    titleEmphasis: "removal.",
    subtitle: "The timing matters more than the procedure itself. Done in your twenties, you'll barely remember it.",
    bodyTop:
      "Most people need their wisdom teeth removed at some point. The timing changes everything: removed in the late teens or early 20s, recovery is usually 3-5 days and complications are rare.",
    bodyBottom:
      "We use 3D CBCT imaging to plan around nerves and adjacent teeth with precision. Most removals at our office are done under IV sedation. You'll sleep through it and wake up when it's over.",
    cta: "Explore Wisdom Teeth",
    specimen: "Procedure N*III",
    specimenTag: "Preventive",
    imageSrc: "/images/implantshero.jpg",
    imageAlt: "Wisdom teeth model",
    leftMetric: { label: "Best age", value: "Late teens-20s", note: "" },
    rightMetric: { label: "Recovery", value: "3-5 days", note: "" },
    textMetrics: [
      { label: "Procedure time", value: "45-75 min", note: "All four under sedation" },
      { label: "Imaging", value: "3D CBCT", note: "Sub-millimeter precision" },
      { label: "Recovery", value: "3-5 days", note: "Back to work/school" },
      { label: "Investment", value: "$1,500-$3,000", note: "Gleam members save 20%" },
    ],
  },
];

function ProcedureCard({ item }: { item: ProcedureItem }) {
  return (
    <aside className="w-full rounded-[16px] border border-[#DFDFDD] bg-[#F6F6F4] p-6">
      <div className="flex items-center justify-between border-b border-[#E2E2DF] pb-3">
        <p className="font-fraunces text-[11px] uppercase tracking-[0.18em] text-[#B78655]">{item.specimen}</p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7D8493]">{item.specimenTag}</p>
      </div>
      <div className="py-4">
        <div className="relative mx-auto h-[180px] w-[230px] overflow-hidden rounded-[14px] shadow-[0_8px_18px_rgba(0,0,0,0.18)]">
          <Image src={item.imageSrc} alt={item.imageAlt} fill className="object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 border-t border-[#E2E2DF] pt-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#7C8594]">{item.leftMetric.label}</p>
          <p className="mt-1 font-fraunces text-[29px] text-[#1A2436]">{item.leftMetric.value}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#7C8594]">{item.rightMetric.label}</p>
          <p className="mt-1 font-fraunces text-[29px] text-[#1A2436]">{item.rightMetric.value}</p>
        </div>
      </div>
    </aside>
  );
}

function ProcedureText({ item }: { item: ProcedureItem }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[#6E7685]" />
        <p className="font-fraunces text-[12px] uppercase tracking-[0.24em] text-[#B27B45]">{item.chapter}</p>
      </div>
      <h3 className="mt-3 font-fraunces text-[42px] leading-[0.95] tracking-[-0.03em] text-[#182235] sm:text-[52px] lg:text-[64px]">
        {item.titleMain} <span className="font-light italic text-[#B07A44]">{item.titleEmphasis}</span>
      </h3>
      <p className="mt-4 max-w-[680px] font-fraunces text-[24px] italic leading-tight text-[#343F50] sm:text-[29px] lg:text-[35px]">{item.subtitle}</p>
      <p className="mt-5 max-w-[720px] text-[17px] leading-[1.75] text-[#5D6878] sm:text-[19px] lg:text-[22px]">{item.bodyTop}</p>
      <p className="mt-4 max-w-[720px] text-[17px] leading-[1.75] text-[#5D6878] sm:text-[19px] lg:text-[22px]">{item.bodyBottom}</p>

      <div className="mt-6 border-y border-[#D7DADF] py-4">
        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
          {item.textMetrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#7D8694]">{metric.label}</p>
              <p className="mt-1 font-fraunces text-[24px] text-[#192436] sm:text-[28px] lg:text-[34px]">{metric.value}</p>
              <p className="mt-1 font-fraunces text-[16px] italic text-[#B07A44]">{metric.note}</p>
            </div>
          ))}
        </div>
      </div>

      <Link href="#" className="mt-5 inline-flex items-center gap-2 font-semibold text-[#202B3E]">
        {item.cta} <span>→</span>
      </Link>
    </div>
  );
}

export default function OralSurgeryProceduresSection() {
  return (
    <section className="bg-[#EEF1F4] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px]">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#738093]" />
            <p className="font-fraunces text-[12px] uppercase tracking-[0.24em] text-[#B17C47]">What We Handle</p>
          </div>
          <h2 className="mt-4 font-fraunces text-[44px] leading-[0.96] tracking-[-0.03em] text-[#151F31] sm:text-[60px] lg:text-[78px]">
            Three procedures. <span className="font-light italic text-[#B57D45]">One calm suite.</span>
          </h2>
          <p className="mt-5 max-w-[820px] text-[17px] leading-[1.65] text-[#677283] sm:text-[22px] lg:text-[29px]">
            The three most common oral surgery procedures - extractions, root canals, and wisdom teeth
            removal - make up over 90% of surgical dentistry. We do all three in-house, daily.
          </p>
        </div>

        <div className="mt-10 border-t border-[#D8DCE2]">
          {procedures.map((item, index) => {
            const cardLeft = index % 2 === 0;
            return (
              <article key={item.chapter} className="border-b border-[#D8DCE2] py-10 sm:py-12">
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                    cardLeft ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                  }`}
                >
                  <ProcedureCard item={item} />
                  <ProcedureText item={item} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

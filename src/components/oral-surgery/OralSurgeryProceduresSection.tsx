import Image from "next/image";
import Link from "next/link";

type ProcedureMetric = {
  label: string;
  value: string;
  note: string;
};

type ProcedureKey = "extractions" | "root" | "wisdom";

type ProcedureItem = {
  key: ProcedureKey;
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

/** Local assets in `public/images/` → paths start with `/images/`. */
const PROCEDURE_IMG_EXTRACTIONS = "/images/procedureimga.jpg";
const PROCEDURE_IMG_ROOT_CANAL = "/images/procedureimgb.jpg";
const PROCEDURE_IMG_WISDOM = "/images/procedureimgc.jpg";

const procedures: ProcedureItem[] = [
  {
    key: "extractions",
    chapter: "Procedure 01 — Extractions",
    titleMain: "Tooth",
    titleEmphasis: "extractions.",
    subtitle:
      "When a tooth can't be saved, a modern extraction is quick, precise, and followed by a clear plan for what comes next.",
    bodyTop: "",
    bodyBottom: "",
    cta: "Explore Extractions",
    specimen: "Procedure N°I",
    specimenTag: "Routine",
    imageSrc: PROCEDURE_IMG_EXTRACTIONS,
    imageAlt: "Dental forceps during a tooth extraction",
    leftMetric: { label: "Duration", value: "10-20 min", note: "" },
    rightMetric: { label: "Recovery", value: "2-3 days", note: "" },
    textMetrics: [
      { label: "Procedure Time", value: "10-20 minutes", note: "Routine extraction" },
      { label: "Anesthesia", value: "Local or IV", note: "Your comfort preference" },
      { label: "Recovery", value: "2-3 days", note: "Back to normal typically" },
      { label: "Investment", value: "$200-$600", note: "Gleam members save 20%" },
    ],
  },
  {
    key: "root",
    chapter: "Procedure 02 — Root Canals",
    titleMain: "Root",
    titleEmphasis: "canals.",
    subtitle:
      "The procedure with the worst reputation and the best outcomes. 95% success rate. Less uncomfortable than a filling.",
    bodyTop: "",
    bodyBottom: "",
    cta: "Explore Root Canals",
    specimen: "Procedure N°II",
    specimenTag: "Tooth-Saving",
    imageSrc: PROCEDURE_IMG_ROOT_CANAL,
    imageAlt: "Cross-section illustration of a molar during root canal treatment",
    leftMetric: { label: "Success rate", value: "95%", note: "" },
    rightMetric: { label: "Duration", value: "45-90 min", note: "" },
    textMetrics: [
      { label: "Procedure Time", value: "45-90 min", note: "Single visit typical" },
      { label: "Success Rate", value: "95%", note: "When done properly" },
      { label: "Pain Score", value: "Lower than fillings", note: "Per 2020 clinical study" },
      { label: "Investment", value: "$900-$1,500", note: "Gleam members save 20%" },
    ],
  },
  {
    key: "wisdom",
    chapter: "Procedure 03 — Wisdom Teeth",
    titleMain: "Wisdom teeth",
    titleEmphasis: "removal.",
    subtitle:
      "The timing matters more than the procedure itself. Done in your twenties, you'll barely remember it.",
    bodyTop: "",
    bodyBottom: "",
    cta: "Explore Wisdom Teeth",
    specimen: "Procedure N°III",
    specimenTag: "Preventive",
    imageSrc: PROCEDURE_IMG_WISDOM,
    imageAlt: "Illustration of an impacted wisdom tooth pressing against adjacent molars",
    leftMetric: { label: "Best Age", value: "Late teens-20s", note: "" },
    rightMetric: { label: "Recovery", value: "3-5 days", note: "" },
    textMetrics: [
      { label: "Procedure Time", value: "45-75 min", note: "All four under sedation" },
      { label: "Imaging", value: "3D CBCT", note: "Sub-millimeter precision" },
      { label: "Recovery", value: "3-5 days", note: "Back to work/school" },
      { label: "Investment", value: "$1,500-$3,000", note: "Gleam members save 20%" },
    ],
  },
];

function ProcedureCard({ item }: { item: ProcedureItem }) {
  const remote = item.imageSrc.startsWith("https://");

  return (
    <aside className="min-w-0 w-full overflow-hidden rounded-3xl border border-[#E4E0D6] bg-white">
      <div className="flex items-center justify-between border-b border-[#E4E0D6] px-5 pb-3 pt-6 sm:px-8 sm:pb-4 sm:pt-8">
        <p className="font-fraunces text-[11px] font-normal italic uppercase tracking-[2px] text-[#B87333] sm:text-[12px] sm:tracking-[2.4px]">
          {item.specimen}
        </p>
        <span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#4A5D53]">
          {item.specimenTag}
        </span>
      </div>

      <div className="relative px-5 pb-5 pt-5 sm:px-8 sm:pb-6 sm:pt-6">
        {item.key === "wisdom" ? (
          <div className="relative mx-auto aspect-[325/284] w-full max-w-[325px] overflow-hidden rounded-[20px] shadow-[0px_4px_26px_rgba(0,0,0,0.25)]">
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              className="object-cover"
              sizes="325px"
              unoptimized={remote}
            />
          </div>
        ) : item.key === "extractions" ? (
          <div className="relative mx-auto aspect-[370/245] w-full max-w-[370px] overflow-hidden rounded-[20px] shadow-[0px_4px_19.2px_rgba(0,0,0,0.25)]">
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              className="object-cover"
              sizes="370px"
              unoptimized={remote}
            />
          </div>
        ) : (
          <div className="relative mx-auto aspect-[198/228] w-full max-w-[220px] overflow-hidden rounded-[20px] shadow-[0px_4px_26.4px_rgba(0,0,0,0.25)]">
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              className="object-contain object-center"
              sizes="298px"
              unoptimized={remote}
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-[#E4E0D6] px-5 pb-6 pt-5 sm:gap-6 sm:px-8 sm:pb-8 sm:pt-6">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[1.2px] text-os-muted sm:text-[10px] sm:tracking-[1.5px]">
            {item.leftMetric.label}
          </p>
          <p className="mt-1 font-fraunces text-[16px] tracking-[-0.18px] text-os-ink sm:text-[18px]">{item.leftMetric.value}</p>
        </div>
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[1.2px] text-[#5A6578] sm:text-[10px] sm:tracking-[1.5px]">
            {item.rightMetric.label}
          </p>
          <p className="mt-1 font-fraunces text-[16px] tracking-[-0.18px] text-[#0A0E1A] sm:text-[18px]">{item.rightMetric.value}</p>
        </div>
      </div>
    </aside>
  );
}

function ExtractionsBody() {
  return (
    <div className="mt-5 max-w-[600px] rounded-xl bg-[#F0F4F8] px-5 py-5 text-left sm:px-6 sm:py-6">
      <p className="text-[14px] leading-[1.6] text-[#5A6578] sm:text-[15px] lg:text-[15px] lg:leading-[27px]">
        Extractions are needed when decay reaches the root, a tooth fractures below the gumline, or gum disease has
        destroyed the supporting bone. A modern routine extraction takes{" "}
        <span className="font-semibold text-[#0A0E1A]">10-20 minutes under local anesthesia</span> and recovery is
        typically 2-3 days.
      </p>
      <p className="mt-4 text-[14px] leading-[1.6] text-[#5A6578] sm:mt-5 sm:text-[15px] lg:text-[15px] lg:leading-[27px]">
        When appropriate, we discuss implant replacement during the same consultation — and for qualified cases,{" "}
        <span className="font-semibold text-[#0A0E1A]">we can place the implant in the same visit</span> as the
        extraction, saving 3-6 months of treatment time.
      </p>
    </div>
  );
}

function RootCanalBody() {
  return (
    <div className="mt-5 max-w-[600px] rounded-xl bg-[#F0F4F8] px-5 py-5 text-left sm:px-6 sm:py-6">
      <p className="text-[14px] leading-[1.6] text-[#5A6578] sm:text-[15px] lg:text-[15px] lg:leading-[27px]">
        The root canal&apos;s reputation is worse than the procedure itself. A 2020 study found that modern root canals
        score <span className="font-semibold text-[#0A0E1A]">lower on pain scales than routine fillings</span>. The success
        rate is 95%, and a root-canaled tooth can last a lifetime.
      </p>
      <p className="mt-4 text-[14px] leading-[1.6] text-[#5A6578] sm:mt-5 sm:text-[15px] lg:text-[15px] lg:leading-[27px]">
        Without the procedure, the alternative is extraction — which sets off the bone loss cascade we describe on our
        implants page.{" "}
        <span className="font-semibold text-[#0A0E1A]">Saving your natural tooth is almost always the right call.</span>{" "}
        We&apos;ll talk you through it honestly, and use IV sedation if you want it.
      </p>
    </div>
  );
}

function WisdomBody() {
  return (
    <>
      <p className="mt-5 max-w-[600px] text-[14px] leading-[1.6] text-[#5A6578] sm:text-[15px] lg:text-[15px] lg:leading-[27px]">
        <span className="font-semibold text-[#0A0E1A]">85% of people</span> need their wisdom teeth removed at some point.
        The timing changes everything: removed in the late teens or early 20s, recovery is 3-5 days and complications
        are rare. Removed in the 30s or later, surgery is more complex and recovery doubles.
      </p>
      <p className="mt-4 max-w-[600px] text-[14px] leading-[1.6] text-[#5A6578] sm:mt-5 sm:text-[15px] lg:text-[15px] lg:leading-[27px]">
        We use <span className="font-semibold text-[#0A0E1A]">3D CBCT imaging </span> to plan the procedure precisely —
        avoiding nerves, sinuses, and adjacent teeth. Most wisdom teeth removals at our office are done under IV
        sedation. You&apos;ll sleep through it and wake up when it&apos;s over.
      </p>
    </>
  );
}

function ProcedureText({ item }: { item: ProcedureItem }) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[#0A0E1A]" />
        <p className="font-fraunces text-[12px] font-normal italic uppercase leading-[20px] tracking-[3px] text-[#B87333] sm:text-[12px] sm:leading-[22px] sm:tracking-[4.2px]">
          {item.chapter}
        </p>
      </div>
      <h3 className="mt-3 font-fraunces text-[32px] font-light leading-[1.06] tracking-[-1.4px] text-[#0A0E1A] sm:text-[40px] md:text-[48px] lg:text-[48px] lg:leading-[48px] lg:tracking-[-1.68px]">
        {item.titleMain}{" "}
        <span className="italic text-[#B87333]">{item.titleEmphasis}</span>
      </h3>
      <p className="mt-5 max-w-[600px] font-fraunces text-[17px] font-light italic leading-[28px] text-[#1C2333] sm:text-[20px] sm:leading-[31px] lg:text-[20px] lg:leading-[33px]">
        {item.subtitle}
      </p>

      {item.key === "wisdom" ? (
        <WisdomBody />
      ) : item.key === "extractions" ? (
        <ExtractionsBody />
      ) : item.key === "root" ? (
        <RootCanalBody />
      ) : (
        <>
          <p className="mt-5 max-w-[620px] text-[14px] leading-[25px] text-os-muted sm:text-[15px] sm:leading-[27px]">{item.bodyTop}</p>
          <p className="mt-4 max-w-[620px] text-[14px] leading-[25px] text-os-muted sm:text-[15px] sm:leading-[27px]">{item.bodyBottom}</p>
        </>
      )}

      <div className="mt-6 border-y border-[#E4E0D6] py-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-10 sm:gap-y-6">
          {item.textMetrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-[9px] font-semibold uppercase tracking-[1.5px] text-[#5A6578] sm:text-[10px] sm:tracking-[2px]">
                {metric.label}
              </p>
              <p className="mt-1 font-fraunces text-[15px] leading-[24px] tracking-[-0.17px] text-[#0A0E1A] sm:text-[17px] sm:leading-[27px]">
                {metric.value}
              </p>
              <p className="mt-1 text-[11px] font-medium italic text-[#B87333] sm:text-[12px]">{metric.note}</p>
            </div>
          ))}
        </div>
      </div>

      <Link href="https://app.nexhealth.com/appts/advanced-dentists-group/appt-type?lid=354035"
            target="_blank" className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.7px] text-[#0A0E1A] sm:text-[14px]">
        {item.cta} <span className="font-bold">→</span>
      </Link>
    </div>
  );
}

export default function OralSurgeryProceduresSection() {
  return (
    <section className="bg-[#F0F4F7] px-4 py-12 sm:px-10 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1216px]">
        <div className="max-w-[900px]">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-6 bg-[#0A0E1A]" />
            <p className="text-[11px] font-semibold uppercase leading-[19.2px] tracking-[3px]  text-[#B87333]">What We Handle</p>
          </div>
          <h2 className="mt-4 font-fraunces text-[32px] font-light leading-[1.08] tracking-[-0.03em] text-[#0A0E1A] sm:text-[44px] md:text-[56px] lg:text-[56px] lg:leading-[1.02]">
            Three procedures. <span className="italic text-[#B87333]">One calm suite.</span>
          </h2>
          <p className="mt-6 max-w-[720px] text-[15px] leading-[1.6] text-[#5A6578] sm:text-[17px] lg:text-[17px] lg:leading-[28px]">
            The three most common oral surgery procedures — extractions, root canals, and wisdom teeth removal — make up
            over 90% of surgical dentistry. We do all three in-house, daily.
          </p>
        </div>

        <div className="mt-12 border-t border-[#E4E0D6]">
          {procedures.map((item, index) => {
            const cardLeft = index % 2 === 0;
            return (
              <article key={item.key} className="border-b border-[#E4E0D6] py-10 sm:py-12 lg:py-14">
                <div
                  className={`grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 ${
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
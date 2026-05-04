import type { ReactNode } from "react";

type CatalogMetric = {
  label: string;
  value: string;
  note: string;
};

type CatalogItem = {
  chapter: string;
  titleMain: string;
  titleEmphasis: string;
  subtitle: string;
  body: ReactNode;
  cta: string;
  specimen: string;
  specimenType: string;
  specimenLeft: string;
  specimenRight: string;
  metrics: CatalogMetric[];
};

const catalogItems: CatalogItem[] = [
  {
    chapter: "Chapter 01 - Crowns",
    titleMain: "Crowns &",
    titleEmphasis: "caps.",
    subtitle: "A custom-made cap that covers and protects a damaged tooth. The workhorse of restorative dentistry.",
    body: (
      <>
        When a tooth is cracked, severely decayed, or weakened by a root canal, a crown restores its strength, shape, and function. The difference between a great crown and a mediocre one is measured in decades. We use{" "}
        <span className="font-semibold text-[#FFFFFF]">zirconia and Emax</span>
        {" "}
        — the strongest, most natural-looking materials available — crafted by master ceramists for shade-matching so precise the crown is indistinguishable from your natural teeth.
      </>
    ),
    cta: "Explore Crowns",
    specimen: "Specimen N*I",
    specimenType: "Single-tooth cap",
    specimenLeft: "Zirconia / Emax",
    specimenRight: "15-25 yr lifespan",
    metrics: [
      { label: "Timeline", value: "1-2 visits", note: "Same-day with CEREC" },
      { label: "Lifespan", value: "15-25 years", note: "5-year warranty" },
      { label: "Investment", value: "$1,800-$2,500", note: "Glean members save 20%" },
      { label: "Material", value: "Zirconia / Emax", note: "Master ceramist lab" },
    ],
  },
  {
    chapter: "Chapter 02 - Bridges",
    titleMain: "Dental",
    titleEmphasis: "bridges.",
    subtitle: "Replace a missing tooth by anchoring to the healthy teeth on either side - a time-tested solution.",
    body: "A bridge fills the gap left by a missing tooth by using the adjacent teeth as support. When implants aren't an option - due to bone loss, health considerations, or budget - a bridge is a proven, reliable alternative. Modern bridges are crafted from zirconia or porcelain-fused-to-metal, designed to distribute bite forces evenly and last 10-15 years.",
    cta: "Explore Bridges",
    specimen: "Specimen N*II",
    specimenType: "3-unit bridge",
    specimenLeft: "Porcelain-fused",
    specimenRight: "10-15 yr lifespan",
    metrics: [
      { label: "Timeline", value: "2-3 visits", note: "Over 2-5 weeks" },
      { label: "Lifespan", value: "10-15 years", note: "5-year warranty" },
      { label: "Investment", value: "$3,000-$5,500", note: "Glean members save 20%" },
      { label: "Material", value: "Zirconia / PFM", note: "Shade-matched" },
    ],
  },
  {
    chapter: "Chapter 03 - Inlays & Onlays",
    titleMain: "Inlays &",
    titleEmphasis: "onlays.",
    subtitle: "When a cavity is too large for a filling but too small for a crown - the elegant middle ground.",
    body: "Most dentists default to crowns because they're simpler. But when a tooth is damaged in a way that covers less than 50% of the surface, inlays and onlays are the smarter choice. They preserve 30-40% more of your natural tooth structure than a crown would require - which means your tooth stays stronger, longer. Custom-fabricated and bonded with the same precision as a veneer.",
    cta: "Explore Inlays & Onlays",
    specimen: "Specimen N*III",
    specimenType: "Inlay / Onlay",
    specimenLeft: "Preserves tooth",
    specimenRight: "15-20 yr lifespan",
    metrics: [
      { label: "Timeline", value: "1-2 visits", note: "Same-day available" },
      { label: "Lifespan", value: "15-20 years", note: "5-year warranty" },
      { label: "Investment", value: "$900-$1,800", note: "Glean members save 20%" },
      { label: "Preserves", value: "30-40% more", note: "Natural tooth vs crown" },
    ],
  },
  {
    chapter: "Chapter 04 - Dentures",
    titleMain: "Modern",
    titleEmphasis: "dentures.",
    subtitle: "Nothing like the ones your grandparents wore. Comfortable, natural-looking, and often implant-secured.",
    body: "1 in 5 Americans over 65 has lost all their teeth. Today's dentures have leapfrogged a generation. Options include implant-supported dentures (that snap onto 2-4 dental implants for near-permanent stability), flexible partial dentures (no metal clasps), and premium acrylic dentures with custom-shaped teeth that match your face and age. We design them to look like the teeth you had - not generic stock shapes.",
    cta: "Explore Dentures",
    specimen: "Specimen N*IV",
    specimenType: "Full arch denture",
    specimenLeft: "Custom fit",
    specimenRight: "5-10 yr lifespan",
    metrics: [
      { label: "Timeline", value: "3-5 visits", note: "4-6 weeks total" },
      { label: "Lifespan", value: "5-10 years", note: "Relines needed periodically" },
      { label: "Investment", value: "$1,500-$4,500", note: "Full or partial set" },
      { label: "Options", value: "4 styles", note: "Standard to implant-supported" },
    ],
  },
];

function SpecimenCard({
  specimen,
  specimenType,
  specimenLeft,
  specimenRight,
}: Pick<CatalogItem, "specimen" | "specimenType" | "specimenLeft" | "specimenRight">) {
  return (
    <aside className="w-full rounded-[12px] bg-[linear-gradient(141.34deg,#EFE7D3_0%,#E8D5B7_100%)] p-4 sm:p-6 lg:p-7">
      <div className="flex items-center justify-between border-b border-[#0A0E1A33] pb-2.5 sm:pb-3">
        <p className="max-w-[45%] truncate font-fraunces text-[10px] uppercase tracking-[0.15em] text-[#8B5A2B] sm:max-w-none sm:overflow-visible sm:whitespace-normal sm:text-[12px]">
          {specimen}
        </p>
        <p className="max-w-[45%] truncate text-right font-fraunces text-[10px] uppercase tracking-[0.15em] text-[#8B5A2B] sm:max-w-none sm:overflow-visible sm:whitespace-normal sm:text-[12px]">
          {specimenType}
        </p>
      </div>
      <div className="h-[220px] border-b border-[#0A0E1A33] sm:h-[300px] md:h-[360px] lg:h-[400px]" />
      <div className="flex flex-col gap-1.5 pt-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:pt-3">
        <p className="font-fraunces text-[12px] italic text-[#0A0E1A] sm:text-[14px]">{specimenLeft}</p>
        <p className="font-fraunces text-[12px] italic text-[#0A0E1A] sm:text-right sm:text-[14px]">{specimenRight}</p>
      </div>
    </aside>
  );
}

function CatalogText({
  chapter,
  titleMain,
  titleEmphasis,
  subtitle,
  body,
  cta,
  metrics,
}: Pick<CatalogItem, "chapter" | "titleMain" | "titleEmphasis" | "subtitle" | "body" | "cta" | "metrics">) {
  return (
    <div className="text-center lg:text-left">
      <div className="flex items-center justify-center gap-3 lg:justify-start">
        <span className="h-px w-8 bg-[#817B70]" />
        <p className="font-fraunces text-[10px] uppercase tracking-[0.38em] text-[#E8D5B7] sm:text-[11px]">{chapter}</p>
      </div>

      <h3 className="mt-3 font-fraunces text-[34px] font-light leading-[0.95] tracking-[-0.03em] text-[#FFFFFF] sm:text-[42px] md:text-[50px] lg:text-[52px]">
        {titleMain} <span className="italic text-[#E8D5B7]">{titleEmphasis}</span>
      </h3>

      <p className="mx-auto mt-4 max-w-[680px] font-fraunces text-[22px] font-light italic leading-tight text-[#FFFFFFD9] sm:mt-5 sm:text-[28px] md:text-[32px] lg:mx-0 lg:mt-5 lg:text-[22px]">
        {subtitle}
      </p>
      <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-[1.65] text-[#FFFFFFD9] sm:mt-6 sm:text-[19px] md:text-[21px] lg:mx-0 lg:text-[15px] lg:leading-[1.72]">
        {body}
      </p>

      <div className="mt-6 border-y border-[#FFFFFF1A] py-4 sm:mt-8 sm:py-5 lg:mt-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-6 md:gap-x-8 md:gap-y-7">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.19em] text-[#FFFFFF66] sm:text-[11px]">{metric.label}</p>
              <p className="mt-1 font-fraunces text-[20px] tracking-[-0.01em] text-[#FFFFFF] sm:text-[24px] md:text-[28px] lg:text-[18px]">{metric.value}</p>
              <p className="mt-1 font-fraunces text-[12px] italic tracking-[-0.01em] text-[#E8D5B7] sm:text-[14px] md:text-[16px] lg:text-[12px]">{metric.note}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-4 inline-flex w-full items-center justify-center gap-2 font-fraunces text-[16px] font-semibold tracking-[0.03em] text-[#E8D5B7] transition hover:opacity-85 sm:mt-5 sm:text-[18px] md:text-[21px] lg:mt-5 lg:inline-flex lg:w-auto lg:text-[14px]">
        {cta} <span>→</span>
      </button>
    </div>
  );
}

export default function RestorativeCatalogSection() {
  return (
    <section className="bg-[#0A0E1A] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px]">
        <p className="text-center font-fraunces text-[11px] uppercase tracking-[0.19em] text-[#E8D5B7] lg:text-left">§ The Catalog</p>
        <h2 className="mt-3 text-center font-fraunces text-[36px] font-light leading-[0.98] tracking-[-0.0305em] text-[#FFFFFF] sm:mt-4 sm:text-[48px] md:text-[58px] lg:text-left lg:text-[64px]">
          Four restorations. <span className="italic text-[#B87333]">Four specialties.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[650px] text-center text-[15px] font-light leading-[1.6] text-[#FFFFFF99] sm:mt-6 sm:text-[18px] md:text-[21px] lg:mx-0 lg:mt-6 lg:text-left lg:text-[19px] lg:leading-[1.65]">
          Every case is different. Some patients need a single crown after a root canal. Others need a
          full-mouth rebuild. Here&apos;s what we craft, and what each is designed for.
        </p>

        <div className="mt-8 space-y-0 border-t border-[#FFFFFF14] sm:mt-10">
          {catalogItems.map((item, index) => {
            const imageLeft = index % 2 === 0;
            return (
              <article key={item.chapter} className="border-b border-[#FFFFFF14] py-8 sm:py-10 lg:py-12">
                <div
                  className={`grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 ${
                    imageLeft ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                  }`}
                >
                  <SpecimenCard
                    specimen={item.specimen}
                    specimenType={item.specimenType}
                    specimenLeft={item.specimenLeft}
                    specimenRight={item.specimenRight}
                  />
                  <CatalogText
                    chapter={item.chapter}
                    titleMain={item.titleMain}
                    titleEmphasis={item.titleEmphasis}
                    subtitle={item.subtitle}
                    body={item.body}
                    cta={item.cta}
                    metrics={item.metrics}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
    <aside className="w-full rounded-[12px] bg-[linear-gradient(141.34deg,#EFE7D3_0%,#E8D5B7_100%)] p-6 sm:p-7">
      <div className="flex items-center justify-between border-b border-[#0A0E1A33] pb-3">
        <p className="font-fraunces text-[12px] uppercase tracking-[0.15em] text-[#8B5A2B]">{specimen}</p>
        <p className="font-fraunces text-[12px] uppercase tracking-[0.15em] text-[#8B5A2B]">{specimenType}</p>
      </div>
      <div className="h-[400px] border-b border-[#0A0E1A33]" />
      <div className="flex items-center justify-between pt-3">
        <p className="font-fraunces text-[14px] italic text-[#0A0E1A]">{specimenLeft}</p>
        <p className="font-fraunces text-[14px] italic text-[#0A0E1A]">{specimenRight}</p>
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
    <div>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[#817B70]" />
        <p className="font-fraunces text-[11px] uppercase tracking-[0.38em] text-[#E8D5B7]">{chapter}</p>
      </div>

      <h3 className="mt-3 font-fraunces text-[44px] leading-[0.95] tracking-[-0.03em] font-light text-[#FFFFFF] sm:text-[54px] lg:text-[52px]">
        {titleMain} <span className="italic text-[#E8D5B7]">{titleEmphasis}</span>
      </h3>

      <p className="mt-5 max-w-[680px] font-fraunces text-[28px] italic font-light leading-tight text-[#FFFFFFD9] sm:text-[34px] lg:text-[22px]">{subtitle}</p>
      <p className="mt-6 max-w-[720px] text-[18px] leading-[1.72] text-[#FFFFFFD9] sm:text-[22px] lg:text-[15px]">{body}</p>

      <div className="mt-8 border-y border-[#FFFFFF1A] py-5">
        <div className="grid grid-cols-2 gap-x-8 gap-y-7">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-[11px] uppercase tracking-[0.19em] text-[#FFFFFF66] font-semibold">{metric.label}</p>
              <p className="mt-1 font-fraunces text-[24px] text-[#FFFFFF] sm:text-[28px] lg:text-[18px] tracking-[-0.01em]">{metric.value}</p>
              <p className="mt-1 font-fraunces text-[14px] italic text-[#E8D5B7] sm:text-[16px] lg:text-[12px] tracking-[-0.01em]">{metric.note}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-5 inline-flex items-center gap-2 font-semibold tracking-[0.03em] font-fraunces text-[18px] text-[#E8D5B7] transition hover:opacity-85 sm:text-[21px] lg:text-[14px]">
        {cta} <span>→</span>
      </button>
    </div>
  );
}

export default function RestorativeCatalogSection() {
  return (
    <section className="bg-[#0A0E1A] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px]">
        <p className="font-fraunces text-[11px] uppercase tracking-[0.19em] text-[#E8D5B7]">§ The Catalog</p>
        <h2 className="mt-4 font-fraunces font-light text-[44px] leading-[0.98] tracking-[-0.0305em] text-[#FFFFFF] sm:text-[58px] lg:text-[64px]">
          Four restorations. <span className="italic text-[#B87333]">Four specialties.</span>
        </h2>
        <p className="mt-6 max-w-[650px] text-[17px] font-light leading-[1.65] text-[#FFFFFF99] sm:text-[22px] lg:text-[19px]">
          Every case is different. Some patients need a single crown after a root canal. Others need a
          full-mouth rebuild. Here&apos;s what we craft, and what each is designed for.
        </p>

        <div className="mt-10 space-y-0 border-t border-[#FFFFFF14]">
          {catalogItems.map((item, index) => {
            const imageLeft = index % 2 === 0;
            return (
              <article key={item.chapter} className="border-b border-[#FFFFFF14] py-10 sm:py-12">
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
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

import Image from "next/image";
import Link from "next/link";

const treatments = [
  {
    number: "N°01",
    tag: "Signature",
    title: "Porcelain",
    emphasis: "veneers.",
    subtitle:
      "Custom-crafted, 0.3-0.5mm porcelain shells bonded to the front of your teeth. Done well, they last 15-20 years and look indistinguishable from natural teeth.",
    description:
      "Veneers correct chips, gaps, discoloration, and mild misalignment in as few as two visits. At Advanced Dentistry, we use only Emax and Empress materials, and work with master ceramists for natural translucency.",
    imageLabel: "Signature Treatment",
    image: "/images/signaturea.jpg",
    caption: "A full set of veneers transforms a smile in two visits.",
    cta: "Explore Veneers",
    metrics: [
      { label: "Timeline", value: "2 visits · 2-3 weeks" },
      { label: "Lifespan", value: "15-20+ years" },
      { label: "Investment", value: "$1,800-$2,500 per tooth", note: "Gleam members save 20%" },
      { label: "Recovery", value: "None — resume normal activity" },
    ],
  },
  {
    number: "N°02",
    tag: "Refined",
    title: "Professional",
    emphasis: "whitening.",
    subtitle:
      "6-8 shades brighter in a single 60-minute appointment. Safer, faster, and dramatically more effective than anything you can buy at the drugstore.",
    description:
      "Professional in-office whitening removes 6-8 shades because we use medical-grade peroxide concentrations and protect your gums during the process. Results last 1-3 years with proper maintenance.",
    imageLabel: "Popular",
    image: "/images/signatureb.jpg",
    caption: "One hour in the chair. Years of stains gone.",
    cta: "Explore Whitening",
    reverse: true,
    metrics: [
      { label: "Timeline", value: "Single 60-min visit" },
      { label: "Results Last", value: "1-3 years" },
      { label: "Investment", value: "$450-$650", note: "Gleam members save 20%" },
      { label: "Recovery", value: "24-48 hrs mild sensitivity" },
    ],
  },
  {
    number: "N°03",
    tag: "Precision",
    title: "Gummy smile",
    emphasis: "correction.",
    subtitle:
      "Reshape the gumline in a single 30-minute appointment. Immediate, dramatic, and most patients are back to work the next day.",
    description:
      "Using soft tissue laser precision, we create proportional, balanced esthetics with minimal recovery. For many patients, it's the simplest cosmetic change with the most transformative result.",
    imageLabel: "Precision Work",
    image: "/images/signaturec.png",
    caption: "30 minutes. Permanent transformation.",
    cta: "Explore Gummy Smile Treatment",
    metrics: [
      { label: "Timeline", value: "Single 30-min visit" },
      { label: "Results Last", value: "Permanent" },
      { label: "Investment", value: "$800-$1,800", note: "Gleam members save 20%" },
      { label: "Recovery", value: "1-2 days mild tenderness" },
    ],
  },
];

export default function CosmaticSignatureSection() {
  return (
    <section className="bg-[#0A0E1A] px-4 py-14 sm:px-8 sm:py-16 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[820px]">
          <div className="flex items-center gap-3">
            <span className="h-[0.2px] w-[28px] bg-[#C9A961]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A961]">What we offer</p>
          </div>
          <h2 className="mt-3 font-fraunces text-[44px] font-light leading-[0.95] tracking-[-0.03em] text-[#FFFFFF] sm:text-[56px] lg:text-[52px]">
            Three treatments. <span className="italic text-[#C9A961]">One outcome.</span>
          </h2>
          <p className="mt-5 max-w-[660px] text-[17px] font-light leading-normal text-[#FFFFFF99]">
            A smile that looks like you. Only better. Each treatment is tailored, each result is
            predictable, and each price is transparent before you begin.
          </p>
        </div>

        <div className="mt-10 border-t border-[#121D36]" />

        <div className="space-y-12 lg:space-y-16">
          {treatments.map((item, idx) => (
            <article
              key={item.number}
              className={`grid grid-cols-1 gap-8 border-b border-[#FFFFFF1A] py-10 lg:grid-cols-2 lg:gap-10 ${item.reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
            >
              <div className="max-w-[560px]">
                <div className="flex items-center gap-3">
                  <span className="h-[0.2px] w-[20px] bg-[#C9A961]" />
                  <p className="text-[12px]  tracking-[0.35em] text-[#C9A961]">
                    {item.number} - {item.tag}
                  </p>
                </div>
                
                <h3 className="mt-3 font-fraunces text-[42px] font-light leading-[0.95] tracking-[-0.027em] text-[#FFFFFF] sm:text-[52px] lg:text-[56px]">
                  {item.title} <span className="font-light italic text-[#C9A961]">{item.emphasis}</span>
                </h3>
                <p className="mt-4 max-w-[520px] font-fraunces font-light text-[22px] italic leading-[1.2] text-[#FFFFFFD9] sm:text-[27px] lg:text-[22px]">
                  {item.subtitle}
                </p>
                <p className="mt-5 max-w-[520px] text-[15px] leading-[1.65] text-[#FFFFFFB2]">{item.description}</p>

                <div className="mt-7 grid grid-cols-1 border-y border-[#FFFFFF1A] py-4 sm:grid-cols-2">
                  {item.metrics.map((metric) => (
                    <div key={metric.label} className="py-3 sm:pr-5">
                      <p className="text-[12px] uppercase tracking-[0.22em] text-[#FFFFFF66]">{metric.label}</p>
                      <p className="mt-2 font-fraunces text-[25px] leading-[32px] text-[#FFFFFF] sm:text-[29px] lg:text-[20px]">{metric.value}</p>
                      {metric.note ? (
                        <p className="mt-1 text-[12px] font-fraunces italic text-[#C9A961]">{metric.note}</p>
                      ) : null}
                    </div>
                  ))}
                </div>

                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold tracking-[0.05em] text-[#C9A961] transition hover:text-[#dfc28b]"
                >
                  {item.cta} <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className={`${idx === 1 ? "lg:pt-14" : "lg:pt-8"}`}>
                <p className="mb-5 text-[10px] uppercase font-semibold tracking-[0.24em] text-[#C9A961]">{item.imageLabel}</p>
                <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-[20px] sm:max-w-[360px] lg:max-w-[400px]">
                  <Image
                    src={item.image}
                    alt={`${item.title} before and after`}
                    width={1024}
                    height={1024}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <p className="mt-4 rounded-[8px] bg-[#FFFFFFB2] px-4 py-3 font-fraunces text-[13px] italic leading-[1.2] text-[#0A0E1A]">
                  {item.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

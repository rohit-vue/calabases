// components/sections/Services.tsx
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "General Dentistry",
      desc: "Deep Cleaning, Fillings etc",
      image: "/images/general-dentistry.png",
      variant: "large" as const,
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Veneers, Teeth Whitening etc.",
      image: "/images/cosmetic-dentistry.png",
      variant: "large" as const,
    },
    {
      title: "Restorative",
      desc: "Crowns & Bridges",
      image: "/images/restorative-dentistry.jpg",
      variant: "small" as const,
    },
    { title: "Dental Implants", image: "/images/dental-implants.jpg", variant: "small" as const },
    { title: "Invisalign", image: "/images/invisalign-aligner.jpg", variant: "small" as const },
    { title: "TMJ & Specialty", image: "/images/tmj-dentistry.png", variant: "small" as const },
    { title: "Pediatric Dentistry", image: "/images/pediatric-dentistry.png", variant: "small" as const },
    {
      title: "Oral Surgery",
      desc: "Extractions, Root Canals",
      image: "/images/oral-surgery.png",
      variant: "small" as const,
    },
  ];

  return (
    <section className="bg-[#FAF8F3] px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-24 lg:py-10">
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="mb-7 font-fraunces text-[3.2rem] leading-[0.93] tracking-[-0.04em] text-[#121826] sm:mb-8 sm:text-[3.8rem] lg:text-[62px]">
          Our Services
        </h2>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-6 sm:gap-2.5">
          {services.map((service, idx) => {
            const isLarge = service.variant === "large";
            const colSpan = isLarge ? "sm:col-span-3" : "sm:col-span-2";
            const minHeight = isLarge ? "min-h-[210px] sm:min-h-[182px]" : "min-h-[148px] sm:min-h-[140px]";
            const textPosition = isLarge ? "top-4 left-5 sm:top-4 sm:left-5" : "top-3 left-3 sm:top-3 sm:left-3";
            const titleSize = isLarge
              ? "text-[1.5rem] sm:text-[1.05rem]"
              : "text-[1.2rem] sm:text-[0.9rem]";
            const descSize = isLarge ? "mt-0.5 text-[0.76rem] sm:text-[0.68rem]" : "mt-0.5 text-[0.72rem] sm:text-[0.62rem]";
            const imageClass = isLarge
              ? service.title === "Cosmetic Dentistry"
                ? "object-contain object-right-bottom scale-[0.96] sm:scale-[0.98]"
                : "object-contain object-right-bottom scale-[0.88] sm:scale-[0.92]"
              : service.title === "Invisalign"
                ? "object-contain object-right-bottom scale-[0.86]"
                : service.title === "Restorative"
                  ? "object-cover object-right-bottom scale-[1.02] translate-y-[18%]"
                  : service.title === "TMJ & Specialty"
                    ? "object-contain object-right-bottom scale-[0.95]"
                    : service.title === "Dental Implants" || service.title === "Oral Surgery"
                      ? "object-contain object-right-bottom scale-[0.96]"
                      : "object-contain object-bottom object-right scale-[0.94]";
            const textWidth = isLarge ? "max-w-[56%] sm:max-w-[54%]" : "max-w-[58%] sm:max-w-[56%]";

            return (
              <div
                key={`${service.title}-${idx}`}
                className={[
                  "relative overflow-hidden rounded-[16px] border border-[#ECE8E0] bg-white",
                  minHeight,
                  colSpan,
                ].join(" ")}
              >
                <div className={`absolute z-10 pr-2 ${textPosition} ${textWidth}`}>
                  <h3 className={`font-serif font-semibold leading-[1.02] tracking-[-0.03em] text-[#111827] ${titleSize}`}>
                    {service.title}
                  </h3>
                  {service.desc ? (
                    <p className={`leading-relaxed text-[#748096] ${descSize}`}>
                      ({service.desc})
                    </p>
                  ) : null}
                </div>

                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`origin-bottom-right ${imageClass}`}
                    sizes={isLarge ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 640px) 33vw, 100vw"}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

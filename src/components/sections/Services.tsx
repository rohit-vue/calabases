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
    <section className="bg-[#FAF8F3] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="mb-8 font-fraunces text-[3.9rem] leading-[0.93] tracking-[-0.04em] text-[#121826] sm:mb-9 sm:text-[4.25rem] lg:text-[4.7rem]">
          Our Services
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-6 sm:gap-3">
          {services.map((service, idx) => {
            const isLarge = service.variant === "large";
            const colSpan = isLarge ? "sm:col-span-3" : "sm:col-span-2";
            const minHeight = isLarge ? "min-h-[236px] sm:min-h-[214px]" : "min-h-[176px] sm:min-h-[124px]";
            const textPosition = isLarge ? "top-5 left-6 sm:top-5 sm:left-6" : "top-3 left-4 sm:top-3 sm:left-4";
            const titleSize = isLarge
              ? "text-[2rem] sm:text-[1.1rem]"
              : "text-[1.55rem] sm:text-[0.95rem]";
            const descSize = isLarge ? "mt-1 text-[0.82rem] sm:text-[0.72rem]" : "mt-0.5 text-[0.78rem] sm:text-[0.66rem]";
            const imageClass = isLarge
              ? service.title === "Cosmetic Dentistry"
                ? "object-contain object-right-bottom scale-[0.9] sm:scale-[0.92]"
                : "object-contain object-right-bottom scale-[0.88] sm:scale-[0.9]"
              : service.title === "Invisalign"
                ? "object-contain object-right scale-[0.9]"
                : service.title === "Restorative"
                  ? "object-cover object-right-bottom translate-y-[4px]"
                  : service.title === "TMJ & Specialty"
                    ? "object-contain object-right-bottom scale-[0.92]"
                    : service.title === "Dental Implants" || service.title === "Oral Surgery"
                      ? "object-contain object-right-bottom scale-[0.92]"
                      : "object-contain object-bottom object-right scale-[0.9]";
            const textWidth = isLarge ? "max-w-[58%] sm:max-w-[56%]" : "max-w-[56%] sm:max-w-[54%]";

            return (
              <div
                key={`${service.title}-${idx}`}
                className={[
                  "relative overflow-hidden rounded-[16px] bg-white",
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

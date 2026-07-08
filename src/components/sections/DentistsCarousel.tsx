"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";

type Dentist = {
  name: string;
  image?: string;
  icon?: string;
  imageClass?: string;
};

type DentistsCarouselProps = {
  dentists: Dentist[];
};

export default function DentistsCarousel({ dentists }: DentistsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const showNav = dentists.length > 2;
  const twoColumnLayout = dentists.length <= 2;

  const scroll = useCallback((direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector("article");
    if (!card) return;

    const gap = parseFloat(getComputedStyle(container).gap) || 20;
    const scrollAmount = card.getBoundingClientRect().width + gap;

    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className={[
          twoColumnLayout
            ? "grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"
            : "flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 lg:gap-6 [&::-webkit-scrollbar]:hidden",
        ].join(" ")}
      >
        {dentists.map((dentist, idx) => (
          <article
            key={`${dentist.name}-${idx}`}
            className={[
              "flex flex-col rounded-[20px] border border-[#ece8e1] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-md sm:p-6",
              twoColumnLayout ? "" : "shrink-0 snap-start",
              twoColumnLayout
                ? "h-[420px] w-full sm:h-[550px]"
                : "h-[420px] w-full sm:h-[550px] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-4.5rem)/4)]",
            ].join(" ")}
          >
            <h3 className="mb-3 shrink-0 font-fraunces text-[28px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0A0E1A] sm:mb-4 sm:text-[26px]">
              {dentist.name}
            </h3>

            <div
              className="relative h-[80%] min-h-0 w-full overflow-hidden rounded-[12px] sm:h-[100%]"
              style={
                dentist.image
                  ? undefined
                  : {
                      background:
                        "linear-gradient(143.7deg, #F5F2EB 0%, #E4E0D6 100%)",
                    }
              }
            >
              {dentist.image ? (
                <Image
                  src={dentist.image}
                  alt={dentist.name}
                  fill
                  className={`origin-center object-cover ${dentist.imageClass ?? "object-center"}`}
                  sizes={twoColumnLayout ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span
                    className="text-[clamp(4rem,18vw,7rem)] leading-none sm:text-[clamp(4.5rem,12vw,6.5rem)]"
                    aria-hidden="true"
                  >
                    {dentist.icon}
                  </span>
                  <span className="sr-only">Photo placeholder</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {showNav ? (
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scroll("prev")}
            aria-label="Previous dentist"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ece8e1] bg-white text-[#0A0E1A] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:shadow-md"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M11.25 14.25L6.75 9.75L11.25 5.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll("next")}
            aria-label="Next dentist"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ece8e1] bg-white text-[#0A0E1A] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:shadow-md"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M6.75 14.25L11.25 9.75L6.75 5.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}

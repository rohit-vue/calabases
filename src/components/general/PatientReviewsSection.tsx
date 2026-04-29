import Link from "next/link";

const reviews = [
  {
    quote:
      "I hadn’t been to a dentist in 8 years because of anxiety. Dr. Kashani and the team made me feel completely comfortable. No judgment, no pressure, just clear explanations. I actually look forward to my cleanings now.",
    name: "Sarah M.",
    location: "Calabasas",
  },
  {
    quote:
      "Moved to Calabasas last year and tried three offices before finding Advanced Dentistry. The difference is night and day. They explain things, they don’t try to sell you procedures, and Gleam membership saved me thousands.",
    name: "Michael R.",
    location: "Hidden Hills",
  },
  {
    quote:
      "My kids actually ask when they get to go back to the dentist. That alone is worth it. Great with adults, great with families, and the emergency care saved us when my son chipped his tooth on a Saturday.",
    name: "Jennifer L.",
    location: "Agoura Hills",
  },
];

export default function PatientReviewsSection() {
  return (
    <section className="bg-[#0A0E1A] px-4 py-16 sm:px-6 md:px-8 lg:px-24">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[780px]">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C9A961]">
            Patient Reviews
          </p>
          <h2 className="font-fraunces text-[30px] leading-[0.95] text-white tracking-[-0.03em] sm:text-[34px] lg:text-[50px]">
            Real stories from <span className="italic font-light text-[#C9A961]">real patients.</span>
          </h2>
          <p className="mt-4 max-w-[650px] text-[15px] leading-[1.58] text-[#FFFFFF99]">
            What Calabasas, Hidden Hills, and Agoura Hills patients are saying about Advanced Dentistry.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-[20px] border border-[#FFFFFF14] bg-[#FFFFFF08] px-6 py-6"
            >
              <p className="text-[16px] tracking-[0.18em] text-[#cfb372]">★★★★★</p>
              <p className="mt-3 font-fraunces text-[15px] font-light italic leading-[1.32] text-[#FFFFFF] sm:text-[15px]">
                “{review.quote}”
              </p>

              <div className="mt-5 border-t border-[#22314f] pt-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[15px] font-semibold text-[#FFFFFF]">{review.name}</p>
                  <p className="text-[10px] text-[#FFFFFF80]">{review.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 text-center">
          <Link
            href="#"
            className="inline-flex items-center text-[14px] font-semibold text-[#C9A961] transition hover:opacity-85"
          >
            See all 564 reviews on Google <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

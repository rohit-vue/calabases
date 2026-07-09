const MAP_PLACE_URL =
  "https://www.google.com/maps/place/800+Magnolia+Ave+%23103,+Corona,+CA+92879/@33.85904,-117.55247,17z";
const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=800+Magnolia+Ave+%23103,+Corona,+CA+92879&hl=en&z=16&output=embed";

export default function VisitUsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-12 lg:px-32">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,45fr)_minmax(0,65fr)] lg:items-stretch lg:gap-14">
        <div className="max-w-[520px]">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C9A961]">
            Visit Us
          </p>
          <h2 className="font-fraunces text-[30px] leading-[0.95] text-[#0A0E1A] tracking-[-0.03em] sm:text-[34px] lg:text-[40px]">
            Find us in <span className="italic font-light text-[#C9A961]">Corona.</span>
          </h2>

          <div className="mt-7 divide-y divide-[#ddd8cc] border-y border-[#ddd8cc]">
            <div className="py-4">
              <p className="text-[9px] font-normal uppercase tracking-[0.22em] text-[#5A6578]">Address</p>
              <a
                href={MAP_PLACE_URL}
                target="_blank"
                className="mt-2 block text-[15px] font-medium leading-[1.4] text-[#0A0E1A] transition-colors hover:text-[#C9A961] sm:text-[16px]"
              >
                800 Magnolia Ave #103, Corona, CA 92879
              </a>
            </div>

            <div className="py-4">
              <p className="text-[9px] font-normal uppercase tracking-[0.22em] text-[#5A6578]">Phone</p>
              <a
                href="tel:951-736-1822"
                className="mt-2 block text-[15px] font-medium leading-[1.4] text-[#0A0E1A] transition-colors hover:text-[#C9A961] sm:text-[16px]"
              >
                (951) 736-1822
              </a>
            </div>

            <div className="py-4">
              <p className="text-[9px] font-normal uppercase tracking-[0.22em] text-[#5A6578]">Hours</p>
              <p className="mt-2 text-[15px] font-medium leading-[1.4] text-[#0A0E1A] sm:text-[16px]">
                Mon-Fri 8am-6pm · Sat 9am-3pm
              </p>
            </div>

            <div className="py-4">
              <p className="text-[9px] font-normal uppercase tracking-[0.22em] text-[#5A6578]">We Serve</p>
              <p className="mt-2 text-[15px] font-medium leading-[1.4] text-[#0A0E1A] sm:text-[16px]">
                Corona, Agoura Hills, Hidden Hills, Woodland Hills
              </p>
            </div>
          </div>

          <a
            href="https://member.clerri.com/enrollment/accounts/create/?slug=QN5D"
            target="_blank"
            className="mt-6 inline-flex h-[48px] items-center rounded-full bg-[#070f26] px-8 text-[14px] font-medium text-white transition hover:opacity-90"
          >
            Book Appointment <span className="ml-2" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="relative h-full min-h-[260px] overflow-hidden rounded-[16px] border border-[#E4E0D6] bg-[linear-gradient(126.84deg,#E8F7F6_0%,#D4F0EE_100%)] shadow-[0px_4px_65.3px_0px_#00000040] sm:min-h-[320px] lg:min-h-0">
          <div className="relative aspect-[1.32] w-full lg:h-full lg:aspect-auto">
            <iframe
              src={MAP_EMBED_SRC}
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing Corona Advanced Dentistry at 800 Magnolia Ave, Corona, CA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

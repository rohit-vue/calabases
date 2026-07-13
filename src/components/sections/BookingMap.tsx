// components/sections/BookingMap.tsx

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=800+Magnolia+Ave+%23103,+Corona,+CA+92879&hl=en&z=16&output=embed";

export default function BookingMap() {
  return (
    <section className="bg-[#FAF8F3] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-24 lg:py-5">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Left Text */}
        <div className="max-w-xl space-y-8 text-center md:text-left justify-self-center">
          <h2 className="font-serif text-[40px] font-normal tracking-[-0.03em] leading-tight text-[#0A0E1A] sm:text-[50px] lg:text-[62px]">
            Book Online
            <br /> Now
          </h2>
          <a href="https://app.nexhealth.com/appts/advanced-dentists-group/appt-type?lid=354035" target="_blank" className="rounded-full border border-gray-200 bg-brand-white px-8 py-3 text-[14px] font-semibold text-[#0A0E1A] shadow-sm transition hover:border-gray-300">
            Book Appointment
          </a>
        </div>

        {/* Right Map */}
        <div className="relative aspect-[1.3/1] min-h-[260px] overflow-hidden rounded-[20px] sm:min-h-0">
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
    </section>
  );
}

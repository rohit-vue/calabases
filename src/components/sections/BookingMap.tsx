// components/sections/BookingMap.tsx

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.595830622224!2d-118.48337549999998!3d34.156681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c297899002478b%3A0x564fb02f1c02d0c3!2sLasting%20Impressions%20Dental%20Spa%20%7C%20Dentist%20in%20Encino!5e0!3m2!1sen!2sin!4v1778742186882!5m2!1sen!2sin";

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
          <a href="https://member.clerri.com/enrollment/accounts/create/?slug=TE3V" target="_blank" className="rounded-full border border-gray-200 bg-brand-white px-8 py-3 text-[14px] font-semibold text-[#0A0E1A] shadow-sm transition hover:border-gray-300">
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
            title="Map showing Lasting Impressions Dental Spa in Corona"
          />
        </div>
      </div>
    </section>
  );
}

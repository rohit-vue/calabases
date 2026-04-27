// components/sections/BookingMap.tsx
import Image from "next/image";

export default function BookingMap() {
  return (
    <section className="bg-[#FAF8F3] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-5">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Left Text */}
        <div className="max-w-xl space-y-8 text-center md:text-left">
          <h2 className="font-serif text-4xl font-bold leading-tight text-brand-primary sm:text-5xl lg:text-7xl">
            Book Online
            <br /> Now
          </h2>
          <button className="rounded-full border border-gray-200 bg-brand-white px-8 py-3 text-sm font-semibold text-brand-primary shadow-sm transition hover:border-gray-300">
            Book Appointment
          </button>
        </div>

        {/* Right Map Image */}
        <div className="relative aspect-[1.3/1] min-h-[260px] sm:min-h-0">
          <Image
            src="/images/google-map-placeholder.png"
            alt="Map showing the practice location"
            fill
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

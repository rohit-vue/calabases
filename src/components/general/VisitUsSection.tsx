import Image from "next/image";
import Link from "next/link";

export default function VisitUsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:px-8 lg:px-24">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,45fr)_minmax(0,65fr)] lg:items-stretch lg:gap-14">
        <div className="max-w-[520px]">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C9A961]">
            Visit Us
          </p>
          <h2 className="font-fraunces text-[30px] leading-[0.95] text-[#0A0E1A] tracking-[-0.03em] sm:text-[34px] lg:text-[40px]">
            Find us in <span className="italic font-light text-[#C9A961]">Calabasas.</span>
          </h2>

          <div className="mt-7 divide-y divide-[#ddd8cc] border-y border-[#ddd8cc]">
            <div className="py-4">
              <p className="text-[9px] font-normal uppercase tracking-[0.22em] text-[#5A6578]">Address</p>
              <p className="mt-2 text-[15px] font-medium leading-[1.4] text-[#0A0E1A] sm:text-[16px]">
                23741 Calabasas Rd, Calabasas, CA 91302
              </p>
            </div>

            <div className="py-4">
              <p className="text-[9px] font-normal uppercase tracking-[0.22em] text-[#5A6578]">Phone</p>
              <p className="mt-2 text-[15px] font-medium leading-[1.4] text-[#0A0E1A] sm:text-[16px]">(818) 555-0100</p>
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
                Calabasas, Agoura Hills, Hidden Hills, Woodland Hills
              </p>
            </div>
          </div>

          <Link
            href="#"
            className="mt-6 inline-flex h-[48px] items-center rounded-full bg-[#070f26] px-8 text-[14px] font-medium text-white transition hover:opacity-90"
          >
            Book Appointment <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="relative h-full min-h-[260px] overflow-hidden rounded-[16px] border border-[#E4E0D6] bg-[linear-gradient(126.84deg,#E8F7F6_0%,#D4F0EE_100%)] shadow-[0px_4px_65.3px_0px_#00000040] sm:min-h-[320px] lg:min-h-0">
          <div className="relative aspect-[1.32] w-full lg:h-full lg:aspect-auto">
            <Image
              src="/images/map.png"
              alt="Map showing Calabasas Smiles location"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

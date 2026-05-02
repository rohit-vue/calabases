import Link from "next/link";

export default function EmergencyFinalCtaSection() {
  return (
    <section className="overflow-hidden bg-[#D81F36]">
      <div className="px-4 py-14 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
        <div className="mx-auto w-full max-w-[1240px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E84A5D] bg-[#E22A43] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FFE8EC] lg:text-[12px]">
              Same-Day Appointments Available Now
            </p>
          </div>

          <h2 className="mt-5 font-fraunces text-[44px] leading-[0.94] tracking-[-0.03em] text-white sm:text-[60px] lg:text-[84px]">
            Don&apos;t wait. <span className="font-light italic">Call us.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[740px] text-[18px] leading-[1.45] text-[#FBD4DA] sm:text-[24px] lg:text-[20px]">
            The sooner we see you, the better the outcome. For most dental emergencies, the next 30 minutes
            matter more than the next 3 hours.
          </p>

          <Link
            href="tel:+18185550100"
            className="mt-8 inline-flex h-[62px] items-center rounded-full bg-white px-8 font-fraunces text-[32px] text-[#E0354A] transition hover:opacity-95 sm:h-[68px] sm:px-10 sm:text-[42px] lg:h-[72px] lg:px-12 lg:text-[36px]"
          >
            <span className="mr-3 text-[26px] text-[#6D7480]">📞</span>
            (818) 555-0100
          </Link>

          <p className="mt-5 text-[14px] text-[#FFD2D8]">Mon-Fri 8am-6pm · Sat 9am-3pm · After-hours emergency line available</p>
        </div>
      </div>

      <div className="border-t border-[#102036] bg-[#030A1B] px-4 py-4 sm:px-8 lg:px-20">
        <p className="mx-auto w-full max-w-[1240px] text-center text-[11px] text-[#6B7588]">
          © 2026 Advanced Dentistry · Calabasas, CA · All Rights Reserved
        </p>
      </div>
    </section>
  );
}

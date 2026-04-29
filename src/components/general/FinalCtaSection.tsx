import Link from "next/link";

const ctaCards = [
  {
    icon: "📅",
    title: "Book Online",
    subtitle: "See us within the week.",
  },
  {
    icon: "📞",
    title: "Call to Talk",
    subtitle: "Have questions? Call us.",
  },
  {
    icon: "📬",
    title: "Get Our Guide",
    subtitle: "The Real Cost of Skipping the Dentist",
  },
];

export default function FinalCtaSection() {
  return (
    <section>
      <div className="bg-[linear-gradient(110.59deg,#C9A961_0%,#795E22_100%)] px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-16 md:px-8 lg:px-24 lg:pb-20">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="font-fraunces text-[34px] leading-[0.85] tracking-[-0.04em] text-white sm:text-[42px] lg:text-[56px]">
              Ready for a <span className="italic font-light">better dentist?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[640px] text-[14px] leading-[1.6] text-white sm:text-[15px]">
              Whether you&apos;re overdue for a cleaning, dealing with an emergency, or just moved to the
              area and need a new dentist - we&apos;re here. Same-week appointments. Transparent pricing.
              No pressure.
            </p>
          </div>

          <div className="mx-auto mt-8 grid w-full max-w-[760px] grid-cols-1 gap-3 md:grid-cols-3">
            {ctaCards.map((card) => (
              <Link
                key={card.title}
                href="#"
                className="rounded-[14px] border border-[#FFFFFF33] bg-[#FFFFFF1A] px-5 py-6 text-center backdrop-blur-[10px] transition hover:bg-[#FFFFFF24]"
              >
                <p className="text-[23px]" aria-hidden="true">
                  {card.icon}
                </p>
                <h3 className="mt-3 font-fraunces text-[15px] leading-none text-white">{card.title}</h3>
                <p className="mt-2 text-[10px] leading-[1.45] text-white">{card.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#050d22] px-10 py-4 sm:px-12 lg:px-24">
        <p className="mx-auto max-w-[1180px] text-center text-[10px] text-[#FFFFFF80] font-normal">
          © 2026 Advanced Dentistry · Calabasas, CA · All Rights Reserved
        </p>
      </div>
    </section>
  );
}

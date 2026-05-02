import Link from "next/link";

export default function EmergencyErWarningSection() {
  return (
    <section className="overflow-hidden bg-[#020A1B] px-4 py-10 sm:px-8 sm:py-12 lg:px-20 lg:py-14">
      <div className="mx-auto w-full max-w-[1240px] rounded-[2px] bg-[radial-gradient(60%_120%_at_50%_50%,rgba(24,38,65,0.7)_0%,rgba(2,10,27,1)_72%)] px-6 py-7 sm:px-8 sm:py-8 lg:px-10">
        <div className="grid items-center gap-6 lg:grid-cols-[130px_1fr_auto] lg:gap-8">
          <div>
            <p className="font-fraunces text-[60px] leading-none tracking-[-0.03em] text-[#E63D4A] sm:text-[72px] lg:text-[86px]">2M</p>
          </div>

          <div>
            <h2 className="font-fraunces text-[30px] leading-[1.02] tracking-[-0.02em] text-[#EFF3FB] sm:text-[40px] lg:text-[54px]">
              Americans go to the ER for dental emergencies every year.{" "}
              <span className="font-light italic text-[#E63D4A]">And they shouldn&apos;t.</span>
            </h2>
            <p className="mt-3 max-w-[980px] text-[17px] leading-[1.55] text-[#AEB8C8] sm:text-[22px] lg:text-[30px]">
              Hospital emergency rooms cannot treat dental issues. They can only prescribe pain medication
              and antibiotics - then send you home to find a dentist. You&apos;ll pay $1,500-$5,000 for an ER
              visit that doesn&apos;t fix your tooth. Come to us instead.
            </p>
          </div>

          <Link
            href="tel:+18185550100"
            className="inline-flex h-[52px] items-center rounded-full bg-[#E63D4A] px-8 text-[16px] font-semibold text-white transition hover:opacity-90"
          >
            <span className="mr-2">📞</span> Call Now
          </Link>
        </div>
      </div>
    </section>
  );
}

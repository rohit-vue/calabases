import Image from "next/image";
import Link from "next/link";

export default function EmergencyErWarningSection() {
  return (
    <section className="overflow-hidden bg-[#0B0E14] px-4 py-10 sm:px-8 sm:py-12 lg:px-20 lg:py-14">
      <div className="mx-auto w-full max-w-[1240px] py-7 sm:py-8">
        <div className="grid items-start gap-6 lg:grid-cols-[130px_1fr_auto] lg:gap-8 lg:items-center">
          <div>
            <p className="font-fraunces text-[60px] leading-none tracking-[-0.03em] text-[#E63D4A] sm:text-[72px] lg:text-[86px]">
              2M
            </p>
          </div>

          <div>
            <h2 className="font-fraunces text-[20px] leading-[1.08] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[30px]">
              Americans go to the ER for dental emergencies every year.
              <span className="font-light italic text-[#f05a5a]">
                {" "}
                And they shouldn&apos;t.
              </span>
            </h2>

            <div className="my-5 max-w-[980px]  border-[#5b6b8a]" aria-hidden />

            <p className="max-w-[980px] font-sans text-[17px] leading-[1.55] text-[#9ca3af] sm:text-[18px] lg:text-[17px]">
              Hospital emergency rooms{" "}
              <strong className="font-semibold text-white">
                cannot treat dental issues.
              </strong>{" "}
              They can only prescribe pain medication and antibiotics — then
              send you home to find a dentist. You&apos;ll pay $1,500-$5,000 for
              an ER visit that doesn&apos;t fix your tooth. Come to us instead.
            </p>
          </div>

          <Link
            href="tel:+18185550100"
            className="inline-flex h-[52px] shrink-0 items-center rounded-full bg-[#E63D4A] px-8 text-[16px] font-semibold text-white transition hover:opacity-90"
          >
            <Image
              src="/images/📞.png"
              alt=""
              width={18}
              height={18}
              className="mr-2 shrink-0"
            />
            Call Now
          </Link>
        </div>
      </div>
    </section>
  );
}

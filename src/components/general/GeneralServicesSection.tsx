import Link from "next/link";
import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  subtitle: string;
  priceTop: string;
  priceMain: string;
  priceSub: string;
  description: ReactNode;
  bullets: string[];
  cta: string;
  emergency?: boolean;
};

function ServiceCard({
  title,
  subtitle,
  priceTop,
  priceMain,
  priceSub,
  description,
  bullets,
  cta,
  emergency = false,
}: ServiceCardProps) {
  const cardClass = emergency
    ? "rounded-[24px] border border-[#E4E0D6] bg-[linear-gradient(132deg,#10182d_0%,#0d1833_58%,#1a2844_100%)] p-6 text-[#dbe3f4]"
    : "rounded-[24px] border border-[#E4E0D6] bg-[#FFFFFF] p-6 text-[#3b414c]";

  return (
    <article className={`${cardClass} flex h-full flex-col`}>
      <div className="flex items-start justify-between gap-4 border-b border-current/15 pb-3">
        <div>
          <h3
            className={`font-fraunces text-[20px] tracking-[-0.03em] leading-[0.95] sm:text-[26px] ${
              emergency ? "text-[#FFFFFF]" : "text-[#0A0E1A]"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-2 text-[9px] uppercase tracking-[0.2em] ${
              emergency ? "text-[#C9A961]" : "text-[#5A6578]"
            }`}
          >
            {subtitle}
          </p>
        </div>
        <div className="text-right flex flex-col gap-2">
          <p className={`text-[10px] ${emergency ? "text-[#FFFFFF80]" : "text-[#5A6578] line-through"}`}>{priceTop}</p>
          <p className={`font-fraunces text-[24px] tracking-[-0.03em] leading-[0.9] ${emergency ? "text-[#C9A961]" : "text-[#C9A961]"}`}>
            {priceMain}
          </p>
          <p
            className={`text-[8px] font-semibold uppercase tracking-[0.18em] ${
              emergency ? "text-[#C9A961]" : "text-[#C9A961]"
            }`}
          >
            {priceSub}
          </p>
        </div>
      </div>

      <p className={`mt-5 text-[13px] leading-[1.6] ${emergency ? "text-[#FFFFFFD9]" : "text-[#1C2333]"}`}>
        {description}
      </p> 

      <ul className={`mt-5 space-y-2.5 text-[12px] leading-[1.55] ${emergency ? "text-[#FFFFFF]" : "text-[#1C2333]"}`}>
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C9A961]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {emergency ? (
        <div className="mt-auto pt-6">
          <button className="w-full rounded-[12px] bg-[#C9A961] px-4 py-4 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FFFFFF]">
              Dental Emergency? Call Now
            </p>
            <p className="mt-2 font-fraunces font-normal text-[26px] leading-none text-[#FFFFFF] tracking-[-0.03em]">(818) 555-0100</p>
          </button>
        </div>
      ) : (
        <div className="mt-auto pt-6">
          <div className="border-t border-[#ddd7cc] pt-4">
            <Link href="#" className="text-[12px] font-semibold text-[#0A0E1A]">
              {cta} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      )}
    </article>
  );
}

export default function GeneralServicesSection() {
  return (
    <section className="bg-[#efeee9] px-4 py-14 sm:px-12 lg:px-32">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[760px]">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C9A961]">
            What&apos;s Included
          </p>
          <h2 className="font-fraunces text-[38px] tracking-[-0.03em] font-normal leading-[0.95] text-[#0A0E1A] sm:text-[50px]">
            General Dentistry <span className="italic font-light text-[#C9A961]">services.</span>
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] leading-[1.6] text-[#5A6578]">
            Everything that keeps your smile healthy - from routine cleanings to same-day emergency
            care. Each service is priced transparently, and Gleam members save on every one.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2">
          <ServiceCard
            title="Teeth Cleanings"
            subtitle="Every 6 months"
            priceTop="$150"
            priceMain="Included"
            priceSub="With Gleam"
            description={
              <>
                Professional cleanings reach the 30-40% of plaque your toothbrush can&apos;t. Patients
                who come in every 6 months are{" "}
                <strong className="font-semibold text-[#2b3140]">
                  60% less likely to develop gum disease
                </strong>{" "}
                and save an average of $2,000+ per decade in avoided procedures.
              </>
            }
            bullets={[
              "Ultrasonic plaque & tartar removal",
              "Stain polishing for brighter teeth",
              "Flossing between every tooth",
              "Fluoride treatment",
              "Full oral cancer screening",
            ]}
            cta="Learn More About Cleanings"
          />

          <ServiceCard
            title="Deep Cleaning"
            subtitle="Scaling & root planing"
            priceTop="$275–$400"
            priceMain="20% Off"
            priceSub="With Gleam"
            description={
              <>
                Nearly{" "}
                <strong className="font-semibold text-[#2b3140]">
                  half of American adults over 30
                </strong>{" "}
                have gum disease. Most don&apos;t know it - because early gum disease doesn&apos;t hurt. A
                deep cleaning clears bacteria from below the gumline before it destroys the bone
                supporting your teeth.
              </>
            }
            bullets={[
              "Bleeding gums when you brush or floss",
              "Receding gums or pocket depth over 4mm",
              "Persistent bad breath",
              "Visible tartar buildup below the gumline",
            ]}
            cta="Learn More About Deep Cleaning"
          />

          <ServiceCard
            title="Tooth Fillings"
            subtitle="Composite - mercury-free"
            priceTop="$250-$450"
            priceMain="20% Off"
            priceSub="With Gleam"
            description={
              <>
                The average adult develops{" "}
                <strong className="font-semibold text-[#2b3140]">3.28 cavities over a lifetime</strong>.
                Caught early, a filling takes 20 minutes. Caught late, the same cavity becomes a root
                canal + crown - a $2,500+ procedure. We catch them early.
              </>
            }
            bullets={[
              "100% mercury-free composite materials",
              "Tooth-colored - invisible when you smile",
              "Bonded directly to the tooth for stronger hold",
              "Preserves 30-40% more natural tooth structure",
            ]}
            cta="Learn More About Fillings"
          />

          <ServiceCard
            title="Sensitive Teeth"
            subtitle="Diagnosis & treatment"
            priceTop="Varies"
            priceMain="20% Off"
            priceSub="With Gleam"
            description={
              <>
                <strong className="font-semibold text-[#2b3140]">40 million American adults </strong> have
                tooth sensitivity. It&apos;s not something you have to live with - in 90% of cases, it&apos;s
                caused by a treatable issue: enamel erosion, gum recession, a cracked tooth, or a
                failing filling.
              </>
            }
            bullets={[
              "Enamel erosion - fluoride & desensitizing therapy",
              "Gum recession - grafting or bonding",
              "Cracked teeth - bonding or crown",
              "Failed fillings - replacement",
            ]}
            cta="Learn More About Sensitivity"
          />

          <ServiceCard
            title="Emergency Dentistry"
            subtitle="Same-day appointments"
            priceTop="Varies"
            priceMain="Priority"
            priceSub="With Gleam"
            description={
              <>
                <strong className="font-bold text-[#C9A961]">2 million Americans </strong> end up in
                the ER every year for dental emergencies. ERs can&apos;t actually treat them - they can only
                prescribe pain meds. We offer same-day appointments because a cracked tooth at 9am
                shouldn&apos;t mean waiting until next Tuesday.
              </>
            }
            bullets={[
              "Severe toothache",
              "Chipped, cracked, or broken tooth",
              "Knocked-out tooth (call us immediately)",
              "Lost filling or crown",
              "Abscess or facial swelling",
            ]}
            cta=""
            emergency
          />

          <ServiceCard
            title="Comprehensive Exams"
            subtitle="Every 6 months"
            priceTop="$120"
            priceMain="Included"
            priceSub="With Gleam"
            description={
              <>
                <strong className="font-bold text-[#1C2333]">
                  1 American dies of oral cancer every hour.
                </strong>{" "}
                Early detection is critical. Every 6 months, we do more than just check for cavities - we
                catch problems before they become expensive, including conditions that have nothing to do
                with your teeth.
              </>
            }
            bullets={[
              "Cavity & decay detection (visual + X-ray)",
              "Gum health & pocket depth measurement",
              "Oral cancer screening",
              "Jaw function & bite alignment",
              "Grinding, clenching & TMJ assessment",
            ]}
            cta="Learn More About Exams"
          />
        </div>
      </div>
    </section>
  );
}

import InvisalignAudienceSection from "@/components/invisalign/InvisalignAudienceSection";
import InvisalignComparisonSection from "@/components/invisalign/InvisalignComparisonSection";
import InvisalignHero from "@/components/invisalign/InvisalignHero";
import InvisalignPhasesSection from "@/components/invisalign/InvisalignPhasesSection";
import InvisalignPricingSection from "@/components/invisalign/InvisalignPricingSection";
import InvisalignTestimonialSection from "@/components/invisalign/InvisalignTestimonialSection";
import InvisalignTreatsSection from "@/components/invisalign/InvisalignTreatsSection";
import InvisalignWhySection from "@/components/invisalign/InvisalignWhySection";
import ClosingCta from "@/components/layout/ClosingCta";
import FaqSection from "@/components/general/FaqSection";

const invisalignFaqs = [
  {
    question: "How much does Invisalign cost in Calabasas?",
    answer:
      "Most Invisalign cases in our office run between $4,500 and $6,500 depending on complexity. Pricing includes your digital scan, aligners, progress checkups, and initial retainers.",
  },
  {
    question: "How long does Invisalign treatment take?",
    answer:
      "Typical treatment is 12-18 months, but simpler cases can finish sooner. Your timeline depends on bite complexity, wear consistency, and how closely aligners are worn as directed.",
  },
  {
    question: "Does Invisalign hurt?",
    answer:
      "Most patients feel mild pressure for a day or two when switching to a new tray. That pressure means the aligners are working. It is usually much more manageable than metal braces discomfort.",
  },
  {
    question: "Do I have to wear my aligners all day?",
    answer:
      "Yes - for best results, wear them about 22 hours per day. Remove only for eating, drinking anything besides water, brushing, and flossing.",
  },
  {
    question: "Can I eat whatever I want with Invisalign?",
    answer:
      "Yes. You remove aligners before meals, so there are no permanent food restrictions like with braces. Just brush before putting trays back in.",
  },
  {
    question: "Can I finance Invisalign?",
    answer:
      "Yes. We offer financing options, including 0% APR plans for qualified patients, so treatment can fit into a monthly budget.",
  },
  {
    question: "Does dental insurance cover Invisalign?",
    answer:
      "Many PPO plans include adult or teen orthodontic benefits that can apply to Invisalign. We can verify your benefits and explain your exact out-of-pocket estimate before starting.",
  },
  {
    question: "Will Invisalign work for my case?",
    answer:
      "Invisalign can treat most mild-to-moderate and many advanced orthodontic cases, including crowding, spacing, and bite issues. We'll confirm candidacy with a digital scan and exam.",
  },
  {
    question: "What happens after Invisalign — will my teeth shift back?",
    answer:
      "Retention is essential after any orthodontic treatment. You'll wear retainers to maintain your result and prevent relapse over time.",
  },
];

export default function InvisalignPage() {
  return (
    <main>
      <InvisalignHero />
      <InvisalignWhySection />
      <InvisalignPhasesSection />
      <InvisalignComparisonSection />
      <InvisalignAudienceSection />
      <InvisalignTreatsSection />
      <InvisalignPricingSection />
      <InvisalignTestimonialSection />
      <FaqSection faqs={invisalignFaqs} />
      <ClosingCta
        eyebrow="Ready When You Are"
        titleStart="Start with a"
        titleEmphasis="free scan."
        titleEnd=""
        subtitle="See your new smile in 3D before you commit. Book a complimentary iTero scan and we'll show you exactly what Invisalign can do for you."
        primaryCtaLabel="Book Your Free Scan"
        primaryCtaHref="#"
        secondaryCtaLabel="Call to Learn More"
        secondaryCtaHref="tel:+18185550100"
        stats={[
          { value: "400+", label: "Cases Completed" },
          { value: "12-18mo", label: "Average Treatment" },
          { value: "15+", label: "Years Experience" },
          { value: "4.9 ★", label: "564 Reviews" },
        ]}
      />
    </main>
  );
}

import CosmaticHero from "@/components/cosmatic/CosmaticHero";
import CosmaticApproachSection from "@/components/cosmatic/CosmaticApproachSection";
import CosmaticMembershipMathSection from "@/components/cosmatic/CosmaticMembershipMathSection";
import CosmaticPatientProfilesSection from "@/components/cosmatic/CosmaticPatientProfilesSection";
import CosmaticPsychologySection from "@/components/cosmatic/CosmaticPsychologySection";
import CosmaticProcessSection from "@/components/cosmatic/CosmaticProcessSection";
import CosmaticPricingSection from "@/components/cosmatic/CosmaticPricingSection";
import CosmaticSignatureSection from "@/components/cosmatic/CosmaticSignatureSection";
import FaqSection from "@/components/general/FaqSection";
import ClosingCta, { CLOSING_CTA_MAIN_WRAPPER_CLASSES } from "@/components/layout/ClosingCta";
import TestimonialSection from "@/components/layout/TestimonialSection";

const cosmeticFaqs = [
  {
    question: "How much do veneers cost in Calabasas?",
    answer:
      "Veneer pricing depends on case complexity, number of teeth, and materials. Most complete smile cases range from about $14,400 to $20,000, and single veneers are typically around $2,000 with membership pricing.",
  },
  {
    question: "How long do veneers last?",
    answer:
      "With good home care and regular checkups, porcelain veneers commonly last 15-20+ years. Longevity also depends on bite habits and whether a nightguard is used when needed.",
  },
  {
    question: "Do veneers damage your natural teeth?",
    answer:
      "Modern conservative veneers are designed to preserve as much enamel as possible. We plan each case carefully and only recommend treatment when it protects long-term tooth health and function.",
  },
  {
    question: "Will I be able to see what my smile looks like before I commit?",
    answer:
      "Yes. We use digital smile preview planning so you can review shape, shade, and overall look before anything is finalized.",
  },
  {
    question: "How long does professional whitening last?",
    answer:
      "Most patients see results lasting 1-3 years, depending on coffee, tea, red wine, smoking, and maintenance habits. Touch-up options help maintain brightness longer.",
  },
  {
    question: "Can I finance cosmetic dentistry?",
    answer:
      "Yes. We can discuss financing options and phased treatment plans so you can move forward with a timeline and payment structure that fits your budget.",
  },
  {
    question: "Is the procedure painful?",
    answer:
      "Most cosmetic treatments are very tolerable and involve minimal downtime. We use comfort-first techniques and explain each step so you know exactly what to expect.",
  },
  {
    question: "Can I get just one veneer, or do I need a full set?",
    answer:
      "Both are possible. Some patients need only one veneer, while others benefit from a larger set for symmetry. We recommend the smallest plan that achieves a natural, balanced result.",
  },
];

export default function CosmeticPage() {
  return (
    <main>
      <CosmaticHero />
      <CosmaticPsychologySection />
      <CosmaticApproachSection />
      <CosmaticSignatureSection />
      <CosmaticProcessSection />
      <CosmaticPricingSection />
      <CosmaticMembershipMathSection />
      <CosmaticPatientProfilesSection />
      <TestimonialSection
        quote="I'd been thinking about veneers for ten years. I was terrified of looking fake. Dr. Kashani's digital preview sold me - I could see exactly what my smile would look like before we started. The result is so natural that my own mother didn't notice at first. She just said I looked rested."
        authorName="Rachel K"
        authorSubtext="8 Veneers • Calabasas"
        authorInitials="R"
        background="#0A0E1A"
        accentColor="#C9A961"
        quoteColor="#FFFFFF"
        authorNameColor="#FFFFFF"
        authorMetaColor="rgba(255, 255, 255, 0.5)"
        quoteMarkColor="#121C35"
        avatarTextColor="#0A0E1A"
        avatarBackground="linear-gradient(135deg, #C9A961 0%, #F5EDD8 100%)"
        showStars
      />
      <FaqSection faqs={cosmeticFaqs} />
      <ClosingCta
        mainWrapperClassName={CLOSING_CTA_MAIN_WRAPPER_CLASSES}
        hideEyebrow
        contentWrapperClassName="bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(201,169,97,0.15)_0%,rgba(201,169,97,0)_60%)]"
      />
    </main>
  );
}

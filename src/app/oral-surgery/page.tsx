import OralSurgeryHero from "@/components/oral-surgery/OralSurgeryHero";
import OralSurgeryModernEraSection from "@/components/oral-surgery/OralSurgeryModernEraSection";
import OralSurgeryProceduresSection from "@/components/oral-surgery/OralSurgeryProceduresSection";
import OralSurgerySedationSection from "@/components/oral-surgery/OralSurgerySedationSection";
import OralSurgeryCommitmentSection from "@/components/oral-surgery/OralSurgeryCommitmentSection";
import OralSurgeryRecoverySection from "@/components/oral-surgery/OralSurgeryRecoverySection";
import OralSurgeryPricingSection from "@/components/oral-surgery/OralSurgeryPricingSection";
import OralSurgeryTestimonialSection from "@/components/oral-surgery/OralSurgeryTestimonialSection";
import FaqSection from "@/components/general/FaqSection";
import ClosingCta from "@/components/layout/ClosingCta";

const oralSurgeryFaqs = [
  {
    question: "Does oral surgery really not hurt anymore?",
    answer:
      "Most patients are surprised how manageable it is. With modern local anesthesia, sedation options, and a structured pain protocol, discomfort is typically far lower than expected and short-lived.",
  },
  {
    question: "Will I need prescription painkillers?",
    answer:
      "Not always. Many patients recover well with ibuprofen and careful aftercare. Prescription medication is only used when clinically necessary based on your procedure and medical history.",
  },
  {
    question: "How long will I need to take off work?",
    answer:
      "For routine extractions, many patients return quickly. Wisdom teeth recovery is often about 2-3 days for desk work, with full comfort improving over the first week depending on case complexity.",
  },
  {
    question: "Is IV sedation safe?",
    answer:
      "Yes, for appropriate candidates. We review your health history, monitor you throughout treatment, and follow strict sedation safety protocols so your comfort and stability are continuously managed.",
  },
  {
    question: "Do I really need my wisdom teeth out?",
    answer:
      "Not everyone does. We recommend removal when teeth are impacted, infection-prone, damaging adjacent teeth, or likely to create future complications based on exam and 3D imaging.",
  },
  {
    question: "Can I eat immediately after surgery?",
    answer:
      "You should start with cool, soft foods and follow your aftercare plan. Texture and temperature matter in the first 24-72 hours to protect healing and reduce bleeding or irritation.",
  },
  {
    question: "What if something goes wrong after hours?",
    answer:
      "You receive clear after-hours instructions and direct contact guidance. If urgent concerns appear, call us right away so we can triage quickly and get you the right next step.",
  },
  {
    question: "Does insurance cover oral surgery?",
    answer:
      "Many PPO plans cover part of medically necessary oral surgery, but benefits vary by plan and annual maximums. We verify your coverage before treatment and explain expected out-of-pocket costs.",
  },
  {
    question: "Can I finance my oral surgery?",
    answer:
      "Yes. We can discuss financing and phased treatment options so your care stays practical while preserving clinical quality and timing.",
  },
];

export default function OralSurgeryPage() {
  return (
    <main>
      <OralSurgeryHero />
      <OralSurgeryModernEraSection />
      <OralSurgeryProceduresSection />
      <OralSurgerySedationSection />
      <OralSurgeryCommitmentSection />
      <OralSurgeryRecoverySection />
      <OralSurgeryPricingSection />
      <OralSurgeryTestimonialSection />
      <FaqSection faqs={oralSurgeryFaqs} />
      <ClosingCta
        eyebrow="Calm, Modern, In-House"
        titleStart="Surgery shouldn't"
        titleEmphasis="feel like"
        titleEnd="surgery."
        subtitle="Book a consultation. We'll review your imaging, walk through your sedation options, and give you transparent pricing before you commit."
        primaryCtaLabel="Book Your Consultation"
        primaryCtaHref="#"
        secondaryCtaLabel="Call to Discuss"
        secondaryCtaHref="tel:+18185550100"
        stats={[
          { value: "500+", label: "Procedures Yearly" },
          { value: "95%", label: "Comfort Rating" },
          { value: "4", label: "Sedation Levels" },
          { value: "4.9 ★", label: "564 Reviews" },
        ]}
        footerText="© 2026 Advanced Dentistry · Calabasas, CA · All Rights Reserved"
      />
    </main>
  );
}

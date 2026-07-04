import OralSurgeryHero from "@/components/oral-surgery/OralSurgeryHero";
import OralSurgeryModernEraSection from "@/components/oral-surgery/OralSurgeryModernEraSection";
import OralSurgeryProceduresSection from "@/components/oral-surgery/OralSurgeryProceduresSection";
import OralSurgerySedationSection from "@/components/oral-surgery/OralSurgerySedationSection";
import OralSurgeryCommitmentSection from "@/components/oral-surgery/OralSurgeryCommitmentSection";
import OralSurgeryRecoverySection from "@/components/oral-surgery/OralSurgeryRecoverySection";
import OralSurgeryPricingSection from "@/components/oral-surgery/OralSurgeryPricingSection";
import TestimonialSection from "@/components/layout/TestimonialSection";
import FaqSection from "@/components/layout/FaqSection";
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
      <TestimonialSection
        label="Patient Recovery · Calabasas"
        quote="I put off getting my wisdom teeth out until I was 34. I was terrified. I expected a week of pain and a vicodin prescription. I got IV sedation, woke up with no memory of the procedure, and was back at my desk on Tuesday. I wish I'd done it 10 years ago."
        authorName="Nadia K."
        authorSubtext="Wisdom teeth removal · Corona"
        authorInitials="N"
        background="#E6EEEA"  
        accentColor="#5E7267"
        quoteColor="#0A0E1A"
        authorNameColor="#0A0E1A"
        authorMetaColor="#5E7267"
        quoteMarkColor="#8FA99F"
        avatarTextColor="#FFFFFF"
        avatarBackground="#5E7267"
      />
      <FaqSection 
        faqs={oralSurgeryFaqs}
        background="#EFF4F2"
        accentColor="#5E7267"
        headingColor="#0A0E1A"
        headingEmphasisColor="#5E7267"
        cardBorderColor="#E4E0D6"
        cardBackgroundColor="#FFFFFF"
        questionColor="#0A0E1A"
        answerColor="#5E7267"
        toggleBackgroundColor="#F3F7F6"
        toggleIconColor="#5E7267"
      />
      <ClosingCta
        eyebrow="Calm, Modern, In-House"
        eyebrowLined
        eyebrowLineColor="#8FA99F"
        titleStart="Surgery shouldn't"
        titleEmphasis="feel like surgery."
        titleEnd=""
        subtitle="Book a consultation. We'll review your imaging, walk through your sedation options, and give you transparent pricing before you commit."
        primaryCtaLabel="Book Your Consultation"
        primaryCtaHref="https://member.clerri.com/enrollment/accounts/create/?slug=QN5D"
        stats={[
          { value: "500+", label: "Procedures Yearly" },
          { value: "95%", label: "Comfort Rating" },
          { value: "4", label: "Sedation Levels" },
          { value: "4.9 ★", label: "564 Reviews" },
        ]}
        footerText="© 2026 Lasting Impressions Dental Spa · Corona, CA · All Rights Reserved"
        eyebrowColor="#8FA99F"
        background="linear-gradient(116.24deg, #0A0E1A 0%, #1C2333 100%)"
        headlineColor="#FFFFFF"
        subtitleColor="#FFFFFF"
        titleEmphasisColor="#8FA99F"
        statsValueColor="#8FA99F"
        statsLabelColor="#FFFFFF80"
        statsDividerColor="#FFFFFF1A"
        primaryCtaBackground="#8FA99F"
        primaryCtaTextColor="#0A0E1A"
        primaryCtaBorderColor="#000000"
        footerTextColor="#FFFFFF66"
        footerBarBackground="#0A0E1A"
        footerBarBorderColor="#FFFFFF14"
        heroOverlayGradient="radial-gradient(70.71% 70.71% at 50% 50%, rgba(143, 169, 159, 0.15) 0%, rgba(143, 169, 159, 0) 60%)"
      />
    </main>
  );
}

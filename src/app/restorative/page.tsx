import RestorativeHero from "@/components/restorative/RestorativeHero";
import RestorativeCraftSection from "@/components/restorative/RestorativeCraftSection";
import RestorativeCatalogSection from "@/components/restorative/RestorativeCatalogSection";
import RestorativeSignalsSection from "@/components/restorative/RestorativeSignalsSection";
import RestorativeMaterialsSection from "@/components/restorative/RestorativeMaterialsSection";
import RestorativeProcessSection from "@/components/restorative/RestorativeProcessSection";
import RestorativePricingSection from "@/components/restorative/RestorativePricingSection";
import RestorativeWarrantyCta from "@/components/restorative/RestorativeWarrantyCta";
import TestimonialSection from "@/components/layout/TestimonialSection";
import FaqSection from "@/components/general/FaqSection";
import ClosingCta from "@/components/layout/ClosingCta";

const restorativeFaqs = [
  {
    question: "How long do crowns last?",
    answer:
      "Most well-made zirconia or Emax crowns last 15-25 years with good hygiene, bite protection when needed, and regular cleanings. We also include a 5-year craftsmanship warranty on restorative work.",
  },
  {
    question: "What's the difference between a crown and a bridge?",
    answer:
      "A crown covers and protects one damaged tooth. A bridge replaces a missing tooth by anchoring to neighboring teeth (or implants), restoring both function and appearance across the gap.",
  },
  {
    question: "Can I get a crown in one visit?",
    answer:
      "Yes, many cases can be completed same-day with digital scanning and CEREC milling. Complex cosmetic or bite-sensitive cases may still be better with a master-lab crown over two visits.",
  },
  {
    question: "Does insurance cover restorative work?",
    answer:
      "Many PPO plans cover a portion of medically necessary restorative treatment, often around 50% after deductibles and annual maximums. We verify benefits before treatment so you see exact out-of-pocket costs.",
  },
  {
    question: "How do I know if I need an inlay/onlay vs. a crown?",
    answer:
      "If damage is moderate and enough healthy tooth remains, an inlay/onlay is often ideal because it preserves more natural structure. If the tooth is heavily weakened, a crown is usually the safer long-term option.",
  },
  {
    question: "Can I eat normally with a crown or bridge?",
    answer:
      "Yes. Once bonded and adjusted, you can chew normally on restored teeth. We still recommend avoiding habits like chewing ice or opening packages with teeth to maximize lifespan.",
  },
  {
    question: "Are implant-supported dentures worth the extra cost?",
    answer:
      "For many patients, yes. Implant-supported dentures provide more stability, better chewing power, less slipping, and can help reduce bone loss over time compared with traditional removable dentures.",
  },
  {
    question: "What if my old crown or bridge is failing?",
    answer:
      "We evaluate fit, margins, decay risk, and bite stress with exam plus imaging. If needed, we remove and replace it with a stronger, better-sealed restoration before fracture or infection worsens.",
  },
  {
    question: "What does the 5-year warranty actually cover?",
    answer:
      "It covers defects related to materials or workmanship on eligible restorations. If a covered issue occurs during the warranty period, we repair or replace the restoration at no additional treatment fee.",
  },
];

export default function RestorativePage() {
  return (
    <main>
      <RestorativeHero />
      <RestorativeCraftSection />
      <RestorativeCatalogSection />
      <RestorativeSignalsSection />
      <RestorativeMaterialsSection />
      <RestorativeProcessSection />
      <RestorativePricingSection />
      <RestorativeWarrantyCta />
      <TestimonialSection
        label="PATIENT PORTFOLIO · CALABASAS"
        quote="I had a 20-year-old crown that finally failed. Dr. Kashani replaced it with zirconia — and honestly, it looks better than the real teeth next to it. Three years later, it still feels exactly the same as the day he put it in. He genuinely cares about the craftsmanship. It shows."
        authorName="Thomas R."
        authorSubtext="Zirconia crown replacement · Calabasas"
        authorInitials="T"
        background="#EFE7D3"
        accentColor="#8B5A2B"
        quoteColor="#0A0E1A"
        authorNameColor="#0A0E1A"
        authorMetaColor="#5A6578"
        quoteMarkColor="#B8733323"
        avatarTextColor="#FFFFFF"
        avatarBackground="#B87333"
      />
      <FaqSection
        faqs={restorativeFaqs}
        background="#FFFFFF"
        accentColor="#B87333"
        headingColor="#0A0E1A"
        cardBorderColor="#E4DDC8"
        cardBackgroundColor="#F7F2E7"
        questionColor="#0A0E1A"
        answerColor="#5A6578"
        toggleBackgroundColor="#FFFFFF"
        toggleIconColor="#B87333"
      />
      <ClosingCta
        eyebrow="Ready When You Are"
        eyebrowLined
        eyebrowLineColor="#B87333"
        titleStart="Rebuild once."
        titleEmphasis="Keep for life."
        titleEnd=""
        subtitle="Book a consultation. See your teeth on screen, understand your options, and get transparent pricing before you commit to anything."
        primaryCtaLabel="Book Your Consultation"
        primaryCtaHref="#"
        secondaryCtaLabel="Call to Learn More"
        secondaryCtaHref="tel:+18185550100"
        stats={[
          { value: "3,000+", label: "Restorations Placed" },
          { value: "<2%", label: "5-Year Failure Rate" },
          { value: "5-yr", label: "Warranty Standard" },
          { value: "4.9 ★", label: "564 Reviews" },
        ]}
        footerText="© 2026 Advanced Dentistry · Calabasas, CA · All Rights Reserved"
        eyebrowColor="#B87333"
        headlineColor="#ffffff"
        subtitleColor="#FFFFFF"
        titleEmphasisColor="#B87333"
        statsValueColor="#B87333"
        primaryCtaBackground="#B87333"
        primaryCtaTextColor="#0A0E1A"
        primaryCtaBorderColor="#000000"
        secondaryCtaBorderColor="#FFFFFF40"
        secondaryCtaTextColor="#FFFFFF"
        footerTextColor="#FFFFFF66"
        heroOverlayGradient="radial-gradient(56% 70% at 50% 52%, rgba(184, 115, 51, 0.22) 0%, rgba(2, 9, 24, 0) 100%)"
      />
    </main>
  );
}

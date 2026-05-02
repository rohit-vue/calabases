import CosmaticMembershipMathSection from "@/components/cosmatic/CosmaticMembershipMathSection";
import FaqSection from "@/components/general/FaqSection";
import ImplantsCandidacySection from "@/components/implants/ImplantsCandidacySection";
import ImplantsComparisonSection from "@/components/implants/ImplantsComparisonSection";
import ImplantsHero from "@/components/implants/ImplantsHero";
import ImplantsPatientCaseSection from "@/components/implants/ImplantsPatientCaseSection";
import ImplantsPhasesSection from "@/components/implants/ImplantsPhasesSection";
import ImplantsProblemSection from "@/components/implants/ImplantsProblemSection";
import ImplantsTypesSection from "@/components/implants/ImplantsTypesSection";
import ClosingCta from "@/components/layout/ClosingCta";

const implantsFaqs = [
  {
    question: "How much do dental implants cost in Calabasas?",
    answer:
      "Implant pricing depends on complexity, bone condition, and restoration type. Typical ranges are about $3,500-$5,500 for a single tooth implant and $18,000-$30,000 for a full-arch All-on-4 case.",
  },
  {
    question: "How long do implants last?",
    answer:
      "With healthy gums, proper bite balance, and regular maintenance, implants often last 20+ years and can last a lifetime. The crown attached to the implant may need replacement sooner based on wear.",
  },
  {
    question: "Is the surgery painful?",
    answer:
      "Most patients are surprised by how manageable it is. We use local anesthesia and can discuss sedation options. Post-op soreness is usually temporary and controlled with guided aftercare.",
  },
  {
    question: "How long does the whole process take?",
    answer:
      "Most implant cases take around 4-7 months from planning to final crown because healing and bone integration are essential. Active chair time is usually only a few appointments.",
  },
  {
    question: "What's the success rate of implants?",
    answer:
      "Modern implants have high long-term predictability, typically around 95-98% when planned and maintained correctly. Individual health factors like smoking and gum disease can affect outcomes.",
  },
  {
    question: "Can I get same-day implants?",
    answer:
      "In some cases, yes. Certain patients can receive implant placement and a temporary tooth the same day. Final candidacy depends on bone quality, infection status, and bite forces.",
  },
  {
    question: "Does insurance cover implants?",
    answer:
      "Coverage varies by plan. Some PPO plans cover portions such as exams, imaging, extractions, or crowns while excluding the implant itself. We can verify your benefits before treatment.",
  },
  {
    question: "What if I don't have enough bone?",
    answer:
      "You may still be a candidate. Bone grafting, sinus lift procedures, or staged planning can often rebuild support and make implant treatment predictable.",
  },
  {
    question: "Can I finance dental implants?",
    answer:
      "Yes. We can discuss financing and phased treatment plans so your care timeline and monthly payments are practical and clear before you start.",
  },
];

export default function ImplantsPage() {
  return (
    <main>
      <ImplantsHero />
      <ImplantsProblemSection />
      <ImplantsPhasesSection />
      <ImplantsTypesSection />
      <ImplantsComparisonSection />
      <CosmaticMembershipMathSection
        eyebrow="Gleam Membership"
        titleStart="The highest-ROI"
        titleEmphasis="membership you'll ever join."
        subtitle="At $297/year, Gleam pays for itself 11x over on a single implant. 45x over on an All-on-4 case."
        body="20% off every implant procedure, plus unlimited cleanings, exams, and X-rays for life. There's no other dental membership with this kind of math."
        tableHeaderFirstCol="Procedure"
        rows={[
          { treatment: "Single Tooth Implant", standard: "$5,500", gleam: "$4,400", save: "$1,100" },
          { treatment: "Multiple Implants (3)", standard: "$16,000", gleam: "$12,800", save: "$3,200" },
          { treatment: "Implant Bridge", standard: "$14,000", gleam: "$11,200", save: "$2,800" },
          { treatment: "All-on-4 (full arch)", standard: "$30,000", gleam: "$24,000", save: "$6,000" },
        ]}
        footerLabel="Gleam Membership"
        footerPrice="$297/yr"
        ctaLabel="Join Today"
        ctaHref="#"
      />
      <ImplantsCandidacySection />
      <ImplantsPatientCaseSection />
      <FaqSection faqs={implantsFaqs} />
      <ClosingCta
        eyebrow="Ready When You Are"
        titleStart="Replace once."
        titleEmphasis="Keep forever."
        titleEnd=""
        subtitle="Book a complimentary implant consultation. We'll do a 3D scan, walk through your options, and give you a clear treatment plan with transparent pricing."
        primaryCtaLabel="Book Your Consultation"
        primaryCtaHref="#"
        secondaryCtaLabel="Speak With Our Team"
        secondaryCtaHref="tel:+18185550100"
        stats={[
          { value: "800+", label: "Implants Placed" },
          { value: "97%", label: "Success Rate" },
          { value: "15+", label: "Years Experience" },
          { value: "4.9 ★", label: "564 Reviews" },
        ]}
      />
    </main>
  );
}

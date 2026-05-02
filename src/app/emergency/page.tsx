import EmergencyHero from "@/components/emergency/EmergencyHero";
import EmergencyErWarningSection from "@/components/emergency/EmergencyErWarningSection";
import EmergencyTreatSection from "@/components/emergency/EmergencyTreatSection";
import EmergencyFirstAidSection from "@/components/emergency/EmergencyFirstAidSection";
import EmergencyAvoidErSection from "@/components/emergency/EmergencyAvoidErSection";
import EmergencyPricingSection from "@/components/emergency/EmergencyPricingSection";
import FaqSection from "@/components/general/FaqSection";
import EmergencyFinalCtaSection from "@/components/emergency/EmergencyFinalCtaSection";

const emergencyFaqs = [
  {
    question: "How fast can I be seen?",
    answer:
      "For true dental emergencies, we prioritize same-day access and triage by urgency. Many patients are seen within hours depending on current schedule flow and clinical severity.",
  },
  {
    question: "Are you open on weekends?",
    answer:
      "Yes, we offer emergency availability beyond standard weekday windows. Call first so we can confirm immediate openings and prepare the right team for your case.",
  },
  {
    question: "Do you take my insurance?",
    answer:
      "We accept many PPO plans and verify benefits before treatment whenever possible. Emergency care can still begin right away while coverage details are being confirmed.",
  },
  {
    question: "What if I don't have insurance?",
    answer:
      "You can still be treated. We offer transparent self-pay pricing and Gleam Membership options that reduce emergency and follow-up costs for uninsured patients.",
  },
  {
    question: "Should I go to the ER instead?",
    answer:
      "Go to the ER for life-threatening symptoms like breathing problems, severe facial trauma, or uncontrolled bleeding. For tooth pain, swelling, broken teeth, or dental infection, a dentist is usually the right first stop.",
  },
  {
    question: "What if it's 2am and I'm in pain?",
    answer:
      "Use your emergency instructions, control pain/swelling safely, and contact us as soon as possible for earliest triage. If symptoms escalate rapidly, seek urgent medical care immediately.",
  },
  {
    question: "My child chipped a tooth - is that an emergency?",
    answer:
      "It can be. Small chips are often less urgent, but larger fractures, pain, bleeding, or visible inner tooth structure should be evaluated quickly to protect the tooth and comfort.",
  },
  {
    question: "Can you treat me if I'm a new patient?",
    answer:
      "Yes. Emergency patients do not need to be existing patients. We can evaluate, stabilize, and treat urgent problems first, then map out any additional follow-up care.",
  },
];

export default function EmergencyPage() {
  return (
    <main>
      <EmergencyHero />
      <EmergencyErWarningSection />
      <EmergencyTreatSection />
      <EmergencyFirstAidSection />
      <EmergencyAvoidErSection />
      <EmergencyPricingSection />
      <FaqSection faqs={emergencyFaqs} />
      <EmergencyFinalCtaSection />
    </main>
  );
}

import GeneralHero from "@/components/general/GeneralHero";
import CostOfWaitingSection from "@/components/general/CostOfWaitingSection";
import ThreePrinciplesIntro from "@/components/general/ThreePrinciplesIntro";
import GeneralServicesSection from "@/components/general/GeneralServicesSection";
import FirstVisitTimelineSection from "@/components/general/FirstVisitTimelineSection";
import TransparentPricingSection from "@/components/general/TransparentPricingSection";
import MeetDentistSection from "@/components/general/MeetDentistSection";
import InsuranceAcceptedSection from "@/components/general/InsuranceAcceptedSection";
import PatientReviewsSection from "@/components/general/PatientReviewsSection";
import FaqSection from "@/components/general/FaqSection";
import VisitUsSection from "@/components/general/VisitUsSection";
import FinalCtaSection from "@/components/general/FinalCtaSection";

export default function GeneralPage() {
  return (
    <>
      <GeneralHero />
      <CostOfWaitingSection />
      <ThreePrinciplesIntro />
      <GeneralServicesSection />
      <FirstVisitTimelineSection />
      <TransparentPricingSection />
      <InsuranceAcceptedSection />
      <MeetDentistSection />
      <PatientReviewsSection />
      <FaqSection />
      <VisitUsSection />
      <FinalCtaSection />
    </>
  );
}

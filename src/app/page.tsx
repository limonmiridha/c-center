import AdmissionForm from "@/components/AdmissionForm";
import AdmissionStatsSection from "@/components/AdmissionStatsSection";
import BatchSection from "@/components/BatchSection";
import ContactSection from "@/components/ContactSection";
import EarlyBirdOfferSection from "@/components/EarlyBirdOfferSection";
import Hero from "@/components/Hero";
import NoticesAndResources from "@/components/NoticesAndResources";
import PhilosophySection from "@/components/PhilosophySection";

export default function Home() {
  return (
    <div>
      <Hero />
      <AdmissionStatsSection />
      <BatchSection />
      <PhilosophySection />
      <EarlyBirdOfferSection />
      <NoticesAndResources />
      <AdmissionForm />
      <ContactSection />
    </div>
  );
}

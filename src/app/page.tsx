import AdmissionForm from "@/components/AdmissionForm";
import BatchSection from "@/components/BatchSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import NoticesAndResources from "@/components/NoticesAndResources";
import PhilosophySection from "@/components/PhilosophySection";

export default function Home() {
  return (
    <div>
      <Hero />
      <BatchSection />
      <PhilosophySection />
      <NoticesAndResources />
      <AdmissionForm />
      <ContactSection />
    </div>
  );
}

import AdmissionForm from "@/components/AdmissionForm";
import AdmissionStatsSection from "@/components/AdmissionStatsSection";
import BatchSection from "@/components/BatchSection";
import ContactSection from "@/components/ContactSection";
import EarlyBirdOfferSection from "@/components/EarlyBirdOfferSection";
import Hero from "@/components/Hero";
import NoticesAndResources from "@/components/NoticesAndResources";
import PhilosophySection from "@/components/PhilosophySection";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <AdmissionStatsSection />
      <BatchSection />
      {/* <PhilosophySection /> */}
      <EarlyBirdOfferSection />
      {/* <NoticesAndResources /> */}
      <Suspense
        fallback={
          <div className="bg-surface border border-line rounded-2xl p-10 text-center text-sm text-muted">
            ভর্তি ফর্ম লোড হচ্ছে...
          </div>
        }
      >

        <AdmissionForm />
      </Suspense>
      {/* <ContactSection /> */}
    </div>
  );
}

import React, { Suspense } from "react";
import AdmissionForm from "@/components/AdmissionForm";
import { MapPin, Phone, Clock } from "lucide-react";

export const metadata = {
    title: "অনলাইন ভর্তি আবেদন | Onneshon Learning Center",
    description:
        "অন্বেষণ লার্নিং সেন্টার, বানারীপাড়া ক্যাম্পাসের নতুন ব্যাচে ভর্তির আবেদন করুন।",
};

export default function AdmissionPage() {
    return (
        <main className="py-16 bg-paper min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                {/* Page Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-surface border border-line text-xs font-bold text-green">
                        নতুন সেশন ভর্তি চলছে
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                        অন্বেষণ লার্নিং সেন্টারে স্বাগতম
                    </h1>
                    <p className="text-sm sm:text-base text-muted leading-relaxed">
                        ঘরে বসেই প্রাথমিক ভর্তি আবেদন সম্পন্ন করুন। আবেদন জমা দেওয়ার ২৪ ঘণ্টার মধ্যে আমাদের অফিস থেকে আপনার সাথে যোগাযোগ করা হবে।
                    </p>
                </div>

                {/* Form Wrapped in Suspense for useSearchParams */}
                <Suspense
                    fallback={
                        <div className="bg-surface border border-line rounded-2xl p-10 text-center text-sm text-muted">
                            ভর্তি ফর্ম লোড হচ্ছে...
                        </div>
                    }
                >
                    <AdmissionForm />
                </Suspense>

                {/* Direct Office Visit Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                    <div className="p-4 rounded-xl bg-surface border border-line flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-green shrink-0 mt-0.5" />
                        <div className="text-xs sm:text-sm">
                            <p className="font-bold text-navy">সরাসরি অফিস ঠিকানা</p>
                            <p className="text-muted mt-0.5">বানারীপাড়া, বরিশাল</p>
                        </div>
                    </div>

                    <div className="p-4 rounded-xl bg-surface border border-line flex items-start gap-3">
                        <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <div className="text-xs sm:text-sm">
                            <p className="font-bold text-navy">অফিস সময়সূচি</p>
                            <p className="text-muted mt-0.5">শনি – বৃহস্পতি (সকাল ৯টা – রাত ৮টা)</p>
                        </div>
                    </div>

                    <div className="p-4 rounded-xl bg-surface border border-line flex items-start gap-3">
                        <Phone className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                        <div className="text-xs sm:text-sm">
                            <p className="font-bold text-navy">ভর্তি হেল্পলাইন</p>
                            <p className="text-muted mt-0.5">+৮৮০ ১৭০০-০০০০০০</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

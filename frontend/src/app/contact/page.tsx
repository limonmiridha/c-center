import React from "react";
import Link from "next/link";
import ContactFormClient from "@/components/contact/ContactFormClient";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    ExternalLink,
    ArrowRight,
    MessageSquare,
} from "lucide-react";

export const metadata = {
    title: "যোগাযোগ ও ক্যাম্পাস লোকেশন | Onneshon Learning Center",
    description:
        "অন্বেষণ লার্নিং সেন্টার, বানারীপাড়া, বরিশাল ক্যাম্পাসের ঠিকানা, ফোন নম্বর, অফিস সময়সূচি এবং সরাসরি যোগাযোগের মাধ্যম।",
};

export default function ContactPage() {
    return (
        <main className="py-8 md:py-16 bg-paper min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {/* Page Header */}
                <div className="border-b border-line pb-8 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-line text-xs font-bold text-green">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>যোগাযোগ ও সহায়তা</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                        আমাদের সাথে যোগাযোগ করুন
                    </h1>
                    <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
                        ভর্তি সংক্রান্ত যেকোনো তথ্য, ফ্রি ডেমো ক্লাস কিংবা সন্তানের পড়াশোনা নিয়ে পরামর্শের জন্য সরাসরি আমাদের বানারীপাড়া ক্যাম্পাসে আসুন অথবা নিচের মাধ্যমে যোগাযোগ করুন।
                    </p>
                </div>

                {/* Top 4 Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="bg-surface border border-line rounded-2xl p-5 space-y-3">
                        <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-navy">ক্যাম্পাস ঠিকানা</h2>
                            <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                                বানারীপাড়া পৌরসভা / বন্দর বাজার সংলগ্ন, বানারীপাড়া, বরিশাল।
                            </p>
                        </div>
                    </div>

                    <div className="bg-surface border border-line rounded-2xl p-5 space-y-3">
                        <div className="w-10 h-10 rounded-lg bg-green/15 text-green flex items-center justify-center">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-navy">ফোন ও হোয়াটসঅ্যাপ</h2>
                            <p className="text-xs sm:text-sm text-muted mt-1">
                                <a
                                    href="tel:+8801790153927"
                                    className="hover:text-navy font-semibold"
                                >
                                    +৮৮০ ১৭৯০-১৫৩৯২৭
                                </a>
                            </p>
                            <p className="text-xs text-muted mt-0.5">সকাল ১০টা – রাত ৮টা</p>
                        </div>
                    </div>

                    <div className="bg-surface border border-line rounded-2xl p-5 space-y-3">
                        <div className="w-10 h-10 rounded-lg bg-gold/20 text-navy flex items-center justify-center">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-navy">অফিস সময়সূচি</h2>
                            <p className="text-xs sm:text-sm text-muted mt-1">
                                শনি – বৃহস্পতি: সকাল ৭:০০ – রাত ৮:০০
                            </p>
                        </div>
                    </div>

                    <div className="bg-surface border border-line rounded-2xl p-5 space-y-3">
                        <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-navy">ইমেইল ঠিকানা</h2>
                            <p className="text-xs sm:text-sm text-muted mt-1 break-all">
                                <a
                                    href="mailto:limonmiridha100@gmail.com"
                                    className="hover:text-navy font-medium"
                                >
                                    limonmiridha100@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main 12-Column Grid: Inquiry Form + Google Map */}
                {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    <div className="lg:col-span-6 bg-surface border border-line rounded-2xl p-6 sm:p-8 space-y-5">
                        <div className="border-b border-line pb-4">
                            <h2 className="text-xl font-extrabold text-navy">
                                সরাসরি বার্তা পাঠান
                            </h2>
                            <p className="text-xs sm:text-sm text-muted mt-1">
                                নিচের ফর্মটি পূরণ করলে আমাদের প্রতিনিধি দ্রুত আপনার সাথে যোগাযোগ করবেন।
                            </p>
                        </div>

                        <ContactFormClient />
                    </div>

                
                    <div className="lg:col-span-6 bg-surface border border-line rounded-2xl p-4 flex flex-col justify-between min-h-[420px]">
                        <div className="relative w-full h-full min-h-[360px] rounded-xl overflow-hidden bg-paper">
                            <iframe
                                title="Onneshon Learning Center Banaripara Map"
                                src="https://google.com"
                                className="w-full h-full min-h-[360px] border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="pt-3.5 px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
                            <span>বানারীপাড়া উপজেলা সদর, বরিশাল</span>
                            <a
                                href="https://google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-bold text-navy hover:text-green transition-colors"
                            >
                                <span>গুগল ম্যাপে দিকনির্দেশনা দেখুন</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </div> */}

                {/* Bottom Admission Banner */}
                <div className="bg-navy text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold">
                            সরাসরি ভর্তির জন্য আবেদন করতে চান?
                        </h3>
                        <p className="text-xs sm:text-sm text-white/80 mt-1">
                            অনলাইন ভর্তি ফর্ম পূরণ করে আপনার পছন্দের ব্যাচে আসন সংরক্ষণ করুন।
                        </p>
                    </div>
                    <Link
                        href="/admission"
                        className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gold hover:bg-gold-hover text-navy font-bold text-sm transition-colors"
                    >
                        <span>ভর্তি আবেদন ফর্ম</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </main>
    );
}

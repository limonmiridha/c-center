"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    Gift,
    CalendarClock,
    CheckCircle2,
    ArrowRight,
    Percent,
    BookOpenCheck,
} from "lucide-react";

export default function EarlyBirdOfferSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 26,
        hours: 14,
        minutes: 30,
        seconds: 0,
    });

    useEffect(() => {
        // ১৫ ডিসেম্বর, ২০২৬ রাত ১১:৫৯ পর্যন্ত কাউন্টডাউন
        const targetDate = new Date("2026-12-15T23:59:59+06:00").getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        };

        updateTimer();
        const timer = setInterval(updateTimer, 1000);
        return () => clearInterval(timer);
    }, []);

    const offerBenefits = [
        {
            icon: Percent,
            title: "ভর্তি ফিতে ৪০% বিশেষ ছাড়",
            desc: "১৫ই ডিসেম্বরের মধ্যে চূড়ান্ত ভর্তি সম্পন্ন করলে এককালীন ভর্তি ফিতে সরাসরি ৪০% ছাড় পাওয়া যাবে।",
        },
        {
            icon: BookOpenCheck,
            title: "ফ্রি স্টাডি কিট ও লেকচার শিট",
            desc: "প্রতিটি বিষয়ের প্রিন্টেড ফাউন্ডেশন লেকচার শিট, প্র্যাকটিস খাতা এবং অন্বেষণ স্টুডেন্ট ডায়েরি সম্পূর্ণ ফ্রি।",
        },
        {
            icon: Gift,
            title: "ফ্রি স্পেশাল স্কিল ওয়ার্কশপ এক্সেস",
            desc: "জানুয়ারি থেকে শুরু হতে যাওয়া শুক্রবারের 'কিউরিওসিটি ও কম্পিউটার বেসিকস' কর্মশালায় বিনামূল্যে অংশগ্রহণের সুযোগ।",
        },
    ];

    return (
        <section className="py-16 sm:py-20 bg-paper border-b border-line">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-navy text-white rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden border border-navy">
                    {/* Subtle Architectural Corner Accent */}
                    <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-gold/10 pointer-events-none" />
                    <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-green/10 pointer-events-none" />

                    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        {/* Left 7 Columns: Offer Details */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-gold">
                                <CalendarClock className="w-4 h-4" />
                                <span>সীমিত সময়ের আর্লি বার্ড অফার • শেষ তারিখ: ১৫ ডিসেম্বর</span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.25]">
                                ১৫ই ডিসেম্বরের মধ্যে ভর্তি হলেই পাচ্ছেন{" "}
                                <span className="text-gold">বিশেষ আর্লি বার্ড সুবিধা!</span>
                            </h2>

                            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                                নতুন শিক্ষাবর্ষের শুরু থেকেই নিজের প্রস্তুতি এগিয়ে রাখতে এবং পছন্দের ব্যাচ টাইম নিশ্চিত করতে আজই প্রাথমিক আবেদন সম্পন্ন করুন।
                            </p>

                            {/* 3 Offer Benefits */}
                            <div className="space-y-4 pt-2">
                                {offerBenefits.map((benefit, idx) => {
                                    const Icon = benefit.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10"
                                        >
                                            <div className="w-9 h-9 rounded-lg bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-white text-sm sm:text-base">
                                                    {benefit.title}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-white/75 mt-0.5 leading-relaxed">
                                                    {benefit.desc}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right 5 Columns: Countdown Box & CTA */}
                        <div className="lg:col-span-5">
                            <div className="bg-surface text-ink rounded-2xl p-6 sm:p-8 border border-line space-y-6 shadow-xl">
                                <div className="text-center space-y-1.5 border-b border-line pb-5">
                                    <span className="text-xs font-bold uppercase tracking-wider text-green">
                                        অফার শেষ হতে বাকি
                                    </span>
                                    <h3 className="text-lg sm:text-xl font-extrabold text-navy">
                                        ১৫ ডিসেম্বর, ২০২৬ পর্যন্ত
                                    </h3>
                                </div>

                                {/* Live Countdown Grid */}
                                <div className="grid grid-cols-4 gap-2.5 text-center">
                                    <div className="p-3 rounded-xl bg-paper border border-line">
                                        <span className="block text-2xl sm:text-3xl font-extrabold text-navy">
                                            {String(timeLeft.days).padStart(2, "0")}
                                        </span>
                                        <span className="text-[11px] font-semibold text-muted uppercase">
                                            দিন
                                        </span>
                                    </div>

                                    <div className="p-3 rounded-xl bg-paper border border-line">
                                        <span className="block text-2xl sm:text-3xl font-extrabold text-navy">
                                            {String(timeLeft.hours).padStart(2, "0")}
                                        </span>
                                        <span className="text-[11px] font-semibold text-muted uppercase">
                                            ঘণ্টা
                                        </span>
                                    </div>

                                    <div className="p-3 rounded-xl bg-paper border border-line">
                                        <span className="block text-2xl sm:text-3xl font-extrabold text-navy">
                                            {String(timeLeft.minutes).padStart(2, "0")}
                                        </span>
                                        <span className="text-[11px] font-semibold text-muted uppercase">
                                            মিনিট
                                        </span>
                                    </div>

                                    <div className="p-3 rounded-xl bg-paper border border-line">
                                        <span className="block text-2xl sm:text-3xl font-extrabold text-green">
                                            {String(timeLeft.seconds).padStart(2, "0")}
                                        </span>
                                        <span className="text-[11px] font-semibold text-muted uppercase">
                                            সেকেন্ড
                                        </span>
                                    </div>
                                </div>

                                {/* Offer Checklist */}
                                <ul className="space-y-2 text-xs sm:text-sm text-muted pt-1">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                                        <span>অনলাইনে ফর্ম ফিলাপ করে অফারটি লক করা যাবে</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                                        <span>প্রথম ৩০ জন শিক্ষার্থীর জন্য প্রযোজ্য</span>
                                    </li>
                                </ul>

                                {/* CTA Button */}
                                <div className="pt-2">
                                    <Link
                                        href="/admission?offer=early-bird-dec15"
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy hover:bg-navy-dark text-white font-bold text-sm sm:text-base transition-colors"
                                    >
                                        <span>অফারসহ ভর্তি আবেদন করুন</span>
                                        <ArrowRight className="w-4 h-4 text-gold" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

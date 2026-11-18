"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    BookOpen,
    Cpu,
    Lightbulb,
    Clock,
    Users,
    Calendar,
    ArrowUpRight,
    Check,
} from "lucide-react";

type Category = "all" | "academic" | "skill";

interface Program {
    id: string;
    category: "academic" | "skill";
    badge: string;
    badgeColor: "navy" | "green" | "gold";
    title: string;
    targetGroup: string;
    description: string;
    schedule: string;
    batchSize: string;
    highlights: string[];
}

const programsData: Program[] = [
    {
        id: "junior-foundation",
        category: "academic",
        badge: "একাডেমিক ফাউন্ডেশন",
        badgeColor: "navy",
        title: "জুনিয়র ফাউন্ডেশন ও মেধা বিকাশ ব্যাচ",
        targetGroup: "ষষ্ঠ — অষ্টম শ্রেণি",
        description:
            "গণিত, বিজ্ঞান ও ইংরেজির মূল ভিত্তি মজবুত করার পাশাপাশি শিক্ষার্থীদের প্রশ্ন করার অভ্যাস ও যৌক্তিক চিন্তাশক্তি গড়ে তোলা হয়।",
        schedule: "সপ্তাহে ৪ দিন (বিকাল ৩:৩০ – ৫:০০)",
        batchSize: "সর্বোচ্চ ২০ জন শিক্ষার্থী",
        highlights: [
            "হাতে-কলমে বিজ্ঞান ও গণিতের ধারণা",
            "ইংরেজি রিডিং ও বেসিক রাইটিং দক্ষতা",
            "মাসিক মূল্যায়ন ও অভিভাবক ফিডব্যাক",
        ],
    },
    {
        id: "ssc-science-academic",
        category: "academic",
        badge: "বোর্ড প্রস্তুতি",
        badgeColor: "navy",
        title: "এসএসসি একাডেমিক ও সৃজনশীল ব্যাচ",
        targetGroup: "নবম — দশম শ্রেণি (বিজ্ঞান ও সাধারণ)",
        description:
            "মুখস্থবিদ্যার বদলে প্রতিটি অধ্যায়ের গভীর ধারণা, সৃজনশীল প্রশ্ন বিশ্লেষণ এবং গাণিতিক সমস্যা সমাধানের কৌশল শেখানো হয়।",
        schedule: "সপ্তাহে ৫ দিন (বিকাল ৪:০০ – ৬:০০)",
        batchSize: "সর্বোচ্চ ১৮ জন শিক্ষার্থী",
        highlights: [
            "পদার্থ, রসায়ন ও উচ্চতর গণিতের বিশেষ কেয়ার",
            "অধ্যায়ভিত্তিক সৃজনশীল ও বহুনির্বাচনি পরীক্ষা",
            "দুর্বল শিক্ষার্থীদের জন্য আলাদা সলভ ক্লাস",
        ],
    },
    {
        id: "hsc-ict-special",
        category: "skill",
        badge: "স্পেশাল প্রোগ্রাম",
        badgeColor: "green",
        title: "এইচএসসি আইসিটি ও প্রোগ্রামিং ফাউন্ডেশন",
        targetGroup: "একাদশ — দ্বাদশ শ্রেণি",
        description:
            "সংখ্যা পদ্ধতি, ডিজিটাল ডিভাইস, HTML ও C প্রোগ্রামিং সরাসরি ল্যাপটপ ও প্রজেক্টরের মাধ্যমে প্র্যাকটিক্যালি শেখানো হয়।",
        schedule: "সপ্তাহে ৩ দিন (সকাল বা বিকাল ব্যাচ)",
        batchSize: "সর্বোচ্চ ১৫ জন শিক্ষার্থী",
        highlights: [
            "ল্যাবে সরাসরি সি-প্রোগ্রামিং ও ওয়েব ডিজাইন প্র্যাকটিস",
            "বোর্ড পরীক্ষার শতভাগ কমন উপযোগী লেকচার শিট",
            "সমস্যা সমাধান ও লজিক বিল্ডিং সেশন",
        ],
    },
    {
        id: "curiosity-stem-club",
        category: "skill",
        badge: "সৃজনশীল দক্ষতা",
        badgeColor: "gold",
        title: "অন্বেষণ কিউরিওসিটি ও কম্পিউটার বেসিকস",
        targetGroup: "যেকোনো শ্রেণির আগ্রহী শিক্ষার্থী",
        description:
            "আধুনিক প্রযুক্তির সঠিক ব্যবহার, প্রেজেন্টেশন স্কিল, ক্রিটিক্যাল থিংকিং এবং সমস্যা সমাধানের দক্ষতা তৈরির সাপ্তাহিক কর্মশালা।",
        schedule: "প্রতি শুক্রবার (সকাল ৯:৩০ – ১১:৩০)",
        batchSize: "সর্বোচ্চ ১৫ জন শিক্ষার্থী",
        highlights: [
            "কম্পিউটার ফান্ডামেন্টাল ও অফিস অ্যাপ্লিকেশন",
            "পাবলিক স্পিকিং ও দলগত প্রজেক্ট প্রেজেন্টেশন",
            "বাস্তব সমস্যা সমাধানের কেস স্টাডি",
        ],
    },
];

export default function BatchSection() {
    const [activeTab, setActiveTab] = useState<Category>("all");

    const filteredPrograms =
        activeTab === "all"
            ? programsData
            : programsData.filter((item) => item.category === activeTab);

    return (
        <section id="programs" className="py-20 bg-paper border-b border-line">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header + Filter Tabs */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-line">
                    <div className="max-w-2xl space-y-3">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green">
                            <span className="w-6 h-[2px] bg-green" />
                            <span>আমাদের প্রোগ্রাম ও ব্যাচসমূহ</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                            শিক্ষার্থীর বয়স ও আগ্রহ অনুযায়ী সাজানো পাঠক্রম
                        </h2>
                        <p className="text-sm sm:text-base text-muted leading-relaxed">
                            প্রতিটি ব্যাচে সীমিত সংখ্যক শিক্ষার্থী নেওয়া হয়, যাতে প্রত্যেক শিক্ষার্থীর কৌতূহল ও শেখার গতি অনুযায়ী ব্যক্তিগত যত্ন নেওয়া সম্ভব হয়।
                        </p>
                    </div>

                    {/* Minimalist Filter Switcher */}
                    <div className="inline-flex p-1.5 rounded-xl bg-surface border border-line self-start md:self-auto">
                        <button
                            type="button"
                            onClick={() => setActiveTab("all")}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeTab === "all"
                                ? "bg-navy text-white"
                                : "text-muted hover:text-navy"
                                }`}
                        >
                            সকল ব্যাচ
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab("academic")}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeTab === "academic"
                                ? "bg-navy text-white"
                                : "text-muted hover:text-navy"
                                }`}
                        >
                            একাডেমিক
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab("skill")}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeTab === "skill"
                                ? "bg-navy text-white"
                                : "text-muted hover:text-navy"
                                }`}
                        >
                            আইসিটি ও স্কিল
                        </button>
                    </div>
                </div>

                {/* Programs Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-7">
                    {filteredPrograms.map((program) => {
                        const badgeStyles = {
                            navy: "bg-navy/10 text-navy border-navy/15",
                            green: "bg-green/10 text-green border-green/20",
                            gold: "bg-gold/20 text-navy border-gold/30",
                        }[program.badgeColor];

                        const IconComponent =
                            program.category === "academic"
                                ? BookOpen
                                : program.id === "hsc-ict-special"
                                    ? Cpu
                                    : Lightbulb;

                        return (
                            <div
                                key={program.id}
                                className="group bg-surface border border-line hover:border-navy/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all"
                            >
                                <div>
                                    {/* Top Meta Row */}
                                    <div className="flex items-center justify-between gap-4 mb-5">
                                        <span
                                            className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold border ${badgeStyles}`}
                                        >
                                            {program.badge}
                                        </span>
                                        <div className="w-10 h-10 rounded-lg bg-paper border border-line flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-gold transition-colors">
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Class / Target Group */}
                                    <p className="text-xs font-bold text-green uppercase tracking-wide">
                                        {program.targetGroup}
                                    </p>

                                    {/* Title & Description */}
                                    <h3 className="text-xl font-bold text-navy mt-1.5 group-hover:text-navy-dark">
                                        {program.title}
                                    </h3>
                                    <p className="text-sm text-muted mt-2.5 leading-relaxed">
                                        {program.description}
                                    </p>

                                    {/* Key Features List */}
                                    <ul className="mt-5 pt-5 border-t border-line space-y-2.5">
                                        {program.highlights.map((point, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-2.5 text-sm text-ink"
                                            >
                                                <Check className="w-4 h-4 text-green shrink-0 mt-0.5" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom Schedule & CTA */}
                                <div className="mt-7 pt-5 border-t border-line space-y-4">
                                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
                                        <span className="inline-flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5 text-navy" />
                                            {program.schedule}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5">
                                            <Users className="w-3.5 h-3.5 text-navy" />
                                            {program.batchSize}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between pt-1">
                                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green">
                                            <Calendar className="w-3.5 h-3.5" />
                                            আসন সীমিত — ভর্তি চলছে
                                        </span>

                                        <Link
                                            href={`/admission?program=${program.id}`}
                                            className="inline-flex items-center gap-1 text-sm font-bold text-navy hover:text-green transition-colors"
                                        >
                                            <span>আবেদন করুন</span>
                                            <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Custom Inquiry Strip */}
                <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-surface border border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h4 className="text-base sm:text-lg font-bold text-navy">
                            কোন ব্যাচটি আপনার সন্তানের জন্য উপযুক্ত তা নিয়ে দ্বিধায় আছেন?
                        </h4>
                        <p className="text-sm text-muted mt-1">
                            সরাসরি বানারীপাড়া ক্যাম্পাসে এসে আমাদের শিক্ষকদের সাথে কথা বলুন অথবা ফ্রি পরামর্শ নিন।
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="shrink-0 px-5 py-2.5 rounded-lg bg-paper hover:bg-navy text-navy hover:text-white border border-line font-semibold text-sm transition-colors"
                    >
                        পরামর্শের জন্য যোগাযোগ করুন
                    </Link>
                </div>
            </div>
        </section>
    );
}


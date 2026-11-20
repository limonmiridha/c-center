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
    CheckCircle2,
    HelpCircle,
} from "lucide-react";

type FilterCategory = "all" | "academic" | "skill";

interface DetailedProgram {
    id: string;
    category: "academic" | "skill";
    badge: string;
    badgeStyle: string;
    title: string;
    targetClass: string;
    subjects: string;
    description: string;
    days: string;
    timeSlots: string[];
    seatLimit: string;
    features: string[];
}

const detailedPrograms: DetailedProgram[] = [
    {
        id: "junior-foundation",
        category: "academic",
        badge: "একাডেমিক ফাউন্ডেশন",
        badgeStyle: "bg-navy/10 text-navy border-navy/20",
        title: "জুনিয়র ফাউন্ডেশন ব্যাচ",
        targetClass: "৬ষ্ঠ — ৮ম শ্রেণি",
        subjects: "গণিত, সাধারণ বিজ্ঞান, ইংরেজি, বাংলা ব্যাকরণ ও নির্মিতি এবং আইসিটি",
        description:
            "মাধ্যমিক পর্যায়ের শুরুতেই শিক্ষার্থীদের গণিত ও বিজ্ঞানের ভীতি দূর করে যুক্তিবোধ, প্রশ্ন করার সাহস এবং ইংরেজিতে সাবলীল দক্ষতা গড়ে তোলা হয়।",
        days: "শনি, সোম, বুধ ও বৃহস্পতিবার",
        timeSlots: ["বিকাল ৩:৩০ – ৫:০০", "সন্ধ্যা ৬:০০ – ৭:৩০"],
        seatLimit: "প্রতি ব্যাচে সর্বোচ্চ ২৫ জন",
        features: [
            "পাঠ্যবইয়ের প্রতিটি অধ্যায়ের মূল ধারণা সহজ উদাহরণে ব্যাখ্যা",
            "হাতে-কলমে বিজ্ঞানের ছোট প্রজেক্ট ও লজিক্যাল অনুশীলন",
            "ইংরেজি গ্রামার ও ফ্রি-হ্যান্ড রাইটিংয়ের বিশেষ যত্ন",
            "প্রতি মাসে মূল্যায়ন পরীক্ষা ও অভিভাবক মতবিনিময়",
        ],
    },
    {
        id: "ssc-science-academic",
        category: "academic",
        badge: "বোর্ড প্রস্তুতি",
        badgeStyle: "bg-navy/10 text-navy border-navy/20",
        title: "এসএসসি একাডেমিক",
        targetClass: "৯ম — ১০ম শ্রেণি (বিজ্ঞান ও সাধারণ)",
        subjects: "সাধারণ গণিত, উচ্চতর গণিত, পদার্থবিজ্ঞান, রসায়ন ও জীববিজ্ঞান",
        description:
            "মুখস্থবিদ্যার বদলে সূত্রের গভীর প্রয়োগ, সৃজনশীল প্রশ্ন বিশ্লেষণ এবং বোর্ড পরীক্ষার জন্য আত্মবিশ্বাসী প্রস্তুতি নিশ্চিত করা হয়।",
        days: "রবি, মঙ্গল, বৃহস্পতি ও শুক্রবার",
        timeSlots: ["সকাল ৮:০০ – ১০:০০", "বিকাল ৪:০০ – ৬:০০"],
        seatLimit: "প্রতি ব্যাচে সর্বোচ্চ ২৫ জন",
        features: [
            "পদার্থ, রসায়ন ও গণিতের জটিল বিষয়ের ভিজ্যুয়াল ব্যাখ্যা",
            "অধ্যায়ভিত্তিক সৃজনশীল (CQ) ও বহুনির্বাচনি (MCQ) মডেল টেস্ট",
            "পিছিয়ে পড়া শিক্ষার্থীদের জন্য আলাদা সলভ ক্লাস",
            "নিজস্ব তৈরি অধ্যায়ভিত্তিক লেকচার শিট ও প্রশ্নব্যাংক",
        ],
    },
    {
        id: "hsc-ict-special",
        category: "skill",
        badge: "স্পেশাল প্রোগ্রাম",
        badgeStyle: "bg-green/15 text-green border-green/25",
        title: "এইচএসসি আইসিটি",
        targetClass: "একাদশ — দ্বাদশ শ্রেণি (সকল বিভাগ)",
        subjects: "তথ্য ও যোগাযোগ প্রযুক্তি (সম্পূর্ণ বই ও প্র্যাকটিক্যাল)",
        description:
            "সংখ্যা পদ্ধতি, ডিজিটাল ডিভাইস, HTML ও C প্রোগ্রামিং শুধু খাতায় নয়, বরং সরাসরি কম্পিউটার ও প্রজেক্টরের মাধ্যমে হাতে-কলমে শেখানো হয়।",
        days: "শনি, সোম ও বুধবার",
        timeSlots: ["সকাল ৯:৩০ – ১১:০০", "বিকাল ৫:০০ – ৬:৩০"],
        seatLimit: "প্রতি ব্যাচে সর্বোচ্চ ১৫ জন",
        features: [
            "ল্যাপটপে সরাসরি সি-প্রোগ্রামিং ও ওয়েব পেজ ডিজাইন প্র্যাকটিস",
            "বোর্ড পরীক্ষার শতভাগ কমন উপযোগী সহজ লেকচার শিট",
            "অ্যালগরিদম, ফ্লোচার্ট ও লজিক গেট সমাধানের বিশেষ কৌশল",
            "কোর্স শেষে পূর্ণাঙ্গ মডেল টেস্ট সিরিজ",
        ],
    },
    // {
    //     id: "curiosity-stem-club",
    //     category: "skill",
    //     badge: "সৃজনশীল দক্ষতা",
    //     badgeStyle: "bg-gold/25 text-navy border-gold/40",
    //     title: "অন্বেষণ কিউরিওসিটি ও কম্পিউটার বেসিকস",
    //     targetClass: "যেকোনো শ্রেণির আগ্রহী শিক্ষার্থী",
    //     subjects: "কম্পিউটার ফান্ডামেন্টাল, ক্রিটিক্যাল থিংকিং ও প্রেজেন্টেশন",
    //     description:
    //         "আধুনিক প্রযুক্তির নিরাপদ ও সৃজনশীল ব্যবহার, সমস্যা সমাধানের দক্ষতা এবং দলগতভাবে কাজ করার মানসিকতা গড়ে তোলার সাপ্তাহিক কর্মশালা।",
    //     days: "প্রতি শুক্রবার (সাপ্তাহিক ব্যাচ)",
    //     timeSlots: ["সকাল ৯:৩০ – ১১:৩০"],
    //     seatLimit: "প্রতি ব্যাচে সর্বোচ্চ ১৫ জন",
    //     features: [
    //         "মাইক্রোসফট অফিস, ইন্টারনেট ও ডিজিটাল লিটারেসি",
    //         "গণিত অলিম্পিয়াড পাজল ও ব্রেইন টিজার সমাধান",
    //         "পাবলিক স্পিকিং ও প্রেজেন্টেশন স্কিল চর্চা",
    //         "বাস্তব জীবনের সমস্যা নিয়ে দলগত প্রজেক্ট তৈরি",
    //     ],
    // },
];

const faqs = [
    {
        question: "ভর্তির আগে কি ক্লাস যাচাই (Demo Class) করার সুযোগ আছে?",
        answer:
            "হ্যাঁ, যেকোনো শিক্ষার্থী ও অভিভাবক ভর্তির আগে আমাদের ক্যাম্পাসে এসে ১টি ফ্রি ওরিয়েন্টেশন বা ডেমো ক্লাসে অংশ নিয়ে আমাদের পাঠদান পদ্ধতি যাচাই করতে পারবেন।",
    },
    {
        question: "কোনো শিক্ষার্থী অসুস্থতার কারণে ক্লাস মিস করলে কী ব্যবস্থা নেওয়া হয়?",
        answer:
            "কোনো যৌক্তিক কারণে ক্লাস মিস করলে পরবর্তী ক্লাসের আগে বা সাপ্তাহিক সলভ সেশনে শিক্ষকের কাছ থেকে ওই অধ্যায়ের মূল অংশ বুঝে নেওয়ার সুযোগ থাকে।",
    },
    {
        question: "অভিভাবকরা কীভাবে সন্তানের পড়াশোনার অগ্রগতি জানতে পারবেন?",
        answer:
            "প্রতিটি মাসিক পরীক্ষার ফলাফল ও উপস্থিতির তথ্য অভিভাবকদের জানানো হয় এবং প্রতি মাসে একটি নির্ধারিত দিনে সরাসরি মতবিনিময় সভা অনুষ্ঠিত হয়।",
    },
];

export default function ProgramsPageClient() {
    const [filter, setFilter] = useState<FilterCategory>("all");

    const visiblePrograms =
        filter === "all"
            ? detailedPrograms
            : detailedPrograms.filter((p) => p.category === filter);

    return (
        <div className="space-y-8 md:space-y-16">
            {/* Category Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="inline-flex p-1.5 rounded-xl bg-surface border border-line">
                    <button
                        type="button"
                        onClick={() => setFilter("all")}
                        className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${filter === "all"
                            ? "bg-navy text-white"
                            : "text-muted hover:text-navy"
                            }`}
                    >
                        সকল প্রোগ্রাম ({detailedPrograms.length})
                    </button>
                    <button
                        type="button"
                        onClick={() => setFilter("academic")}
                        className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${filter === "academic"
                            ? "bg-navy text-white"
                            : "text-muted hover:text-navy"
                            }`}
                    >
                        একাডেমিক ব্যাচ
                    </button>
                    <button
                        type="button"
                        onClick={() => setFilter("skill")}
                        className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${filter === "skill"
                            ? "bg-navy text-white"
                            : "text-muted hover:text-navy"
                            }`}
                    >
                        আইসিটি ও স্কিল
                    </button>
                </div>
            </div>

            {/* Detailed Program Cards */}
            <div className="space-y-8">
                {visiblePrograms.map((program) => {
                    const Icon =
                        program.category === "academic"
                            ? BookOpen
                            : program.id === "hsc-ict-special"
                                ? Cpu
                                : Lightbulb;

                    return (
                        <div
                            key={program.id}
                            className="bg-surface border border-line rounded-2xl p-6 sm:p-8 lg:p-10 transition-all hover:border-navy/40"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                {/* Left 7 Columns: Course Overview & Features */}
                                <div className="lg:col-span-7 space-y-5">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span
                                            className={`px-3 py-1 rounded-md text-xs font-bold border ${program.badgeStyle}`}
                                        >
                                            {program.badge}
                                        </span>
                                        <span className="text-xs font-bold text-green uppercase tracking-wide">
                                            {program.targetClass}
                                        </span>
                                    </div>

                                    <div className="flex flex-col items-start gap-3.5">
                                        <div className="w-11 h-11 rounded-xl bg-paper border border-line flex items-center justify-center text-navy shrink-0 mt-1">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl sm:text-2xl font-extrabold text-navy">
                                                {program.title}
                                            </h2>
                                            <p className="text-xs sm:text-sm font-semibold text-muted mt-1">
                                                বিষয়সমূহ: <span className="text-ink">{program.subjects}</span>
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-sm sm:text-base text-muted leading-relaxed">
                                        {program.description}
                                    </p>

                                    <div className="pt-2 space-y-2.5">
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-navy">
                                            এই ব্যাচে যা যা থাকছে:
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                            {program.features.map((feat, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-2 text-xs sm:text-sm text-ink"
                                                >
                                                    <CheckCircle2 className="w-4 h-4 text-green shrink-0 mt-0.5" />
                                                    <span>{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Right 5 Columns: Batch Schedule & Direct Apply Box */}
                                <div className="lg:col-span-5 bg-paper border border-line rounded-xl p-5 sm:p-6 space-y-5">
                                    <h3 className="text-sm font-bold text-navy border-b border-line pb-3">
                                        ব্যাচের সময়সূচি ও আসন তথ্য
                                    </h3>

                                    <div className="space-y-3.5 text-sm">
                                        <div className="flex items-start gap-3">
                                            <Calendar className="w-4 h-4 text-green shrink-0 mt-1" />
                                            <div>
                                                <p className="text-xs text-muted">ক্লাসের দিন</p>
                                                <p className="font-semibold text-navy">{program.days}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Clock className="w-4 h-4 text-gold shrink-0 mt-1" />
                                            <div>
                                                <p className="text-xs text-muted">উপলব্ধ সময় (Shift)</p>
                                                <div className="flex flex-wrap gap-1.5 mt-1">
                                                    {program.timeSlots.map((slot, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2.5 py-0.5 rounded-md bg-surface border border-line text-xs font-semibold text-ink"
                                                        >
                                                            {slot}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Users className="w-4 h-4 text-navy shrink-0 mt-1" />
                                            <div>
                                                <p className="text-xs text-muted">আসন সংখ্যা</p>
                                                <p className="font-semibold text-navy">
                                                    {program.seatLimit}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <Link
                                            href={`/admission?program=${program.id}`}
                                            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-navy hover:bg-navy-dark text-white font-semibold text-sm transition-colors"
                                        >
                                            <span>এই ব্যাচে ভর্তি আবেদন করুন</span>
                                            <ArrowUpRight className="w-4 h-4 text-gold" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* FAQ Section for Parents & Students */}
            <div className="bg-surface border border-line rounded-2xl p-6 sm:p-10 space-y-6">
                <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-5 h-5 text-green" />
                    <h3 className="text-xl font-extrabold text-navy">
                        অভিভাবক ও শিক্ষার্থীদের সাধারণ জিজ্ঞাসা
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="p-5 rounded-xl bg-paper border border-line space-y-2"
                        >
                            <h4 className="font-bold text-navy text-sm sm:text-base leading-snug">
                                {faq.question}
                            </h4>
                            <p className="text-xs sm:text-sm text-muted leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Bell,
    FileText,
    Download,
    Calendar,
    ArrowRight,
    BookMarked,
    Pin,
    ChevronRight,
    X,
} from "lucide-react";

interface Notice {
    id: string;
    date: string;
    category: "ভর্তি" | "পরীক্ষা" | "সাধারণ";
    isPinned?: boolean;
    title: string;
    summary: string;
    details: string;
}

interface ResourceItem {
    id: string;
    subject: string;
    classLevel: string;
    title: string;
    fileSize: string;
    fileType: string;
    downloadUrl: string;
}

const noticesData: Notice[] = [
    {
        id: "n-1",
        date: "১৫ নভেম্বর, ২০২৬",
        category: "ভর্তি",
        isPinned: true,
        title: "২০২৭ নতুন একাডেমিক সেশনে ষষ্ঠ থেকে দশম শ্রেণির ভর্তি শুরু",
        summary:
            "আগামী সেশনের জন্য সীমিত আসনে ভর্তি ফর্ম বিতরণ ও জমা নেওয়া শুরু হয়েছে।",
        details:
            "অন্বেষণ লার্নিং সেন্টারের বানারীপাড়া ক্যাম্পাসে ২০২৭ শিক্ষাবর্ষের জন্য ষষ্ঠ থেকে দশম শ্রেণির (বিজ্ঞান ও সাধারণ শাখা) এবং একাদশ শ্রেণির আইসিটি ব্যাচে ভর্তি চলছে। প্রতিটি ব্যাচে সর্বোচ্চ ২০ জন শিক্ষার্থী নেওয়া হবে। আগ্রহী অভিভাবক ও শিক্ষার্থীদের আগামী ৩০ নভেম্বরের মধ্যে সরাসরি অফিস কক্ষে অথবা অনলাইনে আবেদন করার জন্য অনুরোধ করা হলো।",
    },
    {
        id: "n-2",
        date: "১০ নভেম্বর, ২০২৬",
        category: "পরীক্ষা",
        title: "মাসিক সৃজনশীল মূল্যায়ন ও অভিভাবক মতবিনিময় সভার সময়সূচি",
        summary:
            "নভেম্বর মাসের মাসিক মূল্যায়ন পরীক্ষার রুটিন এবং অভিভাবক সভার তারিখ প্রকাশ।",
        details:
            "আগামী ২০ নভেম্বর থেকে সকল ব্যাচের মাসিক সৃজনশীল ও গাণিতিক মূল্যায়ন পরীক্ষা অনুষ্ঠিত হবে। পরীক্ষার ফলাফল প্রকাশের পর ২৮ নভেম্বর সকাল ১০টায় অভিভাবকদের সাথে শিক্ষার্থীদের অগ্রগতি নিয়ে মতবিনিময় সভা অনুষ্ঠিত হবে।",
    },
    {
        id: "n-3",
        date: "০২ নভেম্বর, ২০২৬",
        category: "সাধারণ",
        title: "শুক্রবারের ফ্রি 'কিউরিওসিটি ও বিজ্ঞান ক্লাব' ওয়ার্কশপ ঘোষণা",
        summary:
            "হাতে-কলমে বিজ্ঞানের মজার পরীক্ষা ও লজিক্যাল পাজল সমাধানের বিশেষ সেশন।",
        details:
            "প্রতি শুক্রবার সকাল ৯:৩০ মিনিটে অন্বেষণের সকল শিক্ষার্থীদের জন্য উন্মুক্ত বিজ্ঞান ও সমস্যা সমাধান কর্মশালা অনুষ্ঠিত হবে। এতে পাঠ্যবইয়ের বাইরের মজার বিজ্ঞান ও বাস্তব সমস্যার সমাধান শেখানো হবে।",
    },
];

const resourcesData: ResourceItem[] = [
    {
        id: "r-1",
        subject: "আইসিটি (ICT)",
        classLevel: "একাদশ — দ্বাদশ শ্রেণি",
        title: "অধ্যায় ৩: সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস — সহজ লেকচার শিট",
        fileSize: "১.৮ MB",
        fileType: "PDF",
        downloadUrl: "/resources/hsc-ict-chapter-3.pdf",
    },
    {
        id: "r-2",
        subject: "সাধারণ গণিত",
        classLevel: "নবম — দশম শ্রেণি",
        title: "ত্রিকোণমিতি ও পরিমিতির মূল সূত্রাবলি এবং সৃজনশীল সমাধান গাইড",
        fileSize: "২.৪ MB",
        fileType: "PDF",
        downloadUrl: "/resources/ssc-math-formulas.pdf",
    },
    {
        id: "r-3",
        subject: "বিজ্ঞান ও যুক্তি",
        classLevel: "ষষ্ঠ — অষ্টম শ্রেণি",
        title: "কৌতূহলী বিজ্ঞান: দৈনন্দিন জীবনের ৫০টি বৈজ্ঞানিক প্রশ্নের ব্যাখ্যা",
        fileSize: "১.২ MB",
        fileType: "PDF",
        downloadUrl: "/resources/junior-curious-science.pdf",
    },
];

export default function NoticesAndResources() {
    const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

    return (
        <section id="notices" className="py-20 bg-surface border-b border-line">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-2xl mb-12 space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green">
                        <span className="w-6 h-[2px] bg-green" />
                        <span>আপডেট ও পড়াশোনার উপকরণ</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                        নোটিশ বোর্ড ও স্টাডি রিসোর্স
                    </h2>
                    <p className="text-sm sm:text-base text-muted leading-relaxed">
                        প্রতিষ্ঠানের সাম্প্রতিক ঘোষণা, পরীক্ষার সময়সূচি এবং শিক্ষার্থীদের জন্য তৈরি বিশেষ লেকচার শিট এখান থেকে সংগ্রহ করুন।
                    </p>
                </div>

                {/* Main 12-Column Asymmetric Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* Left 7 Columns: Official Notice Board */}
                    <div className="lg:col-span-7 bg-paper border border-line rounded-2xl p-6 sm:p-8">
                        <div className="flex items-center justify-between pb-5 border-b border-line">
                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-lg bg-navy text-gold flex items-center justify-center">
                                    <Bell className="w-4 h-4" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-navy">
                                    সাম্প্রতিক নোটিশসমূহ
                                </h3>
                            </div>

                            <Link
                                href="/notices"
                                className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-navy hover:text-green transition-colors"
                            >
                                <span>সব নোটিশ</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                        {/* Notices List */}
                        <div className="mt-5 divide-y divide-line">
                            {noticesData.map((notice) => {
                                const badgeColor =
                                    notice.category === "ভর্তি"
                                        ? "bg-green/15 text-green"
                                        : notice.category === "পরীক্ষা"
                                            ? "bg-gold/25 text-navy"
                                            : "bg-navy/10 text-navy";

                                return (
                                    <article
                                        key={notice.id}
                                        className="py-5 first:pt-1 last:pb-1 group"
                                    >
                                        <div className="flex flex-wrap items-center gap-2.5 text-xs mb-2">
                                            <span
                                                className={`px-2.5 py-0.5 rounded-md font-semibold ${badgeColor}`}
                                            >
                                                {notice.category}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-muted">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {notice.date}
                                            </span>
                                            {notice.isPinned && (
                                                <span className="inline-flex items-center gap-1 text-navy font-semibold">
                                                    <Pin className="w-3 h-3 text-gold fill-gold" />
                                                    গুরুত্বপূর্ণ
                                                </span>
                                            )}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => setSelectedNotice(notice)}
                                            className="text-left w-full"
                                        >
                                            <h4 className="text-base sm:text-lg font-bold text-navy group-hover:text-green transition-colors leading-snug">
                                                {notice.title}
                                            </h4>
                                            <p className="text-sm text-muted mt-1.5 leading-relaxed">
                                                {notice.summary}
                                            </p>
                                            <span className="inline-flex items-center gap-1 text-xs font-bold text-navy mt-2.5 group-hover:translate-x-0.5 transition-transform">
                                                <span>বিস্তারিত পড়ুন</span>
                                                <ChevronRight className="w-3.5 h-3.5 text-gold" />
                                            </span>
                                        </button>
                                    </article>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right 5 Columns: Free Study Resources & Sheets */}
                    <div className="lg:col-span-5 bg-paper border border-line rounded-2xl p-6 sm:p-8">
                        <div className="flex items-center justify-between pb-5 border-b border-line">
                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-lg bg-green/15 text-green flex items-center justify-center">
                                    <BookMarked className="w-4 h-4" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-navy">
                                    স্টাডি রিসোর্স ও শিট
                                </h3>
                            </div>

                            <Link
                                href="/resources"
                                className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-navy hover:text-green transition-colors"
                            >
                                <span>সকল ফাইল</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                        <div className="mt-5 space-y-3.5">
                            {resourcesData.map((item) => (
                                <div
                                    key={item.id}
                                    className="p-4 rounded-xl bg-surface border border-line hover:border-navy/40 transition-colors flex items-start justify-between gap-3"
                                >
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-2 text-[11px] font-bold">
                                            <span className="text-green">{item.subject}</span>
                                            <span className="text-line">•</span>
                                            <span className="text-muted">{item.classLevel}</span>
                                        </div>

                                        <h4 className="text-sm font-bold text-navy leading-snug">
                                            {item.title}
                                        </h4>

                                        <div className="flex items-center gap-2 text-xs text-muted pt-0.5">
                                            <FileText className="w-3.5 h-3.5 text-navy/60" />
                                            <span>
                                                {item.fileType} ({item.fileSize})
                                            </span>
                                        </div>
                                    </div>

                                    <a
                                        href={item.downloadUrl}
                                        download
                                        title="ডাউনলোড করুন"
                                        className="shrink-0 w-9 h-9 rounded-lg bg-paper hover:bg-navy text-navy hover:text-white border border-line flex items-center justify-center transition-colors mt-1"
                                    >
                                        <Download className="w-4 h-4" />
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Resource Note */}
                        <div className="mt-6 p-4 rounded-xl bg-surface border border-dashed border-line text-xs text-muted leading-relaxed">
                            <strong className="text-navy">শিক্ষার্থীদের জন্য:</strong> আমাদের নিয়মিত শিক্ষার্থীরা স্টুডেন্ট আইডি ব্যবহার করে সকল অধ্যায়ের অনুশীলনী শিট ও সলভ পেপার ফ্রি ডাউনলোড করতে পারবে।
                        </div>
                    </div>

                </div>
            </div>

            {/* Clean Modal for Notice Details */}
            {selectedNotice && (
                <div
                    className="fixed inset-0 z-50 bg-navy/40 backdrop-blur-xs flex items-center justify-center p-4"
                    onClick={() => setSelectedNotice(null)}
                >
                    <div
                        className="bg-surface border border-line rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-xl space-y-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-line pb-3">
                            <div className="flex items-center gap-2 text-xs font-semibold text-muted">
                                <span className="px-2.5 py-0.5 rounded-md bg-navy/10 text-navy">
                                    {selectedNotice.category}
                                </span>
                                <span>{selectedNotice.date}</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedNotice(null)}
                                className="p-1.5 rounded-lg text-muted hover:text-navy hover:bg-paper"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <h3 className="text-xl font-bold text-navy leading-snug">
                            {selectedNotice.title}
                        </h3>

                        <p className="text-sm sm:text-base text-ink leading-relaxed">
                            {selectedNotice.details}
                        </p>

                        <div className="pt-4 border-t border-line flex justify-end">
                            <button
                                type="button"
                                onClick={() => setSelectedNotice(null)}
                                className="px-5 py-2 rounded-lg bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors"
                            >
                                বন্ধ করুন
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}


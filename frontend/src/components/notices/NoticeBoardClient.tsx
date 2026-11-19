"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
    Search,
    Calendar,
    Pin,
    ChevronRight,
    X,
    FileDown,
    ArrowUpRight,
    BellOff,
} from "lucide-react";

export type NoticeCategory = "সব" | "ভর্তি" | "পরীক্ষা" | "ওয়ার্কশপ" | "সাধারণ";

export interface NoticeItem {
    id: string;
    date: string;
    category: Exclude<NoticeCategory, "সব">;
    isPinned?: boolean;
    title: string;
    summary: string;
    details: string;
    attachmentUrl?: string;
    actionLink?: {
        label: string;
        href: string;
    };
}

const allNotices: NoticeItem[] = [
    {
        id: "n-2026-01",
        date: "১৫ নভেম্বর, ২০২৬",
        category: "ভর্তি",
        isPinned: true,
        title: "২০২৭ নতুন একাডেমিক সেশনে ষষ্ঠ থেকে দ্বাদশ শ্রেণির ভর্তি শুরু",
        summary:
            "আগামী শিক্ষাবর্ষের জন্য সীমিত আসনে ভর্তি ফর্ম বিতরণ ও অনলাইন আবেদন গ্রহণ শুরু হয়েছে।",
        details:
            "অন্বেষণ লার্নিং সেন্টারের বানারীপাড়া ক্যাম্পাসে ২০২৭ শিক্ষাবর্ষের জন্য ষষ্ঠ থেকে দশম শ্রেণির (বিজ্ঞান ও সাধারণ শাখা) এবং একাদশ-দ্বাদশ শ্রেণির আইসিটি স্পেশাল ব্যাচে ভর্তি চলছে। প্রতিটি ব্যাচে সর্বোচ্চ ২০ জন শিক্ষার্থী নেওয়া হবে। আগ্রহী অভিভাবক ও শিক্ষার্থীদের আগামী ৩০ নভেম্বরের মধ্যে সরাসরি অফিস কক্ষে অথবা অনলাইনে আবেদন করার জন্য অনুরোধ করা হলো।",
        actionLink: {
            label: "অনলাইনে ভর্তি আবেদন করুন",
            href: "/admission",
        },
    },
    {
        id: "n-2026-02",
        date: "১০ নভেম্বর, ২০২৬",
        category: "পরীক্ষা",
        isPinned: true,
        title: "নভেম্বর মাসের সৃজনশীল মূল্যায়ন ও অভিভাবক মতবিনিময় সভার সময়সূচি",
        summary:
            "সকল ব্যাচের মাসিক মূল্যায়ন পরীক্ষার রুটিন এবং অভিভাবক সভার তারিখ প্রকাশ করা হয়েছে।",
        details:
            "আগামী ২০ নভেম্বর থেকে ২৪ নভেম্বর পর্যন্ত সকল একাডেমিক ব্যাচের মাসিক সৃজনশীল ও গাণিতিক মূল্যায়ন পরীক্ষা অনুষ্ঠিত হবে। পরীক্ষার খাতা মূল্যায়নের পর ২৮ নভেম্বর সকাল ১০:০০ মিনিটে অভিভাবকদের সাথে শিক্ষার্থীদের অগ্রগতি ও দুর্বলতা নিয়ে মতবিনিময় সভা অনুষ্ঠিত হবে। সকল অভিভাবকের উপস্থিতি একান্তভাবে কাম্য।",
        attachmentUrl: "/resources/november-exam-routine.pdf",
    },
    {
        id: "n-2026-03",
        date: "০২ নভেম্বর, ২০২৬",
        category: "ওয়ার্কশপ",
        title: "শুক্রবারের ফ্রি 'কিউরিওসিটি ও বিজ্ঞান ক্লাব' ওয়ার্কশপ ঘোষণা",
        summary:
            "হাতে-কলমে বিজ্ঞানের মজার পরীক্ষা ও লজিক্যাল পাজল সমাধানের সাপ্তাহিক বিশেষ সেশন।",
        details:
            "প্রতি শুক্রবার সকাল ৯:৩০ মিনিট থেকে ১১:৩০ মিনিট পর্যন্ত অন্বেষণের শিক্ষার্থীদের জন্য উন্মুক্ত বিজ্ঞান ও সমস্যা সমাধান কর্মশালা অনুষ্ঠিত হবে। এতে পাঠ্যবইয়ের বাইরের মজার বিজ্ঞান, গণিত অলিম্পিয়াডের প্রাথমিক ধারণা এবং বাস্তব সমস্যার সমাধান শেখানো হবে।",
    },
    {
        id: "n-2026-04",
        date: "২৫ অক্টোবর, ২০২৬",
        category: "পরীক্ষা",
        title: "এইচএসসি আইসিটি ব্যাচের প্র্যাকটিক্যাল ল্যাব ও প্রোগ্রামিং টেস্ট",
        summary:
            "সি-প্রোগ্রামিং (C Programming) ও HTML কোডিংয়ের ওপর হাতে-কলমে মূল্যায়ন পরীক্ষা।",
        details:
            "একাদশ ও দ্বাদশ শ্রেণির আইসিটি ব্যাচের শিক্ষার্থীদের জন্য আগামী সপ্তাহে কম্পিউটার ল্যাবে সরাসরি কোডিং ও লজিক গেট মূল্যায়ন পরীক্ষা নেওয়া হবে। শিক্ষার্থীদের নিজ নিজ ল্যাব নোটবুক সাথে আনার নির্দেশ দেওয়া হলো।",
    },
    {
        id: "n-2026-05",
        date: "১৮ অক্টোবর, ২০২৬",
        category: "সাধারণ",
        title: "নতুন স্টাডি রিসোর্স ও লেকচার শিট সংগ্রহ সংক্রান্ত নির্দেশনা",
        summary:
            "অধ্যায়ভিত্তিক সৃজনশীল প্রশ্নব্যাংক ও গণিতের সূত্রাবলির পিডিএফ ওয়েবসাইটে যুক্ত করা হয়েছে।",
        details:
            "শিক্ষার্থীদের পড়াশোনা আরও সহজ করতে আমাদের ওয়েবসাইটের রিসোর্স সেকশনে নতুন লেকচার শিট ও অনুশীলনী গাইড আপলোড করা হয়েছে। প্রয়োজনে অফিস থেকে প্রিন্টেড কপিও সংগ্রহ করা যাবে।",
        actionLink: {
            label: "রিসোর্স সেকশন দেখুন",
            href: "/#notices",
        },
    },
];

const categories: NoticeCategory[] = [
    "সব",
    "ভর্তি",
    "পরীক্ষা",
    "ওয়ার্কশপ",
    "সাধারণ",
];

export default function NoticeBoardClient() {
    const [selectedCategory, setSelectedCategory] =
        useState<NoticeCategory>("সব");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeNotice, setActiveNotice] = useState<NoticeItem | null>(null);

    const filteredNotices = useMemo(() => {
        return allNotices.filter((notice) => {
            const matchesCategory =
                selectedCategory === "সব" || notice.category === selectedCategory;
            const matchesSearch =
                notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                notice.summary.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const getCategoryBadgeStyle = (category: NoticeItem["category"]) => {
        switch (category) {
            case "ভর্তি":
                return "bg-green/15 text-green border-green/20";
            case "পরীক্ষা":
                return "bg-gold/25 text-navy border-gold/40";
            case "ওয়ার্কশপ":
                return "bg-navy/10 text-navy border-navy/20";
            default:
                return "bg-paper text-muted border-line";
        }
    };

    return (
        <div className="space-y-8">
            {/* Filter & Search Control Bar */}
            <div className="bg-surface border border-line rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Category Pills */}
                <div className="flex flex-wrap items-center gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${selectedCategory === cat
                                ? "bg-navy text-white"
                                : "bg-paper text-muted hover:text-navy border border-line"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Search Input */}
                <div className="relative w-full md:w-72">
                    <Search className="w-4 h-4 text-muted absolute left-3.5 top-3" />
                    <input
                        type="text"
                        placeholder="নোটিশ খুঁজুন..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg bg-paper border border-line text-sm text-ink focus:outline-none focus:border-navy transition-colors"
                    />
                </div>
            </div>

            {/* Notices List */}
            {filteredNotices.length === 0 ? (
                <div className="bg-surface border border-line rounded-2xl p-12 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-paper border border-line flex items-center justify-center mx-auto text-muted">
                        <BellOff className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy">
                        কোনো নোটিশ খুঁজে পাওয়া যায়নি
                    </h3>
                    <p className="text-sm text-muted">
                        অন্য কোনো ক্যাটাগরি নির্বাচন করুন অথবা সার্চ শব্দটি পরিবর্তন করে দেখুন।
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredNotices.map((notice) => (
                        <article
                            key={notice.id}
                            className={`bg-surface border rounded-2xl p-6 sm:p-7 transition-all hover:border-navy/40 ${notice.isPinned
                                ? "border-l-4 border-l-gold border-line"
                                : "border-line"
                                }`}
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                <div className="space-y-2.5">
                                    {/* Top Metadata */}
                                    <div className="flex flex-wrap items-center gap-2.5 text-xs">
                                        <span
                                            className={`px-2.5 py-0.5 rounded-md font-semibold border ${getCategoryBadgeStyle(
                                                notice.category
                                            )}`}
                                        >
                                            {notice.category}
                                        </span>

                                        <span className="inline-flex items-center gap-1.5 text-muted">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {notice.date}
                                        </span>

                                        {notice.isPinned && (
                                            <span className="inline-flex items-center gap-1 text-navy font-bold">
                                                <Pin className="w-3 h-3 text-gold fill-gold" />
                                                পিন করা নোটিশ
                                            </span>
                                        )}
                                    </div>

                                    {/* Title & Summary */}
                                    <h2
                                        onClick={() => setActiveNotice(notice)}
                                        className="text-lg sm:text-xl font-bold text-navy hover:text-green transition-colors cursor-pointer leading-snug"
                                    >
                                        {notice.title}
                                    </h2>
                                    <p className="text-sm text-muted leading-relaxed max-w-3xl">
                                        {notice.summary}
                                    </p>
                                </div>

                                {/* Action Button */}
                                <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between gap-2 pt-2 sm:pt-0">
                                    <button
                                        type="button"
                                        onClick={() => setActiveNotice(notice)}
                                        className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-paper hover:bg-navy text-navy hover:text-white border border-line text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                                    >
                                        <span>বিস্তারিত</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}

            {/* Detailed Notice Modal */}
            {activeNotice && (
                <div
                    className="fixed inset-0 z-50 bg-navy/45 backdrop-blur-xs flex items-center justify-center p-4"
                    onClick={() => setActiveNotice(null)}
                >
                    <div
                        className="bg-surface border border-line rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-xl space-y-5"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-line pb-3.5">
                            <div className="flex items-center gap-2.5 text-xs">
                                <span
                                    className={`px-2.5 py-0.5 rounded-md font-semibold border ${getCategoryBadgeStyle(
                                        activeNotice.category
                                    )}`}
                                >
                                    {activeNotice.category}
                                </span>
                                <span className="text-muted font-medium">
                                    {activeNotice.date}
                                </span>
                            </div>

                            <button
                                type="button"
                                onClick={() => setActiveNotice(null)}
                                className="p-1.5 rounded-lg text-muted hover:text-navy hover:bg-paper cursor-pointer"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-extrabold text-navy leading-snug">
                            {activeNotice.title}
                        </h3>

                        <p className="text-sm sm:text-base text-ink leading-relaxed">
                            {activeNotice.details}
                        </p>

                        {/* Optional Attachment or CTA Link inside Modal */}
                        <div className="pt-4 border-t border-line flex flex-wrap items-center justify-between gap-3">
                            <div className="flex flex-wrap items-center gap-3">
                                {activeNotice.attachmentUrl && (
                                    <a
                                        href={activeNotice.attachmentUrl}
                                        download
                                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-paper hover:bg-line/50 text-navy border border-line text-xs sm:text-sm font-semibold transition-colors"
                                    >
                                        <FileDown className="w-4 h-4 text-green" />
                                        <span>রুটিন / পিডিএফ ডাউনলোড</span>
                                    </a>
                                )}

                                {activeNotice.actionLink && (
                                    <Link
                                        href={activeNotice.actionLink.href}
                                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-green text-white text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity"
                                    >
                                        <span>{activeNotice.actionLink.label}</span>
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>

                            <button
                                type="button"
                                onClick={() => setActiveNotice(null)}
                                className="px-5 py-2 rounded-lg bg-navy text-white text-xs sm:text-sm font-semibold hover:bg-navy-dark transition-colors ml-auto cursor-pointer"
                            >
                                বন্ধ করুন
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


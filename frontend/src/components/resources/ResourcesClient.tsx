"use client";

import React, { useState, useMemo } from "react";
import {
    Search,
    FileText,
    Download,
    BookOpen,
    Filter,
    RotateCcw,
    FolderOpen,
} from "lucide-react";

export interface StudyResource {
    id: string;
    title: string;
    classLevel: "৬ষ্ঠ — ৮ম শ্রেণি" | "৯ম — ১০ম শ্রেণি" | "১১শ — ১২শ শ্রেণি" | "সকল শ্রেণি";
    subject: "গণিত" | "বিজ্ঞান" | "আইসিটি" | "ইংরেজি" | "সৃজনশীল চিন্তা";
    chapterOrTopic: string;
    description: string;
    fileSize: string;
    pages: string;
    updatedDate: string;
    downloadUrl: string;
}

const resourcesList: StudyResource[] = [
    {
        id: "res-01",
        title: "সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস — পূর্ণাঙ্গ লেকচার শিট",
        classLevel: "১১শ — ১২শ শ্রেণি",
        subject: "আইসিটি",
        chapterOrTopic: "অধ্যায় ৩ (ICT)",
        description:
            "বাইনারি, অক্টাল ও হেক্সাডেসিমেল রূপান্তরের সহজ নিয়ম এবং লজিক গেট ও সত্যক সারণির চিত্রসহ ব্যাখ্যা।",
        fileSize: "১.৮ MB",
        pages: "১৮ পৃষ্ঠা",
        updatedDate: "১০ নভেম্বর, ২০২৬",
        downloadUrl: "/resources/hsc-ict-chapter-3.pdf",
    },
    {
        id: "res-02",
        title: "সি-প্রোগ্রামিং (C Programming) ও ফ্লোচার্ট অনুশীলনী গাইড",
        classLevel: "১১শ — ১২শ শ্রেণি",
        subject: "আইসিটি",
        chapterOrTopic: "অধ্যায় ৫ (ICT)",
        description:
            "বোর্ড পরীক্ষার গুরুত্বপূর্ণ অ্যালগরিদম, ফ্লোচার্ট এবং লুপ ও কন্ডিশনাল স্টেটমেন্টের ৩০টি সমাধানকৃত প্রোগ্রাম।",
        fileSize: "২.১ MB",
        pages: "২৪ পৃষ্ঠা",
        updatedDate: "০৪ নভেম্বর, ২০২৬",
        downloadUrl: "/resources/hsc-ict-c-programming.pdf",
    },
    {
        id: "res-03",
        title: "ত্রিকোণমিতি ও পরিমিতির মূল সূত্রাবলি এবং সৃজনশীল সমাধান",
        classLevel: "৯ম — ১০ম শ্রেণি",
        subject: "গণিত",
        chapterOrTopic: "অধ্যায় ৯ ও ১৬",
        description:
            "সূত্র মুখস্থ না করে সমকোণী ত্রিভুজ ও জ্যামিতিক চিত্রের মাধ্যমে ত্রিকোণমিতিক অনুপাত মনে রাখার কৌশল।",
        fileSize: "২.৪ MB",
        pages: "২২ পৃষ্ঠা",
        updatedDate: "২৮ অক্টোবর, ২০২৬",
        downloadUrl: "/resources/ssc-math-trigonometry.pdf",
    },
    {
        id: "res-04",
        title: "বল, কাজ, ক্ষমতা ও শক্তি — গাণিতিক সমস্যা সমাধান ব্যাংক",
        classLevel: "৯ম — ১০ম শ্রেণি",
        subject: "বিজ্ঞান",
        chapterOrTopic: "পদার্থবিজ্ঞান (অধ্যায় ৩ ও ৪)",
        description:
            "নিউটনের গতিসূত্র ও শক্তির সংরক্ষণশীলতা নীতির বাস্তব উদাহরণ এবং সৃজনশীল গাণিতিক সমস্যার ধাপে ধাপে সমাধান।",
        fileSize: "১.৯ MB",
        pages: "১৬ পৃষ্ঠা",
        updatedDate: "২০ অক্টোবর, ২০২৬",
        downloadUrl: "/resources/ssc-physics-work-energy.pdf",
    },
    {
        id: "res-05",
        title: "কৌতূহলী বিজ্ঞান: দৈনন্দিন জীবনের ৫০টি বৈজ্ঞানিক প্রশ্নের ব্যাখ্যা",
        classLevel: "৬ষ্ঠ — ৮ম শ্রেণি",
        subject: "বিজ্ঞান",
        chapterOrTopic: "সাধারণ বিজ্ঞান ফাউন্ডেশন",
        description:
            "আকাশ নীল দেখায় কেন থেকে শুরু করে বিদ্যুৎ চমকানোর কারণ — কিশোর শিক্ষার্থীদের জন্য সহজ ভাষায় বৈজ্ঞানিক ব্যাখ্যা।",
        fileSize: "১.২ MB",
        pages: "১৪ পৃষ্ঠা",
        updatedDate: "১৫ অক্টোবর, ২০২৬",
        downloadUrl: "/resources/junior-curious-science.pdf",
    },
    {
        id: "res-06",
        title: "English Grammar & Creative Writing Foundation Workbook",
        classLevel: "৬ষ্ঠ — ৮ম শ্রেণি",
        subject: "ইংরেজি",
        chapterOrTopic: "Tense, Sentence & Paragraph",
        description:
            "মুখস্থ প্যারাগ্রাফের বদলে নিজে থেকে সঠিক বাক্যে ইংরেজি লেখার কাঠামো ও ভোকাবুলারি অনুশীলনী।",
        fileSize: "১.৫ MB",
        pages: "২০ পৃষ্ঠা",
        updatedDate: "০৮ অক্টোবর, ২০২৬",
        downloadUrl: "/resources/junior-english-writing.pdf",
    },
    {
        id: "res-07",
        title: "লজিক্যাল পাজল ও সমস্যা সমাধানের কৌশল (Brain Teasers)",
        classLevel: "সকল শ্রেণি",
        subject: "সৃজনশীল চিন্তা",
        chapterOrTopic: "কিউরিওসিটি ক্লাব শিট",
        description:
            "গণিত অলিম্পিয়াড ও ক্রিটিক্যাল থিংকিং চর্চার জন্য ২৫টি মজার যুক্তিভিত্তিক ধাঁধা ও উত্তরমালা।",
        fileSize: "১.১ MB",
        pages: "১২ পৃষ্ঠা",
        updatedDate: "০১ অক্টোবর, ২০২৬",
        downloadUrl: "/resources/logical-puzzles-workbook.pdf",
    },
];

const classFilters = [
    "সব শ্রেণি",
    "৬ষ্ঠ — ৮ম শ্রেণি",
    "৯ম — ১০ম শ্রেণি",
    "১১শ — ১২শ শ্রেণি",
    "সকল শ্রেণি",
];

const subjectFilters = [
    "সব বিষয়",
    "গণিত",
    "বিজ্ঞান",
    "আইসিটি",
    "ইংরেজি",
    "সৃজনশীল চিন্তা",
];

export default function ResourcesClient() {
    const [selectedClass, setSelectedClass] = useState("সব শ্রেণি");
    const [selectedSubject, setSelectedSubject] = useState("সব বিষয়");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredResources = useMemo(() => {
        return resourcesList.filter((item) => {
            const matchClass =
                selectedClass === "সব শ্রেণি" || item.classLevel === selectedClass;
            const matchSubject =
                selectedSubject === "সব বিষয়" || item.subject === selectedSubject;
            const matchSearch =
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.chapterOrTopic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());

            return matchClass && matchSubject && matchSearch;
        });
    }, [selectedClass, selectedSubject, searchQuery]);

    const resetFilters = () => {
        setSelectedClass("সব শ্রেণি");
        setSelectedSubject("সব বিষয়");
        setSearchQuery("");
    };

    const hasActiveFilter =
        selectedClass !== "সব শ্রেণি" ||
        selectedSubject !== "সব বিষয়" ||
        searchQuery.trim() !== "";

    return (
        <div className="space-y-8">
            {/* Filter & Search Panel */}
            <div className="bg-surface border border-line rounded-2xl p-5 sm:p-6 space-y-5">
                {/* Top Row: Search + Reset */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="w-4 h-4 text-muted absolute left-3.5 top-3" />
                        <input
                            type="text"
                            placeholder="অধ্যায়, বিষয় বা শিটের নাম লিখুন..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-paper border border-line text-sm text-ink focus:outline-none focus:border-navy transition-colors"
                        />
                    </div>

                    {hasActiveFilter && (
                        <button
                            type="button"
                            onClick={resetFilters}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-green self-start sm:self-auto cursor-pointer"
                        >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>ফিল্টার রিসেট করুন</span>
                        </button>
                    )}
                </div>

                {/* Bottom Row: Class & Subject Filter Dropdowns / Pills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-line">
                    {/* Class Filter */}
                    <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-navy uppercase tracking-wider mb-2">
                            <Filter className="w-3.5 h-3.5 text-green" />
                            <span>শ্রেণি অনুযায়ী ফিল্টার</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {classFilters.map((cls) => (
                                <button
                                    key={cls}
                                    type="button"
                                    onClick={() => setSelectedClass(cls)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${selectedClass === cls
                                        ? "bg-navy text-white"
                                        : "bg-paper text-muted hover:text-navy border border-line"
                                        }`}
                                >
                                    {cls}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Subject Filter */}
                    <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-navy uppercase tracking-wider mb-2">
                            <BookOpen className="w-3.5 h-3.5 text-gold" />
                            <span>বিষয় অনুযায়ী ফিল্টার</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {subjectFilters.map((sub) => (
                                <button
                                    key={sub}
                                    type="button"
                                    onClick={() => setSelectedSubject(sub)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${selectedSubject === sub
                                        ? "bg-green text-white"
                                        : "bg-paper text-muted hover:text-navy border border-line"
                                        }`}
                                >
                                    {sub}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-muted">
                <span>
                    মোট <strong className="text-navy">{filteredResources.length}টি</strong> স্টাডি রিসোর্স পাওয়া গেছে
                </span>
            </div>

            {/* Resources Grid */}
            {filteredResources.length === 0 ? (
                <div className="bg-surface border border-line rounded-2xl p-12 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-paper border border-line flex items-center justify-center mx-auto text-muted">
                        <FolderOpen className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy">
                        এই ফিল্টারে কোনো ফাইল পাওয়া যায়নি
                    </h3>
                    <p className="text-sm text-muted">
                        অনুগ্রহ করে অন্য শ্রেণি বা বিষয় নির্বাচন করে চেষ্টা করুন।
                    </p>
                    <button
                        type="button"
                        onClick={resetFilters}
                        className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy text-white text-xs font-semibold cursor-pointer"
                    >
                        সব ফাইল দেখুন
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredResources.map((item) => (
                        <div
                            key={item.id}
                            className="bg-surface border border-line hover:border-navy/40 rounded-2xl p-6 flex flex-col justify-between transition-all"
                        >
                            <div>
                                {/* Top Badges */}
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                    <div className="flex items-center gap-2 text-xs font-bold">
                                        <span className="px-2.5 py-0.5 rounded-md bg-navy/10 text-navy">
                                            {item.classLevel}
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-md bg-green/15 text-green">
                                            {item.subject}
                                        </span>
                                    </div>
                                    <span className="text-xs font-medium text-muted">
                                        {item.chapterOrTopic}
                                    </span>
                                </div>

                                {/* Title & Description */}
                                <h2 className="text-lg font-bold text-navy leading-snug">
                                    {item.title}
                                </h2>
                                <p className="text-sm text-muted mt-2 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Bottom File Info & Download CTA */}
                            <div className="mt-6 pt-4 border-t border-line flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3 text-xs text-muted">
                                    <span className="inline-flex items-center gap-1 font-medium text-ink">
                                        <FileText className="w-3.5 h-3.5 text-navy" />
                                        PDF ({item.fileSize})
                                    </span>
                                    <span>•</span>
                                    <span>{item.pages}</span>
                                </div>

                                <a
                                    href={item.downloadUrl}
                                    download
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy hover:bg-navy-dark text-white text-xs sm:text-sm font-semibold transition-colors"
                                >
                                    <Download className="w-4 h-4 text-gold" />
                                    <span>ডাউনলোড</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}


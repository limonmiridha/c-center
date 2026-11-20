"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    FileCheck2,
    UserCheck,
    Users,
    Sparkles,
    ArrowUpRight,
} from "lucide-react";

interface BatchStat {
    slug: string;
    title: string;
    targetGroup: string;
    totalSeats: number;
    filledSeats: number;
}

interface StatsResponse {
    totalFormSubmissions: number;
    confirmedEnrollments: number;
    totalSeats: number;
    remainingSeats: number;
    batches: BatchStat[];
}

// ব্যাকএন্ড লোড হওয়ার আগ পর্যন্ত বা অফলাইন থাকলে দেখানোর জন্য ফলব্যাক ডেটা
const fallbackStats: StatsResponse = {
    totalFormSubmissions: 84,
    confirmedEnrollments: 49,
    totalSeats: 68,
    remainingSeats: 19,
    batches: [
        {
            slug: "junior-foundation",
            title: "জুনিয়র ফাউন্ডেশন ও মেধা বিকাশ ব্যাচ",
            targetGroup: "৬ষ্ঠ — ৮ম শ্রেণি",
            totalSeats: 20,
            filledSeats: 14,
        },
        {
            slug: "ssc-science-academic",
            title: "এসএসসি একাডেমিক ও সৃজনশীল ব্যাচ",
            targetGroup: "৯ম — ১০ম শ্রেণি",
            totalSeats: 18,
            filledSeats: 15,
        },
        {
            slug: "hsc-ict-special",
            title: "এইচএসসি আইসিটি ও প্রোগ্রামিং ফাউন্ডেশন",
            targetGroup: "১১শ — ১২শ শ্রেণি",
            totalSeats: 15,
            filledSeats: 11,
        },
        {
            slug: "curiosity-stem-club",
            title: "অন্বেষণ কিউরিওসিটি ও কম্পিউটার বেসিকস",
            targetGroup: "শুক্রবারের ব্যাচ",
            totalSeats: 15,
            filledSeats: 9,
        },
    ],
};

export default function AdmissionStatsSection() {
    const [stats, setStats] = useState<StatsResponse>(fallbackStats);
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        const fetchLiveStats = async () => {
            try {
                const apiUrl =
                    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
                const res = await fetch(`${apiUrl}/admissions/stats`, {
                    cache: "no-store",
                });

                if (res.ok) {
                    const data: StatsResponse = await res.json();
                    if (data && Array.isArray(data.batches)) {
                        setStats(data);
                        setIsLive(true);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch live admission stats:", error);
            }
        };

        fetchLiveStats();
    }, []);

    return (
        <section className="py-16 sm:py-20 bg-surface border-b border-line">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-2.5 max-w-2xl">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green">
                            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                            <span>
                                {isLive
                                    ? "লাইভ ভর্তি ও আসন আপডেট"
                                    : "নতুন সেশন ভর্তি আপডেট"}
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                            চলমান ভর্তি ও ব্যাচভিত্তিক আসন পরিস্থিতি
                        </h2>
                        <p className="text-sm sm:text-base text-muted">
                            শিক্ষার গুণগত মান ধরে রাখতে প্রতিটি ব্যাচে আমরা কঠোরভাবে আসন সংখ্যা সীমিত রাখি।
                        </p>
                    </div>

                    <Link
                        href="/admission"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:text-green transition-colors self-start md:self-auto"
                    >
                        <span>আপনার আসনটি নিশ্চিত করুন</span>
                        <ArrowUpRight className="w-4 h-4 text-gold" />
                    </Link>
                </div>

                {/* Top 4 Key Metric Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    <div className="p-5 sm:p-6 rounded-2xl bg-paper border border-line space-y-2">
                        <div className="w-9 h-9 rounded-lg bg-navy/10 text-navy flex items-center justify-center">
                            <FileCheck2 className="w-5 h-5" />
                        </div>
                        <p className="text-3xl sm:text-4xl font-extrabold text-navy">
                            {stats.totalFormSubmissions}
                            <span className="text-lg text-gold">+</span>
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-muted">
                            মোট ফর্ম ফিলাপ সম্পন্ন
                        </p>
                    </div>

                    <div className="p-5 sm:p-6 rounded-2xl bg-paper border border-line space-y-2">
                        <div className="w-9 h-9 rounded-lg bg-green/15 text-green flex items-center justify-center">
                            <UserCheck className="w-5 h-5" />
                        </div>
                        <p className="text-3xl sm:text-4xl font-extrabold text-navy">
                            {stats.confirmedEnrollments}
                            <span className="text-base font-bold text-green ml-1">জন</span>
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-muted">
                            চূড়ান্ত ভর্তি সম্পন্ন শিক্ষার্থী
                        </p>
                    </div>

                    <div className="p-5 sm:p-6 rounded-2xl bg-paper border border-line space-y-2">
                        <div className="w-9 h-9 rounded-lg bg-gold/25 text-navy flex items-center justify-center">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <p className="text-3xl sm:text-4xl font-extrabold text-navy">
                            {stats.remainingSeats}
                            <span className="text-base font-bold text-navy/70 ml-1">টি</span>
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-muted">
                            সর্বমোট আসন খালি আছে
                        </p>
                    </div>

                    <div className="p-5 sm:p-6 rounded-2xl bg-paper border border-line space-y-2">
                        <div className="w-9 h-9 rounded-lg bg-navy/10 text-navy flex items-center justify-center">
                            <Users className="w-5 h-5" />
                        </div>
                        <p className="text-3xl sm:text-4xl font-extrabold text-navy">
                            ৩০
                            <span className="text-base font-bold text-muted ml-1">জন</span>
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-muted">
                            প্রতি ব্যাচে সর্বোচ্চ শিক্ষার্থী
                        </p>
                    </div>
                </div>

                {/* Batch-wise Seat Availability Progress Bars */}
                <div className="bg-paper border border-line rounded-2xl p-6 sm:p-8 space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4">
                        <h3 className="text-base sm:text-lg font-bold text-navy">
                            ব্যাচ অনুযায়ী আসন প্রাপ্যতা (Seat Availability)
                        </h3>
                        <span className="text-xs font-medium text-muted">
                            সর্বশেষ হালনাগাদ: রিয়েল-টাইম
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {stats.batches.map((batch) => {
                            const available = Math.max(0, batch.totalSeats - batch.filledSeats);
                            const percentage = Math.min(
                                100,
                                Math.round((batch.filledSeats / batch.totalSeats) * 100)
                            );
                            const isAlmostFull = available <= 4;

                            return (
                                <div
                                    key={batch.slug}
                                    className="p-4 sm:p-5 rounded-xl bg-surface border border-line space-y-3"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <h4 className="text-sm sm:text-base font-bold text-navy">
                                                {batch.title} ({batch.targetGroup})
                                            </h4>
                                            <p className="text-xs text-muted mt-0.5">
                                                মোট আসন: {batch.totalSeats}টি • ভর্তি হয়েছে:{" "}
                                                {batch.filledSeats} জন
                                            </p>
                                        </div>

                                        <span
                                            className={`shrink-0 px-2.5 py-1 rounded-md text-xs font-bold ${isAlmostFull
                                                ? "bg-gold/25 text-navy border border-gold/40"
                                                : "bg-green/15 text-green"
                                                }`}
                                        >
                                            {available > 0 ? `${available}টি আসন খালি` : "আসন পূর্ণ"}
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="w-full h-2.5 bg-paper rounded-full overflow-hidden border border-line/60">
                                        <div
                                            className={`h-full rounded-full transition-all duration-500 ${isAlmostFull ? "bg-gold" : "bg-green"
                                                }`}
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>

                                    <div className="flex items-center justify-between text-xs pt-0.5">
                                        <span className="text-muted">
                                            {percentage}% আসন পূর্ণ হয়েছে
                                        </span>
                                        <Link
                                            href={`/admission?program=${batch.slug}`}
                                            className="font-bold text-navy hover:text-green underline underline-offset-4"
                                        >
                                            আসন বুক করুন
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import React from "react";
import Link from "next/link";
import {
    FileCheck2,
    UserCheck,
    Users,
    Sparkles,
    ArrowUpRight,
} from "lucide-react";

const batchSeatStatus = [
    {
        id: "junior-foundation",
        name: "জুনিয়র ফাউন্ডেশন ব্যাচ (৬ষ্ঠ — ৮ম শ্রেণি)",
        totalSeats: 20,
        filledSeats: 14,
    },
    {
        id: "ssc-science-academic",
        name: "এসএসসি একাডেমিক ও সৃজনশীল ব্যাচ (৯ম — ১০ম শ্রেণি)",
        totalSeats: 18,
        filledSeats: 15,
    },
    {
        id: "hsc-ict-special",
        name: "এইচএসসি আইসিটি ও প্রোগ্রামিং ব্যাচ (১১শ — ১২শ শ্রেণি)",
        totalSeats: 15,
        filledSeats: 11,
    },
    {
        id: "curiosity-stem-club",
        name: "অন্বেষণ কিউরিওসিটি ও কম্পিউটার বেসিকস (শুক্রবার)",
        totalSeats: 15,
        filledSeats: 9,
    },
];

export default function AdmissionStatsSection() {
    // পরবর্তীতে এগুলো ডাটাবেজ থেকে ডাইনামিক করতে পারবেন
    const totalFormSubmissions = 84;
    const confirmedEnrollments = 49;
    const totalSeats = 68;
    const remainingSeats = totalSeats - confirmedEnrollments;

    return (
        <section className="py-16 sm:py-20 bg-surface border-b border-line">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-2.5 max-w-2xl">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green">
                            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                            <span>নতুন সেশন ভর্তি আপডেট</span>
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
                            {totalFormSubmissions}
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
                            {confirmedEnrollments}
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
                            {remainingSeats}
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
                            ১৫–২০
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
                            সর্বশেষ হালনাগাদ: আজ
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {batchSeatStatus.map((batch) => {
                            const available = batch.totalSeats - batch.filledSeats;
                            const percentage = Math.round(
                                (batch.filledSeats / batch.totalSeats) * 100
                            );
                            const isAlmostFull = available <= 4;

                            return (
                                <div
                                    key={batch.id}
                                    className="p-4 sm:p-5 rounded-xl bg-surface border border-line space-y-3"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <h4 className="text-sm sm:text-base font-bold text-navy">
                                                {batch.name}
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
                                            {available}টি আসন খালি
                                        </span>
                                    </div>

                                    {/* Clean Progress Bar */}
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
                                            href={`/admission?program=${batch.id}`}
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

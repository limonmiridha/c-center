"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
    CheckCircle2,
    User,
    Phone,
    BookOpen,
    GraduationCap,
    Send,
    RotateCcw,
    ShieldCheck,
} from "lucide-react";

const batchOptions = [
    {
        id: "junior-foundation",
        label: "জুনিয়র ফাউন্ডেশন ও মেধা বিকাশ ব্যাচ (৬ষ্ঠ — ৮ম শ্রেণি)",
    },
    {
        id: "ssc-science-academic",
        label: "এসএসসি একাডেমিক ও সৃজনশীল ব্যাচ (৯ম — ১০ম শ্রেণি)",
    },
    {
        id: "hsc-ict-special",
        label: "এইচএসসি আইসিটি ও প্রোগ্রামিং ফাউন্ডেশন (১১শ — ১২শ শ্রেণি)",
    },

];

export default function AdmissionForm() {
    const searchParams = useSearchParams();
    const programParam = searchParams.get("program");

    const [formData, setFormData] = useState({
        studentName: "",
        studentClass: "",
        institutionName: "",
        selectedBatch: "",
        preferredShift: "বিকাল ব্যাচ",
        guardianName: "",
        guardianPhone: "",
        address: "",
        notes: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submittedId, setSubmittedId] = useState<string | null>(null);

    // URL থেকে program প্যারামিটার পেলে অটো-ফিল করা
    useEffect(() => {
        if (programParam) {
            const matchedBatch = batchOptions.find((b) => b.id === programParam);
            if (matchedBatch) {
                setFormData((prev) => ({
                    ...prev,
                    selectedBatch: matchedBatch.id,
                }));
            }
        }
    }, [programParam]);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // এখানে পরবর্তীতে আপনার Backend API বা Database যুক্ত করতে পারবেন
        await new Promise((resolve) => setTimeout(resolve, 800));

        const randomTracking = `ONN-${Math.floor(1000 + Math.random() * 9000)}`;
        setSubmittedId(randomTracking);
        setIsSubmitting(false);
    };

    const resetForm = () => {
        setSubmittedId(null);
        setFormData({
            studentName: "",
            studentClass: "",
            institutionName: "",
            selectedBatch: programParam || "",
            preferredShift: "বিকাল ব্যাচ",
            guardianName: "",
            guardianPhone: "",
            address: "",
            notes: "",
        });
    };

    if (submittedId) {
        const chosenBatchLabel =
            batchOptions.find((b) => b.id === formData.selectedBatch)?.label ||
            "নির্বাচিত ব্যাচ";

        return (
            <div className="bg-surface border border-line rounded-2xl p-8 sm:p-10 text-center max-w-2xl mx-auto space-y-6">
                <div className="w-16 h-16 rounded-full bg-green/15 text-green flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-paper border border-line text-xs font-bold text-navy">
                        আবেদন আইডি: {submittedId}
                    </span>
                    <h3 className="text-2xl font-extrabold text-navy">
                        আপনার প্রাথমিক ভর্তি আবেদন গৃহীত হয়েছে!
                    </h3>
                    <p className="text-sm sm:text-base text-muted max-w-lg mx-auto leading-relaxed">
                        ধন্যবাদ, <strong className="text-navy">{formData.studentName}</strong>।{" "}
                        <strong className="text-navy">{chosenBatchLabel}</strong>-এ আপনার
                        আবেদনটি আমাদের তালিকায় যুক্ত হয়েছে। শীঘ্রই আমাদের প্রতিনিধি প্রদত্ত
                        নম্বরে যোগাযোগ করবেন।
                    </p>
                </div>

                <div className="p-4 rounded-xl bg-paper border border-line text-left text-xs sm:text-sm space-y-1.5 text-ink max-w-md mx-auto">
                    <p>
                        <strong>অভিভাবকের মোবাইল:</strong> {formData.guardianPhone}
                    </p>
                    <p>
                        <strong>পছন্দের সময়:</strong> {formData.preferredShift}
                    </p>
                    <p>
                        <strong>ক্যাম্পাস:</strong> বানারীপাড়া, বরিশাল
                    </p>
                </div>

                <div className="pt-2">
                    <button
                        type="button"
                        onClick={resetForm}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy hover:bg-navy-dark text-white text-sm font-semibold transition-colors cursor-pointer"
                    >
                        <RotateCcw className="w-4 h-4 text-gold" />
                        <span>নতুন আরেকটি আবেদন করুন</span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-surface border border-line rounded-2xl p-6 sm:p-10 space-y-8"
        >
            {/* Form Header */}
            <div className="border-b border-line pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-navy">
                        অনলাইন ভর্তি আবেদন ফর্ম
                    </h2>
                    <p className="text-sm text-muted mt-1">
                        নিচের তথ্যগুলো সঠিকভাবে পূরণ করুন। তারকা (*) চিহ্নিত ঘরগুলো আবশ্যক।
                    </p>
                </div>
                {formData.selectedBatch && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green/10 text-green text-xs font-bold self-start">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        ব্যাচ নির্বাচিত হয়েছে
                    </span>
                )}
            </div>

            {/* Section 1: Batch & Course Selection */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-green flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>১. কোর্স ও ব্যাচ নির্বাচন</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label
                            htmlFor="selectedBatch"
                            className="block text-sm font-semibold text-navy mb-1.5"
                        >
                            পছন্দের প্রোগ্রাম / ব্যাচ <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="selectedBatch"
                            name="selectedBatch"
                            required
                            value={formData.selectedBatch}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-line text-ink text-sm focus:outline-none focus:border-navy transition-colors"
                        >
                            <option value="" disabled>
                                -- একটি ব্যাচ নির্বাচন করুন --
                            </option>
                            {batchOptions.map((batch) => (
                                <option key={batch.id} value={batch.id}>
                                    {batch.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="preferredShift"
                            className="block text-sm font-semibold text-navy mb-1.5"
                        >
                            সুবিধাজনক সময় (Shift)
                        </label>
                        <select
                            id="preferredShift"
                            name="preferredShift"
                            value={formData.preferredShift}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-line text-ink text-sm focus:outline-none focus:border-navy transition-colors"
                        >
                            <option value="সকাল ব্যাচ">সকাল ব্যাচ (সকাল ৮:০০ – ১০:০০)</option>
                            <option value="বিকাল ব্যাচ">বিকাল ব্যাচ (বিকাল ৩:৩০ – ৫:৩০)</option>
                            <option value="সন্ধ্যা ব্যাচ">সন্ধ্যা ব্যাচ (সন্ধ্যা ৬:০০ – ৮:০০)</option>
                            <option value="শুক্রবার স্পেশাল">শুক্রবার স্পেশাল ব্যাচ</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Section 2: Student Information */}
            <div className="space-y-4 pt-2 border-t border-line">
                <h3 className="text-sm font-bold uppercase tracking-wider text-green flex items-center gap-2 pt-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>২. শিক্ষার্থীর তথ্য</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                        <label
                            htmlFor="studentName"
                            className="block text-sm font-semibold text-navy mb-1.5"
                        >
                            শিক্ষার্থীর পূর্ণ নাম <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="studentName"
                            name="studentName"
                            required
                            placeholder="যেমন: তানভীর আহমেদ"
                            value={formData.studentName}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-line text-ink text-sm focus:outline-none focus:border-navy transition-colors"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="studentClass"
                            className="block text-sm font-semibold text-navy mb-1.5"
                        >
                            বর্তমান শ্রেণি <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="studentClass"
                            name="studentClass"
                            required
                            value={formData.studentClass}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-line text-ink text-sm focus:outline-none focus:border-navy transition-colors"
                        >
                            <option value="" disabled>
                                শ্রেণি নির্বাচন করুন
                            </option>
                            <option value="৬ষ্ঠ শ্রেণি">৬ষ্ঠ শ্রেণি</option>
                            <option value="৭ম শ্রেণি">৭ম শ্রেণি</option>
                            <option value="৮ম শ্রেণি">৮ম শ্রেণি</option>
                            <option value="৯ম শ্রেণি">৯ম শ্রেণি</option>
                            <option value="১০ম শ্রেণি">১০ম শ্রেণি</option>
                            <option value="একাদশ শ্রেণি">একাদশ শ্রেণি</option>
                            <option value="দ্বাদশ শ্রেণি">দ্বাদশ শ্রেণি</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="institutionName"
                            className="block text-sm font-semibold text-navy mb-1.5"
                        >
                            শিক্ষাপ্রতিষ্ঠানের নাম <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="institutionName"
                            name="institutionName"
                            required
                            placeholder="স্কুল বা কলেজের নাম"
                            value={formData.institutionName}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-line text-ink text-sm focus:outline-none focus:border-navy transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Section 3: Guardian & Contact Information */}
            <div className="space-y-4 pt-2 border-t border-line">
                <h3 className="text-sm font-bold uppercase tracking-wider text-green flex items-center gap-2 pt-2">
                    <User className="w-4 h-4" />
                    <span>৩. অভিভাবক ও যোগাযোগের তথ্য</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label
                            htmlFor="guardianName"
                            className="block text-sm font-semibold text-navy mb-1.5"
                        >
                            অভিভাবকের নাম <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="guardianName"
                            name="guardianName"
                            required
                            placeholder="পিতা বা মাতার নাম"
                            value={formData.guardianName}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-line text-ink text-sm focus:outline-none focus:border-navy transition-colors"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="guardianPhone"
                            className="block text-sm font-semibold text-navy mb-1.5"
                        >
                            মোবাইল নম্বর (অভিভাবক) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <Phone className="w-4 h-4 text-muted absolute left-3.5 top-3" />
                            <input
                                type="tel"
                                id="guardianPhone"
                                name="guardianPhone"
                                required
                                placeholder="017XXXXXXXX"
                                value={formData.guardianPhone}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-paper border border-line text-ink text-sm focus:outline-none focus:border-navy transition-colors"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="address"
                        className="block text-sm font-semibold text-navy mb-1.5"
                    >
                        বর্তমান ঠিকানা (বানারীপাড়া / এলাকা){" "}
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        placeholder="যেমন: বানারীপাড়া বন্দর বাজার / কলেজ রোড, বরিশাল"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-line text-ink text-sm focus:outline-none focus:border-navy transition-colors"
                    />
                </div>

                <div>
                    <label
                        htmlFor="notes"
                        className="block text-sm font-semibold text-navy mb-1.5"
                    >
                        বিশেষ কোনো জিজ্ঞাসা বা মন্তব্য (ঐচ্ছিক)
                    </label>
                    <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        placeholder="কোনো নির্দিষ্ট বিষয়ে দুর্বলতা বা ব্যাচের সময় নিয়ে কিছু জানাতে চাইলে লিখুন..."
                        value={formData.notes}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-line text-ink text-sm focus:outline-none focus:border-navy transition-colors"
                    />
                </div>
            </div>

            {/* Submit Bar */}
            <div className="pt-4 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-muted">
                    <ShieldCheck className="w-4 h-4 text-green shrink-0" />
                    <span>
                        আপনার তথ্য শুধুমাত্র ভর্তি সংক্রান্ত যোগাযোগের জন্য ব্যবহৃত হবে।
                    </span>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-navy hover:bg-navy-dark disabled:opacity-60 text-white font-semibold text-sm sm:text-base transition-colors cursor-pointer"
                >
                    <span>{isSubmitting ? "জমা দেওয়া হচ্ছে..." : "আবেদন জমা দিন"}</span>
                    <Send className="w-4 h-4 text-gold" />
                </button>
            </div>
        </form>
    );
}


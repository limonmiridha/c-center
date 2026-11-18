"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, RotateCcw } from "lucide-react";

export default function ContactFormClient() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        topic: "ভর্তি ও ব্যাচ সংক্রান্ত",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // পরবর্তীতে এখানে Backend API যুক্ত করতে পারবেন
        await new Promise((resolve) => setTimeout(resolve, 600));

        setIsSubmitting(false);
        setSubmitted(true);
    };

    const resetForm = () => {
        setSubmitted(false);
        setFormData({
            name: "",
            phone: "",
            topic: "ভর্তি ও ব্যাচ সংক্রান্ত",
            message: "",
        });
    };

    if (submitted) {
        return (
            <div className="bg-paper border border-line rounded-xl p-6 sm:p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-green/15 text-green flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                    <h3 className="text-lg font-extrabold text-navy">
                        আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে!
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                        ধন্যবাদ, <strong className="text-navy">{formData.name}</strong>। আমাদের অফিস প্রতিনিধি শীঘ্রই <strong className="text-navy">{formData.phone}</strong> নম্বরে যোগাযোগ করবেন।
                    </p>
                </div>
                <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy text-white text-xs font-semibold hover:bg-navy-dark transition-colors cursor-pointer"
                >
                    <RotateCcw className="w-3.5 h-3.5 text-gold" />
                    <span>নতুন বার্তা লিখুন</span>
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="contact-name"
                        className="block text-xs sm:text-sm font-semibold text-navy mb-1.5"
                    >
                        আপনার নাম <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="contact-name"
                        required
                        placeholder="পূর্ণ নাম লিখুন"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-line text-sm text-ink focus:outline-none focus:border-navy transition-colors"
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-phone"
                        className="block text-xs sm:text-sm font-semibold text-navy mb-1.5"
                    >
                        মোবাইল নম্বর <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        id="contact-phone"
                        required
                        placeholder="017XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-line text-sm text-ink focus:outline-none focus:border-navy transition-colors"
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="contact-topic"
                    className="block text-xs sm:text-sm font-semibold text-navy mb-1.5"
                >
                    জিজ্ঞাসার বিষয়
                </label>
                <select
                    id="contact-topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-line text-sm text-ink focus:outline-none focus:border-navy transition-colors"
                >
                    <option value="ভর্তি ও ব্যাচ সংক্রান্ত">ভর্তি ও ব্যাচ সংক্রান্ত</option>
                    <option value="ক্লাসের সময়সূচি ও ফি">ক্লাসের সময়সূচি ও ফি</option>
                    <option value="অভিভাবক পরামর্শ ও ডেমো ক্লাস">
                        অভিভাবক পরামর্শ ও ডেমো ক্লাস
                    </option>
                    <option value="অন্যান্য জিজ্ঞাসা">অন্যান্য জিজ্ঞাসা</option>
                </select>
            </div>

            <div>
                <label
                    htmlFor="contact-message"
                    className="block text-xs sm:text-sm font-semibold text-navy mb-1.5"
                >
                    বিস্তারিত বার্তা <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="আপনার প্রশ্ন বা মতামত বিস্তারিত লিখুন..."
                    value={formData.message}
                    onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-line text-sm text-ink focus:outline-none focus:border-navy transition-colors"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-navy hover:bg-navy-dark disabled:opacity-60 text-white text-sm font-semibold transition-colors cursor-pointer"
            >
                <span>{isSubmitting ? "পাঠানো হচ্ছে..." : "বার্তা পাঠান"}</span>
                <Send className="w-4 h-4 text-gold" />
            </button>
        </form>
    );
}

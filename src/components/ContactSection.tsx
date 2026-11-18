"use client";

import React, { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    CheckCircle2,
    ExternalLink,
} from "lucide-react";

export default function ContactSection() {
    const [sent, setSent] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setFormData({ name: "", phone: "", message: "" });
    };

    return (
        <section id="contact" className="py-20 bg-paper border-b border-line">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-2xl mb-12 space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green">
                        <span className="w-6 h-[2px] bg-green" />
                        <span>যোগাযোগ ও ক্যাম্পাস লোকেশন</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                        আমাদের বানারীপাড়া ক্যাম্পাসে আসুন
                    </h2>
                    <p className="text-sm sm:text-base text-muted leading-relaxed">
                        ভর্তি সংক্রান্ত যেকোনো তথ্য, ব্যাচের সময়সূচি কিংবা সন্তানের পড়াশোনা নিয়ে সরাসরি পরামর্শের জন্য আমাদের ক্যাম্পাসে যোগাযোগ করুন।
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left 5 Columns: Contact Details & Quick Inquiry */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                        {/* Contact Info Card */}
                        <div className="bg-surface border border-line rounded-2xl p-6 sm:p-7 space-y-5">
                            <div className="flex items-start gap-3.5">
                                <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-navy">ক্যাম্পাস ঠিকানা</h3>
                                    <p className="text-sm text-muted mt-1 leading-relaxed">
                                        অন্বেষণ লার্নিং সেন্টার, বানারীপাড়া পৌরসভা / বন্দর বাজার সংলগ্ন, বানারীপাড়া, বরিশাল।
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3.5 pt-4 border-t border-line">
                                <div className="w-10 h-10 rounded-lg bg-green/15 text-green flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-navy">ফোন ও হোয়াটসঅ্যাপ</h3>
                                    <p className="text-sm text-muted mt-1">
                                        <a
                                            href="tel:+8801700000000"
                                            className="hover:text-navy font-medium"
                                        >
                                            +৮৮০ ১৭০০-০০০০০০
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3.5 pt-4 border-t border-line">
                                <div className="w-10 h-10 rounded-lg bg-gold/20 text-navy flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-navy">অফিস সময়সূচি</h3>
                                    <p className="text-sm text-muted mt-1">
                                        শনিবার — বৃহস্পতিবার: সকাল ৯:০০ – রাত ৮:০০
                                    </p>
                                    <p className="text-xs text-green font-medium mt-0.5">
                                        শুক্রবার: স্পেশাল কিউরিওসিটি ও বিজ্ঞান ক্লাব সেশন
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Message Box */}
                        <div className="bg-surface border border-line rounded-2xl p-6 sm:p-7">
                            <h3 className="text-base font-bold text-navy mb-4">
                                সরাসরি বার্তা পাঠান
                            </h3>

                            {sent ? (
                                <div className="p-4 rounded-xl bg-paper border border-line flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green shrink-0 mt-0.5" />
                                    <div className="text-sm">
                                        <p className="font-bold text-navy">বার্তা পাঠানো হয়েছে!</p>
                                        <p className="text-muted mt-0.5">
                                            শীঘ্রই আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবেন।
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => setSent(false)}
                                            className="text-xs font-bold text-navy underline mt-2 cursor-pointer"
                                        >
                                            আরেকটি বার্তা লিখুন
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-3.5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <input
                                            type="text"
                                            required
                                            placeholder="আপনার নাম"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-line text-sm text-ink focus:outline-none focus:border-navy"
                                        />
                                        <input
                                            type="tel"
                                            required
                                            placeholder="মোবাইল নম্বর"
                                            value={formData.phone}
                                            onChange={(e) =>
                                                setFormData({ ...formData, phone: e.target.value })
                                            }
                                            className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-line text-sm text-ink focus:outline-none focus:border-navy"
                                        />
                                    </div>
                                    <textarea
                                        rows={2}
                                        required
                                        placeholder="আপনার প্রশ্ন বা জিজ্ঞাসা লিখুন..."
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-line text-sm text-ink focus:outline-none focus:border-navy"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-navy hover:bg-navy-dark text-white text-sm font-semibold transition-colors cursor-pointer"
                                    >
                                        <span>বার্তা পাঠান</span>
                                        <Send className="w-3.5 h-3.5 text-gold" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Right 7 Columns: Banaripara Google Map Embed */}
                    <div className="lg:col-span-7 bg-surface border border-line rounded-2xl p-3 flex flex-col justify-between min-h-[380px]">
                        <div className="relative w-full h-full min-h-[340px] rounded-xl overflow-hidden bg-paper">
                            <iframe
                                title="Onneshon Learning Center Banaripara Location"
                                src="https://google.com"
                                className="w-full h-full min-h-[340px] border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="pt-3 px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
                            <span>লোকেশন: বানারীপাড়া উপজেলা সদর, বরিশাল</span>
                            <a
                                href="https://google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-bold text-navy hover:text-green transition-colors"
                            >
                                <span>গুগল ম্যাপে বড় করে দেখুন</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

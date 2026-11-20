import Link from "next/link";
import { ArrowRight, Compass, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative bg-paper border-b border-line overflow-hidden">
            {/* Subtle Architectural Grid Pattern (Very faint, non-AI look) */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.35]"
                style={{
                    backgroundImage:
                        "radial-gradient(var(--color-border-subtle) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

                    {/* Left Column: Core Philosophy & CTA (7 Columns) */}
                    <div className="lg:col-span-7 space-y-4 md:space-y-7">
                        {/* Editorial Pill Badge */}
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-line text-xs sm:text-sm font-medium text-navy">
                            <span className="w-2 h-2 rounded-full bg-green" />
                            <span>বানারীপাড়া, বরিশাল — ২০২৭ একাডেমিক সেশন</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-navy tracking-tight leading-[1.22]">
                            ভালো ফলাফলের সাথে,{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">কৌতূহল ও সৃজনশীলতায়</span>
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-gold/40 -z-0 rounded-xs" />
                            </span>{" "}
                            গড়ে উঠুক আগামীর প্রজন্ম।
                        </h1>

                        {/* Subtitle / Brand Mission */}
                        <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                            <strong>অন্বেষণ লার্নিং সেন্টার</strong> শিক্ষার্থীদের মুখস্থবিদ্যার বাইরে এনে প্রশ্ন করতে, যুক্তি দিয়ে ভাবতে এবং নিজের ভেতরের সুপ্ত সম্ভাবনাকে খুঁজে বের করতে উৎসাহিত করে।
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                            <Link
                                href="/admission"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-navy hover:bg-navy-dark text-white font-semibold text-base transition-colors"
                            >
                                <span>ভর্তি আবেদন করুন</span>
                                <ArrowRight className="w-4 h-4 text-gold" />
                            </Link>

                            <Link
                                href="/batch"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface hover:bg-paper text-navy font-semibold text-base border border-line transition-colors"
                            >
                                <span>আমাদের কোর্স ও ব্যাচসমূহ</span>
                            </Link>
                        </div>

                        {/* Trust & Philosophy Highlights */}
                        <div className="pt-4 border-t border-line grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-ink">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                                <span>প্রশ্নভিত্তিক ও আনন্দদায়ক পাঠদান</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                                <span>সীমিত আসন ও নিবিড় তত্ত্বাবধান</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                                <span>নিয়মিত মূল্যায়ন ও অভিভাবক মতবিনিময়</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Structured Academic Bento Card (5 Columns) */}
                    <div className="lg:col-span-5 max-md:hidden">
                        <div className="bg-surface border border-line rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(23,59,86,0.04)] space-y-6">
                            {/* Top Card Header */}
                            <div className="flex items-center justify-between border-b border-line pb-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-green">
                                        আমাদের মূল স্তম্ভ
                                    </p>
                                    <h2 className="text-lg font-bold text-navy mt-0.5">
                                        কেন অন্বেষণ ব্যতিক্রম?
                                    </h2>
                                </div>
                                <div className="w-10 h-10 rounded-lg bg-paper border border-line flex items-center justify-center text-navy">
                                    <Compass className="w-5 h-5 text-gold" />
                                </div>
                            </div>

                            {/* 3 Core Pillars List */}
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-paper border border-line/80 flex gap-3.5">
                                    <div className="w-9 h-9 rounded-lg bg-navy/10 text-navy flex items-center justify-center shrink-0 mt-0.5">
                                        <BookOpen className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy text-sm sm:text-base">
                                            গভীর ধারণা ও মৌলিক জ্ঞান
                                        </h3>
                                        <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                                            প্রতিটি বিষয়ের মূল ভিত্তি পরিষ্কারভাবে বোঝানো হয়, যাতে শিক্ষার্থীরা না বুঝে মুখস্থ না করে।
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-paper border border-line/80 flex gap-3.5">
                                    <div className="w-9 h-9 rounded-lg bg-gold/20 text-navy flex items-center justify-center shrink-0 mt-0.5">
                                        <Compass className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy text-sm sm:text-base">
                                            কৌতূহল ও সমস্যা সমাধান
                                        </h3>
                                        <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                                            বাস্তব জীবনের উদাহরণের মাধ্যমে শিক্ষার্থীদের বিশ্লেষণী ও সৃজনশীল চিন্তাশক্তি বাড়ানো হয়।
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-paper border border-line/80 flex gap-3.5">
                                    <div className="w-9 h-9 rounded-lg bg-green/15 text-green flex items-center justify-center shrink-0 mt-0.5">
                                        <Sparkles className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy text-sm sm:text-base">
                                            আত্মবিশ্বাস ও নৈতিক বিকাশ
                                        </h3>
                                        <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                                            পড়াশোনার পাশাপাশি শিক্ষার্থীদের যোগাযোগ দক্ষতা ও ইতিবাচক দৃষ্টিভঙ্গি গড়ে তোলা হয়।
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Notice Strip inside Card */}
                            <div className="pt-2 flex items-center justify-between text-xs text-muted">
                                <span>ষষ্ঠ থেকে দ্বাদশ শ্রেণি এবং আইসিটি স্পেশাল ব্যাচ</span>
                                <Link
                                    href="/batch"
                                    className="font-semibold text-navy hover:text-green underline underline-offset-4"
                                >
                                    বিস্তারিত দেখুন
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

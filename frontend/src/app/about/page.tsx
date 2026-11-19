import React from "react";
import Link from "next/link";
import {
    Compass,
    BookOpen,
    Lightbulb,
    Users,
    ShieldCheck,
    Target,
    Award,
    ArrowRight,
    MapPin,
    CheckCircle2,
} from "lucide-react";

export const metadata = {
    title: "আমাদের দর্শন ও পরিচিতি | Onneshon Learning Center",
    description:
        "বানারীপাড়া, বরিশালে অবস্থিত অন্বেষণ লার্নিং সেন্টারের লক্ষ্য, শিক্ষাদর্শন এবং শিক্ষার্থী-কেন্দ্রিক পাঠদান পদ্ধতি সম্পর্কে জানুন।",
};

const coreValues = [
    {
        title: "কৌতূহল ও প্রশ্ন করার স্বাধীনতা",
        description:
            "আমরা বিশ্বাস করি প্রতিটি বড় আবিষ্কারের শুরু একটি ছোট প্রশ্ন থেকে। আমাদের ক্লাসরুমে শিক্ষার্থীরা কোনো সংকোচ ছাড়াই প্রশ্ন করতে পারে।",
        icon: Compass,
        accent: "gold",
    },
    {
        title: "মুখস্থ নয়, মৌলিক ধারণা",
        description:
            "পরীক্ষায় ভালো ফলাফলের জন্য না বুঝে নোট মুখস্থ করার বদলে প্রতিটি বিষয়ের মূল তত্ত্ব ও বাস্তব প্রয়োগ পরিষ্কারভাবে শেখানো হয়।",
        icon: BookOpen,
        accent: "navy",
    },
    {
        title: "সমালোচনামূলক চিন্তা ও সৃজনশীলতা",
        description:
            "যেকোনো সমস্যাকে ভিন্ন দৃষ্টিভঙ্গি থেকে বিশ্লেষণ করা এবং নিজে থেকে সমাধানের পথ খুঁজে বের করার দক্ষতা গড়ে তোলা হয়।",
        icon: Lightbulb,
        accent: "green",
    },
    {
        title: "ব্যক্তিগত যত্ন ও নৈতিক বিকাশ",
        description:
            "সীমিত আসনের ব্যাচে প্রতিটি শিক্ষার্থীর দুর্বলতা ও সম্ভাবনাকে আলাদাভাবে গুরুত্ব দেওয়া হয় এবং ইতিবাচক মানসিকতা গঠনে উৎসাহিত করা হয়।",
        icon: Users,
        accent: "navy",
    },
];

const campusFeatures = [
    "সর্বোচ্চ ১৫–২০ জন শিক্ষার্থীর ছোট ও নিয়ন্ত্রিত ব্যাচ",
    "মাল্টিমিডিয়া প্রজেক্টর ও ভিজ্যুয়াল প্রেজেন্টেশনের মাধ্যমে পাঠদান",
    "আইসিটি ও প্রোগ্রামিংয়ের জন্য হাতে-কলমে ল্যাপটপ প্র্যাকটিস সুবিধা",
    "প্রতি সপ্তাহে সৃজনশীল মূল্যায়ন এবং অভিভাবকদের সাথে নিয়মিত মতবিনিময়",
    "পড়াশোনার পাশাপাশি গণিত অলিম্পিয়াড ও বিজ্ঞান ক্লাব চর্চা",
    "শান্ত, নিরাপদ এবং শিক্ষার্থীবান্ধব ক্লাসরুম পরিবেশ",
];

export default function AboutPage() {
    return (
        <main className="bg-paper min-h-screen">
            {/* 1. Editorial Page Header */}
            <section className="py-16 sm:py-20 bg-surface border-b border-line">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl space-y-5">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper border border-line text-xs font-bold text-green">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>বানারীপাড়া, বরিশাল</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-[1.22]">
                            শিক্ষাকে আনন্দময় ও অনুসন্ধিৎসু করার এক নতুন প্রয়াস।
                        </h1>

                        <p className="text-base sm:text-lg text-muted leading-relaxed">
                            <strong>অন্বেষণ লার্নিং সেন্টার (Onneshon Learning Center)</strong> কেবল একটি প্রথাগত কোচিং সেন্টার নয়; এটি শিক্ষার্থীদের কৌতূহল, যুক্তিবোধ এবং সৃজনশীল প্রতিভা বিকাশের একটি আধুনিক শিক্ষাপ্রতিষ্ঠান।
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Our Story & Name Meaning */}
            <section className="py-16 sm:py-20 border-b border-line">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left 7 Columns: Narrative */}
                        <div className="lg:col-span-7 space-y-5">
                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green">
                                <span className="w-6 h-[2px] bg-green" />
                                <span>কেন ‘অন্বেষণ’ নামকরণ?</span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy leading-snug">
                                খুঁজে বের করার আনন্দ থেকেই প্রকৃত শিক্ষার জন্ম
                            </h2>

                            <p className="text-sm sm:text-base text-muted leading-relaxed">
                                ‘অন্বেষণ’ শব্দের অর্থ অনুসন্ধান করা, খুঁজে বের করা বা নতুন কিছু আবিষ্কার করা। আমাদের লোগোতে থাকা <strong>খোলা বই</strong> জ্ঞানের গভীরতা এবং <strong>কম্পাস</strong> সঠিক দিকনির্দেশনা ও নতুন সম্ভাবনা খুঁজে বের করার প্রতীক।
                            </p>

                            <p className="text-sm sm:text-base text-muted leading-relaxed">
                                বানারীপাড়ার মেধাবী শিক্ষার্থীরা যেন শুধুমাত্র পরীক্ষার খাতায় নম্বর তোলার প্রতিযোগিতায় সীমাবদ্ধ না থেকে আধুনিক বিজ্ঞান, প্রযুক্তি এবং সৃজনশীল চিন্তায় নিজেদের যোগ্য করে গড়ে তুলতে পারে—সেই লক্ষ্য নিয়েই আমাদের যাত্রা।
                            </p>
                        </div>

                        {/* Right 5 Columns: Mission & Vision Card */}
                        <div className="lg:col-span-5 space-y-5">
                            <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-line space-y-3">
                                <div className="w-10 h-10 rounded-lg bg-navy text-gold flex items-center justify-center">
                                    <Target className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-navy">আমাদের লক্ষ্য (Mission)</h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    শিক্ষার্থীদের ভেতরে প্রশ্ন করার অভ্যাস, বিশ্লেষণী ক্ষমতা এবং সমস্যা সমাধানের দক্ষতা তৈরি করে তাদের আত্মবিশ্বাসী ও স্বশিক্ষিত মানুষ হিসেবে গড়ে তোলা।
                                </p>
                            </div>

                            <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-line space-y-3">
                                <div className="w-10 h-10 rounded-lg bg-green/15 text-green flex items-center justify-center">
                                    <Award className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-navy">আমাদের স্বপ্ন (Vision)</h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    বানারীপাড়া ও বরিশাল অঞ্চলে এমন একটি আদর্শ শিক্ষার পরিবেশ তৈরি করা, যেখানে একাডেমিক সাফল্য ও সৃজনশীল দক্ষতা সমান গুরুত্ব পাবে।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Values Grid */}
            <section className="py-16 sm:py-20 bg-surface border-b border-line">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="max-w-2xl space-y-3">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green">
                            <span className="w-6 h-[2px] bg-green" />
                            <span>আমাদের মূলনীতি</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                            যে ৪টি মূল্যবোধ আমাদের পথ দেখায়
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {coreValues.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 sm:p-8 rounded-2xl bg-paper border border-line flex items-start gap-4"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-surface border border-line flex items-center justify-center text-navy shrink-0 mt-0.5">
                                        <Icon className="w-5 h-5 text-green" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold text-navy">{value.title}</h3>
                                        <p className="text-sm text-muted leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. Learning Environment & Commitments */}
            <section className="py-16 sm:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-surface border border-line rounded-2xl p-6 sm:p-10 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 text-xs font-bold text-navy bg-paper px-3 py-1 rounded-md border border-line">
                                    <ShieldCheck className="w-4 h-4 text-green" />
                                    <span>অভিভাবকদের প্রতি আমাদের অঙ্গীকার</span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy leading-snug">
                                    সুশৃঙ্খল ও যত্নশীল শিক্ষার পরিবেশ
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                                    {campusFeatures.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-2.5 text-sm text-ink"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-green shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right CTA Box */}
                            <div className="lg:col-span-5 bg-navy text-white rounded-2xl p-6 sm:p-8 space-y-5">
                                <h3 className="text-xl font-bold leading-snug">
                                    আপনার সন্তানের শেখার যাত্রা শুরু হোক অন্বেষণের সাথে
                                </h3>
                                <p className="text-sm text-white/80 leading-relaxed">
                                    আমাদের ক্লাসরুম পরিদর্শন করতে এবং শিক্ষকদের সাথে সরাসরি কথা বলতে বানারীপাড়া ক্যাম্পাসে আমন্ত্রণ রইল।
                                </p>
                                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-2">
                                    <Link
                                        href="/admission"
                                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gold hover:bg-gold-hover text-navy font-bold text-sm transition-colors"
                                    >
                                        <span>ভর্তি আবেদন করুন</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href="/#contact"
                                        className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-colors"
                                    >
                                        ক্যাম্পাস লোকেশন দেখুন
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


import React from "react";
import {
    HelpCircle,
    Search,
    Lightbulb,
    Target,
    XCircle,
    CheckCircle2,
    Quote,
} from "lucide-react";

const methodologySteps = [
    {
        step: "০১",
        title: "প্রশ্ন করার সাহস তৈরি",
        subtitle: "Curiosity First",
        description:
            "যেকোনো অধ্যায় শুরুর আগে শিক্ষার্থীদের 'কেন' এবং 'কীভাবে' প্রশ্ন করতে উৎসাহিত করা হয়, যাতে বিষয়টির প্রতি তাদের ভেতর থেকে আগ্রহ তৈরি হয়।",
        icon: HelpCircle,
        accent: "gold",
    },
    {
        step: "০২",
        title: "গভীর ধারণা ও বিশ্লেষণ",
        subtitle: "Critical Thinking",
        description:
            "বইয়ের সংজ্ঞা মুখস্থ না করিয়ে বাস্তব জীবনের উদাহরণ ও ভিজ্যুয়াল ব্যাখ্যার মাধ্যমে প্রতিটি বিষয়ের মূল সূত্র বা ধারণা পরিষ্কার করা হয়।",
        icon: Search,
        accent: "navy",
    },
    {
        step: "০৩",
        title: "হাতে-কলমে সমস্যা সমাধান",
        subtitle: "Problem Solving",
        description:
            "নতুন ও অজানা সমস্যা দেখলে ভয় না পেয়ে কীভাবে ধাপে ধাপে তা সমাধান করতে হয়, ক্লাসে নিয়মিত অনুশীলনের মাধ্যমে তা শেখানো হয়।",
        icon: Lightbulb,
        accent: "green",
    },
    {
        step: "০৪",
        title: "আত্মমূল্যায়ন ও উন্নয়ন",
        subtitle: "Continuous Growth",
        description:
            "প্রতিটি পরীক্ষার পর শুধু নম্বর নয়, বরং কোথায় ও কেন ভুল হয়েছে তা নিয়ে শিক্ষার্থীর সাথে আলাদাভাবে আলোচনা করে দুর্বলতা কাটানো হয়।",
        icon: Target,
        accent: "navy",
    },
];

export default function PhilosophySection() {
    return (
        <section id="about" className="py-20 bg-surface border-b border-line">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Editorial Split: Brand Philosophy & Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-line">

                    {/* Left 6 Columns: Narrative Philosophy */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green">
                            <span className="w-6 h-[2px] bg-green" />
                            <span>আমাদের দর্শন ও লক্ষ্য</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-[1.25]">
                            পরীক্ষার ফলাফলের চেয়েও বড় লক্ষ্য —{" "}
                            <span className="text-green">নিজে থেকে শেখার</span> সক্ষমতা তৈরি।
                        </h2>

                        <p className="text-base text-muted leading-relaxed">
                            আমরা বিশ্বাস করি, প্রতিটি শিক্ষার্থীর ভেতরেই জানার অসীম কৌতূহল রয়েছে। প্রথাগত কোচিং সংস্কৃতিতে অনেক সময় শুধু সাজেশন আর মুখস্থবিদ্যার ওপর জোর দেওয়া হয়, যা সাময়িক নম্বর এনে দিলেও শিক্ষার্থীর সৃজনশীলতা নষ্ট করে।
                        </p>

                        <p className="text-base text-muted leading-relaxed">
                            বানারীপাড়ার শিক্ষার্থীদের জন্য <strong>অন্বেষণ লার্নিং সেন্টার</strong> এমন একটি পরিবেশ তৈরি করেছে, যেখানে তারা নির্ভয়ে ভুল করতে পারে, প্রশ্ন করতে পারে এবং যুক্তি দিয়ে নতুন কিছু আবিষ্কারের আনন্দ পায়।
                        </p>

                        {/* Founder / Institutional Quote Block */}
                        <div className="p-5 rounded-xl bg-paper border-l-4 border-gold flex gap-3.5 items-start">
                            <Quote className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm sm:text-base font-medium text-navy italic leading-relaxed">
                                    “শিক্ষা মানে কেবল তথ্য জমা করা নয়, বরং মননকে চিন্তা করতে শেখানো। একজন শিক্ষার্থী যখন ‘কেন’ প্রশ্ন করতে শেখে, তখন থেকেই তার প্রকৃত শিক্ষা শুরু হয়।”
                                </p>
                                <p className="text-xs font-semibold text-muted mt-2">
                                    — একাডেমিক পর্ষদ, অন্বেষণ লার্নিং সেন্টার
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right 6 Columns: Traditional vs Onneshon Approach Table Card */}
                    <div className="lg:col-span-6">
                        <div className="bg-paper border border-line rounded-2xl p-6 sm:p-8">
                            <h3 className="text-lg font-bold text-navy pb-4 border-b border-line">
                                আমাদের পাঠদান পদ্ধতি কেন আলাদা?
                            </h3>

                            <div className="mt-5 space-y-4">
                                {/* Comparison Row 1 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-surface border border-line">
                                    <div className="flex items-start gap-2.5 text-sm text-muted">
                                        <XCircle className="w-4 h-4 text-red-500/80 shrink-0 mt-0.5" />
                                        <span>না বুঝে গাইড বই ও নোট মুখস্থ করার প্রবণতা</span>
                                    </div>
                                    <div className="flex items-start gap-2.5 text-sm font-medium text-navy sm:border-l sm:border-line sm:pl-3">
                                        <CheckCircle2 className="w-4 h-4 text-green shrink-0 mt-0.5" />
                                        <span>মূল পাঠ্যবই ও বাস্তব উদাহরণের মাধ্যমে গভীর ধারণা</span>
                                    </div>
                                </div>

                                {/* Comparison Row 2 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-surface border border-line">
                                    <div className="flex items-start gap-2.5 text-sm text-muted">
                                        <XCircle className="w-4 h-4 text-red-500/80 shrink-0 mt-0.5" />
                                        <span>একমুখী লেকচার, যেখানে শিক্ষার্থীরা প্রশ্ন করতে ভয় পায়</span>
                                    </div>
                                    <div className="flex items-start gap-2.5 text-sm font-medium text-navy sm:border-l sm:border-line sm:pl-3">
                                        <CheckCircle2 className="w-4 h-4 text-green shrink-0 mt-0.5" />
                                        <span>ইন্টারেক্টিভ আলোচনা ও প্রশ্নোত্তরভিত্তিক ক্লাসরুম</span>
                                    </div>
                                </div>

                                {/* Comparison Row 3 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-surface border border-line">
                                    <div className="flex items-start gap-2.5 text-sm text-muted">
                                        <XCircle className="w-4 h-4 text-red-500/80 shrink-0 mt-0.5" />
                                        <span>অতিরিক্ত শিক্ষার্থীর ভিড়ে ব্যক্তিগত যত্নের অভাব</span>
                                    </div>
                                    <div className="flex items-start gap-2.5 text-sm font-medium text-navy sm:border-l sm:border-line sm:pl-3">
                                        <CheckCircle2 className="w-4 h-4 text-green shrink-0 mt-0.5" />
                                        <span>সীমিত আসনের ব্যাচ এবং প্রত্যেকের অগ্রগতি পর্যবেক্ষণ</span>
                                    </div>
                                </div>

                                {/* Comparison Row 4 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-surface border border-line">
                                    <div className="flex items-start gap-2.5 text-sm text-muted">
                                        <XCircle className="w-4 h-4 text-red-500/80 shrink-0 mt-0.5" />
                                        <span>শুধুমাত্র পরীক্ষার নম্বরকেন্দ্রিক মানসিক চাপ</span>
                                    </div>
                                    <div className="flex items-start gap-2.5 text-sm font-medium text-navy sm:border-l sm:border-line sm:pl-3">
                                        <CheckCircle2 className="w-4 h-4 text-green shrink-0 mt-0.5" />
                                        <span>ফলাফলের পাশাপাশি সৃজনশীলতা ও আত্মবিশ্বাস গঠন</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom 4-Step Learning Methodology */}
                <div className="pt-16">
                    <div className="max-w-2xl mb-10">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-navy">
                            অন্বেষণের ৪ ধাপের শিক্ষাপদ্ধতি
                        </h3>
                        <p className="text-sm sm:text-base text-muted mt-1.5">
                            প্রতিটি বিষয় ও অধ্যায় আমরা চারটি সুশৃঙ্খল ধাপে শিক্ষার্থীদের সামনে তুলে ধরি।
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {methodologySteps.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.step}
                                    className="p-6 rounded-2xl bg-paper border border-line hover:border-navy/40 transition-colors flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-5">
                                            <span className="text-2xl font-extrabold text-navy/25 tracking-tight">
                                                {item.step}
                                            </span>
                                            <div className="w-10 h-10 rounded-lg bg-surface border border-line flex items-center justify-center text-navy">
                                                <Icon className="w-5 h-5 text-green" />
                                            </div>
                                        </div>

                                        <p className="text-[11px] font-bold uppercase tracking-wider text-green">
                                            {item.subtitle}
                                        </p>
                                        <h4 className="text-lg font-bold text-navy mt-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-muted mt-2.5 leading-relaxed">
                                            {item.description}
                                        </p>
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

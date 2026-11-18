

import NoticeBoardClient from "@/components/notices/NoticeBoardClient";
import { Bell } from "lucide-react";

export const metadata = {
    title: "নোটিশ বোর্ড | Onneshon Learning Center",
    description:
        "অন্বেষণ লার্নিং সেন্টার, বানারীপাড়া ক্যাম্পাসের সাম্প্রতিক ভর্তি বিজ্ঞপ্তি, পরীক্ষার রুটিন ও একাডেমিক ঘোষণা।",
};

export default function NoticesPage() {
    return (
        <main className="py-16 bg-paper min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                {/* Page Header */}
                <div className="border-b border-line pb-8 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-line text-xs font-bold text-navy">
                        <Bell className="w-3.5 h-3.5 text-gold" />
                        <span>অফিসিয়াল নোটিশ বোর্ড</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                        সাম্প্রতিক ঘোষণা ও বিজ্ঞপ্তিসমূহ
                    </h1>
                    <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
                        ভর্তি সংক্রান্ত তথ্য, মাসিক মূল্যায়ন পরীক্ষার সময়সূচি, অভিভাবক সভা এবং বিশেষ কর্মশালার সকল হালনাগাদ তথ্য এখানে প্রকাশ করা হয়।
                    </p>
                </div>

                {/* Interactive Notice List */}
                <NoticeBoardClient />

            </div>
        </main>
    );
}

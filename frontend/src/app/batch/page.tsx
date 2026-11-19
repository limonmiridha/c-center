import BatchPageClient from "@/components/batch/BatchPageClient";
import { BookOpen } from "lucide-react";

export const metadata = {
    title: "প্রোগ্রাম ও ব্যাচসমূহ | Onneshon Learning Center",
    description:
        "ষষ্ঠ থেকে দ্বাদশ শ্রেণির একাডেমিক ব্যাচ, এইচএসসি আইসিটি স্পেশাল প্রোগ্রাম এবং সৃজনশীল কর্মশালার বিস্তারিত সময়সূচি।",
};

export default function BatchPage() {
    return (
        <main className="py-8 md:py-16 bg-paper min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 md:space-y-8">

                {/* Page Header */}
                <div className="border-b border-line pb-4 md:pb-8 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-line text-xs font-bold text-green">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>একাডেমিক ও স্কিল প্রোগ্রাম</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                        আমাদের কোর্স ও ব্যাচসমূহ
                    </h1>
                    <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
                        শিক্ষার্থীদের শ্রেণি, মেধা ও শেখার চাহিদা অনুযায়ী আমাদের প্রতিটি ব্যাচ সাজানো হয়েছে। আপনার পছন্দের ব্যাচের সময়সূচি দেখে সরাসরি অনলাইনে আবেদন করতে পারেন।
                    </p>
                </div>

                {/* Interactive Programs & Schedule List */}
                <BatchPageClient />

            </div>
        </main>
    );
}

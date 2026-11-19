import React from "react";
import ResourcesClient from "@/components/resources/ResourcesClient";
import { BookMarked } from "lucide-react";

export const metadata = {
    title: "স্টাডি রিসোর্স ও লেকচার শিট | Onneshon Learning Center",
    description:
        "ষষ্ঠ থেকে দ্বাদশ শ্রেণির শিক্ষার্থীদের জন্য গণিত, বিজ্ঞান, আইসিটি ও ইংরেজির ফ্রি লেকচার শিট ও পিডিএফ সংগ্রহ।",
};

export default function ResourcesPage() {
    return (
        <main className="py-16 bg-paper min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                {/* Page Header */}
                <div className="border-b border-line pb-8 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-line text-xs font-bold text-green">
                        <BookMarked className="w-3.5 h-3.5" />
                        <span>ডিজিটাল লাইব্রেরি ও রিসোর্স</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                        স্টাডি রিসোর্স ও লেকচার শিট
                    </h1>
                    <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
                        শিক্ষার্থীদের বিষয়ভিত্তিক ধারণা স্পষ্ট করতে আমাদের শিক্ষকদের তৈরি লেকচার শিট, সূত্রাবলি এবং অনুশীলনী গাইডগুলো এখান থেকে বিনামূল্যে ডাউনলোড করুন।
                    </p>
                </div>

                {/* Interactive Resources Filter & List */}
                <ResourcesClient />

            </div>
        </main>
    );
}

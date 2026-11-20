import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {


    return (
        <footer className="bg-navy text-white/85">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">

                    {/* Brand Column (5 Columns) */}
                    <div className="lg:col-span-5 space-y-4">
                        <Link href="/" className="inline-flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                                <svg
                                    viewBox="0 0 40 40"
                                    className="w-7 h-7"
                                    fill="none"
                                    xmlns="http://w3.org"
                                >
                                    <path
                                        d="M6 13C11 13 16 14.5 20 17.5C24 14.5 29 13 34 13V29C29 29 24 30.5 20 33C16 30.5 11 29 6 29V13Z"
                                        fill="#FFFFFF"
                                    />
                                    <path d="M20 7L23.5 18L20 29L16.5 18L20 7Z" fill="#F2B84B" />
                                    <circle cx="20" cy="18" r="2" fill="#173B56" />
                                    <path
                                        d="M20 3V5M14 6L15.5 7.5M26 6L24.5 7.5"
                                        stroke="#269B83"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                                    ONNESHON
                                </span>
                                <span className="text-[11px] font-semibold tracking-[0.18em] text-gold uppercase mt-1">
                                    Learning Center
                                </span>
                            </div>
                        </Link>

                        <p className="text-sm text-white/75 leading-relaxed max-w-md">
                            <strong>অন্বেষণ লার্নিং সেন্টার</strong> — বানারীপাড়ার একটি আধুনিক ও শিক্ষার্থীকেন্দ্রিক শিক্ষাপ্রতিষ্ঠান। আমরা মুখস্থবিদ্যার বদলে কৌতূহল, সমালোচনামূলক চিন্তা ও সৃজনশীল দক্ষতা বিকাশে কাজ করি।
                        </p>

                        <div className="pt-1">
                            <Link
                                href="/admission"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold hover:bg-gold-hover text-navy font-bold text-xs sm:text-sm transition-colors"
                            >
                                <span>অনলাইন ভর্তি আবেদন</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links (3 Columns) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gold">
                            প্রয়োজনীয় লিংক
                        </h3>
                        <ul className="space-y-2.5 text-sm text-white/75">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">
                                    হোম পেজ
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="hover:text-white transition-colors">
                                    আমাদের দর্শন ও শিক্ষাপদ্ধতি
                                </Link>
                            </li>
                            <li>
                                <Link href="/#programs" className="hover:text-white transition-colors">
                                    প্রোগ্রাম ও ব্যাচসমূহ
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/#notices" className="hover:text-white transition-colors">
                                    নোটিশ বোর্ড ও রিসোর্স
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/admission" className="hover:text-white transition-colors">
                                    ভর্তি আবেদন ফর্ম
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Campus Contact Info (4 Columns) */}
                    <div className="lg:col-span-4 space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gold">
                            বানারীপাড়া ক্যাম্পাস
                        </h3>
                        <ul className="space-y-3 text-sm text-white/75">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                                <span>বানারীপাড়া, বরিশাল, বাংলাদেশ</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-gold shrink-0" />
                                <a href="tel:+8801790153927" className="hover:text-white">
                                    +৮৮০ ১৭৯০-১৫৩৯২৭
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-gold shrink-0" />
                                <a
                                    href="mailto:limonmiridha100@gmail.com"
                                    className="hover:text-white"
                                >
                                    limonmiridha100@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Copyright Strip */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
                    <p>
                        © 2027 অন্বেষণ লার্নিং সেন্টার (Onneshon Learning Center). সর্বস্বত্ব সংরক্ষিত।
                    </p>
                    <p>কৌতূহল থেকে উদ্ভাবন • বানারীপাড়া, বরিশাল</p>
                </div>
            </div>
        </footer>
    );
}

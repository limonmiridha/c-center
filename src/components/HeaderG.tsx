"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, ArrowUpRight } from "lucide-react";

const navLinks = [
    { name: "হোম", href: "/" },
    { name: "আমাদের দর্শন", href: "/about" },
    { name: "প্রোগ্রাম ও ব্যাচ", href: "/programs" },
    // { name: "রিসোর্স", href: "/resources" },
    { name: "নোটিশ", href: "/notices" },
];

export default function HeaderG() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full bg-[var(--color-bg-surface)]/95 backdrop-blur-md border-b border-[var(--color-border-subtle)]">
            {/* Top Micro-bar: Authentic Local Touch */}
            <div className="bg-[var(--color-brand-navy)] text-white/90 text-xs py-2 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[var(--color-brand-gold)]" />
                            <span>বানারীপাড়া, বরিশাল</span>
                        </span>
                        <span className="hidden sm:inline text-white/30">|</span>
                        <span className="hidden sm:inline text-white/80">
                            কৌতূহল থেকে উদ্ভাবন — নতুন সেশনে ভর্তি চলছে
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="tel:+8801700000000"
                            className="inline-flex items-center gap-1.5 hover:text-[var(--color-brand-gold)] transition-colors"
                        >
                            <Phone className="w-3.5 h-3.5 text-[var(--color-brand-gold)]" />
                            <span className="font-medium tracking-wide">+৮৮০ ১৭০০-০০০০০০</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Brand Logo & Wordmark */}
                    <Link href="/" className="flex items-center gap-3 group">
                        {/* Minimalist Book + Compass SVG Mark */}
                        <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] flex items-center justify-center group-hover:border-[var(--color-brand-navy)] transition-colors">
                            <svg
                                viewBox="0 0 40 40"
                                className="w-7 h-7"
                                fill="none"
                                xmlns="http://w3.org"
                            >
                                {/* Open Book Base */}
                                <path
                                    d="M6 13C11 13 16 14.5 20 17.5C24 14.5 29 13 34 13V29C29 29 24 30.5 20 33C16 30.5 11 29 6 29V13Z"
                                    fill="#173B56"
                                />
                                {/* Compass Needle */}
                                <path d="M20 7L23.5 18L20 29L16.5 18L20 7Z" fill="#F2B84B" />
                                <circle cx="20" cy="18" r="2" fill="#FFFFFF" />
                                {/* Growth Spark */}
                                <path
                                    d="M20 3V5M14 6L15.5 7.5M26 6L24.5 7.5"
                                    stroke="#269B83"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-xl font-extrabold tracking-tight text-[var(--color-brand-navy)] leading-none">
                                ONNESHON
                            </span>
                            <span className="text-[11px] font-semibold tracking-[0.18em] text-[var(--color-brand-green)] uppercase mt-1">
                                Learning Center
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative py-2 text-[15px] font-medium transition-colors ${isActive
                                        ? "text-[var(--color-brand-navy)] font-semibold"
                                        : "text-[var(--color-text-muted)] hover:text-[var(--color-brand-navy)]"
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-brand-gold)] rounded-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right CTA Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/contact"
                            className="px-4 py-2.5 text-sm font-medium text-[var(--color-brand-navy)] hover:bg-[var(--color-bg-primary)] rounded-lg transition-colors"
                        >
                            যোগাযোগ
                        </Link>
                        <Link
                            href="/admission"
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-[var(--color-brand-navy)] hover:bg-[var(--color-brand-navy-dark)] rounded-lg transition-all shadow-xs"
                        >
                            <span>ভর্তি আবেদন</span>
                            <ArrowUpRight className="w-4 h-4 text-[var(--color-brand-gold)]" />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2.5 rounded-lg text-[var(--color-brand-navy)] hover:bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)]"
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Drawer */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[var(--color-bg-surface)] border-t border-[var(--color-border-subtle)] px-4 pt-3 pb-6 space-y-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-3.5 py-2.5 rounded-lg text-base font-medium ${isActive
                                    ? "bg-[var(--color-bg-primary)] text-[var(--color-brand-navy)] font-semibold border-l-4 border-[var(--color-brand-gold)]"
                                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-bg-primary)] hover:text-[var(--color-brand-navy)]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <div className="pt-4 mt-2 border-t border-[var(--color-border-subtle)] flex flex-col gap-2.5">
                        <Link
                            href="/admission"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full text-center py-3 rounded-lg bg-[var(--color-brand-navy)] text-white font-semibold text-sm"
                        >
                            অনলাইন ভর্তি আবেদন
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

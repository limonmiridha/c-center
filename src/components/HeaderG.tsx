"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { name: "হোম", href: "/" },
    { name: "আমাদের দর্শন", href: "/about" },
    { name: "ব্যাচ", href: "/batch" },
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
                            href="tel:+8801790153927"
                            className="inline-flex items-center gap-1.5 hover:text-[var(--color-brand-gold)] transition-colors"
                        >
                            <Phone className="w-3.5 h-3.5 text-[var(--color-brand-gold)]" />
                            <span className="font-medium tracking-wide">+৮৮০ ১৭৯০-১৫৩৯২৭</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Brand Logo & Wordmark */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/images/logo-bn-hr.png"
                            alt="Logo"
                            width={200}
                            height={40}
                        />
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

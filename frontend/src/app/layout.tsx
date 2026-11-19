import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri, Noto_Sans_Bengali, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import HeaderG from "@/components/HeaderG";
import Footer from "@/components/Footer";


const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Onneshon Learning Center | অন্বেষণ লার্নিং সেন্টার",
  description: "কৌতূহল, সৃজনশীলতা ও সমস্যা সমাধানের দক্ষতা বিকাশে বানারীপাড়ার আধুনিক শিক্ষাপ্রতিষ্ঠান।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${notoBengali.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <HeaderG />
        {children}
        <Footer />
      </body>
    </html>
  );
}

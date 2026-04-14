import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Clicksemrus — Result-Driven Digital Marketing Agency",
  description: "Clicksemrus helps brands grow online with SEO, Social Media, PPC, Web Design and Content Marketing strategies that deliver real ROI.",
  keywords: "digital marketing agency, SEO, social media marketing, PPC, web design, content marketing",
  openGraph: {
    title: "Clicksemrus — Digital Marketing Agency",
    description: "Result-driven digital marketing for ambitious brands.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-[var(--text-primary)] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

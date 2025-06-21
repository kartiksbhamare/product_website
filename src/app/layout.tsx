import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BookBot AI - WhatsApp Booking Bot for Salons",
  description: "Automate your salon bookings with our AI-powered WhatsApp bot. Increase efficiency, reduce no-shows, and grow your business with smart appointment management.",
  keywords: "salon booking, WhatsApp bot, AI assistant, appointment scheduling, beauty salon, hair salon, spa booking",
  authors: [{ name: "BookBot AI" }],
  creator: "BookBot AI",
  openGraph: {
    title: "BookBot AI - WhatsApp Booking Bot for Salons",
    description: "Automate your salon bookings with our AI-powered WhatsApp bot",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BookBot AI - WhatsApp Booking Bot for Salons",
    description: "Automate your salon bookings with our AI-powered WhatsApp bot",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gradient-to-br from-blush-50 to-deep-purple-50 min-h-screen`}>
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

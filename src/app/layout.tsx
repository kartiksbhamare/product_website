import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SalonSync - WhatsApp Booking Bot for Salons",
  description: "Automate your salon bookings with our AI-powered WhatsApp bot. Increase efficiency, reduce no-shows, and grow your business with smart appointment management.",
  keywords: "salon booking, WhatsApp bot, AI assistant, appointment scheduling, beauty salon, hair salon, spa booking",
  authors: [{ name: "SalonSync" }],
  creator: "SalonSync",
  openGraph: {
    title: "SalonSync - WhatsApp Booking Bot for Salons",
    description: "Automate your salon bookings with our AI-powered WhatsApp bot. Increase efficiency, reduce no-shows, and grow your business.",
    url: "https://salonsync.ai",
    siteName: "SalonSync",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SalonSync - AI-Powered Salon Booking Bot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SalonSync - WhatsApp Booking Bot for Salons",
    description: "Automate your salon bookings with our AI-powered WhatsApp bot.",
    images: ["/og-image.jpg"],
    creator: "@salonsync",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

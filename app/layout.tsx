import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MouseGlow } from "@/components/MouseGlow";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://skinduced.com.au"),
  title: {
    default: "SkinDuced | Luxury Aesthetic Clinic in Newcastle",
    template: "%s | SkinDuced"
  },
  description:
    "SkinDuced is a premium aesthetic clinic offering skin rejuvenation, hydro dermabrasion, microneedling, peels, LED therapy, and consultation-led skin plans.",
  keywords: [
    "SkinDuced",
    "aesthetic clinic Newcastle",
    "skin clinic Cameron Park",
    "skin rejuvenation",
    "hydro dermabrasion",
    "microneedling",
    "chemical peels"
  ],
  openGraph: {
    title: "SkinDuced | Luxury Aesthetic Clinic",
    description: "Luxury skin and aesthetic clinic experience with consultation-led treatment planning.",
    url: "https://skinduced.com.au",
    siteName: "SkinDuced",
    images: [
      {
        url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1600&auto=format&fit=crop",
        width: 1600,
        height: 900,
        alt: "Luxury aesthetic clinic treatment room"
      }
    ],
    locale: "en_AU",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <LoadingScreen />
        <MouseGlow />
        <div className="noise-overlay" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

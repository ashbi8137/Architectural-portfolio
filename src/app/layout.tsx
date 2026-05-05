import type { Metadata } from "next";
import { Tenor_Sans } from "next/font/google";
import "./globals.css";

const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tenor",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shamil Puthusseri Architects | Spaces that feel alive",
  description: "Contemporary architectural and interior design studio led by Ar Shamil P A.",
};

import SmoothScroll from "@/components/SmoothScroll";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import PageTransition from "@/components/PageTransition";

import Preloader from "@/components/Preloader";
import StatusBar from "@/components/StatusBar";
import ImageProtection from "@/components/ImageProtection";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={tenor.variable}>
      <body className="antialiased">
        <ImageProtection />
        <Preloader />
        <StatusBar />
        <SmoothScroll>
          <Navbar />
          <Grain />
          <PageTransition>
            {children}
          </PageTransition>
          <Contact />
        </SmoothScroll>
      </body>
    </html>
  );
}

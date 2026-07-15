// app/layout.tsx
import type { Metadata } from "next";
import { Fraunces, Inter, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://coronaadvanceddentistry.com"),
  title: "Corona Advanced Dentistry | Cosmetic, General & Emergency Care",
  description: "Trusted family dentist in Corona.",
  openGraph: {
    title: "Corona Advanced Dentistry | Cosmetic, General & Emergency Care",
    description: "Trusted family dentist in Corona.",
    images: [
      {
        url: "/images/corona-logo.png",
        alt: "Corona Advanced Dentistry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corona Advanced Dentistry | Cosmetic, General & Emergency Care",
    description: "Trusted family dentist in Corona.",
    images: ["/images/corona-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${dmSerif.className} ${fraunces.className} ${jetbrainsMono.className}`}>
      <body className="min-h-dvh overflow-x-hidden bg-bg-cream font-sans text-brand-primary antialiased flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

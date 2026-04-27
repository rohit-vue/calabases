// app/layout.tsx
import type { Metadata } from "next";
import { Fraunces, Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Calabasas Smiles Dentist | Cosmetic, General & Emergency Care",
  description: "Trusted family dentist in Calabasas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${dmSerif.className} ${fraunces.className}`}>
      <body className="min-h-dvh overflow-x-hidden bg-bg-cream font-sans text-brand-primary antialiased flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

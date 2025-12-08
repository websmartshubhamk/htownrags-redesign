import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display, Bebas_Neue } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "H-Town Rags Vintage Clothing - Hitchin's Premier Vintage Store",
  description: "Discover unique vintage clothing at H-Town Rags in Hitchin. Curated collection of retro fashion, designer pieces, and one-of-a-kind finds.",
  keywords: "vintage clothing, retro fashion, Hitchin, designer vintage, sustainable fashion",
  openGraph: {
    title: "H-Town Rags Vintage Clothing",
    description: "Hitchin's Premier Vintage Store",
    url: "https://htownragsvintageclothing.co.uk",
    siteName: "H-Town Rags",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${montserrat.variable} ${playfair.variable} ${bebas.variable}`}>
      <body className="flex min-h-screen flex-col font-body antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ThemeScript from "../components/ThemeScript";
import { ThemeProvider } from "../components/ThemeProvider";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-didot",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-adman",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Teraboulanger Phuket — Artisan French Bakery",
  description:
    "Teraboulanger brings authentic French bakery craftsmanship to Phuket. Handmade pastries, artisan breads, and premium café experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text font-sans antialiased">
        <ThemeProvider defaultMode="dark">
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

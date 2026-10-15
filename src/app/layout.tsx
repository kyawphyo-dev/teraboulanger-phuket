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

const SITE_URL = "https://teraboulanger.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Teraboulanger Phuket — Artisan French Bakery",
    template: "%s | Teraboulanger Phuket",
  },
  description:
    "Teraboulanger brings authentic French bakery craftsmanship to Phuket. Handmade pastries, artisan breads, and premium café experience.",
  keywords: [
    "Teraboulanger",
    "French bakery Phuket",
    "artisan bread Phuket",
    "croissant Phuket",
    "French pastries Thailand",
    "bakery Phuket",
    "viennoiserie Phuket",
  ],
  authors: [{ name: "Teraboulanger" }],
  creator: "Teraboulanger",
  publisher: "Teraboulanger",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Teraboulanger Phuket",
    title: "Teraboulanger Phuket — Artisan French Bakery",
    description:
      "Teraboulanger brings authentic French bakery craftsmanship to Phuket. Handmade pastries, artisan breads, and premium café experience.",
    images: [
      {
        url: "/Brand_Identity/Logo/master_logo_orange.png",
        width: 968,
        height: 563,
        alt: "Teraboulanger Phuket logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teraboulanger Phuket — Artisan French Bakery",
    description:
      "Teraboulanger brings authentic French bakery craftsmanship to Phuket. Handmade pastries, artisan breads, and premium café experience.",
    images: ["/Brand_Identity/Logo/master_logo_orange.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/Brand_Identity/Logo/logo_symbol_orange.png",
    shortcut: "/Brand_Identity/Logo/logo_symbol_orange.png",
    apple: "/Brand_Identity/Logo/logo_symbol_orange.png",
  },
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

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Discover our selection of premium French croissants, pastries, cakes, and beverages at Tera Boulanger Phuket.",
  openGraph: {
    title: "Our Menu | Tera Boulanger Phuket",
    description: "A taste of Paris, in Phuket. Explore our artisan bakery menu.",
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

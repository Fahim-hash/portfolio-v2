import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fahim — Graphic Designer & Creative Technologist",
  description: "Portfolio of Syed Fahim Muddasir — visual identities, digital experiences and creative technology.",
  keywords: ["Fahim", "Syed Fahim Muddasir", "graphic designer", "creative technologist", "branding", "UI design"],
  openGraph: { title: "Fahim — Designer / Creative Technologist", description: "Selected work, experiments and ideas by Fahim.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
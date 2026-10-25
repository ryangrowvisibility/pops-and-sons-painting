import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const head = Archivo({ variable: "--font-head", subsets: ["latin"], weight: ["700", "800"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pops-and-sons-painting.growlocalvisibility.com"),
  title: "Pops and Sons Painting | House Painters in Fair Oaks, Orangevale & Sacramento",
  description:
    "Family painting company led by Manny. Exterior and interior house painting, cabinet painting, fences, drywall texture and pre-sale refreshes in Fair Oaks, Orangevale and the Sacramento area. 5.0 stars from 19 Google reviews. Call (530) 364-8635.",
  openGraph: {
    title: "Pops and Sons Painting | Honest Estimates, Family Craftsmanship",
    description: "Five-star house painting from Manny and his crew. Call (530) 364-8635 for a written estimate.",
    type: "website",
    locale: "en_US",
    images: ["/images/p3.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}

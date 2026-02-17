import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vistaley — Fund Management & Portfolio Intelligence",
    template: "%s | Vistaley",
  },
  description:
    "The two-sided platform connecting fund managers and portfolio companies. VentureLens for GPs. Harbour for founders. Built for emerging markets.",
  metadataBase: new URL("https://vistaley.com"),
  openGraph: {
    title: "Vistaley — Fund Management & Portfolio Intelligence",
    description:
      "The two-sided platform connecting fund managers and portfolio companies. Built for emerging markets.",
    type: "website",
    url: "https://vistaley.com",
    siteName: "Vistaley",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vistaley — Fund Management & Portfolio Intelligence",
    description:
      "The two-sided platform connecting fund managers and portfolio companies. Built for emerging markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/vistaley-favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

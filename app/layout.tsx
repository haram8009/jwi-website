import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "James Worldwide",
  description:
    "Trusted logistics partner for ocean, air, and inland shipping worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}

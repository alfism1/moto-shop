import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WishlistProvider } from "@/context/WishlistContext";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "SecondGear | Premium Pre-Owned Motorcycles",
  description: "Find your dream ride at SecondGear. Expertly curated selection of secondhand motorcycles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <WishlistProvider>
          <Navbar />
          <main className="flex-grow pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
          <Toaster />
        </WishlistProvider>
      </body>
    </html>
  );
}

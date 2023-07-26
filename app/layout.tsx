import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Showwand - Unleash Your Thread Wizardry",
  description: "Your Companion for Effortless Posting and Thread Management.",
  keywords:
    "Showwand, Showwcase, Showwand Browser Extension, Showwand Extension, Showwand Chrome Extension, Showwand Firefox Extension, Showwand Edge Extension, Showwand Safari Extension, Showwand Opera Extension, Showwand Extension Download, Showwand Extension Installation, Showwand Extension Guide, Showwand Extension Documentation, Showwand Extension Features, Showwand Extension",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="mx-auto max-w-7xl p-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

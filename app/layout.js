import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Showwand - Unleash Your Thread Wizardry",
  description:
    "Your Companion for Effortless Posting and Thread Management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="mx-auto max-w-7xl p-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}

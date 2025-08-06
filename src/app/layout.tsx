import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Morrison - Smarter Writing Starts Here",
  description: "Track your words. Build your habit. Morrison makes writing simple, focused, and rewarding.",
};


import Link from "next/link";
// Inside your component JSX:
<Link href="/privacy" className="text-sm text-[#8b7355] underline hover:text-[#a68a64]">
  Privacy Policy
</Link>


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  );
}

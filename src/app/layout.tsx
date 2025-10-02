import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SKY IPTV — Stream Beyond Limits",
  description: "SKY IPTV offers premium live TV streaming with access to thousands of channels, movies, and shows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[linear-gradient(180deg,_#0a0a0a,_#0b0f1a)] text-white`}
      >
        {children}
      </body>
    </html>
  );
}

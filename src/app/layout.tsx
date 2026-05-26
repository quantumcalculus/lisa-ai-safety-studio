import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LISA AI Safety Studio | Project Showcase",
  description:
    "Explore projects built by participants of LISA's AI Safety Studio — tools, research, and frameworks advancing the frontier of AI safety.",
  openGraph: {
    title: "LISA AI Safety Studio | Project Showcase",
    description:
      "Explore projects built by participants of LISA's AI Safety Studio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

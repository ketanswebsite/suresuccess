import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SureSuccess | CISI & CII Exam Preparation",
  description:
    "Smart exam preparation for CISI and CII financial certification exams. AI-powered learning, comprehensive question banks, and progress tracking.",
  keywords: "CISI, CII, exam prep, financial certification, R01, R02, R05, investment, securities",
  metadataBase: new URL("https://www.suresuccess.co.uk"),
  openGraph: {
    title: "SureSuccess | CISI & CII Exam Preparation",
    description: "Smart exam preparation for CISI and CII financial certification exams.",
    siteName: "SureSuccess",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.className}`}>
      <body className="min-h-full flex flex-col">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}

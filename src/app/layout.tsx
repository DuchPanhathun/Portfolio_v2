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
  title: "Duch Panha Thun | Portfolio",
  description: "Professional portfolio showcasing web development, AI applications, data interpretation & visualization projects by Duch Panha Thun.",
  keywords: ["web developer", "AI applications", "data visualization", "portfolio", "Cambodia", "frontend developer", "react", "next.js"],
  authors: [{ name: "Duch Panha Thun" }],
  creator: "Duch Panha Thun",
  openGraph: {
    title: "Duch Panha Thun | Portfolio",
    description: "Professional portfolio showcasing web development, AI applications, data interpretation & visualization projects.",
    url: "https://duchpanhathun.com", // Replace with your actual domain when available
    siteName: "Duch Panha Thun Portfolio",
    images: [
      {
        url: "/og-image.jpg", // The JPEG version we generated
        width: 1200,
        height: 630,
        alt: "Duch Panha Thun Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duch Panha Thun | Portfolio",
    description: "Professional portfolio showcasing web development, AI applications, data interpretation & visualization projects.",
    images: ["/og-image.jpg"], // Same image as OpenGraph
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://duchpanhathun.com"), // Replace with your actual domain
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180' },
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
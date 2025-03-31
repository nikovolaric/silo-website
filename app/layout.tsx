import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import GoogleAnalytics from "./_components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const raj = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-raj",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Silo Jeličić d.o.o.",
    default: "Welcome | Silo Jeličić d.o.o.",
  },
  keywords: [
    "transport",
    "silo",
    "silo transport",
    "Silo Jeličić",
    "Silo Jeličić d.o.o.",
    "dry bulk transport",
    "transport Slovenija",
    "consulting",
    "vakuum silo",
  ],
  description:
    "We are leading dry bulk transporter dedicated to needs of our partners since 2001.",
  authors: [{ name: "LAMA Strategies", url: "https://www.lamastrategies.com" }],
  openGraph: {
    title: "Silo Jeličić d.o.o.",
    description:
      "We are leading dry bulk transporter dedicated to needs of our partners since 2001.",
    images: [
      {
        url: "https://www.silo-jelicic.com/naslovna.png",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Silo Jeličić",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raj.variable} scroll-smooth`}>
      <GoogleAnalytics />
      <body className={`${inter.className} bg-neutral`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

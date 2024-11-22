import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
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
  description:
    "We are leading dry bulk transporter dedicated to needs of our partners since 2001.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raj.variable} scroll-smooth`}>
      <body className={`${inter.className} bg-neutral`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

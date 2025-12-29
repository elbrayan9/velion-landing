import type { Metadata } from "next";
import { Inter, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "VELION",
  description:
    "Agentes de IA que aprenden tu negocio. Automatización para Pymes, Salud, Gastronomía y más.",
};

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} ${newsreader.variable} font-sans antialiased bg-black text-white selection:bg-cyan-500/30`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

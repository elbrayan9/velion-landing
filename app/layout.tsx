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
  title: {
    default: "VELION",
    template: "%s | VELION",
  },
  description:
    "Automatiza tu empresa con Agentes de Inteligencia Artificial. VELION crea sistemas autónomos que gestionan ventas, turnos y procesos mientras duermes.",
  keywords: [
    "IA para empresas",
    "Agentes AI",
    "Automatización de negocios",
    "Chatbots inteligentes",
    "Gemini AI",
    "Software Argentina",
    "Transformación digital",
  ],
  authors: [{ name: "Brian Oviedo", url: "https://velion.ai" }],
  creator: "Brian Oviedo",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://velion.ai",
    title: "VELION",
    description:
      "Sistemas autónomos que trabajan por ti. Descubre el poder de los Agentes IA de VELION.",
    siteName: "VELION AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "VELION | Agentes de IA",
    description: "Automatización inteligente para tu negocio.",
    creator: "@velion_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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

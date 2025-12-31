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
  title: "VELION | Agencia de Automatización con IA",
  description:
    "Pon tu negocio en piloto automático. Chatbots de WhatsApp, Agendamiento y Sistemas de Gestión Inteligentes para PyMEs.",
  keywords: [
    "automatización",
    "IA",
    "chatbot",
    "whatsapp business",
    "agencia de inteligencia artificial",
    "n8n",
    "pymes argentina",
  ],
  openGraph: {
    title: "VELION | Agencia de Automatización con IA",
    description:
      "Pon tu negocio en piloto automático. Chatbots de WhatsApp, Agendamiento y Sistemas de Gestión Inteligentes para PyMEs.",
    url: "https://velion-landing.vercel.app",
    siteName: "VELION AI Agency",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VELION | Agencia de Automatización con IA",
    description:
      "Pon tu negocio en piloto automático. Chatbots de WhatsApp, Agendamiento y Sistemas de Gestión Inteligentes para PyMEs.",
  },
};

import { Providers } from "./providers";

import { Navbar } from "./components/Navbar";

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
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

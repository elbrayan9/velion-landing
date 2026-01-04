"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Calendar,
  FileSpreadsheet,
  Mail,
  CreditCard,
  Database,
} from "lucide-react";

export const IntegrationsBanner = () => {
  const integrations = [
    { name: "WhatsApp", icon: Smartphone },
    { name: "Google Calendar", icon: Calendar },
    { name: "Google Sheets", icon: FileSpreadsheet },
    { name: "Excel", icon: Database },
    { name: "Gmail", icon: Mail },
    { name: "Mercado Pago", icon: CreditCard },
  ];

  return (
    <section className="py-10 bg-zinc-950 border-y border-zinc-800/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase mb-8">
          Se integra con tus herramientas
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {integrations.map((item, i) => (
            <div key={i} className="flex items-center gap-2 group">
              <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
              <span className="text-zinc-400 font-medium group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

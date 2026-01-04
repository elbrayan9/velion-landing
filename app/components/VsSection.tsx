"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { AnimatedTitle } from "./AnimatedTitle";

export const VsSection = () => {
  const rows = [
    {
      aspect: "Costo mensual",
      employee: "$400.000+",
      velion: "$85.000",
      highlight: true,
    },
    {
      aspect: "Disponibilidad",
      employee: "8-9 horas",
      velion: "24/7",
      highlight: true,
    },
    { aspect: "Vacaciones", employee: "21 días/año", velion: "Nunca" },
    { aspect: "Licencias", employee: "Sí", velion: "No" },
    {
      aspect: "Tiempo respuesta",
      employee: "Minutos/Horas",
      velion: "3 segundos",
      highlight: true,
    },
    { aspect: "Capacitación", employee: "Semanas", velion: "Instantánea" },
    { aspect: "Errores humanos", employee: "Frecuentes", velion: "Cero" },
    {
      aspect: "Atiende múltiples",
      employee: "1-2 a la vez",
      velion: "Ilimitados",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedTitle
            title="¿Contratar empleado o"
            highlight="VELION?"
            className="mb-6"
          />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Los números hablan solos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30">
          <div className="grid grid-cols-3 bg-zinc-900/80 p-6 border-b border-zinc-800">
            <div className="font-bold text-zinc-400">Aspecto</div>
            <div className="font-bold text-white text-center">👤 Empleado</div>
            <div className="font-bold text-emerald-400 text-center">
              🤖 VELION
            </div>
          </div>

          <div className="divide-y divide-zinc-800/50">
            {rows.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`grid grid-cols-3 p-6 items-center hover:bg-white/5 transition-colors ${
                  row.highlight ? "bg-emerald-950/10" : ""
                }`}
              >
                <div className="text-zinc-300 font-medium">{row.aspect}</div>
                <div className="text-zinc-400 text-center">{row.employee}</div>
                <div
                  className={`text-center font-bold ${
                    row.highlight ? "text-emerald-400" : "text-white"
                  }`}
                >
                  {row.velion}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-6 bg-zinc-900/80 border-t border-zinc-800 text-center">
            <p className="text-zinc-400 text-sm">
              Un empleado cuesta{" "}
              <span className="text-white font-bold">$400.000+/mes</span> y
              trabaja 8 horas. VELION cuesta{" "}
              <span className="text-emerald-400 font-bold">$85.000/mes</span> y
              trabaja 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

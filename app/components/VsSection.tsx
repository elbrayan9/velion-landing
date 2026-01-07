"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  XCircle,
  CheckCircle2,
  Clock,
  DollarSign,
  X,
  Check,
} from "lucide-react";
import { AnimatedTitle } from "./AnimatedTitle";
import SonarBackground from "./SonarBackground";

export const VsSection = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <SonarBackground opacity={0.3} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedTitle
            title="La diferencia es"
            highlight="brutal"
            className="mb-6"
          />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Mismo negocio, dos realidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* SIN VELION */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 rounded-2xl border border-red-500/30 overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-red-500/10 bg-red-500/5 flex items-center gap-3">
              <XCircle className="text-red-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-white">
                SIN AUTOMATIZACIÓN
              </h3>
            </div>
            <div className="p-8 space-y-6 flex-1">
              {[
                "Mensajes sin responder hasta el día siguiente",
                "Redes sociales abandonadas hace semanas",
                "Reportes hechos a mano cada lunes (3 horas)",
                "Tu equipo hace tareas repetitivas todo el día",
                "Clientes que se van a la competencia",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <X className="text-red-500/50 w-5 h-5 mt-0.5 shrink-0" />
                  <p className="text-zinc-400">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-red-950/30 border-t border-red-500/20 text-center">
              <p className="text-red-400 font-bold flex items-center justify-center gap-2">
                Tiempo perdido. Plata perdida.
              </p>
            </div>
          </motion.div>

          {/* CON VELION */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 rounded-2xl border border-cyan-500/30 overflow-hidden flex flex-col relative"
          >
            <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none" />
            <div className="p-6 border-b border-cyan-500/10 bg-cyan-500/10 flex items-center gap-3 relative z-10">
              <CheckCircle2 className="text-cyan-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-white">CON VELION</h3>
            </div>
            <div className="p-8 space-y-6 flex-1 relative z-10">
              {[
                "Respuestas instantáneas 24/7",
                "Contenido publicándose solo todos los días",
                "Reportes automáticos en tu email cada lunes",
                "Tu equipo enfocado en lo que importa",
                "Clientes atendidos y satisfechos",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <Check className="text-cyan-500 w-5 h-5 mt-0.5 shrink-0" />
                  <p className="text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-cyan-950/30 border-t border-cyan-500/20 text-center relative z-10">
              <p className="text-cyan-400 font-bold flex items-center justify-center gap-2">
                Todo automático. Vos libre.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

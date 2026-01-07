"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, Clock, DollarSign } from "lucide-react";
import { AnimatedTitle } from "./AnimatedTitle";
import SonarBackground from "./SonarBackground";

export const ComparisonSection = () => {
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
            Mismo cliente, dos realidades completamente diferentes.
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
              <h3 className="text-xl font-bold text-white">SIN VELION</h3>
            </div>
            <div className="p-8 space-y-6 flex-1">
              <div className="flex gap-4">
                <div className="text-zinc-500 font-mono text-sm pt-1">
                  23:47
                </div>
                <div>
                  <p className="text-zinc-300 font-medium">Cliente escribe:</p>
                  <p className="text-zinc-400 italic">
                    "Hola, ¿tienen stock del producto X?"
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 flex justify-center pt-1">
                  <Clock className="text-zinc-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-zinc-400">
                    Vos estás durmiendo... El mensaje queda en "visto" hasta
                    mañana
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-zinc-500 font-mono text-sm pt-1">
                  09:15
                </div>
                <div>
                  <p className="text-red-400 font-medium">Ya es tarde.</p>
                  <p className="text-zinc-400">
                    El cliente compró en la competencia
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-red-950/30 border-t border-red-500/20 text-center">
              <p className="text-red-400 font-bold flex items-center justify-center gap-2">
                <DollarSign className="w-4 h-4" /> Venta perdida: $45.000
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
              <div className="flex gap-4">
                <div className="text-zinc-500 font-mono text-sm pt-1">
                  23:47
                </div>
                <div>
                  <p className="text-zinc-300 font-medium">Cliente escribe:</p>
                  <p className="text-zinc-400 italic">
                    "Hola, ¿tienen stock del producto X?"
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-cyan-500 font-mono text-sm pt-1">
                  23:47
                </div>
                <div>
                  <p className="text-cyan-400 font-medium">
                    VELION responde (3 seg):
                  </p>
                  <p className="text-zinc-300">
                    "¡Sí! Tenemos 5 unidades. ¿Te paso el precio?"
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-cyan-500 font-mono text-sm pt-1">
                  23:52
                </div>
                <div>
                  <p className="text-cyan-400 font-medium">Venta cerrada.</p>
                  <p className="text-zinc-400">
                    El agente envió precio, link de pago y confirmó
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-cyan-950/30 border-t border-cyan-500/20 text-center relative z-10">
              <p className="text-cyan-400 font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Venta cerrada: $45.000
                (mientras dormías)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

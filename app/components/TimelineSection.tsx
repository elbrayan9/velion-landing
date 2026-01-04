"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Settings, FlaskConical, Rocket } from "lucide-react";
import { AnimatedTitle } from "./AnimatedTitle";

export const TimelineSection = () => {
  const steps = [
    {
      day: "Día 1-2",
      title: "Auditoría",
      desc: "Analizamos tu negocio, flujos de venta y puntos de fricción.",
      icon: Search,
    },
    {
      day: "Día 3-5",
      title: "Construcción",
      desc: "Programamos tu agente con tu vocabulario y políticas comerciales.",
      icon: Settings,
    },
    {
      day: "Día 6-7",
      title: "Pruebas",
      desc: "Testing intensivo para asegurar que todo funcione perfecto.",
      icon: FlaskConical,
    },
    {
      day: "Día 8",
      title: "¡En Vivo!",
      desc: "Tu agente empieza a atender clientes mientras vos descansás.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-800">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <AnimatedTitle
            title="En 8 días tenés tu agente"
            highlight="funcionando"
            className="mb-6"
          />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Proceso claro, sin vueltas, llave en mano.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-zinc-800 -z-10" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative bg-zinc-950 md:bg-transparent p-6 md:p-0 rounded-2xl border md:border-0 border-zinc-800"
              >
                <div className="w-24 h-24 mx-auto bg-zinc-900 rounded-full border-4 border-zinc-950 flex items-center justify-center mb-6 relative z-10 shadow-xl">
                  <step.icon className="w-10 h-10 text-emerald-400" />
                  <div className="absolute -bottom-3 bg-zinc-800 text-zinc-300 text-xs font-bold px-3 py-1 rounded-full">
                    {step.day}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

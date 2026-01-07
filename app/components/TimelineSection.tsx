"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Settings, Rocket } from "lucide-react";
import { AnimatedTitle } from "./AnimatedTitle";
import SonarBackground from "./SonarBackground";

export const TimelineSection = () => {
  const steps = [
    {
      day: "Día 1-2",
      title: "Diagnóstico",
      desc: "Analizamos tu negocio y encontramos qué automatizar primero.",
      icon: Search,
    },
    {
      day: "Día 3-4",
      title: "Diseño",
      desc: "Diseñamos la solución perfecta para tu caso.",
      icon: PenTool,
    },
    {
      day: "Día 5-7",
      title: "Construcción",
      desc: "Armamos, probamos y ajustamos hasta que funcione perfecto.",
      icon: Settings,
    },
    {
      day: "Día 8+",
      title: "En vivo",
      desc: "Activamos todo y te capacitamos. Soporte incluido.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-800 overflow-hidden">
      <SonarBackground opacity={0.3} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <AnimatedTitle
            title="¿Cómo es el"
            highlight="proceso?"
            className="mb-6"
          />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            De la idea a la automatización funcionando.
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
                  <step.icon className="w-10 h-10 text-cyan-400" />
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

          <div className="text-center mt-12">
            <p className="text-zinc-500 text-sm italic">
              Proyectos más complejos pueden tomar 2-4 semanas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

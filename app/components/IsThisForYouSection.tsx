"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { AnimatedTitle } from "./AnimatedTitle";
import { Button } from "./Button";
import SonarBackground from "./SonarBackground";

export const IsThisForYouSection = () => {
  const checks = [
    "Perdés tiempo respondiendo las mismas preguntas",
    "Tus redes sociales están abandonadas",
    "Tu equipo carga datos manualmente a planillas",
    "Los clientes se quejan de demoras en respuestas",
    "Generás reportes a mano cada semana/mes",
    "Tenés procesos que dependen de una sola persona",
    "Pagás sueldos por tareas que podría hacer un bot",
    "Tu negocio no atiende fuera de horario",
  ];

  return (
    <section className="py-24 bg-black relative border-y border-zinc-900 overflow-hidden">
      <SonarBackground opacity={0.3} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedTitle
            title="¿Esto es para"
            highlight="vos?"
            className="mb-6"
          />
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Si te identificás con algo de esto, podemos ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {checks.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/30 transition-colors"
            >
              <div className="p-1 rounded-full bg-cyan-500/10 text-cyan-400 shrink-0">
                <Check size={16} strokeWidth={3} />
              </div>
              <p className="text-zinc-300 font-medium">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="shiny" href="#contacto" className="shiny-cta">
            Si marcaste aunque sea uno, hablemos <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

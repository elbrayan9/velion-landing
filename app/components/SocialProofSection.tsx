"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, Target, HeartHandshake } from "lucide-react";
import { Button } from "./Button";
import SonarBackground from "./SonarBackground";

export const SocialProofSection = () => {
  const cards = [
    {
      title: "Tecnología de punta",
      desc: "Usamos las mismas herramientas que empresas como Google, Meta y OpenAI.",
      icon: Wrench,
    },
    {
      title: "Enfoque en resultados",
      desc: "No cobramos por hacer, cobramos por resolver. Si no funciona, lo arreglamos.",
      icon: Target,
    },
    {
      title: "Soporte real",
      desc: "Nada de tickets eternos. Hablás directo con el equipo que armó tu automatización.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-24 bg-black border-t border-white/10 relative z-10 overflow-hidden">
      <SonarBackground opacity={0.3} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-zinc-900/50 p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-zinc-900 rounded-lg text-cyan-400">
                  <card.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Todavía con dudas?
          </h3>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-lg">
            Te mostramos cómo funcionaría en TU negocio. Sin compromiso.
          </p>
          <Button
            variant="shiny"
            href="https://wa.me/5493541215803?text=Hola%20Brian,%20quiero%20una%20demo%20personalizada%20gratis"
            target="_blank"
            rel="noopener noreferrer"
            className="shiny-cta"
          >
            Agendar demo gratis <ArrowRight size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

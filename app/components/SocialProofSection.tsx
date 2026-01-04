"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, BrainCircuit, Server, ArrowRight } from "lucide-react";

export const SocialProofSection = () => {
  const metrics = [
    {
      value: "+500",
      label: "Conversaciones de prueba",
      desc: "Nuestro agente demo ha atendido más de 500 consultas sin intervención humana.",
      icon: MessageCircle,
    },
    {
      value: "+2 años",
      label: "Desarrollando con IA",
      desc: "Experiencia construyendo sistemas de automatización con inteligencia artificial.",
      icon: BrainCircuit,
    },
    {
      value: "99.9%",
      label: "Uptime garantizado",
      desc: "Infraestructura en la nube con redundancia y monitoreo 24/7.",
      icon: Server,
    },
  ];

  return (
    <section className="py-24 bg-black border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-zinc-900/50 p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-zinc-900 rounded-lg text-emerald-400">
                  <metric.icon size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {metric.value}
                  </h3>
                  <p className="text-zinc-400 text-sm font-medium">
                    {metric.label}
                  </p>
                </div>
              </div>
              <p className="text-zinc-500 leading-relaxed">{metric.desc}</p>
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
            Te hacemos una demo personalizada gratis para tu negocio. Vemos tu
            caso, te mostramos cómo funcionaría, sin compromiso.
          </p>
          <a
            href="https://wa.me/5493541215803?text=Hola%20Brian,%20quiero%20una%20demo%20personalizada%20gratis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-emerald-900/20 hover:scale-105"
          >
            Quiero mi Demo Gratis <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

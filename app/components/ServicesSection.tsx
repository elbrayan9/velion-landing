"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Share2, FileSpreadsheet, Puzzle } from "lucide-react";
import { AnimatedTitle } from "./AnimatedTitle";
import SonarBackground from "./SonarBackground";

export const ServicesSection = () => {
  const services = [
    {
      title: "Atención al Cliente",
      icon: MessageCircle,
      features: [
        "Chatbots para WhatsApp e Instagram",
        "Respuestas automáticas 24/7",
        "Agendamiento de turnos/citas",
        "Calificación de leads automática",
      ],
      highlight: "Nunca más dejes un cliente en visto",
    },
    {
      title: "Redes Sociales",
      icon: Share2,
      features: [
        "Publicación automática de contenido",
        "Respuestas a comentarios con IA",
        "DMs automáticos en Instagram",
        "Generación de contenido con IA",
        "Reportes de métricas",
      ],
      highlight: "Tu marca activa 24/7 sin esfuerzo",
    },
    {
      title: "Administración y Procesos",
      icon: FileSpreadsheet,
      features: [
        "Facturación automática",
        "Carga de datos a sistemas/ERPs",
        "Generación de reportes",
        "Control de stock y alertas",
        "Envío de emails y recordatorios",
      ],
      highlight: "Tu equipo libre para lo importante",
    },
    {
      title: "Soluciones a Medida",
      icon: Puzzle,
      features: [
        "Integraciones entre sistemas",
        "Flujos de trabajo personalizados",
        "Automatización de cualquier proceso",
        "Si lo podés explicar, lo podemos automatizar",
      ],
      highlight: "¿Tenés un proceso tedioso? Lo resolvemos",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      <SonarBackground opacity={0.3} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedTitle
            title="¿Qué"
            highlight="automatizamos?"
            className="mb-6"
          />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Si es repetitivo, lo hacemos automático.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/80 hover:border-cyan-500/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-zinc-800 group-hover:border-cyan-500/30">
                <service.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, j) => (
                  <li
                    key={j}
                    className="text-zinc-400 text-sm flex items-start gap-2"
                  >
                    <span className="text-cyan-500/50 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-sm font-medium text-cyan-400">
                {service.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

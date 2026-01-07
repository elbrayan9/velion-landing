"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, Zap } from "lucide-react";
import { AnimatedTitle } from "./AnimatedTitle";
import SonarBackground from "./SonarBackground";

export const MetricsSection = () => {
  const metrics = [
    {
      value: "+40%",
      label: "Tasa de Conversión",
      sub: "Respondiendo al instante",
      icon: TrendingUp,
    },
    {
      value: "20hs",
      label: "Ahorradas por Semana",
      sub: "En tareas repetitivas",
      icon: Clock,
    },
    {
      value: "24/7",
      label: "Atención Activa",
      sub: "Sin turnos ni feriados",
      icon: Zap,
    },
    {
      value: "100%",
      label: "Seguimiento",
      sub: "A cada cliente potencial",
      icon: Users,
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <SonarBackground opacity={0.3} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedTitle
            title="Resultados que"
            highlight="importan"
            className="mb-6"
          />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            No es magia, es eficiencia pura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-950/50 border border-zinc-800 p-8 rounded-2xl text-center hover:border-cyan-500/30 transition-colors group"
            >
              <div className="w-12 h-12 mx-auto bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
                <metric.icon className="w-6 h-6 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">
                {metric.value}
              </h3>
              <p className="text-zinc-300 font-medium mb-1">{metric.label}</p>
              <p className="text-zinc-500 text-sm">{metric.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Clock, TrendingUp, MessageSquare } from "lucide-react";
import { AnimatedTitle } from "./AnimatedTitle";

export const MetricsSection = () => {
  const metrics = [
    {
      value: "3 seg",
      label: "Tiempo de respuesta promedio",
      sub: "Tu competencia tarda horas",
      icon: Zap,
    },
    {
      value: "24/7",
      label: "Disponibilidad total",
      sub: "8,760 horas al año",
      icon: Clock,
    },
    {
      value: "40+ hs",
      label: "Ahorro semanal",
      sub: "En atención repetitiva",
      icon: TrendingUp,
    },
    {
      value: "0",
      label: "Clientes en 'visto'",
      sub: "Todos reciben respuesta",
      icon: MessageSquare,
    },
  ];

  return (
    <section className="py-24 bg-zinc-900 relative border-t border-zinc-800">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedTitle
            title="Resultados que se"
            highlight="miden"
            className="mb-6"
          />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            No prometemos magia. Prometemos números.
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
              className="bg-zinc-950/50 border border-zinc-800 p-8 rounded-2xl text-center hover:border-emerald-500/30 transition-colors group"
            >
              <div className="w-12 h-12 mx-auto bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
                <metric.icon className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
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

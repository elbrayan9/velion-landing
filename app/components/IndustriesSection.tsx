"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Utensils,
  Briefcase,
  ShoppingBag,
  Car,
  Plane,
  Dumbbell,
} from "lucide-react";
import { AnimatedTitle } from "./AnimatedTitle";
import SonarBackground from "./SonarBackground";

export const IndustriesSection = () => {
  const industries = [
    { name: "Inmobiliarias", icon: Building2 },
    { name: "Salud y Clínicas", icon: Stethoscope },
    { name: "Gastronomía", icon: Utensils },
    { name: "Servicios Prof.", icon: Briefcase },
    { name: "E-commerce", icon: ShoppingBag },
    { name: "Automotriz", icon: Car },
    { name: "Turismo", icon: Plane },
    { name: "Fitness", icon: Dumbbell },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <SonarBackground opacity={0.3} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedTitle
            title="Funciona en tu"
            highlight="industria"
            className="mb-6"
          />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Cada industria tiene sus procesos. Los conocemos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 hover:bg-cyan-950/20 transition-all group flex items-center gap-3 cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-950 flex items-center justify-center group-hover:scale-110 transition-transform text-zinc-400 group-hover:text-cyan-400 shrink-0">
                <item.icon size={20} />
              </div>
              <span className="text-zinc-300 font-medium text-sm group-hover:text-white transition-colors">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-zinc-500 text-sm font-medium mb-8">
            ¿No ves tu rubro? Si tiene procesos repetitivos, lo automatizamos.
          </p>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-12 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl p-1 bg-linear-to-r from-emerald-500/50 via-emerald-400/50 to-emerald-600/50"
        >
          <div className="bg-zinc-900 rounded-[22px] p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 text-emerald-400">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Garantía de Resultados
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mb-6">
                Si en 30 días no ves mejoras en tu atención al cliente, te
                devolvemos el 100% del setup.
              </p>
              <p className="text-emerald-400/80 font-medium text-sm uppercase tracking-wider">
                Sin letra chica. Sin preguntas. Si no funciona, no pagás.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

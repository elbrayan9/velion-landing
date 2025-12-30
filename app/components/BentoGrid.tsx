"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Share2, ShieldCheck, ArrowRight } from "lucide-react";

const BentoCard = ({
  title,
  description,
  icon: Icon,
  className = "",
  delay = 0,
  href,
}: {
  title: string;
  description: string;
  icon: any;
  className?: string;
  delay?: number;
  href: string;
}) => {
  const divRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.a
      href={href}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`spotlight-card group relative flex flex-col p-8 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 ${className}`}
    >
      {/* Spotlight Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
        }}
      />
      {/* Spotlight Border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          maskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black, transparent)`,
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 w-fit group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-6 h-6 text-cyan-400" />
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-white mb-4 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        <p className="text-base text-white/50 leading-relaxed mb-8 font-light grow">
          {description}
        </p>

        <div className="flex items-center gap-2 text-sm font-medium text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Saber más <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.a>
  );
};

export default function BentoGrid() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white mb-6">
            Soluciones de{" "}
            <span className="text-cyan-400 font-serif italic">
              Alto Impacto
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light text-lg">
            Infraestructura de automatización diseñada para escalar operaciones
            sin aumentar costos fijos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <BentoCard
            title="Agentes Autónomos"
            description="Bots inteligentes con Gemini Flash que manejan atención al cliente 24/7, califican leads y agendan reuniones automáticamente."
            icon={MessageSquare}
            delay={0.1}
            href="#contacto"
          />
          <BentoCard
            title="Workflows n8n"
            description="Orquestación de procesos complejos. Conectamos tu CRM, ERP y herramientas de marketing para eliminar tareas manuales."
            icon={Share2}
            delay={0.2}
            href="#contacto"
          />
          <BentoCard
            title="Consultoría Estratégica"
            description="Auditoría profunda de tus operaciones actuales para identificar cuellos de botella y oportunidades de automatización con IA."
            icon={ShieldCheck}
            delay={0.3}
            href="#contacto"
          />
        </div>
      </div>
    </section>
  );
}

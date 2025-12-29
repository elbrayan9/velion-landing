"use client";

import {
  Building,
  Stethoscope,
  Utensils,
  Briefcase,
  ShoppingBag,
} from "lucide-react";

const INDUSTRIES = [
  {
    id: 0,
    label: "Inmobiliaria",
    icon: Building,
    title: "Agente de Bienes Raíces",
    description:
      "Automatice la calificación de inquilinos, agende visitas coordinadas con Google Calendar y envíe fichas técnicas de propiedades por WhatsApp sin intervención humana.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    id: 1,
    label: "Salud",
    icon: Stethoscope,
    title: "Asistente Médico Virtual",
    description:
      "Confirma turnos automáticamente para reducir el ausentismo, responde dudas pre-operatorias frecuentes y gestiona la reprogramación de citas las 24hs.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    id: 2,
    label: "Gastronomía",
    icon: Utensils,
    title: "Gestor de Pedidos & Delivery",
    description:
      "Toma pedidos complejos por WhatsApp interpretando audios, gestiona el menú del día en tiempo real y coordina la logística de delivery.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    id: 3,
    label: "Servicios Prof.",
    icon: Briefcase,
    title: "Secretaria Legal & Contable",
    description:
      "Ideal para abogados y contadores. Recibe documentación, responde consultas sobre estado de trámites y filtra clientes potenciales automáticamente.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    id: 4,
    label: "Comercios",
    icon: ShoppingBag,
    title: "Asistente de Ventas Retail",
    description:
      "Automatice la atención en su tienda. Responda consultas de stock, precios y horarios, y gestione pedidos por WhatsApp las 24hs.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
];

export default function IndustryCarousel() {
  return (
    <div className="w-full overflow-hidden py-10 relative group">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map(
          (industry, index) => (
            <div
              key={index}
              className={`mx-4 w-87.5 shrink-0 rounded-3xl border border-white/5 bg-[#0A0A0A] p-8 transition-all duration-500 hover:scale-105 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group/card`}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${industry.bg} flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform duration-500`}
              >
                <industry.icon className={`w-7 h-7 ${industry.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover/card:text-cyan-400 transition-colors">
                {industry.title}
              </h3>
              <div className="text-xs font-bold text-white/20 uppercase tracking-widest mb-4 group-hover/card:text-white/40 transition-colors">
                {industry.label}
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed group-hover/card:text-neutral-300 transition-colors">
                {industry.description}
              </p>
            </div>
          )
        )}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </div>
  );
}

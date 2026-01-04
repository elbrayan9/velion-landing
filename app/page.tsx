"use client";

import React, {
  useState,
  useEffect,
  useRef,
  cloneElement,
  type ReactElement,
} from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Bot,
  Workflow,
  ChevronRight,
  Check,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Calendar,
  MessageSquare,
  FileSpreadsheet,
  User,
  ArrowRight,
  Zap,
  Globe,
  Send,
  Loader2,
  Code,
  Instagram,
  Linkedin,
  Quote,
  Building,
  Building2,
  Stethoscope,
  Utensils,
  Briefcase,
  Layers,
  Database,
  Smartphone,
  ShoppingBag,
} from "lucide-react";
import BentoGrid from "./components/BentoGrid";
import InfiniteMarquee from "./components/InfiniteMarquee";
import SonarBackground from "./components/SonarBackground";
import AuraEngine, { AuraEngineRef } from "./components/AuraEngine";
import NeuralBrain, { NeuralBrainRef } from "./components/NeuralBrain";
import { SystemBoot } from "./components/SystemBoot";

import VelionLogo from "./components/VelionLogo";
import { AnimatedTitle } from "./components/AnimatedTitle";

// --- CUSTOM ICONS ---

const WhatsAppIcon = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// --- FUNCIONES SIMULADAS DE GEMINI (Mock) ---
const callGeminiChat = async (history: unknown, userMessage: unknown) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        "¡Hola! Soy el asistente virtual de VELION. Puedo ayudarte a automatizar tus ventas, agenda o administración. ¿Qué te interesa mejorar hoy?"
      );
    }, 1200);
  });
};

const callGeminiParser = async (text: unknown) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        JSON.stringify(
          {
            monto: 15000,
            moneda: "ARS",
            destinatario: "M. Rodriguez",
            concepto: "servicio tecnico",
            fecha: new Date().toISOString().split("T")[0],
            confidence: 0.98,
          },
          null,
          2
        )
      );
    }, 1500);
  });
};

// --- ANIMATION UTILS ---

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// --- UI COMPONENTS ---

export const Button = ({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "glow" | "outline" | "icon" | "shiny";
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg text-sm font-bold transition-all duration-300 focus-visible:outline-none h-12 px-8 cursor-pointer tracking-wide relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-background text-foreground hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:scale-105 border border-input",
    secondary:
      "bg-white/10 text-foreground backdrop-blur-md border border-white/10 hover:bg-white/20 hover:scale-105",
    glow: "bg-gradient-to-r from-cyan-600 to-violet-600 text-white shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] border border-transparent hover:scale-105",
    outline:
      "bg-transparent border border-white/20 text-foreground hover:border-white/50 hover:bg-white/5",
    icon: "h-8 w-8 px-0 rounded-full bg-cyan-600 text-white hover:bg-cyan-500",
    shiny: "shiny-cta",
  };

  const handleScroll = (e: React.MouseEvent<HTMLElement>) => {
    if (onClick) onClick(e);
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "glow" && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 transition-transform bg-linear-to-r from-transparent via-white/20 to-transparent" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={handleScroll}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        suppressHydrationWarning
        {...props}
      >
        {content}
      </a>
    );
  }
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      suppressHydrationWarning
      {...props}
    >
      {content}
    </button>
  );
};

// 1. Typewriter Effect Component
const TypewriterText = ({
  text,
  className = "",
  delay = 0,
  as: Component = "h2",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) => {
  const characters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      <Component className="inline-block">
        {characters.map((char, index) => (
          <motion.span key={index} variants={child}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
};

// 2. Neon Card Wrapper
const NeonCard = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
        borderColor: "var(--border)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        borderColor: ["var(--border)", "rgba(6,182,212,0.5)", "var(--border)"],
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        borderColor: { duration: 1.5, times: [0, 0.5, 1] },
      }}
      whileHover={{
        borderColor: "rgba(6,182,212,0.4)",
        boxShadow: "0 0 30px rgba(6,182,212,0.15)",
        y: -5,
      }}
      className={`border border-border bg-card/50 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// --- THREE.JS HERO COMPONENT REMOVED ---

// --- NEW COMPONENTS FOR VERSATILITY ---

const INDUSTRY_TABS = [
  {
    id: 0,
    label: "Inmobiliaria",
    icon: <Building2 size={24} />,
    title: "Gestión Inmobiliaria Total",
    description:
      "Calificación de inquilinos, generación automática de contratos y coordinación de visitas.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 1,
    label: "Salud",
    icon: <Stethoscope size={24} />,
    title: "Administración Médica",
    description:
      "Base de datos de pacientes, confirmación de turnos y recordatorios pre-operatorios.",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 2,
    label: "Gastronomía",
    icon: <Utensils size={24} />,
    title: "Logística & Delivery",
    description:
      "Recepción de pedidos, control de comandas en cocina y aviso automático a repartidores.",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 3,
    label: "Servicios Prof.",
    icon: <Briefcase size={24} />,
    title: "Despacho Legal Automático",
    description:
      "Análisis de documentos, filtrado de casos y redacción de borradores simples.",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 4,
    label: "Comercios",
    icon: <ShoppingBag size={24} />,
    title: "Stock & Ventas",
    description:
      "Respuestas sobre precios, actualización de inventario y alerta de falta de stock.",
    color: "from-pink-500 to-rose-500",
  },
];

const QuickWinsSection = () => {
  const wins = [
    {
      title: "Atención Instantánea",
      desc: "Responde consultas y envía precios en segundos. Nunca más dejes un cliente en 'visto'.",
      icon: <Zap size={32} className="text-cyan-400" />,
      delay: 0,
    },
    {
      title: "Agenda Automática",
      desc: "Sincronización total con Google Calendar. El agente coordina días y horarios con el cliente sin molestarte.",
      icon: <Calendar size={32} className="text-violet-400" />,
      delay: 0.2,
    },
    {
      title: "Gestión Administrativa",
      desc: "Generación y envío automático de presupuestos, recibos o recordatorios de vencimiento.",
      icon: <FileSpreadsheet size={32} className="text-pink-400" />,
      delay: 0.4,
    },
  ];

  return (
    <section
      id="soluciones"
      className="py-24 bg-neutral-950 relative border-t border-white/5 overflow-hidden"
    >
      <SonarBackground opacity={0.3} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedTitle
            title="Resultados"
            highlight="Inmediatos"
            className="mb-6"
          />
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Soluciones rápidas que impactan en tu facturación desde el día 1.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {wins.map((win, i) => (
            <NeonCard
              key={i}
              delay={win.delay}
              className="bg-card/50 p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                {win.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{win.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{win.desc}</p>
            </NeonCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComplexityTimeline = () => {
  const levels = [
    {
      level: "Nivel 1",
      title: "Smart FAQ",
      desc: "El agente responde dudas frecuentes 24/7 con información estática de tu empresa. Ideal para reducir consultas repetitivas.",
      icon: <MessageSquare size={24} className="text-cyan-400" />,
    },
    {
      level: "Nivel 2",
      title: "Gestión Operativa",
      desc: "El agente realiza tareas: Agendar en Calendar, enviar presupuestos PDF o actualizar planillas de Excel.",
      icon: <Zap size={24} className="text-violet-400" />,
    },
    {
      level: "Nivel 3",
      title: "Piloto Automático (Enterprise)",
      desc: "Conexión profunda con tu ERP o Sistema de Facturación. Manejo de stock, logística y contabilidad sin intervención humana.",
      icon: <Database size={24} className="text-pink-400" />,
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <SonarBackground opacity={0.3} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            Escalabilidad
          </div>
          <AnimatedTitle
            title="De lo Simple"
            highlight="a lo Complejo"
            className="mb-4"
          />
          <p className="text-neutral-400">
            Escalamos la inteligencia artificial según la madurez digital de su
            negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-linear-to-r from-cyan-900 via-violet-900 to-pink-900 -z-10" />

          {levels.map((lvl, i) => (
            <NeonCard
              key={i}
              delay={i * 0.2}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 transition-all group border border-border"
            >
              <div className="w-16 h-16 bg-background border border-border rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-xl relative z-10">
                {lvl.icon}
              </div>
              <div className="text-center">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 block">
                  {lvl.level}
                </span>
                <TypewriterText
                  text={lvl.title}
                  className="text-xl font-bold text-foreground mb-3"
                  as="h3"
                  key={i} // Re-trigger animation on level change
                />
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {lvl.desc}
                </p>
              </div>
            </NeonCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: "",
  });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const message = `Hola VELION, soy ${formData.name}. Tengo una empresa de ${
      formData.company || "varios rubros"
    } y quiero automatizar: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5493541215803?text=${encodeURIComponent(
      message
    )}`; // Reemplazar número real
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Glows */}
      <div className="absolute -left-20 top-20 w-96 h-96 bg-cyan-900/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute -right-20 bottom-20 w-96 h-96 bg-violet-900/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
              Contacto
            </div>
            <AnimatedTitle
              title="Hablemos de"
              highlight="tu Proyecto"
              className="mb-6"
            />
            <p className="text-neutral-400 mb-8 max-w-md leading-relaxed">
              ¿Te preocupa que sea difícil? Nosotros lo hacemos llave en mano.
              El sistema se encarga del trabajo repetitivo para que tu equipo
              humano pueda dedicarse a lo estratégico y creativo.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400">
                  <Smartphone size={24} />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">
                    WhatsApp Directo
                  </div>
                  <div className="font-semibold">+54 9 3541 21-5803</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-violet-400">
                  <Globe size={24} />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Ubicación</div>
                  <div className="font-semibold">
                    Argentina (Servicio Global)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NeonCard className="bg-card/50 rounded-3xl p-8 backdrop-blur-xl border border-border">
            <form onSubmit={handleSend} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Juan Pérez"
                  className="w-full bg-background/40 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-muted-foreground"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">
                  Empresa / Rubro
                </label>
                <input
                  type="text"
                  placeholder="Ej: Inmobiliaria, Clínica..."
                  className="w-full bg-background/40 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-muted-foreground"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">
                  ¿Qué te gustaría automatizar?
                </label>
                <textarea
                  rows={4}
                  placeholder="Ej: Quiero que un bot responda consultas de precios y agende reuniones..."
                  className="w-full bg-background/40 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-muted-foreground resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                variant="shiny"
                className="w-full h-14 text-base shiny-cta"
                type="submit"
              >
                Enviar Consulta a un Experto{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-xs text-center text-neutral-500">
                Al enviar, se abrirá WhatsApp con tus datos precargados.
              </p>
            </form>
          </NeonCard>
        </div>
      </div>
    </section>
  );
};

const FounderSection = () => {
  return (
    <section
      id="nosotros"
      className="py-24 bg-transparent relative border-t border-white/5 overflow-hidden"
    >
      {/* Sonar Background Effect - Reduced opacity for subtle blend */}
      <SonarBackground opacity={0.2} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedTitle
            title="Conoce"
            highlight="al Fundador"
            className="mb-6"
          />
          <p className="text-white/80 max-w-2xl mx-auto font-light text-lg bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/5 inline-block">
            La mente detrás de la arquitectura de agentes de VELION.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <NeonCard
            // FIX: Removed overflow-hidden to allow glow
            className="bg-black/60 backdrop-blur-md rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative border border-white/10 shadow-2xl"
          >
            {/* Inner Clipper for Background Gradient */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-75 h-75 bg-cyan-900/20 rounded-full blur-[100px] group-hover:bg-cyan-800/30 transition-colors" />
              <div className="absolute bottom-0 left-0 w-50 h-50 bg-violet-900/10 rounded-full blur-[80px]" />
            </div>

            {/* Image Container */}
            <div className="relative shrink-0 z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-48 h-48 rounded-full p-0.5 bg-linear-to-tr from-cyan-500 to-violet-500 shadow-2xl overflow-hidden relative z-10"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-muted flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/brian-photo.png"
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => {
                      e.currentTarget.src =
                        "https://ui-avatars.com/api/?name=Brian+Oviedo&background=0D8ABC&color=fff&size=200";
                    }}
                    alt="Brian Oviedo - CEO VELION"
                    className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>
              <div className="absolute inset-0 rounded-full bg-linear-to-tr from-cyan-500 to-violet-500 blur-xl opacity-20 -z-10 group-hover:opacity-40 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  CEO & Founder
                </div>
                <Linkedin className="w-5 h-5 text-blue-500 md:ml-auto opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-3xl font-bold text-foreground mb-2">
                Brian Oviedo
              </h3>
              <div className="relative">
                <Quote className="absolute -top-2 -left-4 w-6 h-6 text-white/10 transform -scale-x-100" />
                <p className="text-neutral-400 leading-relaxed mb-6 italic relative z-10 pl-2">
                  &quot;En VELION, no solo automatizamos tareas; liberamos el
                  potencial humano. Mi visión es crear sistemas que trabajen
                  incansablemente para que los emprendedores argentinos puedan
                  enfocarse en lo que realmente importa: hacer crecer sus
                  negocios.&quot;
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4">
                <a
                  href="https://www.linkedin.com/in/brian-oviedo-1a04ba262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  suppressHydrationWarning
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#006396] text-white rounded-full font-medium transition-all shadow-lg shadow-blue-900/20 hover:scale-105 group/btn"
                >
                  <Linkedin
                    size={20}
                    className="group-hover/btn:scale-110 transition-transform"
                  />
                  Conectar en LinkedIn
                </a>
              </div>
            </div>
          </NeonCard>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTES DE LA DEMO ---

const InteractiveChatDemo = () => {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hola, soy VELION. ¿En qué puedo ayudarte a automatizar hoy?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    const aiResponse = (await callGeminiChat(messages, userMsg)) as string;

    setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);
    setLoading(false);
  };

  return (
    <div className="w-full bg-[#0a0a0a] rounded-xl flex flex-col h-75 overflow-hidden border border-white/5 shadow-2xl shadow-cyan-900/10">
      {/* Header del Chat */}
      <div className="p-3 border-b border-white/5 bg-neutral-900/50 flex items-center justify-between backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
          <span className="text-xs font-bold text-neutral-200 tracking-wide">
            VELION Sales Agent
          </span>
        </div>
        <span className="text-[10px] text-cyan-400 border border-cyan-500/30 bg-cyan-950/30 px-2 py-0.5 rounded-full font-medium">
          Gemini Powered
        </span>
      </div>

      {/* Área de Mensajes */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-xs scrollbar-thin scrollbar-thumb-neutral-800"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 rounded-2xl ${
                msg.role === "user"
                  ? "bg-neutral-800 text-neutral-300 rounded-tl-none"
                  : "bg-cyan-900/30 border border-cyan-500/20 text-cyan-100 rounded-tr-none"
              }`}
            >
              {msg.role === "ai" && (
                <span className="flex items-center gap-1 mb-1 text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                  <Zap size={10} fill="currentColor" /> VELION AI
                </span>
              )}
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-end">
            <div className="bg-cyan-900/10 border border-cyan-500/10 px-3 py-2 rounded-2xl rounded-tr-none">
              <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-3 bg-neutral-900/50 border-t border-white/5 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Escribe tu consulta..."
          className="flex-1 bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-cyan-600 hover:bg-cyan-500 text-white p-2 rounded-lg transition-colors disabled:opacity-50"
        >
          <Send size={14} />
        </button>
      </div>
    </div>
  );
};

const InteractiveParserDemo = () => {
  const [input, setInput] = useState(
    "Registrar pago de $20.000 a Proveedor Juan por insumos de limpieza."
  );
  const [jsonResult, setJsonResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setJsonResult(
      "✅ Gasto registrado en Sistema Contable.\n✅ Comprobante PDF generado.\n✅ Notificación enviada a Contaduría."
    );
    setLoading(false);
  };

  return (
    <div className="w-full bg-[#0a0a0a] rounded-xl p-4 font-sans relative overflow-hidden flex flex-col h-75 border border-white/5 shadow-2xl shadow-violet-900/10">
      <div className="absolute top-0 left-0 w-full h-1 bg-neutral-800">
        {loading && (
          <motion.div
            className="h-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shadow-lg shadow-violet-500/10">
          <Code size={16} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-white font-bold tracking-wide">
            Asistente Administrativo
          </span>
          <span className="text-[10px] text-neutral-500">
            De Caos a Formato Listo
          </span>
        </div>
      </div>

      <div className="space-y-3 flex-1 flex flex-col">
        <div className="space-y-1.5">
          <label className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold">
            Entrada de Texto
          </label>
          <div className="relative group">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-neutral-900/50 border border-white/10 rounded-lg p-3 text-xs text-neutral-300 focus:outline-none focus:border-violet-500/50 focus:bg-neutral-900 transition-all resize-none h-20"
            />
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="absolute bottom-2 right-2 bg-violet-600 hover:bg-violet-500 text-white text-[10px] px-3 py-1.5 rounded-md transition-all shadow-lg shadow-violet-900/20 hover:shadow-violet-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : (
                "Procesar"
              )}
            </button>
          </div>
        </div>

        <div className="flex-1 bg-neutral-950 rounded-lg border border-white/5 p-3 overflow-hidden relative group hover:border-violet-500/20 transition-colors">
          <div className="absolute top-2 right-2 text-[10px] text-neutral-600 group-hover:text-violet-400 transition-colors font-mono font-bold">
            RESULTADO
          </div>
          <pre className="text-[10px] font-mono text-green-400 overflow-auto h-full p-1 scrollbar-thin scrollbar-thumb-neutral-800 whitespace-pre-wrap">
            {jsonResult ? jsonResult : "// El resultado aparecerá aquí..."}
          </pre>
        </div>
      </div>
    </div>
  );
};

const CalendarMockup = () => (
  <div className="w-full bg-[#0a0a0a] rounded-xl p-4 font-sans h-75 flex flex-col border border-white/5 shadow-2xl shadow-green-900/10">
    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
      <span className="text-neutral-400 text-xs font-bold tracking-widest">
        OCTUBRE 24
      </span>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-green-500/50" />
      </div>
    </div>
    <div className="space-y-2 flex-1">
      <div className="flex gap-3 items-center p-2 rounded-lg bg-neutral-800/30 border-l-2 border-neutral-700 opacity-50">
        <span className="text-neutral-500 text-xs font-mono">09:00</span>
        <div className="h-1.5 w-20 bg-neutral-800 rounded-full" />
      </div>
      <div className="flex gap-3 items-center p-2 rounded-lg bg-green-950/20 border border-green-500/20 border-l-2 border-l-green-500 relative overflow-hidden group">
        <div className="absolute inset-0 bg-green-500/5 animate-pulse" />
        <span className="text-green-400 text-xs font-mono font-bold">
          10:30
        </span>
        <div className="flex flex-col gap-1 relative z-10">
          <span className="text-white text-xs font-medium">
            Turno Juan Pérez
          </span>
          <span className="text-[10px] text-green-400/70 flex items-center gap-1">
            <CheckCircle2 size={10} /> Confirmado por IA
          </span>
        </div>
      </div>
      <div className="flex gap-3 items-center p-2 rounded-lg bg-neutral-800/30 border-l-2 border-neutral-700 opacity-50">
        <span className="text-neutral-500 text-xs font-mono">11:00</span>
        <div className="h-1.5 w-20 bg-neutral-800 rounded-full" />
      </div>
      <div className="mt-auto p-3 bg-neutral-900/50 rounded-lg border border-white/5 text-center backdrop-blur-sm">
        <p className="text-[10px] text-neutral-400 italic">
          "Este agente se conecta directamente a tu Calendario en tiempo real
          para bloquear slots."
        </p>
      </div>
    </div>
  </div>
);

// --- SECCIÓN PRINCIPAL: LIVE DEMO ---

const LiveDemoSection = () => {
  return (
    <section
      id="demo"
      className="py-24 bg-neutral-950 relative border-t border-white/5 overflow-hidden"
    >
      <SonarBackground opacity={0.5} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Zap size={14} className="text-cyan-400" /> Potencia Real
          </motion.div>
          <AnimatedTitle
            title="Nuestros Agentes"
            highlight="en Acción"
            className="mb-6"
          />
          <p className="text-neutral-400 max-w-2xl mx-auto">
            No es magia, es{" "}
            <span className="text-cyan-400 font-bold">
              Inteligencia Artificial
            </span>
            . Interactúe con las demos a continuación para ver el poder real de
            la IA.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Demo 1: Chat de Ventas */}
          <NeonCard
            delay={0}
            className="group relative bg-card/90 border border-white/10 rounded-3xl p-6 hover:border-cyan-500/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <div className="relative z-10">
              <div className="mb-6 transition-transform duration-300">
                <InteractiveChatDemo />
              </div>
              <div className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <MessageSquare size={20} />
                </div>
                <span className="font-serif italic tracking-tight">
                  Captación Inteligente de Leads
                </span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                <strong>¡Pruébalo!</strong> Chatea con nuestro agente de ventas
                impulsado por Gemini Flash. Responde dudas las 24hs.
              </p>
            </div>
          </NeonCard>

          {/* Demo 2: Calendario */}
          <NeonCard
            delay={0.2}
            className="group relative bg-card/90 border border-white/10 rounded-3xl p-6 hover:border-green-500/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-linear-to-b from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <div className="relative z-10">
              <div className="mb-6 transition-transform duration-300">
                <CalendarMockup />
              </div>
              <div className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                  <Calendar size={20} />
                </div>
                <span className="font-serif italic tracking-tight">
                  Sincronización de Agenda
                </span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Conexión directa con Google Calendar. Agenda citas sin
                superposiciones, maneja reprogramaciones y envía recordatorios
                para reducir el ausentismo.
              </p>
            </div>
          </NeonCard>

          {/* Demo 3: Parser Administrativo */}
          <NeonCard
            delay={0.4}
            className="group relative bg-card/90 border border-white/10 rounded-3xl p-6 hover:border-violet-500/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-linear-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <div className="relative z-10">
              <div className="mb-6 transition-transform duration-300">
                <InteractiveParserDemo />
              </div>
              <div className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                  <FileSpreadsheet size={20} />
                </div>
                <span className="font-serif italic tracking-tight">
                  Asistente Administrativo
                </span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                <strong>¡Pruébalo!</strong> Simplemente dicta el gasto o la
                tarea. La IA lo carga en tu sistema, genera los documentos y
                avisa a tu equipo.
              </p>
            </div>
          </NeonCard>
        </div>
      </div>
    </section>
  );
};

const AdaptabilitySection = () => {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} className="text-cyan-400" /> Tecnología
            Invisible
          </div>
          <AnimatedTitle
            title="Se adapta a las reglas"
            highlight="de TU juego"
            className="mb-6"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Entrenamiento a Medida",
              desc: "Entrenamos al agente con TU vocabulario y TUS políticas comerciales. No suena como un robot genérico.",
              icon: <Bot size={32} className="text-cyan-400" />,
            },
            {
              title: "Integración Profunda",
              desc: "Se conecta con TUS herramientas actuales (Excel, Calendar, ERPs) sin romper nada. Tu información viaja sola.",
              icon: <Workflow size={32} className="text-violet-400" />,
            },
            {
              title: "Seguridad Blindada",
              desc: "Seguridad total: Tus datos y los de tus clientes están protegidos con estándares bancarios.",
              icon: <ShieldCheck size={32} className="text-green-400" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- FAQ SECTION ---
const FAQSection = () => {
  const faqs = [
    {
      q: "¿Necesito saber de tecnología para usar esto?",
      a: "Para nada. Nosotros configuramos todo. Tú solo recibes los reportes y ves cómo la agenda se llena sola. Es 100% llave en mano.",
    },
    {
      q: "¿Hay riesgo de que bloqueen mi WhatsApp?",
      a: "No. Utilizamos tecnología oficial verificada por WhatsApp y técnicas de 'Human-Like Timing' para garantizar la seguridad de tu línea.",
    },
    {
      q: "¿Sirve para mi rubro específico?",
      a: "Nuestros agentes se entrenan a medida. Ya sea que tengas una clínica, una ferretería o un estudio jurídico, el sistema aprende tu vocabulario y reglas.",
    },
    {
      q: "¿Qué incluye el Setup Inicial?",
      a: "Incluye el diseño de la estrategia, la programación del agente, la conexión con tus sistemas (Calendar, Excel, etc.) y las pruebas intensivas antes de salir al público.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 bg-black relative border-t border-white/5 overflow-hidden"
    >
      <SonarBackground opacity={0.3} />
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <AnimatedTitle
            title="Preguntas"
            highlight="Frecuentes"
            className="mb-6"
          />
          <p className="text-neutral-400">
            Todo lo que necesitas saber para dar el siguiente paso.
          </p>
        </div>

        <div className="grid gap-6">
          {faqs.map((faq, i) => (
            <NeonCard
              key={i}
              delay={i * 0.1}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-500/30 hover:bg-cyan-950/10 transition-all group backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {faq.q}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {faq.a}
              </p>
            </NeonCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function VELION_Landing() {
  const [isAccelerating, setIsAccelerating] = useState(false);
  const auraEngineRef = useRef<AuraEngineRef>(null);

  const handleStartEngine = () => {
    setIsAccelerating(true);
    auraEngineRef.current?.triggerBoost();
    setTimeout(() => {
      setIsAccelerating(false);
      const demoSection = document.querySelector("#demo");
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 2000);
  };

  return (
    <div
      className="min-h-screen bg-transparent text-foreground font-sans selection:bg-cyan-500/30 selection:text-foreground overflow-x-hidden"
      suppressHydrationWarning
    >
      <SystemBoot />
      <AuraEngine
        ref={auraEngineRef}
        showUI={false}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent">
        {/* Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-accent/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Text Backdrop for readability - Stronger */}
            <div className="absolute -inset-10 bg-black/60 blur-3xl rounded-full -z-10 pointer-events-none" />

            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-cyan-500/30 shadow-lg shadow-black/50">
                SISTEMA ONLINE
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="text-5xl sm:text-6xl md:text-7xl font-sans font-medium tracking-tight mb-6 leading-[1.1] drop-shadow-xl text-shadow-sm"
            >
              Tu negocio pierde oportunidades{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-violet-400">
                mientras duermes.
              </span>{" "}
              Nosotros no.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/90 leading-relaxed mb-10 max-w-xl mx-auto font-light drop-shadow-md bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/5"
            >
              Instalamos Agentes Inteligentes que atienden, venden y administran
              tu empresa. Automatiza lo aburrido, escala lo importante.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button
                variant="shiny"
                href="#demo"
                className="shiny-cta shadow-2xl shadow-cyan-500/20"
              >
                Ver a mi Nuevo Empleado Digital
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <InfiniteMarquee />

      {/* --- QUICK WINS SECTION --- */}
      <QuickWinsSection />

      {/* --- LIVE DEMO SECTION --- */}
      <LiveDemoSection />

      {/* --- PRICING SECTION --- */}
      <section id="precios" className="py-24 bg-background relative">
        <div
          suppressHydrationWarning
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-150 bg-violet-900/10 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <AnimatedTitle
              title="Inversión"
              highlight="Inteligente"
              className="mb-6"
            />
            <div className="overflow-hidden mb-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/60 max-w-2xl mx-auto text-lg"
              >
                Dos caminos para escalar. Elige tu velocidad.
              </motion.p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {/* PLAN PYME - ARS */}
            <NeonCard className="relative rounded-3xl p-8 border border-cyan-500/30 bg-cyan-950/10 flex flex-col">
              <div className="absolute inset-x-0 top-0 h-1 bg-cyan-500" />
              <div className="mb-8 relative z-10">
                <div className="inline-block px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
                  Agente Comercial
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Plan PyME
                </h3>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-4xl font-bold text-white">$85.000</span>
                  <span className="text-neutral-400">ARS /mes</span>
                </div>
                <div className="mt-4 p-3 bg-card border border-border rounded-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Zap size={16} />
                  </div>
                  <div className="text-sm">
                    <span className="text-white font-semibold block">
                      Setup Inicial: $190.000 ARS
                    </span>
                    <span className="text-white/50 text-xs">
                      (Pago Único de Instalación)
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-1 relative z-10">
                {[
                  "Recepción 24/7 (Filtra curiosos)",
                  "Asistente de Ventas (Maneja objeciones)",
                  "Secretaria Virtual (Agenda reuniones)",
                  "Alerta de Ventas al Celular",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-neutral-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="shiny"
                href="https://wa.me/5493541215803?text=Hola%20Brian,%20quiero%20contratar%20el%20Agente%20Comercial%20(Plan%20PyME)."
                target="_blank"
                className="w-full relative z-10 shiny-cta"
              >
                Contratar Agente
              </Button>
            </NeonCard>

            {/* PLAN ENTERPRISE - USD */}
            <NeonCard
              delay={0.2}
              className="relative rounded-3xl p-8 border border-white/10 bg-black/60 flex flex-col shadow-2xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-violet-500" />
              <div className="mb-8">
                <div className="inline-block px-3 py-1 bg-violet-900/30 border border-violet-500/30 rounded-full text-violet-400 text-xs font-bold uppercase tracking-wider mb-4">
                  Sistema Integral
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Plan Enterprise
                </h3>
                <div className="flex flex-col mt-4">
                  <span className="text-neutral-400 text-sm">
                    Proyectos desde
                  </span>
                  <span className="text-4xl font-bold text-white">
                    US$ 1,500
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mt-4 leading-relaxed">
                  Automatización de procesos administrativos, contables y
                  logísticos complejos.
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-1 border-t border-white/5 pt-8">
                {[
                  "Administración y Contabilidad",
                  "Logística y Control de Stock",
                  "Legal y Burocracia Automática",
                  "Analista de Negocio (Reportes)",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg">🚀</span>
                    <span className="text-neutral-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                href="https://wa.me/5493541215803?text=Hola%20Brian,%20necesito%20una%20Auditor%C3%ADa%20de%20Procesos%20para%20mi%20empresa."
                target="_blank"
                className="w-full border-white/10 hover:bg-white/5"
              >
                Solicitar Auditoría de Procesos
              </Button>
            </NeonCard>
          </div>
        </div>
      </section>

      {/* --- ADAPTABILITY SECTION --- */}
      <AdaptabilitySection />

      {/* --- FAQ SECTION --- */}
      <FAQSection />

      {/* --- CONTACT FORM --- */}
      <ContactForm />

      {/* --- FOUNDER SECTION --- */}
      <FounderSection />

      {/* --- FOOTER --- */}
      <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <VelionLogo className="h-6 w-auto text-white/50" />
            <p className="text-neutral-600 text-xs">
              Agencia de Automatización con IA
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-neutral-600 hover:text-cyan-400 text-xs transition-colors"
            >
              Términos y Condiciones
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-cyan-400 text-xs transition-colors"
            >
              Política de Privacidad
            </a>
          </div>

          <div className="text-neutral-600 text-xs font-mono">
            &copy; 2025 VELION AI Agency. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

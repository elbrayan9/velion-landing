"use client";

import React from "react";

const LOGOS = [
  {
    name: "Nube Global",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 21.6c-1.3 0-2.6-.2-3.8-.6-1.2-.4-2.3-1-3.3-1.8-.9-.8-1.7-1.7-2.3-2.8-.6-1.1-.9-2.3-.9-3.6 0-1.3.3-2.5.9-3.6.6-1.1 1.4-2 2.3-2.8 1-.8 2.1-1.4 3.3-1.8 1.2-.4 2.5-.6 3.8-.6 1.3 0 2.6.2 3.8.6 1.2.4 2.3 1 3.3 1.8.9.8 1.7 1.7 2.3 2.8.6 1.1.9 2.3.9 3.6 0 1.3-.3 2.5-.9 3.6-.6 1.1-1.4 2-2.3 2.8-1 .8-2.1 1.4-3.3 1.8-1.2.4-2.5.6-3.8.6z" />
      </svg>
    ),
  },
  {
    name: "Pagos Seguros",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
      </svg>
    ),
  },
  {
    name: "Inteligencia Artificial",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.0462 6.0462 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729z" />
      </svg>
    ),
  },
  {
    name: "Datos Blindados",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
  {
    name: "Alta Velocidad",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: "Automatización",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ),
  },
];

export default function InfiniteMarquee() {
  return (
    <section className="py-10 border-y border-white/5 bg-black/20 overflow-hidden relative">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-[#030303] to-transparent z-10"
        suppressHydrationWarning
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-[#030303] to-transparent z-10"
        suppressHydrationWarning
      />

      <div className="flex w-max animate-marquee">
        {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
          <div
            key={index}
            className="mx-12 flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity duration-300 select-none group"
          >
            <div className="text-white group-hover:text-cyan-400 transition-colors">
              {logo.icon}
            </div>
            <span className="text-lg font-bold text-white uppercase tracking-widest font-sans">
              {logo.name}
            </span>
          </div>
        ))}
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
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

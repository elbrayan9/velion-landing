"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import VelionLogo from "./VelionLogo";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#industrias" },
    { name: "Cómo Funciona", href: "#demo" },
    { name: "Precios", href: "#precios" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 px-4`}
      >
        <div
          className={`flex items-center justify-between md:justify-center gap-8 px-6 py-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-md shadow-2xl transition-all duration-300 ${
            isScrolled ? "w-full max-w-5xl" : "w-full max-w-4xl"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:opacity-80 transition-opacity"
          >
            <VelionLogo iconClassName="w-6 h-6" className="text-lg" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("velion-boost"))
              }
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2"
            >
              Iniciar Motor
            </button>
            <a
              href="#contacto"
              className="px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-bold uppercase tracking-wider hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              Agendar
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-[#050505] flex flex-col items-center justify-center p-8"
          >
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent("velion-boost"));
                }}
                className="mt-4 px-8 py-3 rounded-full border border-white/10 bg-white/5 text-white font-bold uppercase tracking-wider hover:bg-white/10 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2"
              >
                Iniciar Motor
              </button>

              <motion.a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 px-8 py-4 rounded-full bg-cyan-500 text-white font-bold text-lg hover:bg-cyan-400 transition-colors flex items-center gap-2"
              >
                Agendar Reunión
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

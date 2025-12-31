"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const SystemBoot = () => {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if already booted
    const hasBooted = sessionStorage.getItem("has_booted");
    if (hasBooted) return;

    // Start boot sequence
    setIsVisible(true);
    setStep(0);

    const timeouts = [
      setTimeout(() => setStep(1), 500), // Initializing
      setTimeout(() => setStep(2), 1200), // Loading Modules
      setTimeout(() => setStep(3), 1800), // System Operational
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("has_booted", "true");
      }, 2500), // Finish
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-black font-mono text-cyan-400"
        >
          <div className="w-64 space-y-4">
            {/* Progress Bar */}
            <div className="h-1 w-full bg-cyan-900/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
              />
            </div>

            {/* Status Text */}
            <div className="h-8 text-xs uppercase tracking-widest text-center">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.span
                    key="init"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Initializing Protocol...
                  </motion.span>
                )}
                {step === 1 && (
                  <motion.span
                    key="modules"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Loading Core Modules...
                  </motion.span>
                )}
                {step === 2 && (
                  <motion.span
                    key="ready"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-white"
                  >
                    System Operational
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Background Grid */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] opacity-20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

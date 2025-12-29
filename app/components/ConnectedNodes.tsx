"use client";

import { motion } from "framer-motion";

export default function ConnectedNodes() {
  return (
    <div className="relative w-full h-full flex items-center justify-center opacity-80">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full max-w-4xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connecting Lines */}
        <motion.path
          d="M100 300 H 300 L 400 200 L 600 200"
          stroke="url(#gradient-line)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M100 300 H 300 L 400 400 L 600 400"
          stroke="url(#gradient-line)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Nodes */}
        {/* Start Node */}
        <motion.circle
          cx="100"
          cy="300"
          r="8"
          fill="#38BDF8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <circle
          cx="100"
          cy="300"
          r="20"
          stroke="#38BDF8"
          strokeOpacity="0.2"
          strokeWidth="2"
        />

        {/* Middle Node */}
        <motion.circle
          cx="300"
          cy="300"
          r="6"
          fill="#A78BFA"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Top Branch Node */}
        <motion.circle
          cx="400"
          cy="200"
          r="6"
          fill="#38BDF8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.circle
          cx="600"
          cy="200"
          r="8"
          fill="#34D399"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />

        {/* Bottom Branch Node */}
        <motion.circle
          cx="400"
          cy="400"
          r="6"
          fill="#A78BFA"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.circle
          cx="600"
          cy="400"
          r="8"
          fill="#F472B6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full pointer-events-none" />
    </div>
  );
}

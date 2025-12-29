"use client";

import React from "react";

export default function SonarHero() {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
        viewBox="0 0 600 600"
      >
        <defs>
          <radialGradient
            id="center-glow"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0 0) rotate(90) scale(120)"
          >
            <stop stopColor="#38BDF8" stopOpacity="0.3" />
            <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connecting Beams */}
        {/* Group 1 */}
        <g>
          <path
            d="M -50 150 C 100 150, 100 300, 300 300"
            fill="none"
            stroke="white"
            strokeWidth="1"
            className="opacity-[0.08]"
          />
          <path
            d="M -50 150 C 100 150, 100 300, 300 300"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.5"
            className="beam-line animate-beam opacity-60"
          />
        </g>
        {/* Group 2 */}
        <g>
          <path
            d="M -50 450 C 100 450, 100 300, 300 300"
            fill="none"
            stroke="white"
            strokeWidth="1"
            className="opacity-[0.08]"
          />
          <path
            d="M -50 450 C 100 450, 100 300, 300 300"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.5"
            className="beam-line animate-beam opacity-60"
            style={{ animationDelay: "-1s" }}
          />
        </g>
        {/* Group 3 */}
        <g>
          <path
            d="M 650 100 C 500 100, 500 300, 300 300"
            fill="none"
            stroke="white"
            strokeWidth="1"
            className="opacity-[0.08]"
          />
          <path
            d="M 650 100 C 500 100, 500 300, 300 300"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.5"
            className="beam-line animate-beam opacity-60"
            style={{ animationDelay: "-2s" }}
          />
        </g>
        {/* Group 4 */}
        <g>
          <path
            d="M 650 500 C 500 500, 500 300, 300 300"
            fill="none"
            stroke="white"
            strokeWidth="1"
            className="opacity-[0.08]"
          />
          <path
            d="M 650 500 C 500 500, 500 300, 300 300"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.5"
            className="beam-line animate-beam opacity-60"
            style={{ animationDelay: "-1.5s" }}
          />
        </g>

        {/* CENTRAL NODE DETAIL */}
        <g transform="translate(300, 300)">
          {/* Ambient Glow */}
          <circle r="120" fill="url(#center-glow)" className="animate-pulse" />

          {/* Sonar Waves */}
          <circle
            r="20"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1"
            opacity="0.5"
            className="animate-sonar"
          />
          <circle
            r="20"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1"
            opacity="0.5"
            className="animate-sonar delay-1000"
          />
          <circle
            r="20"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1"
            opacity="0.5"
            className="animate-sonar delay-2000"
          />

          {/* Technical Rings */}
          {/* Outer Dashed Ring Slow */}
          <circle
            r="65"
            fill="none"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="1"
            strokeDasharray="10 20"
            className="animate-spin-slow"
          />

          {/* Inner Dashed Ring Reverse */}
          <circle
            r="45"
            fill="none"
            stroke="#38BDF8"
            strokeOpacity="0.2"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="animate-spin-slow-reverse"
          />

          {/* Crosshair Markers */}
          <g className="animate-spin-slow" style={{ animationDuration: "20s" }}>
            <path d="M -80 0 L -70 0" stroke="white" strokeOpacity="0.2" />
            <path d="M 80 0 L 70 0" stroke="white" strokeOpacity="0.2" />
            <path d="M 0 -80 L 0 -70" stroke="white" strokeOpacity="0.2" />
            <path d="M 0 80 L 0 70" stroke="white" strokeOpacity="0.2" />
          </g>

          {/* Core */}
          <circle r="8" fill="#0A0A0A" stroke="#38BDF8" strokeWidth="2" />
          <circle r="4" fill="#38BDF8" className="animate-pulse-fast" />
        </g>
      </svg>

      {/* Floating Labels */}
      <div className="absolute top-[20%] lg:top-[25%] left-[10%] lg:left-[15%] flex flex-col items-end">
        <span className="text-xs font-mono text-cyan-400 tracking-widest mb-1 opacity-80">
          LATENCIA CERO
        </span>
        <div className="h-px w-12 bg-linear-to-l from-cyan-400 to-transparent" />
      </div>

      <div className="absolute bottom-[20%] lg:bottom-[25%] right-[10%] lg:right-[15%] flex flex-col items-start">
        <span className="text-xs font-mono text-cyan-400 tracking-widest mb-1 opacity-80">
          MOTOR GEMINI
        </span>
        <div className="h-px w-12 bg-linear-to-r from-cyan-400 to-transparent" />
      </div>

      {/* Extra Data Decoration */}
      <div className="absolute top-[50%] right-[15%] hidden lg:flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-white/20" />
          <div className="w-1 h-1 bg-white/20" />
          <div className="w-1 h-1 bg-cyan-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

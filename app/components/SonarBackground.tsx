"use client";

import React from "react";

interface SonarBackgroundProps {
  opacity?: number;
  className?: string;
  color?: string;
}

export default function SonarBackground({
  opacity = 0.4,
  className = "",
  color = "#38BDF8", // Cyan default
}: SonarBackgroundProps) {
  const id = React.useId();
  const glowId = `sonar-glow-${id}`;
  const beamId = `beam-grad-${id}`;

  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center ${className}`}
      style={{ opacity }}
    >
      <svg
        className="w-full h-full max-w-250 overflow-visible"
        viewBox="0 0 600 600"
      >
        <defs>
          <radialGradient
            id={glowId}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(300 300) rotate(90) scale(300)"
          >
            <stop stopColor={color} stopOpacity="0.2" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </radialGradient>
          <linearGradient id={beamId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={color} stopOpacity="0" />
            <stop offset="0.5" stopColor={color} stopOpacity="0.5" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Central Glow */}
        <circle cx="300" cy="300" r="300" fill={`url(#${glowId})`} />

        {/* Connecting Beams */}
        <g transform="translate(300, 300)">
          {/* Rotating Rings */}
          <circle
            cx="0"
            cy="0"
            r="100"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            className="opacity-10"
          />
          <circle
            cx="0"
            cy="0"
            r="200"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            className="opacity-5"
          />
          <circle
            cx="0"
            cy="0"
            r="350"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            className="opacity-[0.03]"
          />

          {/* Beams */}
          <g className="animate-[spin_10s_linear_infinite]">
            <path
              d="M 0 0 L 400 0"
              stroke={`url(#${beamId})`}
              strokeWidth="1"
              className="opacity-30"
            />
            <path
              d="M 0 0 L -400 0"
              stroke={`url(#${beamId})`}
              strokeWidth="1"
              className="opacity-30"
            />
            <path
              d="M 0 0 L 0 400"
              stroke={`url(#${beamId})`}
              strokeWidth="1"
              className="opacity-30"
            />
            <path
              d="M 0 0 L 0 -400"
              stroke={`url(#${beamId})`}
              strokeWidth="1"
              className="opacity-30"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

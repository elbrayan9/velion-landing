"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const CircuitEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setSvgHeight(document.documentElement.scrollHeight);
        setWindowWidth(window.innerWidth);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Observer to update height if content changes
    const observer = new ResizeObserver(updateDimensions);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      observer.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll();

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.05], [0, 1]);

  // Calculate path points based on window width
  // We want a path that weaves through the center/sides
  const center = windowWidth / 2;
  const leftSide = windowWidth * 0.1;
  const rightSide = windowWidth * 0.9;

  // Approximate section positions (percentages of total height)
  // These are estimates, but the path will look continuous
  const pathD = `
    M ${center} 0 
    L ${center} 400
    L ${leftSide} 600
    L ${leftSide} 1200
    L ${rightSide} 1500
    L ${rightSide} 2200
    L ${center} 2500
    L ${center} ${svgHeight}
  `;

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full z-0 pointer-events-none overflow-hidden"
      style={{ height: svgHeight }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${windowWidth} ${svgHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-60"
      >
        {/* Background Path (dimmed) */}
        <path
          d={pathD}
          stroke="#0e7490" // cyan-700
          strokeWidth="2"
          strokeOpacity="0.2"
          fill="none"
        />

        {/* Animated Path (glowing) */}
        <motion.path
          d={pathD}
          stroke="#22d3ee" // cyan-400
          strokeWidth="2"
          fill="none"
          style={{ pathLength, opacity }}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />

        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>

      {/* Nodes that light up could be added here if we had exact coordinates */}
    </div>
  );
};

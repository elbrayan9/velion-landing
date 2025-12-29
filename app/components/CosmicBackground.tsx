"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  vz: number;
}

export default function CosmicBackground({
  accelerate = false,
}: {
  accelerate?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 400; // High density
    let width = 0;
    let height = 0;
    let speedMultiplier = 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * width;
        const y = (Math.random() - 0.5) * height;
        const z = Math.random() * width;

        particles.push({
          x,
          y,
          z,
          baseX: x,
          baseY: y,
          size: Math.random() * 2,
          color: Math.random() > 0.8 ? "#38bdf8" : "#ffffff", // Cyan or White
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: Math.random() * 2,
        });
      }
    };

    const draw = () => {
      // Trail effect for warp speed
      ctx.fillStyle = accelerate ? "rgba(3, 3, 3, 0.2)" : "rgba(3, 3, 3, 1)";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Target speed based on accelerate prop
      const targetSpeed = accelerate ? 20 : 1;
      speedMultiplier += (targetSpeed - speedMultiplier) * 0.05;

      particles.forEach((p, index) => {
        // Move particle
        p.z -= p.vz * speedMultiplier;

        // Reset if passed camera
        if (p.z <= 0) {
          p.z = width;
          p.x = (Math.random() - 0.5) * width;
          p.y = (Math.random() - 0.5) * height;
        }

        // Project 3D to 2D
        const perspective = 300 / p.z;
        const x = cx + p.x * perspective;
        const y = cy + p.y * perspective;
        const size = p.size * perspective;

        // Draw
        if (x > 0 && x < width && y > 0 && y < height) {
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;

          // Glow effect - Stronger glow for intensity
          if (p.color === "#38bdf8") {
            ctx.shadowBlur = 15;
            ctx.shadowColor = "#38bdf8";
          } else {
            ctx.shadowBlur = 0;
          }

          ctx.fill();
        }

        // Connections (only when not accelerating for performance/visual clarity)
        // Optimized: Only check next few particles instead of all (approximate nearest neighbors)
        if (!accelerate && speedMultiplier < 2) {
          for (let j = index + 1; j < particles.length; j++) {
            const p2 = particles[j];
            // Fast check: Z distance
            if (Math.abs(p.z - p2.z) > 50) continue;

            const perspective2 = 300 / p2.z;
            const x2 = cx + p2.x * perspective2;
            const y2 = cy + p2.y * perspective2;

            // Fast check: Screen distance (manhattan distance first)
            if (Math.abs(x - x2) > 120 || Math.abs(y - y2) > 120) continue;

            const dx = x - x2;
            const dy = y - y2;
            const distSq = dx * dx + dy * dy;

            if (distSq < 14400) {
              // 120 * 120
              ctx.beginPath();
              ctx.strokeStyle = `rgba(56, 189, 248, ${
                0.2 * (1 - Math.sqrt(distSq) / 120)
              })`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(x, y);
              ctx.lineTo(x2, y2);
              ctx.stroke();
            }
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accelerate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-[#030303]"
      style={{ opacity: 1 }}
    />
  );
}

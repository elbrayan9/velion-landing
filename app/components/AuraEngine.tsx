"use client";

import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

export interface AuraEngineRef {
  triggerBoost: () => void;
}

interface AuraEngineProps {
  showUI?: boolean;
  className?: string;
}

const AuraEngine = forwardRef<AuraEngineRef, AuraEngineProps>(
  ({ showUI = true, className = "" }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isEdgeGlowActive, setIsEdgeGlowActive] = useState(false);

    // We use a ref to hold the startEngineSequence function so we can expose it
    const triggerRef = useRef<() => void>(() => {});

    useImperativeHandle(ref, () => ({
      triggerBoost: () => {
        triggerRef.current();
      },
    }));

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // --- CONSTANTS ---
      const PARTICLE_SIZE = 2.2;
      const AMBIENT_INTENSITY = 0.6;
      const BURST_INTENSITY = 1.4;
      const AMBIENT_SPEED = 7;
      const BURST_SPEED = 18;
      const COLOR_R = 56;
      const COLOR_G = 189;
      const COLOR_B = 248;

      // --- STATE ---
      let width = 0;
      let height = 0;
      let particles: Particle[] = [];
      let shockwaves: Shockwave[] = [];
      let engineInterval: NodeJS.Timeout | null = null;
      let ambientInterval: NodeJS.Timeout | null = null;
      let animationId: number;
      let spacing = 24; // Default spacing
      let isVisible = true; // Visibility flag

      // Intersection Observer Setup
      const observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
        },
        { threshold: 0.1 }
      );
      observer.observe(canvas);

      // --- CLASSES ---
      class Particle {
        x: number;
        y: number;
        baseX: number;
        baseY: number;
        size: number;
        active: number;
        baseAlpha: number;

        constructor(x: number, y: number) {
          this.x = x;
          this.y = y;
          this.baseX = x;
          this.baseY = y;
          this.size = PARTICLE_SIZE;
          this.active = 0;
          // Lower alpha for subtler effect
          this.baseAlpha = 0.02 + Math.random() * 0.03;
        }
      }

      class Shockwave {
        x: number;
        y: number;
        radius: number;
        dead: boolean;
        intensity: number;
        speed: number;
        width: number;

        constructor(x: number, y: number, intensity: number, speed: number) {
          this.x = x;
          this.y = y;
          this.radius = 0;
          this.dead = false;
          this.intensity = intensity;
          this.speed = speed;
          this.width = intensity > 1 ? 350 : 300;
        }

        update() {
          this.radius += this.speed;

          // Edge Effect Logic
          if (this.intensity > 1.2) {
            const maxDim = Math.max(width, height);
            if (this.radius > maxDim * 0.2 && this.radius < maxDim * 0.9) {
              setIsEdgeGlowActive(true);
            } else if (this.radius > maxDim) {
              setIsEdgeGlowActive(false);
            }
          }

          if (
            this.radius >
            Math.sqrt(width * width + height * height) + this.width
          ) {
            this.dead = true;
          }
        }
      }

      // --- FUNCTIONS ---
      const createParticles = () => {
        particles = [];
        const rows = Math.ceil(height / spacing);
        const cols = Math.ceil(width / spacing);
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            particles.push(new Particle(i * spacing, j * spacing));
          }
        }
      };

      const init = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;

        // Mobile Optimization: Increase spacing on smaller screens
        if (width < 768) {
          spacing = 32; // Significantly fewer particles on mobile
        } else {
          spacing = 24;
        }

        createParticles();
        startAmbientLoop();
      };

      const startAmbientLoop = () => {
        if (ambientInterval) clearInterval(ambientInterval);

        ambientInterval = setInterval(() => {
          const heavyWaves = shockwaves.filter((w) => w.intensity > 1).length;
          if (heavyWaves < 2) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            shockwaves.push(
              new Shockwave(x, y, AMBIENT_INTENSITY, AMBIENT_SPEED)
            );
          }
        }, 800);
      };

      const startEngineSequence = () => {
        if (engineInterval) return;

        shockwaves.push(
          new Shockwave(width / 2, height / 2, BURST_INTENSITY, BURST_SPEED)
        );

        let pulseCount = 0;
        const maxPulses = 12;

        engineInterval = setInterval(() => {
          pulseCount++;

          shockwaves.push(
            new Shockwave(width / 2, height / 2, BURST_INTENSITY, BURST_SPEED)
          );

          if (Math.random() > 0.4) {
            const ox = (Math.random() - 0.5) * 300;
            const oy = (Math.random() - 0.5) * 300;
            shockwaves.push(
              new Shockwave(
                width / 2 + ox,
                height / 2 + oy,
                BURST_INTENSITY * 0.7,
                BURST_SPEED
              )
            );
          }

          if (pulseCount >= maxPulses) {
            stopEngineSequence();
          }
        }, 350);
      };

      const stopEngineSequence = () => {
        if (engineInterval) {
          clearInterval(engineInterval);
          engineInterval = null;
        }
      };

      // Expose function
      triggerRef.current = startEngineSequence;

      const animate = () => {
        // PERFORMANCE: Stop loop if not visible
        if (!isVisible) {
          animationId = requestAnimationFrame(animate);
          return;
        }

        // Clear with black
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);

        // Background Grid Lines (Blue, very faint)
        ctx.beginPath();
        ctx.strokeStyle = "rgba(56, 189, 248, 0.06)";
        ctx.lineWidth = 1;

        for (let i = 0; i <= width; i += spacing) {
          ctx.moveTo(i, 0);
          ctx.lineTo(i, height);
        }
        for (let j = 0; j <= height; j += spacing) {
          ctx.moveTo(0, j);
          ctx.lineTo(width, j);
        }
        ctx.stroke();

        // Update Shockwaves
        shockwaves.forEach((wave, index) => {
          wave.update();
          if (wave.dead) shockwaves.splice(index, 1);
        });

        if (!shockwaves.some((w) => w.intensity > 1.2)) {
          // Fallback logic if needed
        }

        // Draw Particles
        particles.forEach((p) => {
          let waveInfluence = 0;

          shockwaves.forEach((wave) => {
            const dx = p.baseX - wave.x;
            const dy = p.baseY - wave.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const distFromWave = Math.abs(dist - wave.radius);

            if (distFromWave < wave.width) {
              let localIntensity = 1 - distFromWave / wave.width;

              if (wave.intensity > 1) {
                localIntensity = Math.pow(localIntensity, 3);
              } else {
                localIntensity = Math.pow(localIntensity, 2);
              }

              waveInfluence += localIntensity * wave.intensity;
            }
          });

          if (waveInfluence > p.active) p.active = waveInfluence;
          else p.active *= 0.95;

          const totalAlpha = Math.min(p.baseAlpha + p.active, 1);

          if (totalAlpha > 0.01) {
            const size = p.size + p.active * 1.8;

            ctx.fillStyle = `rgba(${COLOR_R}, ${COLOR_G}, ${COLOR_B}, ${totalAlpha})`;
            ctx.beginPath();
            ctx.rect(p.x - size / 2, p.y - size / 2, size, size);
            ctx.fill();
          }
        });

        animationId = requestAnimationFrame(animate);
      };

      // --- EVENT LISTENERS ---
      const handleResize = () => init();
      window.addEventListener("resize", handleResize);

      // --- INIT ---
      init();
      animate();

      // --- CLEANUP ---
      return () => {
        window.removeEventListener("resize", handleResize);
        if (animationId) cancelAnimationFrame(animationId);
        if (ambientInterval) clearInterval(ambientInterval);
        if (engineInterval) clearInterval(engineInterval);
        observer.disconnect();
      };
    }, []);

    return (
      <>
        {/* Edge Glow Overlay */}
        <div
          className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-1000 ${
            isEdgeGlowActive ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(56,189,248,0.15)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-cyan-500/20 to-transparent blur-2xl" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-cyan-500/20 to-transparent blur-2xl" />
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-cyan-500/20 to-transparent blur-2xl" />
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-cyan-500/20 to-transparent blur-2xl" />
        </div>

        <canvas
          ref={canvasRef}
          className={`block w-full h-full ${className}`}
        />
      </>
    );
  }
);

AuraEngine.displayName = "AuraEngine";

export default AuraEngine;

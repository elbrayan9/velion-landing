"use client";

import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

export interface NeuralBrainRef {
  triggerWorkflow: () => void;
}

const NeuralBrain = forwardRef<NeuralBrainRef, { className?: string }>(
  ({ className = "" }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const nodesRef = useRef<any[]>([]);
    const packetsRef = useRef<any[]>([]);

    // Config
    const NODE_COUNT = 600;
    const BRAIN_SCALE = 240;
    const CONNECTION_DIST = 45;

    // Colors - Boosted for visibility
    const C_NODE_BASE = "rgba(0, 180, 255, 0.5)"; // Increased opacity
    const C_NODE_ACTIVE = "rgba(255, 255, 255, 1)";
    const C_LINE_BASE = "rgba(0, 180, 255, 0.15)"; // Increased opacity
    const C_PACKET = "#ffffff";

    // Rotation state refs to avoid re-renders
    const rotationRef = useRef({
      angleX: 0,
      angleY: 0,
      targetAngleX: 0,
      targetAngleY: 0,
    });

    useImperativeHandle(ref, () => ({
      triggerWorkflow: () => {
        triggerWorkflow();
      },
    }));

    const triggerWorkflow = () => {
      if (nodesRef.current.length === 0) return;
      const startIdx = Math.floor(Math.random() * nodesRef.current.length);
      activateNode(startIdx, 0);
    };

    const activateNode = (idx: number, depth: number) => {
      if (depth > 6) return;
      const node = nodesRef.current[idx];
      if (!node) return;

      node.activation = 1.0;

      if (node.connections.length > 0) {
        setTimeout(() => {
          const branches = Math.floor(Math.random() * 2) + 1;
          for (let i = 0; i < branches; i++) {
            const nextIdx =
              node.connections[
                Math.floor(Math.random() * node.connections.length)
              ];
            packetsRef.current.push({
              fromIdx: idx,
              toIdx: nextIdx,
              progress: 0,
              speed: 0.03 + Math.random() * 0.02,
            });
          }
        }, 100);
      }
    };

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let width = 0;
      let height = 0;
      let animationId: number;

      const init = () => {
        // Use parent container dimensions
        const rect = canvas.parentElement?.getBoundingClientRect();
        width = rect?.width || window.innerWidth;
        height = rect?.height || window.innerHeight;

        // Scale for retina
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        createBrainGraph();
      };

      const createBrainGraph = () => {
        nodesRef.current = [];
        for (let i = 0; i < NODE_COUNT; i++) {
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(Math.random() * 2 - 1);

          let r = BRAIN_SCALE * 0.8; // Scaled down slightly for container
          let x = r * Math.sin(phi) * Math.cos(theta);
          let y = r * Math.sin(phi) * Math.sin(theta);
          let z = r * Math.cos(phi);

          x += x > 0 ? 15 : -15;
          y *= 0.85;
          z *= 1.1;

          x += (Math.random() - 0.5) * 15;
          y += (Math.random() - 0.5) * 15;
          z += (Math.random() - 0.5) * 15;

          nodesRef.current.push({
            id: i,
            x,
            y,
            z,
            px: 0,
            py: 0,
            scale: 0,
            activation: 0,
            connections: [],
          });
        }

        nodesRef.current.forEach((n1, i) => {
          nodesRef.current.forEach((n2, j) => {
            if (i === j) return;
            const dx = n1.x - n2.x;
            const dy = n1.y - n2.y;
            const dz = n1.z - n2.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < CONNECTION_DIST && n1.connections.length < 5) {
              n1.connections.push(j);
            }
          });
        });
      };

      const project = () => {
        const cx = width / 2;
        const cy = height / 2;
        const { angleX, angleY } = rotationRef.current;

        nodesRef.current.forEach((n) => {
          let x1 = n.x * Math.cos(angleY) - n.z * Math.sin(angleY);
          let z1 = n.z * Math.cos(angleY) + n.x * Math.sin(angleY);

          let y1 = n.y * Math.cos(angleX) - z1 * Math.sin(angleX);
          let z2 = z1 * Math.cos(angleX) + n.y * Math.sin(angleX);

          const scale = 450 / (450 + z2);

          n.px = cx + x1 * scale;
          n.py = cy + y1 * scale;
          n.scale = scale;
        });
      };

      const animate = () => {
        ctx.clearRect(0, 0, width, height);

        // Rotation logic
        const rot = rotationRef.current;
        rot.angleY += (rot.targetAngleY - rot.angleY) * 0.05;
        rot.angleX += (rot.targetAngleX - rot.angleX) * 0.05;
        rot.targetAngleY += 0.002; // Auto rotate

        project();

        // Draw Connections
        ctx.lineWidth = 0.5;
        nodesRef.current.forEach((n1) => {
          if (n1.activation > 0) n1.activation *= 0.95;

          n1.connections.forEach((n2Idx: number) => {
            const n2 = nodesRef.current[n2Idx];
            if (n2.id > n1.id) {
              const alpha = Math.min(n1.scale, n2.scale) * 0.4;
              const activeFlow = Math.max(n1.activation, n2.activation);

              if (activeFlow > 0.1 && alpha > 0) {
                ctx.strokeStyle = `rgba(0, 220, 255, ${activeFlow * alpha})`;
                ctx.beginPath();
                ctx.moveTo(n1.px, n1.py);
                ctx.lineTo(n2.px, n2.py);
                ctx.stroke();
              } else if (alpha > 0.1) {
                ctx.strokeStyle = C_LINE_BASE;
                ctx.beginPath();
                ctx.moveTo(n1.px, n1.py);
                ctx.lineTo(n2.px, n2.py);
                ctx.stroke();
              }
            }
          });
        });

        // Draw Packets
        for (let i = packetsRef.current.length - 1; i >= 0; i--) {
          const p = packetsRef.current[i];
          const n1 = nodesRef.current[p.fromIdx];
          const n2 = nodesRef.current[p.toIdx];

          p.progress += p.speed;

          const x = n1.px + (n2.px - n1.px) * p.progress;
          const y = n1.py + (n2.py - n1.py) * p.progress;
          const s = n1.scale + (n2.scale - n1.scale) * p.progress;

          if (s > 0) {
            ctx.fillStyle = C_PACKET;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "rgba(0, 200, 255, 1)";
            ctx.beginPath();
            ctx.arc(x, y, 2.5 * s, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }

          if (p.progress >= 1) {
            packetsRef.current.splice(i, 1);
            activateNode(p.toIdx, 0);
          }
        }

        // Draw Nodes
        nodesRef.current.forEach((n) => {
          if (n.scale > 0) {
            const size = (1.5 + n.activation * 3) * n.scale;

            if (n.activation > 0.1) {
              ctx.fillStyle = C_NODE_ACTIVE;
              ctx.shadowBlur = 15 * n.activation;
              ctx.shadowColor = "rgba(0, 180, 255, 0.8)";
            } else {
              ctx.fillStyle = C_NODE_BASE;
              ctx.shadowBlur = 0;
            }

            ctx.beginPath();
            ctx.arc(n.px, n.py, size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        });

        animationId = requestAnimationFrame(animate);
      };

      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) / width - 0.5;
        const y = (e.clientY - rect.top) / height - 0.5;
        rotationRef.current.targetAngleY += x * 0.08;
        rotationRef.current.targetAngleX += y * 0.08;
      };

      const handleResize = () => {
        init();
      };

      window.addEventListener("resize", handleResize);
      canvas.addEventListener("mousemove", handleMouseMove);

      init();
      animate();

      // Initial trigger
      setTimeout(triggerWorkflow, 800);

      return () => {
        window.removeEventListener("resize", handleResize);
        canvas.removeEventListener("mousemove", handleMouseMove);
        cancelAnimationFrame(animationId);
      };
    }, []);

    return (
      <div
        className={`relative w-full h-full flex items-center justify-center ${className}`}
      >
        <canvas ref={canvasRef} className="cursor-crosshair" />
      </div>
    );
  }
);

NeuralBrain.displayName = "NeuralBrain";

export default NeuralBrain;

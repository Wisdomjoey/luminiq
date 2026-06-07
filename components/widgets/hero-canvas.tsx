"use client";

import { useEffect, useRef } from "react";

function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let rafId: number | undefined;
    let observer: ResizeObserver | undefined;

    const loadCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const DPR = window.devicePixelRatio || 1;
      const containerWidth = canvas.parentElement?.offsetWidth || 480;
      const SIZE = containerWidth;
      const PIXEL_SIZE = Math.round(SIZE * DPR);

      canvas.width = PIXEL_SIZE;
      canvas.height = PIXEL_SIZE;
      canvas.style.width = "100%";
      canvas.style.height = "100%";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(DPR, DPR);

      const S = SIZE;
      const CX = S / 2;
      const CY = S / 2;
      const scale = S / 480;
      const lineWidth = Math.max(0.5, S * 0.0025);
      const dotRadius = Math.max(1.5, S * 0.004);
      let time = 0;

      const nodes = [
        {
          x: CX,
          y: CY,
          r: 18 * scale,
          label: "System",
          color: "#5b45f5",
          size: 1.4,
        },
        {
          x: CX + 140 * scale,
          y: CY - 80 * scale,
          r: 10 * scale,
          label: "Colors",
          color: "#8b6cf5",
          size: 1,
        },
        {
          x: CX + 150 * scale,
          y: CY + 60 * scale,
          r: 10 * scale,
          label: "Type",
          color: "#c9a84c",
          size: 1,
        },
        {
          x: CX - 140 * scale,
          y: CY - 60 * scale,
          r: 10 * scale,
          label: "Spacing",
          color: "#5b45f5",
          size: 1,
        },
        {
          x: CX - 130 * scale,
          y: CY + 90 * scale,
          r: 10 * scale,
          label: "Icons",
          color: "#8b6cf5",
          size: 1,
        },
        {
          x: CX + 30 * scale,
          y: CY - 160 * scale,
          r: 8 * scale,
          label: "Motion",
          color: "#c9a84c",
          size: 0.8,
        },
        {
          x: CX - 50 * scale,
          y: CY + 170 * scale,
          r: 8 * scale,
          label: "Grid",
          color: "#5b45f5",
          size: 0.8,
        },
        {
          x: CX + 180 * scale,
          y: CY - 30 * scale,
          r: 6 * scale,
          label: "",
          color: "#8b6cf5",
          size: 0.6,
        },
        {
          x: CX - 180 * scale,
          y: CY + 20 * scale,
          r: 6 * scale,
          label: "",
          color: "#5b45f5",
          size: 0.6,
        },
        {
          x: CX + 60 * scale,
          y: CY + 160 * scale,
          r: 6 * scale,
          label: "",
          color: "#c9a84c",
          size: 0.6,
        },
        {
          x: CX - 70 * scale,
          y: CY - 150 * scale,
          r: 6 * scale,
          label: "",
          color: "#8b6cf5",
          size: 0.6,
        },
      ];
      const edges = [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
        [0, 6],
        [1, 7],
        [1, 5],
        [2, 7],
        [3, 8],
        [4, 8],
        [5, 10],
        [6, 9],
        [2, 9],
      ];

      const draw = () => {
        ctx.clearRect(0, 0, S, S);
        time += 0.008;

        const glowRadius = S * 0.62;
        const grad = ctx.createRadialGradient(CX, CY, 0, CX, CY, glowRadius);

        grad.addColorStop(0, "rgba(91,69,245,0.06)");
        grad.addColorStop(1, "rgba(91,69,245,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(CX, CY, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle grid
        ctx.strokeStyle = "rgba(10,10,15,0.04)";
        ctx.lineWidth = lineWidth;

        const GRID = Math.max(24, S / 15);

        for (let x = 0; x < S; x += GRID) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, S);
          ctx.stroke();
        }
        for (let y = 0; y < S; y += GRID) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(S, y);
          ctx.stroke();
        }

        // const ringA = S * 0.42;
        // const ringB = S * 0.29;

        // ctx.beginPath();
        // ctx.arc(CX, CY, ringA, 0, Math.PI * 2);
        // ctx.strokeStyle = "rgba(91,69,245,0.06)";
        // ctx.lineWidth = lineWidth;
        // ctx.stroke();

        // ctx.beginPath();
        // ctx.arc(CX, CY, ringB, 0, Math.PI * 2);
        // ctx.strokeStyle = "rgba(201,168,76,0.05)";
        // ctx.lineWidth = lineWidth;
        // ctx.stroke();

        edges.forEach(([a, b]) => {
          const na = nodes[a];
          const nb = nodes[b];
          const pulse = (Math.sin(time * 1.5 + a * 0.8) + 1) * 0.5;

          ctx.beginPath();
          ctx.moveTo(na.x, na.y);
          ctx.lineTo(nb.x, nb.y);

          const lineGrad = ctx.createLinearGradient(na.x, na.y, nb.x, nb.y);

          lineGrad.addColorStop(0, `rgba(91,69,245,${0.05 + pulse * 0.1})`);
          lineGrad.addColorStop(1, `rgba(139,108,245,${0.05 + pulse * 0.1})`);
          ctx.strokeStyle = lineGrad;
          ctx.lineWidth = Math.max(0.8, lineWidth);
          ctx.stroke();

          const tRaw = (time * 0.4 + a * 0.3) % 1;
          const tx = na.x + (nb.x - na.x) * tRaw;
          const ty = na.y + (nb.y - na.y) * tRaw;

          ctx.beginPath();
          ctx.arc(tx, ty, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(91,69,245,${0.4 + pulse * 0.4})`;
          ctx.fill();
        });

        nodes.forEach((node, i) => {
          const y = node.y + Math.sin(time * 0.5 + i * 0.9) * S * 0.008;
          const r = node.r * node.size;

          const glowGrad = ctx.createRadialGradient(
            node.x,
            y,
            0,
            node.x,
            y,
            r * 3,
          );

          glowGrad.addColorStop(0, node.color + "30");
          glowGrad.addColorStop(1, "transparent");
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(node.x, y, r * 3, 0, Math.PI * 2);
          ctx.fill();

          const nodeGrad = ctx.createRadialGradient(
            node.x - r * 0.3,
            y - r * 0.3,
            0,
            node.x,
            y,
            r,
          );
          nodeGrad.addColorStop(0, node.color + "ff");
          nodeGrad.addColorStop(1, node.color + "cc");
          ctx.beginPath();
          ctx.arc(node.x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = nodeGrad;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.x - r * 0.25, y - r * 0.3, r * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,255,255,0.25)";
          ctx.fill();

          if (node.label && node.r >= 8 * scale) {
            ctx.fillStyle = "rgba(10,10,15,0.7)";
            ctx.font = `500 ${Math.max(10, S * 0.02 * node.size)}px DM Sans, system-ui, sans-serif`;
            ctx.textAlign = "center";
            ctx.fillText(node.label, node.x, y + r + S * 0.03);
          }

          if (i === 0) {
            ctx.beginPath();
            ctx.arc(node.x, y, r * 0.45, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255,0.5)";
            ctx.fill();
          }
        });

        rafId = requestAnimationFrame(draw);
      };

      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      draw();
    };

    loadCanvas();

    if (canvasRef.current?.parentElement) {
      observer = new ResizeObserver(loadCanvas);
      observer.observe(canvasRef.current.parentElement);
    }

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return <canvas ref={canvasRef} id="heroCanvas"></canvas>;
}

export default HeroCanvas;

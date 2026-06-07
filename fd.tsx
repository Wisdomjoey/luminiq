"use client";

import { useEffect, useRef } from "react";

function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let rafId: number | undefined;
    const loadCanvas = () => {
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");

        if (!ctx) return;

        const DPR = window.devicePixelRatio || 1;
        const SIZE = canvasRef.current.parentElement?.offsetWidth || 480;

        canvasRef.current.width = SIZE * DPR;
        canvasRef.current.height = SIZE * DPR;
        canvasRef.current.style.width = SIZE + "px";
        canvasRef.current.style.height = SIZE + "px";

        ctx.scale(DPR, DPR);

        const S = SIZE;
        const CX = S / 2,
          CY = S / 2;
        let time = 0;

        // Nodes in the design system graph
        const nodes = [
          { x: CX, y: CY, r: 18, label: "System", color: "#5b45f5", size: 1.4 },
          {
            x: CX + 140,
            y: CY - 80,
            r: 10,
            label: "Colors",
            color: "#8b6cf5",
            size: 1,
          },
          {
            x: CX + 150,
            y: CY + 60,
            r: 10,
            label: "Type",
            color: "#c9a84c",
            size: 1,
          },
          {
            x: CX - 140,
            y: CY - 60,
            r: 10,
            label: "Spacing",
            color: "#5b45f5",
            size: 1,
          },
          {
            x: CX - 130,
            y: CY + 90,
            r: 10,
            label: "Icons",
            color: "#8b6cf5",
            size: 1,
          },
          {
            x: CX + 30,
            y: CY - 160,
            r: 8,
            label: "Motion",
            color: "#c9a84c",
            size: 0.8,
          },
          {
            x: CX - 50,
            y: CY + 170,
            r: 8,
            label: "Grid",
            color: "#5b45f5",
            size: 0.8,
          },
          {
            x: CX + 180,
            y: CY - 30,
            r: 6,
            label: "",
            color: "#8b6cf5",
            size: 0.6,
          },
          {
            x: CX - 180,
            y: CY + 20,
            r: 6,
            label: "",
            color: "#5b45f5",
            size: 0.6,
          },
          {
            x: CX + 60,
            y: CY + 160,
            r: 6,
            label: "",
            color: "#c9a84c",
            size: 0.6,
          },
          {
            x: CX - 70,
            y: CY - 150,
            r: 6,
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

          // Background glow
          const grad = ctx.createRadialGradient(CX, CY, 0, CX, CY, S * 0.6);

          grad.addColorStop(0, "rgba(91,69,245,0.06)");
          grad.addColorStop(1, "rgba(91,69,245,0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(CX, CY, S * 0.6, 0, Math.PI * 2);
          ctx.fill();

          // Subtle grid
          ctx.strokeStyle = "rgba(10,10,15,0.04)";
          ctx.lineWidth = 0.5;

          const GRID = 32;

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

          // Orbiting ring
          ctx.beginPath();
          ctx.arc(CX, CY, 200, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(91,69,245,0.06)";
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(CX, CY, 140, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(201,168,76,0.05)";
          ctx.lineWidth = 0.5;
          ctx.stroke();

          // Animated edges
          edges.forEach(([a, b]) => {
            const na = nodes[a],
              nb = nodes[b];
            const pulse = (Math.sin(time * 1.5 + a * 0.8) + 1) * 0.5;

            // Glow line
            ctx.beginPath();
            ctx.moveTo(na.x, na.y);
            ctx.lineTo(nb.x, nb.y);

            const lineGrad = ctx.createLinearGradient(na.x, na.y, nb.x, nb.y);

            lineGrad.addColorStop(0, `rgba(91,69,245,${0.05 + pulse * 0.1})`);
            lineGrad.addColorStop(1, `rgba(139,108,245,${0.05 + pulse * 0.1})`);
            ctx.strokeStyle = lineGrad;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Traveling dot
            const tRaw = (time * 0.4 + a * 0.3) % 1;
            const tx = na.x + (nb.x - na.x) * tRaw;
            const ty = na.y + (nb.y - na.y) * tRaw;

            ctx.beginPath();
            ctx.arc(tx, ty, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(91,69,245,${0.4 + pulse * 0.4})`;
            ctx.fill();
          });

          // Nodes
          nodes.forEach((node, i) => {
            // const hover = (Math.sin(time * 0.8 + i * 1.2) + 1) * 0.5;
            const y = node.y + Math.sin(time * 0.5 + i * 0.9) * 4;
            const r = node.r * node.size;

            // Glow
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

            // Node body
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

            // Highlight
            ctx.beginPath();
            ctx.arc(node.x - r * 0.25, y - r * 0.3, r * 0.35, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255,0.25)";
            ctx.fill();

            // Label (larger nodes)
            if (node.label && node.r >= 8) {
              ctx.fillStyle = "rgba(10,10,15,0.7)";
              ctx.font = `500 ${10 * node.size}px DM Sans, system-ui, sans-serif`;
              ctx.textAlign = "center";
              ctx.fillText(node.label, node.x, y + r + 14);
            }

            // Center node inner mark
            if (i === 0) {
              ctx.beginPath();
              ctx.arc(node.x, y, r * 0.45, 0, Math.PI * 2);
              ctx.fillStyle = "rgba(255,255,255,0.5)";
              ctx.fill();
            }
          });

          rafId = requestAnimationFrame(draw);
        };

        draw();
      }
    };

    loadCanvas();

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} id="heroCanvas"></canvas>;
}

export default HeroCanvas;

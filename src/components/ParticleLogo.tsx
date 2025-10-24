import React, { useRef, useEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

type Particle = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  isSettled: boolean;
  transitionDelay: number;

  // NEW: local float (oscillation) params
  floatAmp: number; // amplitude in px
  floatFreq: number; // frequency (Hz)
  floatPhase: number; // phase offset
  // cached local target (updated each frame)
  localTargetX?: number;
  localTargetY?: number;
};

type ParticleLogoProps = {
  width?: number;
  height?: number;
  targetParticleCount?: number;
  particleSize?: number;
  logoText?: string;
  logoFontSize?: number;
  logoStrokeWidth?: number;
  cursorRadius?: number;
  cursorStrength?: number;
  spring?: number; // new: spring stiffness
  damping?: number; // new: velocity damping (0..1)
  scatterFactor?: number; // initial scatter distance multiplier
  transitionSpeed?: number; // used as small multiplier for arrival
  minSpacing?: number;
};

const ParticleLogo: React.FC<ParticleLogoProps> = ({
  width = 400,
  height = 400,
  targetParticleCount = 18000,
  particleSize = 1.5,
  logoText = "WS",
  logoFontSize = 0.85,
  logoStrokeWidth = 20,
  cursorRadius = 100,
  cursorStrength = 50,
  spring = 0.06,
  damping = 0.88,
  scatterFactor = 2.5,
  transitionSpeed = 0.05,
  minSpacing = 3,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [actualCount, setActualCount] = useState(0);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const size = useWindowSize();
  const canvasWidth = size.width ? Math.min(width, size.width * 0.9) : width;
  const canvasHeight = canvasWidth;

  // Spatial hash config (for neighbor repulsion)
  const gridRef = useRef({
    buckets: new Map<number, number[]>(),
    cols: 0,
    cellSize: Math.max(8, minSpacing * 1.4),
  });

  // Build offscreen text image and generate particle bases (kept original logic)
  useEffect(() => {
    const offCanvas = document.createElement("canvas");
    offCanvas.width = canvasWidth;
    offCanvas.height = canvasHeight;
    const ctx = offCanvas.getContext("2d");
    if (!ctx) return;

    // Background gradient preserved
    const grad = ctx.createRadialGradient(
      canvasWidth * 0.4,
      canvasHeight * 0.2,
      canvasWidth * 0.05,
      canvasWidth * 0.5,
      canvasHeight * 0.5,
      canvasWidth * 0.6
    );
    grad.addColorStop(0, "#fd0d0dff");
    grad.addColorStop(0.3, "#e00707ff");
    grad.addColorStop(0.5, "#bb0303ff");
    grad.addColorStop(1, "#a50303ff");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw logo text (white) - kept exactly as before
    ctx.fillStyle = "white";
    ctx.lineWidth = logoStrokeWidth;
    ctx.font = `bold ${canvasWidth * logoFontSize}px serif`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    if (logoText === "WS") {
      ctx.fillText("W", canvasWidth / 1.55 - canvasWidth * 0.15, canvasHeight / 1.65);
      ctx.fillText("S", canvasWidth / 2.3 + canvasWidth * 0.15, canvasHeight / 1.65);
    } else {
      ctx.fillText(logoText, canvasWidth / 2, canvasHeight / 2);
    }

    const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    const data = imageData.data;

    const spacing = Math.max(minSpacing, Math.sqrt((canvasWidth * canvasHeight) / targetParticleCount));
    const tempParticles: Particle[] = [];

    for (let y = 0; y < canvasHeight; y += spacing) {
      for (let x = 0; x < canvasWidth; x += spacing) {
        const px = Math.round(x);
        const py = Math.round(y);

        if (px >= canvasWidth || py >= canvasHeight) continue;
        const idx = (py * canvasWidth + px) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = data[idx + 3];

        // skip fully transparent
        if (a === 0) continue;
        // skip very bright white pixels (logo text is white - we want silhouette inverse)
        if (r > 240 && g > 240 && b > 240) continue;

        // scatter start positions around a circle with random distance
        const randomAngle = Math.random() * Math.PI * 2;
        const randomDist = (canvasWidth * scatterFactor) * (0.2 + Math.random() * 0.8);

        const startX = px + Math.cos(randomAngle) * randomDist;
        const startY = py + Math.sin(randomAngle) * randomDist;

        // initial velocity aims roughly toward base so particles "fly in"
        const initialVx = (px - startX) * (0.02 + Math.random() * 0.02);
        const initialVy = (py - startY) * (0.02 + Math.random() * 0.02);

        // NEW: per-particle float params
        const floatAmp = Math.max(0.8, minSpacing * 0.6) * (0.4 + Math.random() * 0.8); // px amplitude
        const floatFreq = 0.2 + Math.random() * 0.8; // Hz
        const floatPhase = Math.random() * Math.PI * 2;

        tempParticles.push({
          baseX: px,
          baseY: py,
          x: startX,
          y: startY,
          vx: initialVx,
          vy: initialVy,
          isSettled: false,
          transitionDelay: Math.random() * 60,
          color: `rgba(${r},${g},${b},${a / 255})`,
          size: particleSize,
          floatAmp,
          floatFreq,
          floatPhase,
        });
      }
    }

    particlesRef.current = tempParticles;
    setActualCount(tempParticles.length);

    // setup grid
    const cellSize = Math.max(8, minSpacing * 1.4);
    const cols = Math.ceil(canvasWidth / cellSize);
    gridRef.current = { buckets: new Map<number, number[]>(), cols, cellSize };
  }, [
    canvasWidth,
    canvasHeight,
    targetParticleCount,
    particleSize,
    logoText,
    logoFontSize,
    logoStrokeWidth,
    minSpacing,
    scatterFactor,
  ]);

  // Mouse handlers (unchanged except no allocations)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => {
      mousePos.current = { x: -1000, y: -1000 };
    };
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // helper: build spatial hash from particles (fast each frame)
  const buildGrid = (particles: Particle[]) => {
    const { buckets, cols, cellSize } = gridRef.current;
    buckets.clear();
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const cx = Math.floor(p.x / cellSize);
      const cy = Math.floor(p.y / cellSize);
      if (cx < 0 || cy < 0) continue;
      const key = cx + cy * cols;
      const arr = buckets.get(key);
      if (!arr) buckets.set(key, [i]);
      else arr.push(i);
    }
  };

  // helper: query neighbors within radius using grid
  const queryNeighbors = (px: number, py: number, radius: number, particles: Particle[]) => {
    const { buckets, cols, cellSize } = gridRef.current;
    const minX = Math.floor((px - radius) / cellSize);
    const maxX = Math.floor((px + radius) / cellSize);
    const minY = Math.floor((py - radius) / cellSize);
    const maxY = Math.floor((py + radius) / cellSize);
    const out: number[] = [];
    for (let cy = minY; cy <= maxY; cy++) {
      for (let cx = minX; cx <= maxX; cx++) {
        if (cx < 0 || cy < 0) continue;
        const key = cx + cy * cols;
        const cell = gridRef.current.buckets.get(key);
        if (!cell) continue;
        for (const idx of cell) {
          const p = particles[idx];
          const dx = p.x - px;
          const dy = p.y - py;
          if (dx * dx + dy * dy <= radius * radius) out.push(idx);
        }
      }
    }
    return out;
  };

  // Animation loop updated: adds continuous local float & repulsion (keeps rest intact)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let lastTime = performance.now();

    const animate = (now?: number) => {
      const tNow = now ?? performance.now();
      const dt = Math.min(0.04, (tNow - lastTime) / 1000); // seconds, cap
      lastTime = tNow;

      const particles = particlesRef.current;
      if (!particles || particles.length === 0) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      // Build grid for neighbor queries
      buildGrid(particles);

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      const settleDistance = 0.5;
      const mx = mousePos.current.x;
      const my = mousePos.current.y;

      // small multiplier for dt to keep behavior similar to your original (unchanged feel)
      const frameFactor = dt * 60;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // compute local oscillating target (keeps each particle floating in a small area around base)
        const localX =
          p.baseX + Math.cos((tNow * p.floatFreq + p.floatPhase) * 2 * Math.PI / 1000) * p.floatAmp * 0.5;
        const localY =
          p.baseY + Math.sin((tNow * p.floatFreq + p.floatPhase) * 2 * Math.PI / 1000) * p.floatAmp * 0.5;
        p.localTargetX = localX;
        p.localTargetY = localY;

        // Entry transition
        if (p.transitionDelay > 0) {
          p.transitionDelay -= frameFactor;
          // still move a bit toward starting velocity
          p.vx *= 0.98;
          p.vy *= 0.98;
          p.x += p.vx * frameFactor * 0.25;
          p.y += p.vy * frameFactor * 0.25;
        } else {
          // Spring toward local target (instead of raw base) -> gentle floating
          const dx = p.localTargetX! - p.x;
          const dy = p.localTargetY! - p.y;

          // Apply spring (keeps float smooth) — preserving your spring variable
          p.vx += dx * spring * frameFactor * 0.5; // smaller influence for floating
          p.vy += dy * spring * frameFactor * 0.5;

          // apply damping
          p.vx *= damping;
          p.vy *= damping;

          // settle detection (not forced to lock to base anymore, floats indefinitely)
          if (Math.abs(dx) < settleDistance && Math.abs(dy) < settleDistance && Math.abs(p.vx) < 0.01 && Math.abs(p.vy) < 0.01) {
            p.isSettled = true;
          } else {
            p.isSettled = false;
          }
        }

        // Cursor interaction (same as your working code)
        const dxm = p.x - mx;
        const dym = p.y - my;
        const dist = Math.sqrt(dxm * dxm + dym * dym);

        if (dist < cursorRadius && dist > 0) {
          const nx = dxm / dist;
          const ny = dym / dist;
          const force = ((cursorRadius - dist) / cursorRadius) * cursorStrength;
          const impulseFactor = p.transitionDelay > 0 ? 0.2 : 1;
          p.vx += nx * (force * 0.08) * impulseFactor;
          p.vy += ny * (force * 0.08) * impulseFactor;
        }

        // Neighbor repulsion to maintain minSpacing (use small radius to keep cheap)
        const neighborIds = queryNeighbors(p.x, p.y, minSpacing * 1.05, particles);
        for (const nid of neighborIds) {
          if (nid === i) continue;
          const q = particles[nid];
          const dx2 = q.x - p.x;
          const dy2 = q.y - p.y;
          const d2 = dx2 * dx2 + dy2 * dy2;
          if (d2 === 0) continue;
          const d = Math.sqrt(d2);
          if (d < minSpacing && d > 0) {
            // small push that prevents overlap without violent motion
            const push = (minSpacing - d) * 0.02; // tuned small factor
            const nx = dx2 / d;
            const ny = dy2 / d;
            p.vx -= nx * push;
            p.vy -= ny * push;
            q.vx += nx * push * 0.5; // spread some push to neighbor gently
            q.vy += ny * push * 0.5;
          }
        }

        // Integrate positions (frame-factor aware)
        p.x += p.vx * frameFactor;
        p.y += p.vy * frameFactor;

        // Drawing: keep identical visual appearance to your original
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(Math.round(p.x), Math.round(p.y), p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [
    canvasWidth,
    canvasHeight,
    cursorRadius,
    cursorStrength,
    spring,
    damping,
    transitionSpeed,
    minSpacing,
  ]);

  return (
    <div style={{ padding: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{
          borderRadius: "50%",
          backgroundColor: "transparent",
          display: "block",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default ParticleLogo;

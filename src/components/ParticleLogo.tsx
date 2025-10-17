import React, { useRef, useEffect, useState } from "react";

type Particle = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  color: string;
  size: number;
  offsetX: number; // floating offset x (-max to +max)
  offsetY: number; // floating offset y
  directionX: number; // 1 or -1 for floating direction
  directionY: number;
  speedX: number; // pixels per frame for floating
  speedY: number;
};

type ParticleLogoProps = {
  width?: number;
  height?: number;
  particleSize?: number;
  floatDistance?: number;
  floatSpeed?: number; // approximate seconds per float cycle
  sampleRate?: number; // pixel sampling rate, e.g., 4 means sample 1 in 4 pixels
  srcSVGPath?: string; // SVG path string to rasterize if needed
};

const ParticleLogo: React.FC<ParticleLogoProps> = ({
  width = 600,
  height = 600,
  particleSize = 1, // smallest pixel
  floatDistance = 4, // float max 4 pixels in cell
  floatSpeed = 0.2, // seconds per float half cycle (back and forth)
  sampleRate = 4, // every 4th pixel is sampled
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offscreenCanvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Helper: convert RGBA array to css color string
  const rgbaToCss = (data: Uint8ClampedArray, idx: number) => {
    return `rgba(${data[idx]},${data[idx + 1]},${data[idx + 2]},${data[idx + 3] / 255})`;
  };

  // Initialize particles sampling pixels ignoring white (logo pixels)
  useEffect(() => {
    const offCanvas = document.createElement("canvas");
    offCanvas.width = width;
    offCanvas.height = height;
    offscreenCanvasRef.current = offCanvas;
    const ctx = offCanvas.getContext("2d");
    if (!ctx) return;

    // Draw your SVG background + shapes onto offscreen canvas
    // For demo, fill background simulating red/black gradient
    const grad = ctx.createRadialGradient(
      width * 0.4,
      height * 0.2,
      width * 0.05,
      width * 0.5,
      height * 0.5,
      width * 0.5
    );
    grad.addColorStop(0, "#710707");
    grad.addColorStop(1, "#1a0101");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Draw white "WS" like logo shape as a mask on the canvas to exclude later
    ctx.fillStyle = "white";
    // Placeholder: draw the white shape roughly (replace with exact path or logo)
    ctx.font = `${width * 0.7}px serif`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText("S", width / 2, height / 1.9);

    // Get pixel data
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    const tempParticles: Particle[] = [];

    // Sample pixels with sampleRate, omit white pixels (assumed logo pixels)
    for (let y = 0; y < height; y += sampleRate) {
      for (let x = 0; x < width; x += sampleRate) {
        const idx = (y * width + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = data[idx + 3];

        // Skip transparent pixels
        if (a === 0) continue;

        // Skip white pixels = logo pixels (threshold to tolerate slight variations)
        if (r > 240 && g > 240 && b > 240) continue;

        // Sample only 1 pixel in 4 (already sampling with step; if want stricter, add randomness)
        if (Math.random() > 0.25) continue;

        // Create Particle
        tempParticles.push({
          baseX: x,
          baseY: y,
          x: x,
          y: y,
          color: `rgba(${r},${g},${b},${a / 255})`,
          size: particleSize,
          offsetX: 0,
          offsetY: 0,
          directionX: Math.random() < 0.5 ? 1 : -1,
          directionY: Math.random() < 0.5 ? 1 : -1,
          speedX: (floatDistance / (floatSpeed * 60)) * (0.5 + Math.random()), // pixels per frame approx
          speedY: (floatDistance / (floatSpeed * 60)) * (0.5 + Math.random()),
        });
      }
    }
    setParticles(tempParticles);
  }, [width, height, particleSize, floatDistance, floatSpeed, sampleRate]);

  // Animation loop
  useEffect(() => {
    let animationFrameId: number;
    const ctx = canvasRef.current?.getContext("2d");

    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      particles.forEach((p) => {
        // Update position with bouncing floating in 4 px box
        p.offsetX += p.speedX * p.directionX;
        p.offsetY += p.speedY * p.directionY;

        // Bounce back within floatDistance
        if (Math.abs(p.offsetX) > floatDistance) p.directionX *= -1;
        if (Math.abs(p.offsetY) > floatDistance) p.directionY *= -1;

        // Render particle as square pixel
        ctx.fillStyle = p.color;
        ctx.fillRect(p.baseX + p.offsetX, p.baseY + p.offsetY, p.size, p.size);
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [particles, width, height, floatDistance]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        borderRadius: "50%", // Border radius controls round shape
        backgroundColor: "transparent", // Transparent background, no white space
        display: "block",
        margin: "auto",
        imageRendering: "pixelated", // pixelated for small squares
        width, // Responsive width
        height, // Responsive height
        userSelect: "none",
      }}
    />
  );
};

export default ParticleLogo;

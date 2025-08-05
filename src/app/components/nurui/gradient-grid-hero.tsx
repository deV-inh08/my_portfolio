"use client"

import React, { useEffect, useRef } from "react";

interface ParticleInterface {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  color: string;
  distance: number;
  update(): void;
  draw(ctx: CanvasRenderingContext2D): void;
}

function GradientGridHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let devicePixelRatio: number;

    // Set canvas dimensions
    const setCanvasDimensions = (): void => {
      devicePixelRatio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;

      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Mouse position
    let mouseX: number = 0;
    let mouseY: number = 0;
    let targetX: number = 0;
    let targetY: number = 0;

    const handleMouseMove = (e: MouseEvent): void => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Particle class
    class Particle implements ParticleInterface {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      distance: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 5 + 2;
        this.density = Math.random() * 30 + 1;
        this.distance = 0;

        // Create darker yellow/gold colors - more saturated and darker
        const hue: number = Math.random() * 30 + 45; // 45-75 range for deeper golds
        this.color = `hsl(${hue}, 90%, 50%)`; // Higher saturation, lower lightness
      }

      update(): void {
        // Calculate distance between mouse and particle
        const dx: number = mouseX - this.x;
        const dy: number = mouseY - this.y;
        this.distance = Math.sqrt(dx * dx + dy * dy);

        const forceDirectionX: number = dx / this.distance;
        const forceDirectionY: number = dy / this.distance;

        const maxDistance: number = 100;
        const force: number = (maxDistance - this.distance) / maxDistance;

        if (this.distance < maxDistance) {
          const directionX: number = forceDirectionX * force * this.density;
          const directionY: number = forceDirectionY * force * this.density;

          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            const dx: number = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            const dy: number = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D): void {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Create particle grid
    const particlesArray: Particle[] = [];
    const gridSize: number = 30;

    function init(): void {
      particlesArray.length = 0;

      if (!canvas) return;

      const canvasWidth: number = canvas.width / devicePixelRatio;
      const canvasHeight: number = canvas.height / devicePixelRatio;

      const numX: number = Math.floor(canvasWidth / gridSize);
      const numY: number = Math.floor(canvasHeight / gridSize);

      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          const posX: number = x * gridSize + gridSize / 2;
          const posY: number = y * gridSize + gridSize / 2;
          particlesArray.push(new Particle(posX, posY));
        }
      }
    }

    init();

    // Animation loop
    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse following
      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;

      // Draw connections
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw(ctx);

        // Draw connections
        for (let j = i; j < particlesArray.length; j++) {
          const dx: number = particlesArray[i].x - particlesArray[j].x;
          const dy: number = particlesArray[i].y - particlesArray[j].y;
          const distance: number = Math.sqrt(dx * dx + dy * dy);

          if (distance < 30) {
            ctx.beginPath();
            // Darker gold color for connections
            ctx.strokeStyle = `rgba(218, 165, 32, ${0.3 - distance / 150})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    const animationId: number = requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = (): void => {
      setCanvasDimensions();
      init();
    };

    window.addEventListener("resize", handleResize);

    return (): void => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px] relative opacity-100 transition-opacity duration-1000">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

export { GradientGridHero };
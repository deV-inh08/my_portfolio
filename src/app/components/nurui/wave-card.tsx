"use client";
import React, { useEffect, useRef } from "react";
import type { StaticImageData } from 'next/image'
import Image from 'next/image';

import BorderAnimationButton from "@/app/components/nurui/border-button";

interface IProps {
  tags: string[];
  title: string;
  description: string;
  buttonText: string;
  src: StaticImageData
  github: string
}

export default function WaveCard({
  tags,
  title,
  description,
  buttonText,
  src,
  github
}: IProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let time = 0;

    const waveData = Array.from({ length: 8 }).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01,
    }));

    function resizeCanvas() {
      if (!canvas) return;
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    }

    function updateWaveData() {
      waveData.forEach((data) => {
        if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
        const diff = data.targetValue - data.value;
        data.value += diff * data.speed;
      });
    }

    function draw() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height); // Removed background color

      waveData.forEach((data, i) => {
        const freq = data.value * 7;
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const nx = (x / canvas.width) * 2 - 1;
          const px = nx + i * 0.04 + freq * 0.03;
          const py =
            Math.sin(px * 10 + time) *
            Math.cos(px * 2) *
            freq *
            0.1 *
            ((i + 1) / 8);
          const y = ((py + 1) * canvas.height) / 2;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        const intensity = Math.min(1, freq * 0.3);
        const r = 79 + intensity * 100;
        const g = 70 + intensity * 130;
        const b = 229;
        ctx.lineWidth = 1 + i * 0.3;
        ctx.strokeStyle = `rgba(${r},${g},${b},0.6)`;
        ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
        ctx.shadowBlur = 5;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    }

    function animate() {
      time += 0.02;
      updateWaveData();
      draw();
      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Constrained Canvas */}
      {/* <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ background: "transparent" }}
      /> */}

      {/* Card Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
        <div className="w-full max-w-xs">
          <div className="relative border border-[#fdfdfa] overflow-hidden rounded-2xl flex flex-col animate-float  bg-[#020207] backdrop-blur-lg">
            <div className="p-4 flex justify-center relative">
              <div className="w-full h-48 rounded-xl border border-[#fffdf6] inner-glow overflow-hidden relative">
                <div className="absolute inset-0">
                  <Image className="w-full h-full " src={src} alt="image" />

                </div>
              </div>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="p-4">
              {tags.map((tag, index) => (
                <span key={index} className="inline-block px-3 py-1 glass text-yellow-300 rounded-full text-xs font-medium mb-3 border border-white">
                  {tag}
                </span>
              ))}
              <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
              <p className="text-white/70 mb-4 leading-relaxed text-xs">
                {description}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href={github}
                  className=" flex items-center text-xs font-medium "
                >
                  <BorderAnimationButton text={buttonText} />
                </a>
                <span className="text-white/50 text-xs glass px-2 py-1 rounded-full border border-white/10">
                  Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

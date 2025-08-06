'use client'
import React, { useEffect, useRef } from 'react';

const imageUrls = [
    'https://skillicons.dev/icons?i=next',
    'https://skillicons.dev/icons?i=react',
    'https://skillicons.dev/icons?i=typescript',
    'https://skillicons.dev/icons?i=nodejs',
    'https://skillicons.dev/icons?i=html',
    'https://skillicons.dev/icons?i=scss',
    'https://skillicons.dev/icons?i=postgres',
    'https://skillicons.dev/icons?i=nest',
    'https://skillicons.dev/icons?i=postman',
    'https://skillicons.dev/icons?i=aws',
    'https://skillicons.dev/icons?i=gcp',
    'https://skillicons.dev/icons?i=mongodb',
    'https://skillicons.dev/icons?i=tailwind',
];

const BallCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ballsRef = useRef<any[]>([]);
    const frameIdRef = useRef<number | null>(null);

    const loadImage = (src: string): Promise<HTMLImageElement> => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
        });
    };

    const createBall = (img: HTMLImageElement, canvas: HTMLCanvasElement) => {
        const radius = 35;
        return {
            img,
            x: Math.random() * (canvas.width - radius * 2) + radius,
            y: Math.random() * (canvas.height - radius * 2) + radius,
            vx: (Math.random() < 0.5 ? -1 : 1) * (0.3 + Math.random() * 0.5), // Di chuyển chậm
            vy: (Math.random() < 0.5 ? -1 : 1) * (0.3 + Math.random() * 0.5),
            radius,
        };
    };

    const animate = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const balls = ballsRef.current;
        // Va chạm
        for (let i = 0; i < balls.length; i++) {
            for (let j = i + 1; j < balls.length; j++) {
                const a = balls[i];
                const b = balls[j];
                const dx = b.x - a.x;
                const dy = b.y - a.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDistance = a.radius + b.radius;
                if (distance < minDistance) {
                    a.vx *= -1;
                    a.vy *= -1;
                    b.vx *= -1;
                    b.vy *= -1;
                }
            }
        }
        // Di chuyển
        balls.forEach((ball) => {
            if (ball.x + ball.radius >= canvas.width || ball.x - ball.radius <= 0) {
                ball.vx *= -1;
            }
            if (ball.y + ball.radius >= canvas.height || ball.y - ball.radius <= 0) {
                ball.vy *= -1;
            }
            ball.x += ball.vx;
            ball.y += ball.vy;
            ctx.drawImage(
                ball.img,
                ball.x - ball.radius,
                ball.y - ball.radius,
                ball.radius * 2,
                ball.radius * 2
            );
        });
        frameIdRef.current = requestAnimationFrame(() => animate(ctx, canvas));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const width = container.offsetWidth;
        const height = container.offsetHeight;

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        Promise.all(imageUrls.map(loadImage)).then((imgs) => {
            ballsRef.current = imgs.map((img) => createBall(img, canvas));
            animate(ctx, canvas);
        });
        return () => {
            if (frameIdRef.current) {
                cancelAnimationFrame(frameIdRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full" // Hoặc tuỳ chỉnh theo thiết kế
        >
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full"
            />
        </div>
    );
};

export default BallCanvas;

'use client';
import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const imageUrls = [
    'https://skillicons.dev/icons?i=react',
    'https://skillicons.dev/icons?i=typescript',
    'https://skillicons.dev/icons?i=html',
    'https://skillicons.dev/icons?i=sass',
    'https://skillicons.dev/icons?i=css',
    'https://skillicons.dev/icons?i=tailwind',
    'https://skillicons.dev/icons?i=postgres',
    'https://skillicons.dev/icons?i=nest',
    'https://skillicons.dev/icons?i=next',
    'https://skillicons.dev/icons?i=mongodb',
    'https://skillicons.dev/icons?i=aws',
    'https://skillicons.dev/icons?i=gcp',
    'https://skillicons.dev/icons?i=js',
    'https://skillicons.dev/icons?i=node',
    'https://skillicons.dev/icons?i=jest',
];

const BallCanvas = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const width = container.clientWidth;
        const height = container.clientHeight;

        const engine = Matter.Engine.create();
        engine.gravity.y = 0;
        engine.gravity.x = 0;

        const render = Matter.Render.create({
            element: container,
            engine,
            options: {
                width,
                height,
                wireframes: false,
                background: 'transparent',
                pixelRatio: window.devicePixelRatio, // Cho hiển thị sắc nét
            },
        });

        // Tường bao
        const walls = [
            Matter.Bodies.rectangle(width / 2, 0, width, 10, { isStatic: true }),
            Matter.Bodies.rectangle(width / 2, height, width, 10, { isStatic: true }),
            Matter.Bodies.rectangle(0, height / 2, 10, height, { isStatic: true }),
            Matter.Bodies.rectangle(width, height / 2, 10, height, { isStatic: true }),
        ];
        Matter.World.add(engine.world, walls);

        // Ball icon
        const createBall = (texture: string) => {
            const radius = 32;
            return Matter.Bodies.circle(
                Math.random() * (width - radius * 2) + radius,
                Math.random() * (height - radius * 2) + radius,
                radius,
                {
                    restitution: 1,
                    friction: 0,
                    frictionAir: 0,
                    inertia: Infinity,
                    render: {
                        sprite: {
                            texture,
                            xScale: (radius * 2) / 64,
                            yScale: (radius * 2) / 64,
                        },
                    },
                }
            );
        };

        const balls = imageUrls.map(createBall);
        Matter.World.add(engine.world, balls);

        // Random velocity
        balls.forEach((ball) => {
            Matter.Body.setVelocity(ball, {
                x: (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random() * 2),
                y: (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random() * 2),
            });
        });

        Matter.Render.run(render);
        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, engine);

        return () => {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
            Matter.World.clear(engine.world, false);
            Matter.Engine.clear(engine);
            render.canvas.remove();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="md:block md:w-full md:h-full md:relative md:overflow-hidden hidden "
        />
    );
};

export default BallCanvas;

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
        engine.constraintIterations = 2;
        engine.positionIterations = 6;
        engine.velocityIterations = 4;

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
                    frictionStatic: 0, // Không có ma sát tĩnh
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
        // balls.forEach((ball) => {
        //     Matter.Body.setVelocity(ball, {
        //         x: (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random() * 2),
        //         y: (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random() * 2),
        //     });
        // });

        // Đặt vận tốc ban đầu cao hơn
        const minSpeed = 2;
        const maxSpeed = 4;
        balls.forEach((ball) => {
            const angle = Math.random() * 2 * Math.PI;
            const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
            Matter.Body.setVelocity(ball, {
                x: Math.cos(angle) * speed,
                y: Math.sin(angle) * speed,
            });
        });

        // Hàm giữ ball luôn chuyển động
        const maintainVelocity = () => {
            balls.forEach((ball) => {
                const velocity = ball.velocity;
                const currentSpeed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);

                // Nếu tốc độ quá chậm, tăng lại
                if (currentSpeed < minSpeed) {
                    const factor = minSpeed / Math.max(currentSpeed, 0.1);
                    Matter.Body.setVelocity(ball, {
                        x: velocity.x * factor,
                        y: velocity.y * factor,
                    });
                }

                // Nếu tốc độ quá nhanh, giảm xuống
                if (currentSpeed > maxSpeed) {
                    const factor = maxSpeed / currentSpeed;
                    Matter.Body.setVelocity(ball, {
                        x: velocity.x * factor,
                        y: velocity.y * factor,
                    });
                }
            });
        };
        // Chạy hàm maintain velocity mỗi 100ms
        const velocityInterval = setInterval(maintainVelocity, 100);

        // Thêm event listener để xử lý collision
        Matter.Events.on(engine, 'beforeUpdate', () => {
            // Đảm bảo ball không bị stuck
            balls.forEach((ball) => {
                // Kiểm tra nếu ball bị stuck ở góc hoặc cạnh
                const pos = ball.position;
                const vel = ball.velocity;
                const radius = 32;

                // Nếu ball quá gần tường và vận tốc gần 0
                const nearWall = pos.x < radius + 10 || pos.x > width - radius - 10 ||
                    pos.y < radius + 10 || pos.y > height - radius - 10;

                if (nearWall && Math.abs(vel.x) < 0.5 && Math.abs(vel.y) < 0.5) {
                    // Đẩy ball ra khỏi tường và cho vận tốc mới
                    const centerX = width / 2;
                    const centerY = height / 2;
                    const pushX = pos.x < centerX ? 1 : -1;
                    const pushY = pos.y < centerY ? 1 : -1;

                    Matter.Body.setVelocity(ball, {
                        x: pushX * (minSpeed + Math.random()),
                        y: pushY * (minSpeed + Math.random()),
                    });
                }
            });
        });

        // Cải thiện timing cho render và physics
        const runner = Matter.Runner.create({
            delta: 1000 / 60, // 60 FPS
            isFixed: true,
        });
        Matter.Render.run(render);
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

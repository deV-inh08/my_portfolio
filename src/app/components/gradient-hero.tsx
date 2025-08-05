"use client"
/// <reference types="react" />
import React from "react";
import FutureButtonDemo, { Button } from "@/app/components/nurui/button";
import { Github, Linkedin, Mail, MoveDown } from "lucide-react";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/app/components/nurui/terminal";
import SplashCursorDemo from "@/app/components/splashCursor";
import GradientText from "@/app/components/nurui/gradient-text";


const GradientHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-6 bg-black text-white">
            <SplashCursorDemo />
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>

                {/* Tech grid overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{
                        backgroundImage: `repeating-linear-gradient(
                            0deg,
                            transparent,
                            transparent 50px,
                            rgba(255, 193, 7, 0.1) 50px,
                            rgba(255, 193, 7, 0.1) 51px
                        ),
                        repeating-linear-gradient(
                            90deg,
                            transparent,
                            transparent 50px,
                            rgba(255, 193, 7, 0.1) 50px,
                            rgba(255, 193, 7, 0.1) 51px
                        )`
                    }} />
                </div>
            </div>

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="space-y-6">
                    <div className="inline-block">
                        <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-yellow-500/50 backdrop-blur-sm border border-yellow-500/20 mb-4 mt-4">
                            <span className="relative z-10 text-white">
                                Software Engineer
                            </span>
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 animate-pulse"></span>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        <span className="block">Hi, Im</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 animate-text-shimmer bg-[length:200%_100%]">
                            <GradientText
                                animationSpeed={3}
                                className="font-sans">
                                Tran Duong Vinh
                            </GradientText>
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-[600px]">
                        A guy from the Mekong Delta who loves exploring technology and software. Always curious about building systems.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <FutureButtonDemo />
                        <a href="resume.pdf" download='CV_TranDuongVinh_Software_Engineer'>
                            <Button
                                variant="outline"
                                className="border-yellow-500/50 text-white hover:text-yellow-300 hover:border-yellow-400 bg-transparent py-3"
                            >
                                <MoveDown />

                                My Resume
                            </Button></a>

                    </div>
                    <div className="flex gap-4 pt-4">
                        <a
                            href="https://github.com/deV-inh08"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full bg-zinc-900/50 hover:bg-yellow-500/20 text-yellow-400 hover:text-yellow-300 border border-yellow-500/20 hover:border-yellow-500/40"
                            >
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tran-duong-vinh04/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full bg-zinc-900/50 hover:bg-yellow-500/20 text-yellow-400 hover:text-yellow-300 border border-yellow-500/20 hover:border-yellow-500/40"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </a>
                        <a href="mailto:vintd2004@gmai.com">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full bg-zinc-900/50 hover:bg-yellow-500/20 text-yellow-400 hover:text-yellow-300 border border-yellow-500/20 hover:border-yellow-500/40"
                            >
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Email</span>
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Terminal>
                        <TypingAnimation >&gt; npm i @TDV --save-dev</TypingAnimation>
                        <AnimatedSpan delay={1500} className="text-green-500">✨ I&apos;m TDV – a Full-stack Software Engineer 💻  </AnimatedSpan>
                        <AnimatedSpan delay={2000} className="text-green-500">🚀 I build scalable web apps with React & Next & Node. </AnimatedSpan>
                        <AnimatedSpan delay={2500} className="text-green-500">🛠 I transform real-world problems into clean, scalable code. </AnimatedSpan>
                        <AnimatedSpan delay={3000} className="text-blue-500">
                            <span>ℹ Updated 1 file:</span>
                            <span className="pl-2">- lib/utils.ts</span>
                        </AnimatedSpan>
                        <TypingAnimation delay={3500} className="text-muted-foreground">
                            Success! Project initialization completed.
                        </TypingAnimation>
                    </Terminal>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-yellow-500/30 flex justify-center items-start p-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default GradientHero;
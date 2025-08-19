'use client'
import React, { useRef } from 'react'
import { InfoCard } from '@/app/components/nurui/info-card'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const About = () => {
    gsap.registerPlugin(ScrollTrigger, useGSAP)

    const titleRef = useRef<HTMLHeadingElement | null>(null)
    useGSAP(() => {
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 80%',
                toggleActions: 'restart  pause resume pause',

            },
            x: -1000,
            duration: 1
        })
    })
    return (
        <section className='relative h-auto overflow-hidden p-6 bg-black text-white py-10'>
            <div className='absolute z-0 inset-0'>
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
            </div>
            <div className='container relative z-10 grid grid-cols-1  gap-12 items-center max-w-6xl mx-auto '>
                <h3 ref={titleRef} className='text-right md:gap-3 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold 
          pt-1 md:pt-2  pb-2 xl:pb-4 text-balance sm:space-x-0.5'><b className='text-yellow-400'>About</b><br /> Me
                </h3>
                <div className='container relative z-10 grid grid-cols-1 gap-12 items-center max-w-6xl mx-auto mt-10'>
                    <InfoCard title='About me' description="Hi everyone, I’m Vinh, a software engineer and Information Systems student at Nong Lam University. I’m passionate about coding, scalable system design, and building modern web applications that are both performant and user-friendly.

My stack includes React, Node.js, Next.js, and NestJS. I enjoy full-stack development, from creating responsive UIs to designing RESTful/GraphQL APIs, always aiming for clean, maintainable code and seamless integration.

I’m also interested in user experience and design thinking, believing that great software should be both functional and intuitive. My goal is to grow into a well-rounded engineer, contributing to impactful projects while continuously learning and collaborating.

Let’s connect to share ideas or explore opportunities!" />
                </div>
            </div>
        </section>
    )
}

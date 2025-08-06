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
                    <InfoCard title='About me' description="Hi everyone, I’m Vinh, a software engineer currently studying Information Systems at Nong Lam University. With a strong passion for coding, technology, and scalable system design, I focus on building modern web applications that are both performant and user-friendly.
My technical stack includes React, Node.js, Next.js, and NestJS. I enjoy working on full-stack projects that require both frontend finesse and backend architecture, ensuring seamless integration between components. Whether it's developing responsive UIs or implementing RESTful and GraphQL APIs, I strive for clean, maintainable code and a smooth developer experience.
Beyond technical skills, I’m also deeply interested in optimizing user experience, applying design thinking, and solving real-world problems through software. I believe that great products are not only functional but also intuitive and accessible.
My goal is to become a well-rounded software engineer who can contribute to innovative teams and deliver impactful solutions. I’m always open to learning new technologies and collaborating on meaningful projects.
Let’s connect if you’re interested in working together, sharing ideas, or discussing potential opportunities!" />
                </div>
            </div>
        </section>
    )
}

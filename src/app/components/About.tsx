'use client'
import React from 'react'
import { InfoCard } from '@/app/components/nurui/info-card'

export const About = () => {
    return (
        <section className='relative h-auto overflow-hidden p-6 bg-black text-white py-10'>
            <div className='container relative z-10 grid grid-cols-1  gap-12 items-center max-w-6xl mx-auto '>
                <h3 className='text-right md:gap-3 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold 
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

'use client'
import React, { useRef } from 'react'
import WaveCard from '@/app/components/nurui/wave-card'
import portfolio from '../assets/portfolio.png'
import Ecommerce from '../assets/Ecommerce.png'
import restaurant from '../assets/Restaurant.png'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

export const Project = () => {
    gsap.registerPlugin(ScrollTrigger, useGSAP)

    const titleRef = useRef<HTMLHeadingElement | null>(null)
    useGSAP(() => {
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 80%',
                toggleActions: 'restart  pause resume pause',

            },
            x: 1000,
            duration: 1
        })
    })
    const objectData = [
        {
            tags: ['React', 'Node', 'Mongo', 'GCP'],
            title: "Ecommerce",
            description: 'Build an eCommerce system using React, TypeScript, and Node.js. Deploy with GCP Platform',
            buttonText: 'Visit',
            src: Ecommerce,
            github: 'https://github.com/deV-inh08/Ecommerce_CC'
        },
        {
            tags: ['Next', 'Fastify', 'AWS', 'Prisma'],
            title: "Manage Restaurant",
            description: 'Develop a restaurant management system with ordering and reservation features using Next.js and Fastify.',
            buttonText: 'Visit',
            src: restaurant,
            github: 'https://github.com/deV-inh08/Restaurant-client'
        },
        {
            tags: ['Next', 'Tailwind', 'NurUI'],
            title: "My Portfolio",
            description: "A personal portfolio showcasing my full-stack projects, built with Next.js and styled using NurUI for a clean, responsive design.",
            buttonText: 'Visit',
            src: portfolio,
            github: 'https://github.com/deV-inh08/my_portfolio'
        }
    ]
    return (
        <section id='projects' className='relative overflow-hidden p-6 bg-black text-white pt-10'>
            <div className='absolute z-0 inset-0'>
                <div className="absolute top-80 left-10 w-200 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
                <div className="absolute top-90 right-30 w-40 h-90 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
            </div>
            <div className='container relative z-10 grid grid-cols-1  gap-12 items-center max-w-6xl mx-auto pt-10'>
                <h3 ref={titleRef} className='text-left md:gap-3 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold 
          pt-1 md:pt-2  pb-2 xl:pb-4 text-balance sm:space-x-0.5'>My<br /><b className='text-yellow-400'>Projects</b>
                </h3>
                <div className='container relative z-10 grid md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto mt-10'>
                    {objectData.map((item, index) => {
                        return <WaveCard title={item.title} description={item.description} key={index} buttonText={item.buttonText} tags={item.tags} src={item.src} github={item.github}></WaveCard>
                    })}
                </div>
            </div>
        </section>
    )
}

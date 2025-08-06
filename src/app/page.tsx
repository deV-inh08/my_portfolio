'use client'
import { MyStack } from '@/app/components/MyStack'
import { About } from "@/app/components/About";
import GradientHero from "@/app/components/gradient-hero";
import { Project } from '@/app/components/Project';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import SplashCursorDemo from "@/app/components/splashCursor";


import gsap from 'gsap';


export default function Home() {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP)

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true
    })
  })
  return (
    <div id='smooth-wrapper'>
      <SplashCursorDemo></SplashCursorDemo>

      <div className='relative' id='smooth-content'>
        <GradientHero />
        <MyStack ></MyStack>
        <About></About>
        <Project></Project>
      </div>
    </div>


  );
}

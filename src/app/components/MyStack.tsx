'use client'
import React, { useRef } from 'react'
import Marquee from 'react-fast-marquee'
import BouncingBallCanvas from '@/app/components/BoucingBallCanvas'
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";

export const MyStack = () => {
    const titleRef = useRef<HTMLHeadingElement | null>(null)
    gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP)
    useGSAP(() => {
        const headLineSplit = SplitText.create(titleRef.current, {
            type: "words",
            wordsClass: "word++",
            ignore: "sup"
        })

        gsap.from(headLineSplit.words, {
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 80%',
                toggleActions: 'restart  pause resume pause',

            },
            y: -100,
            opacity: 0,
            rotation: "random(-80, 80)",
            stagger: 0.1,
            duration: 1,
            ease: "back"
        })
    })
    return (
        <section className='relative  overflow-hidden p-6 bg-black text-white'>
            <div className='container relative z-10 grid grid-cols-1  gap-12 items-center max-w-6xl mx-auto py-10'>
                <h2 ref={titleRef} className='flex justify-center md:gap-3 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold 
          pt-1 md:pt-2  pb-2 xl:pb-4 text-balance sm:space-x-0.5'>
                    <strong className='text-yellow-400'>My Stack</strong>
                    <p>Built for What You Need</p>
                </h2>
                <div className='w-full relative border-3 border-yellow-600  md:h-[500px] '>
                    <div className='md:hidden grid gap-10  grid-cols-3 items-center justify-items-center py-10 '>
                        <img src="https://skillicons.dev/icons?i=next" alt="gcp" className='w-[70px] h-[70px] rounded-[9999px] border-[#393a3d] bg-[#0d0e1e66] p-4 shadow-[0_0_10px_0_#d4d4d4,0_0_10px_0_#3c3c3c] animate-bounce' />
                        <img src="https://skillicons.dev/icons?i=typescript" alt="gcp" className='w-[70px] h-[70px] rounded-[9999px] border-[#393a3d] bg-[#0d0e1e66] p-4 shadow-[0_0_10px_0_#d4d4d4,0_0_10px_0_#3c3c3c] animate-bounce' />
                        <img src="https://skillicons.dev/icons?i=react" alt="gcp" className='w-[70px] h-[70px] rounded-[9999px] border-[#393a3d] bg-[#0d0e1e66] p-4 shadow-[0_0_10px_0_#d4d4d4,0_0_10px_0_#3c3c3c] animate-bounce' />
                        <img src="https://skillicons.dev/icons?i=js" alt="gcp" className='w-[70px] h-[70px] rounded-[9999px] border-[#393a3d] bg-[#0d0e1e66] p-4 shadow-[0_0_10px_0_#d4d4d4,0_0_10px_0_#3c3c3c] animate-bounce' />
                        <img src="https://skillicons.dev/icons?i=html" alt="gcp" className='w-[70px] h-[70px] rounded-[9999px] border-[#393a3d] bg-[#0d0e1e66] p-4 shadow-[0_0_10px_0_#d4d4d4,0_0_10px_0_#3c3c3c] animate-bounce' />
                        <img src="https://skillicons.dev/icons?i=scss" alt="gcp" className='w-[70px] h-[70px] rounded-[9999px] border-[#393a3d] bg-[#0d0e1e66] p-4 shadow-[0_0_10px_0_#d4d4d4,0_0_10px_0_#3c3c3c] animate-bounce' />
                        <img src="https://skillicons.dev/icons?i=mongodb" alt="gcp" className='w-[70px] h-[70px] rounded-[9999px] border-[#393a3d] bg-[#0d0e1e66] p-4 shadow-[0_0_10px_0_#d4d4d4,0_0_10px_0_#3c3c3c] animate-bounce' />
                        <img src="https://skillicons.dev/icons?i=postgres" alt="gcp" className='w-[70px] h-[70px] rounded-[9999px] border-[#393a3d] bg-[#0d0e1e66] p-4 shadow-[0_0_10px_0_#d4d4d4,0_0_10px_0_#3c3c3c] animate-bounce' />
                        <img src="https://skillicons.dev/icons?i=nest" alt="gcp" className='md:hidden w-[70px] h-[70px] rounded-[9999px] border-[#393a3d] bg-[#0d0e1e66] p-4 shadow-[0_0_10px_0_#d4d4d4,0_0_10px_0_#3c3c3c] animate-bounce' />
                    </div>
                    <BouncingBallCanvas></BouncingBallCanvas>
                </div>
            </div>
            <Marquee autoFill style={{ paddingRight: '1' }}>
                <section className='flex gap-10 md:gap-20 mt-20 '>
                    <div className='flex items-center gap-2 py-1 px-6 border border-gray-400/40 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 48 48" ><linearGradient id="NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1" x1="24" x2="24" y1="43.734" y2="4.266" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0a070a"></stop><stop offset=".465" stopColor="#2b2b2b"></stop><stop offset="1" stopColor="#4b4b4b"></stop></linearGradient><circle cx="24" cy="24" r="19.734" fill="url(#NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1)"></circle><rect width="3.023" height="15.996" x="15.992" y="16.027" fill="#fff"></rect><linearGradient id="NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2" x1="30.512" x2="30.512" y1="33.021" y2="18.431" gradientUnits="userSpaceOnUse"><stop offset=".377" stopColor="#fff" stop-opacity="0"></stop><stop offset=".666" stopColor="#fff" stop-opacity=".3"></stop><stop offset=".988" stopColor="#fff"></stop></linearGradient><rect width="2.953" height="14.59" x="29.035" y="15.957" fill="url(#NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2)"></rect><linearGradient id="NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3" x1="22.102" x2="36.661" y1="21.443" y2="40.529" gradientUnits="userSpaceOnUse"><stop offset=".296" stopColor="#fff"></stop><stop offset=".521" stopColor="#fff" stop-opacity=".5"></stop><stop offset=".838" stopColor="#fff" stop-opacity="0"></stop></linearGradient><polygon fill="url(#NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3)" points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"></polygon></svg>
                        <p>Next</p>
                    </div>
                    <div className='flex items-center gap-1 py-1 px-6 border border-gray-400/40 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 48 48" ><rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path></svg>
                        <p>Typescript</p>
                    </div>
                    <div className='flex items-center gap-2 py-1 px-6 border border-gray-400/40 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 48 48" ><path fill="#58C4DC" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16 c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#58C4DC" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5 c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4 c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9 c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#58C4DC" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19 c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2 c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#58C4DC"></circle></svg>
                        <p>React</p>
                    </div>
                    <div className='flex items-center gap-2 py-1 px-6 border border-gray-400/40 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 48 48" ><path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path></svg>
                        <p>Javascript</p>
                    </div>
                    <div className='flex items-center gap-2 py-1 px-6 border border-gray-400/40 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 48 48" ><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path></svg>
                        <p>HTML</p>
                    </div>
                    <div className='flex items-center gap-2 py-1 px-6 border border-gray-400/40 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 48 48" ><path fill="#f06292" d="M39.867,25.956c-1.538,0.008-2.87,0.377-3.986,0.928c-0.408-0.815-0.822-1.532-0.891-2.065 c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87c-0.006-0.079-0.096-0.456-0.983-0.463 c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.26,0.761-0.366,1.311c-0.155,0.804-1.771,3.673-2.688,5.173 c-0.3-0.586-0.555-1.102-0.608-1.51c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87 c-0.006-0.079-0.096-0.456-0.983-0.463c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.185,0.781-0.366,1.311 c-0.182,0.529-2.329,5.314-2.892,6.555c-0.287,0.632-0.536,1.14-0.712,1.486c-0.001-0.001-0.001-0.002-0.001-0.002 s-0.011,0.023-0.029,0.062c-0.151,0.295-0.24,0.458-0.24,0.458s0.001,0.002,0.003,0.006c-0.12,0.217-0.248,0.418-0.311,0.418 c-0.044,0-0.133-0.577,0.019-1.369c0.32-1.66,1.087-4.248,1.08-4.338c-0.004-0.046,0.143-0.497-0.501-0.733 c-0.626-0.229-0.849,0.153-0.906,0.154c-0.055,0.001-0.096,0.135-0.096,0.135s0.697-2.911-1.33-2.911 c-1.268,0-3.024,1.387-3.889,2.644c-0.546,0.298-1.715,0.936-2.954,1.617c-0.476,0.262-0.962,0.529-1.423,0.783 c-0.031-0.035-0.063-0.069-0.095-0.104c-2.459-2.623-7.003-4.478-6.811-8.005c0.07-1.282,0.516-4.658,8.733-8.752 c6.731-3.354,12.12-2.431,13.051-0.386c1.33,2.923-2.88,8.354-9.87,9.138c-2.663,0.299-4.066-0.734-4.415-1.118 c-0.367-0.405-0.422-0.423-0.559-0.347c-0.223,0.124-0.082,0.481,0,0.694c0.209,0.543,1.065,1.506,2.525,1.986 c1.285,0.422,4.412,0.653,8.193-0.81c4.236-1.638,7.543-6.196,6.571-10.005c-0.988-3.874-7.412-5.148-13.492-2.988 C12.44,9.332,8.523,11.35,5.706,13.984c-3.349,3.132-3.883,5.859-3.663,6.998c0.782,4.048,6.361,6.684,8.595,8.637 c-0.11,0.061-0.214,0.118-0.308,0.17c-1.12,0.554-5.373,2.78-6.437,5.131c-1.207,2.667,0.192,4.581,1.118,4.839 c2.869,0.798,5.813-0.638,7.396-2.998c1.582-2.359,1.389-5.432,0.663-6.834c-0.009-0.017-0.019-0.034-0.028-0.052 c0.289-0.171,0.584-0.345,0.876-0.517c0.57-0.335,1.13-0.647,1.615-0.911c-0.272,0.744-0.471,1.637-0.574,2.926 c-0.122,1.514,0.499,3.471,1.311,4.241c0.358,0.339,0.788,0.347,1.06,0.347c0.945,0,1.376-0.786,1.851-1.716 c0.582-1.14,1.099-2.468,1.099-2.468s-0.648,3.586,1.118,3.586c0.644,0,1.291-0.835,1.58-1.26c0.001,0.005,0.001,0.007,0.001,0.007 s0.017-0.028,0.05-0.083c0.067-0.102,0.105-0.167,0.105-0.167s0.001-0.007,0.003-0.019c0.259-0.449,0.833-1.473,1.693-3.162 c1.112-2.182,2.178-4.916,2.178-4.916s0.099,0.668,0.424,1.774c0.191,0.65,0.597,1.369,0.918,2.059 c-0.258,0.358-0.416,0.563-0.416,0.563s0.001,0.004,0.004,0.011c-0.206,0.274-0.437,0.569-0.679,0.857 c-0.878,1.045-1.923,2.239-2.063,2.583c-0.165,0.406-0.126,0.704,0.193,0.945c0.233,0.175,0.647,0.203,1.08,0.174 c0.789-0.053,1.343-0.249,1.617-0.368c0.427-0.151,0.924-0.388,1.39-0.731c0.861-0.633,1.38-1.538,1.33-2.738 c-0.028-0.661-0.238-1.316-0.505-1.934c0.078-0.112,0.156-0.226,0.235-0.34c1.357-1.984,2.41-4.164,2.41-4.164 s0.099,0.668,0.424,1.774c0.164,0.559,0.489,1.17,0.781,1.768c-1.276,1.037-2.067,2.242-2.342,3.032 c-0.508,1.462-0.11,2.124,0.636,2.275c0.338,0.068,0.816-0.087,1.175-0.239c0.447-0.148,0.984-0.395,1.486-0.764 c0.861-0.633,1.689-1.519,1.639-2.718c-0.023-0.546-0.171-1.088-0.372-1.608c1.082-0.451,2.482-0.701,4.266-0.493 c3.827,0.447,4.577,2.836,4.434,3.836c-0.144,1-0.946,1.55-1.215,1.716c-0.268,0.166-0.35,0.224-0.328,0.347 c0.033,0.179,0.157,0.173,0.386,0.134c0.315-0.053,2.009-0.813,2.082-2.659C46.089,28.509,43.844,25.935,39.867,25.956z M10.37,35.9 c-1.268,1.383-3.038,1.905-3.798,1.465c-0.82-0.475-0.495-2.511,1.06-3.979c0.948-0.894,2.172-1.718,2.984-2.225 c0.185-0.111,0.456-0.274,0.786-0.472c0.055-0.031,0.086-0.048,0.086-0.048l-0.001-0.002c0.064-0.038,0.129-0.077,0.196-0.118 C12.25,32.61,11.701,34.449,10.37,35.9z M19.605,29.623c-0.441,1.076-1.365,3.83-1.928,3.682c-0.483-0.127-0.777-2.22-0.096-4.28 c0.342-1.037,1.074-2.276,1.504-2.757c0.692-0.774,1.454-1.027,1.639-0.713C20.959,25.955,19.882,28.948,19.605,29.623z M27.234,33.263c-0.187,0.098-0.359,0.159-0.438,0.112c-0.059-0.035,0.077-0.164,0.077-0.164s0.954-1.027,1.33-1.494 c0.219-0.272,0.472-0.595,0.748-0.955c0.002,0.036,0.003,0.072,0.003,0.107C28.952,32.099,27.764,32.929,27.234,33.263z M33.111,31.923c-0.14-0.099-0.116-0.42,0.343-1.421c0.18-0.393,0.592-1.054,1.306-1.686c0.083,0.26,0.133,0.509,0.132,0.741 C34.883,31.105,33.779,31.683,33.111,31.923z"></path></svg>
                        <p>SCSS</p>
                    </div>
                    <div className='flex items-center gap-2 py-1 px-6 border border-gray-400/40 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 48 48" ><linearGradient id="TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1" x1="16.33" x2="32.293" y1="-2.748" y2="41.109" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1)" d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041 c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5 H9.184C8.01,5,7.089,6.006,7.192,7.176z"></path><path fill="#35c1f1" d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242 C37.656,8.502,37.196,8,36.609,8H24z"></path><path fill="#fff" d="M33.1,13H24v4h4.9l-0.3,4H24v4h4.4l-0.3,4.5L24,30.9v4.2l7.9-2.6L32.6,21l0,0L33.1,13z"></path><path fill="#d6e0e9" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4 L19.8,27z"></path><path d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M34.164,12H33.1H24h-9.2h-1.078l0.081,1.075l0.3,4L14.172,18H15.1H24h3.822l-0.15,2H24h-4.6h-1.051 l0.052,1.05l0.2,4L18.649,26H15.8h-1.056l0.058,1.054l0.3,5.5l0.037,0.682l0.649,0.214l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6 l0.644-0.212l0.041-0.677l0.7-11.5l0.5-7.998L34.164,12L34.164,12z M20.761,26H24h3.331l-0.185,2.769L24,29.843l-3.128-1.068 l-0.073-1.815L20.761,26L20.761,26z" opacity=".05"></path><path d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M33.632,12.5H33.1H24h-9.2h-0.539l0.04,0.537l0.3,4l0.035,0.463H15.1H24h4.361l-0.225,3H24h-4.6h-0.526 l0.026,0.525l0.2,4l0.024,0.475H19.6H24h3.866l-0.242,3.634L24,30.372l-3.614-1.234L20.3,26.98L20.28,26.5H19.8h-4h-0.528 l0.029,0.527l0.3,5.5l0.019,0.341l0.324,0.107l7.9,2.6L24,35.626l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.5-7.999 L33.632,12.5L33.632,12.5z" opacity=".07"></path></svg>
                        <p>CSS</p>
                    </div>
                    <div className='flex items-center gap-2 py-1 px-6 border border-gray-400/40 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 48 48" ><path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path></svg>
                        <p>Tailwind</p>
                    </div>
                    <div className='flex items-center gap-2 py-1 px-6 border border-gray-400/40 rounded-full'>
                        <img src="https://skillicons.dev/icons?i=nest" alt="nest" className='w-9 h-9' />
                        <p>Nest</p>
                    </div>
                    <div className='flex items-center gap-2 py-1 px-6 border border-gray-400/40 rounded-full'>
                        <img src="https://skillicons.dev/icons?i=postman" alt="postman " className='w-9 h-9' />
                        <p>Postman</p>
                    </div>
                    <div className='flex items-center gap-2 py-1 px-6 border border-gray-400/40 rounded-full'>
                        <img src="https://skillicons.dev/icons?i=gcp" alt="gcp " className='w-9 h-9' />
                        <p>GCP</p>
                    </div>
                    <div className='flex items-center gap-2 py-1 px-6 border border-gray-400/40 rounded-full'>
                        <img src="https://skillicons.dev/icons?i=aws" alt="aws" className='w-9 h-9' />
                        <p>AWS</p>
                    </div>
                    <div className='flex items-center gap-2 py-1 px-6 border border-gray-400/40 rounded-full'>
                        <img src="https://skillicons.dev/icons?i=jest" alt="jest" className='w-9 h-9' />
                        <p>Jest</p>
                    </div>
                    <div className='w-5'></div>
                </section>
            </Marquee>
        </section >
    )
}


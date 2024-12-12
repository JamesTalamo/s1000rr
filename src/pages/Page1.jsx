import React from 'react'

import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Page1 = () => {

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                scrub: true,
                start: 'top top',
                end: '+700',
                pin: '#img',
                pinSpacing: true,
            }
        })

        tl.to('#clip', {
            backgroundColor: 'white',
            duration: 1
        })
            .to('#b', {
                color: 'black',
                duration: 1
            }, 0)
            .fromTo('#img',
                {
                    scale: 0.1,
                    clipPath: 'circle(26.3% at 50% 50%)'
                },
                {
                    scale: 1,
                    clipPath: 'circle(70.7% at 50% 50%)',
                    duration: 1
                }
            );




    })

    return (
        <div className='w-screen  relative bg-black overflow-hidden' id='clip'>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[0%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[5%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[10%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[15%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[20%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[25%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[30%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[35%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[40%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[45%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[50%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[55%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[60%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[65%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[70%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[75%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[80%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[85%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[90%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <img
                src='https://images.unsplash.com/photo-1635073943212-f34dfbfcc3b0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8czEwMDBycnxlbnwwfHwwfHx8MA%3D%3D'
                className='object-cover w-screen h-screen' id='img'
            />

        </div>
    )
}

export default Page1
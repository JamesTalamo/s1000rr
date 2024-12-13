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
                scrub: 1,
                start: 'top top',
                end: '+1500',
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
            .to('#test1', {
                left: '5%'
            })
            .fromTo('#img',
                {
                    scale: 0.5,
                    clipPath: 'circle(160px at 50% 50%)'
                },
                {
                    scale: 1,
                    clipPath: 'circle(70.7% at 50% 50%)',
                    duration: 1
                }
            )






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
            <h1 className='text-5xl font-bold absolute left-[-5%] top-[5%] text-[5rem] whitespace-nowrap'>
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
            <h1 className='text-5xl font-bold absolute left-[-9%] top-[10%] text-[5rem] whitespace-nowrap'>
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
            <h1 className='text-5xl font-bold absolute left-[-13%] top-[15%] text-[5rem] whitespace-nowrap'>
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
            <h1 className='text-5xl font-bold absolute left-[-17%] top-[20%] text-[5rem] whitespace-nowrap'>
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
            <h1 className='text-5xl font-bold absolute left-[-21%] top-[25%] text-[5rem] whitespace-nowrap'>
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
            <h1 className='text-5xl font-bold absolute left-[-25%] top-[30%] text-[5rem] whitespace-nowrap'>
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
                <span className='text-red-500'>B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-29%] top-[35%] text-[5rem] whitespace-nowrap'>
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
            <h1 className='text-5xl font-bold absolute left-[-33%] top-[40%] text-[5rem] whitespace-nowrap'>
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
            <h1 className='text-5xl font-bold absolute left-[-37%] top-[45%] text-[5rem] whitespace-nowrap'>
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
            <h1 className='text-5xl font-bold absolute left-[-41%] top-[50%] text-[5rem] whitespace-nowrap'>
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
            <h1 className='text-5xl font-bold absolute left-[-45%] top-[55%] text-[5rem] whitespace-nowrap'>
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
            <h1 className='text-5xl font-bold absolute left-[-49%] top-[60%] text-[5rem] whitespace-nowrap'>
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
            <h1 className='text-5xl font-bold absolute left-[-53%] top-[65%] text-[5rem] whitespace-nowrap'>
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
            <h1 className='text-5xl font-bold absolute left-[-57%] top-[70%] text-[5rem] whitespace-nowrap'>
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
            <h1 className='text-5xl font-bold absolute left-[-61%] top-[75%] text-[5rem] whitespace-nowrap'>
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
            <h1 className='text-5xl font-bold absolute left-[-65%] top-[80%] text-[5rem] whitespace-nowrap'>
                <span className='text-red-500 relative' >B</span><span className='text-white' id='b'>M</span><span className='text-blue-500'>W </span>
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
            <h1 className='text-5xl font-bold absolute left-[-69%] top-[85%] text-[5rem] whitespace-nowrap'>
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
            <h1 className='text-5xl font-bold absolute left-[-73%] top-[90%] text-[5rem] whitespace-nowrap'>
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
                src='/assets/page1/page1-img1.png'
                className='object-cover w-screen h-screen' id='img'
            />

        </div>
    )
}

export default Page1
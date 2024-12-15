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
                scrub: 0.5,
                start: 'top top',
                end: '+3000 top',
                pin: '#img',
                pinSpacing: true,
                // markers: true
            }
        })

        tl.to('#clip', {
            backgroundColor: 'black',
            duration: 1
        })
            .to('#b', {
                color: '#7F7F7F',
                duration: 1
            }, 0)
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
        <div className='w-screen  relative bg-white overflow-hidden' id='clip'>
            <h1 className='text-5xl font-bold absolute left-[-1%] top-[0%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-5%] top-[2%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-9%] top-[4%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-13%] top-[6%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-17%] top-[8%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-21%] top-[10%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-25%] top-[12%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-29%] top-[14%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-33%] top-[16%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-37%] top-[18%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-41%] top-[20%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-45%] top-[22%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-49%] top-[24%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-53%] top-[26%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-57%] top-[28%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-61%] top-[30%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-65%] top-[32%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1 relative' >B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-69%] top-[34%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-73%] top-[36%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-53%] top-[38%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-57%] top-[40%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-61%] top-[42%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-65%] top-[44%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-69%] top-[46%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-73%] top-[48%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-53%] top-[50%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-57%] top-[52%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-61%] top-[54%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-65%] top-[56%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-69%] top-[58%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-73%] top-[60%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>

            <h1 className='text-5xl font-bold absolute left-[-53%] top-[62%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-57%] top-[64%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-61%] top-[66%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-65%] top-[68%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-69%] top-[70%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1 relative' >B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-73%] top-[72%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-53%] top-[74%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-57%] top-[76%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-61%] top-[78%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-65%] top-[80%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-69%] top-[82%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-73%] top-[84%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-53%] top-[86%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-57%] top-[88%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-61%] top-[90%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            <h1 className='text-5xl font-bold absolute left-[-65%] top-[92%] text-[5rem] whitespace-nowrap'>
                <span className='text-custom-dark1 relative' >B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
                <span className='text-custom-dark1'>B</span><span className='text-custom-dark2' id='b'>M</span><span className='text-custom-dark3'>W </span>
            </h1>
            
            
            <img 

                 preload="auto"

                src='/assets/page1/page1-img1.png'
                className='object-cover w-screen h-screen' id='img'
            />

        </div>
    )
}

export default Page1
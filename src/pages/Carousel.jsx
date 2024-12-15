import React from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Carousel = () => {

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#testTrigger",
                start: 'top top',
                end: '+6000 bottom',
                pin: "#testTrigger",
                pinSpacing: true,
                scrub: 1,
                // markers: true
            }
        })
            .to('#testTrigger', {
                left: '-300vw'
            })

    })

    return (
        <div className='w-[400vw] h-dvh bg-green-200 relative flex flex-row left-[0vw] relative' id='testTrigger'>

            <div className='w-screen  bg-white'>
                <div className='mx-[10%] h-full flex flex-col'>

                    <div className='w-full h-full flex justify-between flex-col lg:flex-row relative'>
                        <div>
                            <h2 className='font-bold text-3xl md:text-4xl lg:text-4xl w-[100%] lg:w-[600px]'>
                                It’s hard to imagine the race track without it – and the RR is also intrinsically linked to it
                            </h2>
                            <p className='w-[100%] lg:w-[600px] py-[2%]'>You can achieve new personal bests with the more aerodynamic front and side trim panels. The new winglets generate up to
                                37% more downforce on the road: with 13 lbs at 93 mph, 23 lbs at 124 mph, 35 lbs at 155 mph, and a whopping 50 lbs at 186 mph. This counteracts
                                the tendency of the front wheel to lift off the road surface when accelerating.
                            </p>
                        </div>
                        <div className='relative lg:right-[-6%] overflow-hidden'>
                            <img
                                src='assets/page4/page4-img1.png'
                                className='w-[100%] lg:w-[90%] relative'
                                id='page4-img1'
                            />
                        </div>
                    </div>

                    <div className='w-full h-full flex flex-col-reverse lg:flex-row relative'>
                        <div className='overflow-hidden'>
                            <img
                                src='assets/page4/page4-img2.png'
                                className='w-[100%] lg:w-[90%] relative'
                                id='page4-img2'
                            />
                        </div>
                        <div>
                            <h2 className='font-bold text-3xl md:text-4xl lg:text-4xl w-[100%] lg:w-[600px]'>
                                It’s hard to imagine the race track without it – and the RR is also intrinsically linked to it
                            </h2>
                            <p className='w-[100%] lg:w-[600px] py-[2%]'>You can achieve new personal bests with the more aerodynamic front and side trim panels. The new winglets generate up to
                                37% more downforce on the road: with 13 lbs at 93 mph, 23 lbs at 124 mph, 35 lbs at 155 mph, and a whopping 50 lbs at 186 mph. This counteracts
                                the tendency of the front wheel to lift off the road surface when accelerating.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-screen  bg-white'>
                <div className='mx-[10%] my-[2%] h-full flex flex-col'>

                    <div className='w-full h-full flex justify-between flex-col lg:flex-row relative'>
                        <div>
                            <h2 className='font-bold text-3xl md:text-4xl lg:text-4xl w-[100%] lg:w-[600px]'>
                                Framework conditions – quite literally
                            </h2>
                            <p className='w-[100%] lg:w-[600px] py-[2%]'>
                                Accuracy to the millimeter for our highest level of precision: The M chassis
                                kit with raised rear end and adjustable swing arm pivot is standard. Frame
                                recesses ensure lateral flexibility. The flat steering head angle and the
                                offset of the fork bridge provide precision at the front wheel. The damping
                                of the DDC in the Road, Dynamic, and Race modes with Race Pro 1 to 3 means that
                                you can ride on country roads with street damping.
                            </p>
                        </div>
                        <div className='relative lg:right-[-6%] overflow-hidden'>
                            <img
                                src='assets/page8/page8-img1.png'
                                className='w-[100%] lg:w-[90%] relative'
                                id='Page8-img1'
                            />
                        </div>
                    </div>

                    <div className='w-full h-full flex flex-col-reverse lg:flex-row relative'>
                        <div className='overflow-hidden'>
                            <img
                                src='assets/page8/page8-img2.png'
                                className='w-[100%] lg:w-[90%] relative'
                                id='Page8-img2'
                            />
                        </div>
                        <div>
                            <h2 className='font-bold text-3xl md:text-4xl lg:text-4xl w-[100%] lg:w-[600px]'>
                                Confidence in corners
                            </h2>
                            <p className='w-[100%] lg:w-[600px] py-[2%]'>
                                The Riding Modes Pro, which are now included as standard, and steering angle
                                sensor enable two new functions: Brake Slide Assist for deceleration and Slide/Slip
                                Control for acceleration. The steering angle sensor measures your drift angle and,
                                in conjunction with the DTC, provides optimum slip. DTC settings 2 and 3 have been
                                optimized for the racetrack and slicks. Brake Slide Assist helps you master power drifts
                                like these in no time at all: for more dynamic performance around every turn.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-screen  bg-white'>
                <div className='mx-[10%] my-[2%] h-full flex flex-col items-center justify-center'>
                    <img
                        src='assets/common/common-img1.png'
                    />
                </div>
            </div>

            <div className='w-screen  bg-white'>
                <div className='mx-[10%] my-[2%] h-full flex flex-col items-center justify-center'>
                    <img
                        src='assets/common/common-img2.png'
                    />
                </div>
            </div>


        </div>
    )
}

export default Carousel
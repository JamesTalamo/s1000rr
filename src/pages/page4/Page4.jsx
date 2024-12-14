import React from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Page4 = () => {

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#trigger4',
                start: 'top center',
                end: 'top top',
                toggleActions: 'restart none reverse none',
                // markers: true,
            }
        })
            .fromTo('#page4-img1', {
                top: '400px',

            }, {
                top: '0px',
                duration: 0.5
            })
            .fromTo('#page4-img2', {
                top: '400px',

            }, {
                top: '0px',
                duration: 0.5
            })
    })

    return (
        <div className='w-screen  bg-white' id='trigger4'>
            <div className='mx-[10%] my-[2%] h-full flex flex-col gap-10'>

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
                        <h2 className='text-3xl md:text-4xl lg:text-4xl w-[100%] lg:w-[600px]'>
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
    )
}

export default Page4
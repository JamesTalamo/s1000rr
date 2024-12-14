import React from 'react'

import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Page3 = () => {

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#trigger3',
                start: 'top bottom',
                end: 'top top',
                toggleActions: 'restart none reverse none',
                // markers: true,

            }
        })
            .fromTo('#p3-img', {
                top: '400px'
            }, {
                top: '0px',
                duration: 0.5,
            })
    })

    return (
        <div className='w-screen h-vdh bg-white relative flex-column items-center justify-center overflow-hidden py-[5%] ' id='trigger3'>

            <div className='flex flex-col lg:flex-row items-center justify-center py-[15%] md:py-[-0%] mx-[10%] relative '>

                <div className='flex flex-col items-start md:items-center lg:items-start justify-cente w-[100%] '>
                    <h1 className='text-black font-bold text-5xl lg:text-6xl md:pt-[10%]' id='text-head-1'>THE BMW S 1000
                        <span className="text-red-500 relative"> RR
                        </span>
                    </h1>
                    <h2 className='font-bold text-3xl text-black pb-[2%]'>CHALLENGE YOUR LIMITS</h2>

                    <p className='text-black text-start w-[100%] md:w-[100%] lg:w-[70%] pb-[5%]'>
                        The RR is now even more focused and more
                        precisely geared towards pure performance.
                        For those who increasingly demand more. More
                        from themselves. More each lap. And more from their RR.
                        Simply put: <strong>#NeverStopChallenging.</strong> Leading the way is a matter
                        of millimetres, especially in the circles the RR has always been
                        a part of. That’s why we have streamlined and evolved the RR where it matters most:
                        from the new steering angle sensor with Brake Slide Assist and Slide Control as well as the
                        integration of M components and improvements to the electronics and crucial processes for modifying
                        the bike for the race track.
                    </p>
                </div>

                <div className='overflow-hidden'>
                    <img
                        src="/assets/page3/page3-head-img.png"
                        className="w-[100%] h-[100%] relative"
                        id="p3-img"
                    />
                </div>

            </div>
        </div>
    )
}

export default Page3
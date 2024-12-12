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
                start: 'bottom bottom',
                pin: '#trigger3',
                pinSpacer: true,
                // markers: true,
                scrub: 1,
            }
        })

        tl.fromTo('#page2-rr', {
            left:'100vw'
        }, {
            left:'0vw',
            duration:30
        })

            .fromTo('#page3-p1', {
                x: '100vw',

            }, {
                x: '0vw',
                delay: 1,
                duration: 30,
                ease: 'power1.inOut'
            })
            .fromTo('#page3-p2', {

                x: '-100vw'
            }, {
                x: '0vw',
                delay: 1,
                duration: 30,
                ease: 'power1.inOut',
            })
            .fromTo('#page3-p3', {
                x: '100vw',

            }, {
                x: '0vw',
                delay: 1,
                duration: 30,
                ease: 'power1.inOut'
            })
            .fromTo('#page3-p4', {
                x: '-100vw',

            }, {
                x: '0vw',
                delay: 1,
                duration: 30,
                ease: 'power1.inOut'
            })


    })

    return (
        <div className='w-screen h-dvh bg-black relative flex-column items-center justify-center overflow-hidden ' id='trigger3'>
            <h1 className='text-white font-bold text-5xl text-center pt-[10%]' id='text-head-1'>BMW S 1000
                <span className="text-red-500 relative" id="page2-rr"> RR
                </span>

            </h1>

            <p className='text-white text-center pl-[10%] pr-[10%] md:pl-[30%] md:pr-[30%] pt-[10%]'>
                The RR is now even more focused and more
                precisely geared towards pure performance.
                For those who increasingly demand more. More
                from themselves. More each lap. And more from their RR.
                Simply put: <strong>#NeverStopChallenging.</strong> Leading the way is a matter
                of millimetres, especially in the circles the RR has always been
                a part of. That’s why we have streamlined and evolved the RR where it matters most:
                from the new steering angle sensor with Brake Slide Assist and Slide Control as well as the
                integration of M components and improvements to the electronics and crucial processes for modifying
                the bike for the race track. And all this with a clear goal in mind – claiming the pole position over and over
                again.
            </p>

            <div className='bg-white w-screen h-dvh absolute top-0 left-0' id='page3-p1'>

            </div>
            <div className='bg-blue-500 w-screen h-dvh absolute top-0 left-0' id='page3-p2'>

            </div>
            <div className='bg-red-500 w-screen h-dvh absolute top-0 left-0' id='page3-p3'>

            </div>
            <div className='bg-blue-500 w-screen h-dvh absolute top-0 left-0' id='page3-p4'>

            </div>
        </div>
    )
}

export default Page3
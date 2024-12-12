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
                start: '80% bottom',
                end: 'bottom bottom',
                // markers: true,
                scrub: true,
                pin: '#text-head-1'
            }
        })

        tl.to('#text-head-1', {
            color: 'white'
        })
        tl.to('#trigger3', {
            backgroundColor: 'black'
        })


    })

    return (
        <div className='w-screen h-dvh bg-white relative flex-column items-center justify-center ' id='trigger3'>
            <h1 className='text-black font-bold text-5xl text-center' id='text-head-1'>BMW S 1000 RR</h1>

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

           
        </div>
    )
}

export default Page3
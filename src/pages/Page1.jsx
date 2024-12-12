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
                scrub: 2,
                start: 'top top',
                end: '+900',
                pin: '#img',
                // pinSpacing: true,
            }
        })

        tl.fromTo('#img',
            {
                scale: 0.5,
                clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)'
            },
            {
                scale: 1,
                clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)'
                // clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
            }
        );


    })

    return (
        <div className='w-screen  relative bg-white overflow-hidden' id='#clip'>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[0%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[5%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[10%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[15%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[20%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[25%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[30%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[35%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[40%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[45%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[50%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[55%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[60%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[65%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[70%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[75%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[80%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <h1 className='text-5xl font-bold absolute left-[2%] top-[85%] text-[5rem] whitespace-nowrap'>
                BMW BMW BMW BMW BMW BMW BMW BMW
            </h1>
            <img
                src='https://images.unsplash.com/photo-1635073943212-f34dfbfcc3b0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8czEwMDBycnxlbnwwfHwwfHx8MA%3D%3D'
                className='object-cover w-screen h-screen' id='img'
            />

        </div>
    )
}

export default Page1
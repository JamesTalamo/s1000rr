import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const HeadPage = () => {

  useGSAP(() => {
    gsap.to('#head-vid1', {
      scale: 0.5,
      clipPath: 'polygon(20% 0%, 80% 0%, 80% 100%, 20% 100%)',
      rotation: 30,
      scrollTrigger: {
        trigger: '#triggerHead',
        scrub: 2,
        start: 'top top',
        end: '+=1000 top',
        // markers: true
      }
    })
  })

  return (
    <div className='w-screen h-dvh relative' id='triggerHead'>
      <video

        preload="auto"

        id='head-vid1'
        autoPlay
        loop
        muted
        src='assets/head/video1.mp4'
        className="w-full h-full object-cover"
        style={{ objectPosition: '25% center', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
      />
      <div className='absolute top-0 left-0 w-full h-full bg-transparent z-20' />
    </div>
  )
}

export default HeadPage
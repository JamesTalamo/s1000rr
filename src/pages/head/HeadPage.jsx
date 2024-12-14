import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const HeadPage = () => {

  useGSAP(() => {
    gsap.to('#head-vid1', {
      scale: 0.8,
      clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
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
    <div className='w-screen h-dvh' id='triggerHead'>
      <video
        id='head-vid1'
        autoPlay
        loop
        muted
        src='assets/head/video1.mp4'
        className="w-full h-full object-cover"
        style={{ objectPosition: '25% center', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
      />
    </div>
  )
}

export default HeadPage
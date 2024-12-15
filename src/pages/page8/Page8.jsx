import React, { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Page8 = () => {

  // Preload images on component mount
  useEffect(() => {
    const images = [
      'assets/page8/page8-img1.png',
      'assets/page8/page8-img2.png',
    ];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#trigger8',
        start: '-200 center',
        end: '-200 center',
        toggleActions: 'restart none reverse none',
        // markers: true,
      }
    })
      .fromTo('#Page8-img1', {
        top: '400px',
      }, {
        top: '0px',
        duration: 0.5
      })
      .fromTo('#Page8-img2', {
        top: '400px',
      }, {
        top: '0px',
        duration: 0.5
      });
  });

  return (
    <div className='w-screen bg-white' id='trigger8'>
      <div className='mx-[10%] my-[2%] h-full flex flex-col gap-10'>
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
  );
};

export default Page8;

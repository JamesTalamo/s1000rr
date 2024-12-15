import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {

    // Preload images
    useEffect(() => {
        const preloadImages = [
            '/assets/page2/page2-img1.jpg',
            '/assets/page2/page2-img2.jpg',
            '/assets/page2/page2-img3.png',
            '/assets/page2/page2-img4.jpg',
            '/assets/page2/page2-img5.jpg',
        ];

        preloadImages.forEach((src) => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = src;
            link.as = 'image';
            document.head.appendChild(link);
        });
    }, []);

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#trigger2',
                scrub: 1,
                start: "top top",
                end: '+=3000 top',
                pin: '#trigger2',
                // markers: true
            }
        });
        tl.to('#p2-head-text', {
            color: 'white'
        })
            .to('#img1', {
                x: '100%',
                duration: 30
            })
            .to('#img2', {
                x: '-100%',
                duration: 30
            })
            .to('#img3', {
                x: '100%',
                duration: 30
            })
            .to('#img4', {
                x: '-100%',
                duration: 30
            })
            .to('#img5', {
                x: '100%',
                duration: 30
            });
    });

    return (
        <div className='w-screen h-dvh relative bg-black' id='trigger2'>
            <h1 className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-7xl font-bold text-center text-white' id='p2-head-text'>RACE READY</h1>

            <div className='w-screen h-[20%] relative right-[100%] bg-blue-500' id='img1'>
                <img
                    src='/assets/page2/page2-img1.jpg'
                    className="object-cover h-full w-full"
                    alt="Image 1"
                />
            </div>
            <div className='w-screen h-[20%] relative left-[100%] bg-blue-600' id='img2'>
                <img
                    src='/assets/page2/page2-img2.jpg'
                    className="object-cover h-full w-full"
                    alt="Image 2"
                />
            </div>
            <div className='w-screen h-[20%] relative right-[100%] bg-blue-700' id='img3'>
                <img
                    src='/assets/page2/page2-img3.png'
                    className="object-cover h-full w-full"
                    alt="Image 3"
                />
            </div>
            <div className='w-screen h-[20%] relative left-[100%] bg-blue-800' id='img4'>
                <img
                    src='/assets/page2/page2-img4.jpg'
                    className="object-cover h-full w-full"
                    alt="Image 4"
                />
            </div>
            <div className='w-screen h-[20%] relative right-[100%] bg-blue-900' id='img5'>
                <img
                    src='/assets/page2/page2-img5.jpg'
                    className="object-cover h-full w-full"
                    alt="Image 5"
                />
            </div>
        </div>
    );
}

export default Page2;

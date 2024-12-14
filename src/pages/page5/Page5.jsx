import React from 'react'
import SectionLogo from './SectionLogo'


const Page5 = () => {
    return (
        <div className='w-screen h-dvh bg-white px-[10%]' id=' trigger5'>
            < div className='w-full bg-white flex flex-col' >
                <div className='w-full flex flex-row items-center justify-between'>
                    <div className='w-[500px] h-[2px] bg-black'></div>
                    <div className='w-[100px] h-[100px]'>
                        <SectionLogo />
                    </div>
                    <div className='w-[500px] h-[2px] bg-black'></div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-center'>HIGHLIGHTS OF THE SUPERBIKE</h1>
                </div>
            </div >

        </div >
    )
}

export default Page5
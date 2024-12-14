import React from 'react'

import SectionLogo from '../page5/SectionLogo.jsx'

const SectionDivider = () => {
    return (
        < div className='w-full bg-white flex flex-col py-[2%] px-[10%]' >
            <div className='w-full flex flex-row items-center justify-between'>
                <div className='w-[30%] h-[2px] bg-black'></div>
                <div className='w-[80px] h-[80px]'>
                    <SectionLogo />
                </div>
                <div className='w-[30%] h-[2px] bg-black'></div>
            </div>
            <div className='w-full flex items-center justify-center'>
                <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-center'>HIGHLIGHTS OF THE SUPERBIKE</h1>
            </div>
        </div >
    )
}

export default SectionDivider
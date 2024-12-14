import React from 'react'
import SectionLogo from '../../../public/assets/page5/sectionLogo.jsx'

const Page5 = () => {
    return (
        <div className='w-screen h-dvh bg-white px-[10%]' id=' trigger5'>
            < div className='w-full bg-white flex flex-col' >
                <div className='w-full flex flex-row items-center justify-between'>
                    <div className='w-[500px] h-[2px] bg-black'></div>
                    <div className='w-[100px] h-[full]'><SectionLogo /></div>
                    <div className='w-[500px] h-[2px] bg-black'></div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <h1 className='font-bold text-5xl'>HIGHLIGHTS OF THE SUPERBIKE</h1>
                </div>
            </div >

        </div >
    )
}

export default Page5
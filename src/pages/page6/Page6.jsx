import React, { useState } from 'react'



const Page6 = () => {

    let [select, setSelect] = useState(1)

    let changeSelect = (number) => {
        setSelect(number)
    }

    return (

        < div className='w-screen h-auto lg:px-[10%]' >
            <div className='relative w-full h-full'>
                <img
                    src={`assets/page6/page6-img${select}.jpg`}
                />
                <div className='w-full h-[100px] flex items-center justify-end  bottom-[0%] bg-text-gray-custom '>
                    <div className={`w-[100px] h-[60px] cursor-pointer ${select === 1 ? 'border-2 border-solid border-black' : ''}`} onClick={() => changeSelect(1)}>
                        <img
                            src='assets/page6/page6-sel1.jpg'
                            className='w-full h-full'
                        />
                    </div>
                    <div className={`w-[100px] h-[60px] cursor-pointer ${select === 3 ? 'border-2 border-solid border-black' : ''}`} onClick={() => changeSelect(3)}>
                        <img
                            src='assets/page6/page6-sel2.jpg'
                            className='w-full h-full'
                        />
                    </div>
                    <div className={`w-[100px] h-[60px] cursor-pointer ${select === 2 ? 'border-2 border-solid border-black' : ''}`} onClick={() => changeSelect(2)}>
                        <img
                            src='assets/page6/page6-sel3.jpg'
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </div>

            <div className=' bg-white flex flex-col-reverse items-center justify-between lg:flex-row  px-[10%] my-[5%] gap-[5%]'>
                <div>
                    <h1 className='text-2xl font-bold uppercase'>Three variants, one character</h1>
                    <p className='w-full lg:w-[550px]'>No matter which variant you choose: in this case, not millimeters or milliseconds are crucial,
                        it’s all about your preferences. However, one thing is clear: each RR is geared towards pure
                        performance.
                    </p>
                </div>

                <div className='w-full lg:w-[700px] bg-bg-custom mb-[5%] lg:mb-[0%] p-[3%]'>
                    <div className='text-2xl font-bold uppercase px-[5%] pb-5'>
                        {
                            select === 1 ? "Light White/M Motorsport" :
                                select === 2 ? "Blackstorm metallic" :
                                    select === 3 ? "Sport" :
                                        ""
                        }
                    </div>
                    <div className='px-[5%]'>
                        {
                            select === 1 ? "The iconic color scheme makes it immediately clear where you come from and where you are heading: to the race track. Paired with the M Package, there is absolutely no doubt." :
                                select === 2 ? "Sporty, sharp and clearly defined. The aim of the RR is as uncompromising and clear as the color scheme: top performance, whether on the road or on the race track." :
                                    select === 3 ? "SOn the attack: The paint in Bluestone Metallic exudes confidence with an ultra-sporty aesthetic. The dynamic highlights in Racing Red emphasize this bike's potential. Now it’s up to you to walk the walk." :
                                        ""
                        }
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Page6
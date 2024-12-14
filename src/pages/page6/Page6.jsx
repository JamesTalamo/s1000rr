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
                <div className='w-full h-[100px] flex items-center justify-center  bottom-[0%] bg-text-gray-custom '>
                    <div className={`w-[100px] h-[100px] cursor-pointer ${select === 1 ? 'border-2 border-solid border-black' : ''}`} onClick={() => changeSelect(1)}>
                        <img
                            src='assets/page6/page6-sel1.jpg'
                            className='w-full h-full'
                        />
                    </div>
                    <div className={`w-[100px] h-[100px] cursor-pointer ${select === 3 ? 'border-2 border-solid border-black' : ''}`} onClick={() => changeSelect(2)}>
                        <img
                            src='assets/page6/page6-sel2.jpg'
                            className='w-full h-full'
                        />
                    </div>
                    <div className={`w-[100px] h-[100px] cursor-pointer ${select === 2 ? 'border-2 border-solid border-black' : ''}`} onClick={() => changeSelect(3)}>
                        <img
                            src='assets/page6/page6-sel3.jpg'
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Page6
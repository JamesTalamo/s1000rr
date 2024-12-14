import React, { useState } from 'react'



const Page6 = () => {

    let [select, setSelect] = useState(3)

    return (

        < div className='w-screen h-full' >
            <div className='lg:px-[10%]'>
                <img
                    src={`assets/page6/page6-img${select}.jpg`}
                />
            </div>
        </div >
    )
}

export default Page6
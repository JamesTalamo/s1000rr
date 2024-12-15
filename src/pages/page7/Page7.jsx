import React, { useEffect } from 'react';

const Page7 = () => {
  useEffect(() => {
    const img = new Image();
    img.src = 'assets/page7/page7-img1.png';
  }, []);

  return (
    <div className='w-screen bg-red-500'>
      <img
        src='assets/page7/page7-img1.png'
        className='w-full h-auto'
      />
    </div>
  );
};

export default Page7;

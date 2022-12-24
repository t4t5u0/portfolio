'use client';

import Image from 'next/image';
import React from 'react';
// import './global.css';

const Page = () => {
  return (
    <>
      {/* <h1 className={'font-serif'}>Page</h1> */}
      {/* <div className={'flex min-h-full flex-col'}> */}
        {/* <div className={'flex-initial'}></div> */}
        <p className={'font-script text-9xl ml-10 align-bottom fixed bottom-0 pt-20 pb-10 text-[#02105C]'}>
          No Tech, <br />
          No Life!
        </p>
      {/* </div> */}
      {/* <div className={'fixed top-0 right-0 object-cover'}> */}
      {/* <div className='w-full'> */}
      <Image
        src={'/t4t5u0.png'}
        width={1898}
        height={2355}
        alt={'standing illust'}
        className={'fixed bottom-0 right-0 max-h-full w-auto -z-10'}
      />
      {/* </div> */}
    </>
  );
};

export default Page;

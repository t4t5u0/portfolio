'use client';

import Image from 'next/image';

const Page = () => {
  return (
    <>
      <p
        className={
          'font-script text-9xl ml-10 align-bottom fixed bottom-0 pt-20 pb-10 text-[#02105C]'
        }
      >
        No Tech, <br />
        No Life!
      </p>
      <Image
        src={'/t4t5u0.png'}
        width={1898}
        height={2355}
        alt={'standing illust'}
        className={'fixed bottom-0 right-0 max-h-full w-auto -z-10'}
      />
    </>
  );
};

export default Page;

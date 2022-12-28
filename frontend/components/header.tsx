'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header
        className={
          'p-2 fixed grid grid-cols-3 backdrop-blur-sm w-screen z-10 font-serif'
        }
      >
        <h1>Tatsuo&apos;s Portfolio</h1>
        <div className={'grid grid-cols-4 gap-4'}>
          <Link href={'/'} className={'text-center'}>
            Home
          </Link>
          {/* <Link href={'/articles'} className={'text-center'}> */}
          <Link href={'/'} className={'text-center'}>
            Articles
          </Link>
          <Link href={'/'} className={'text-center'}>
          {/* <Link href={'/works'} className={'text-center'}> */}
            Works
          </Link>

          {/* <Link href={'/profile'} className={'text-center'}> */}
          <Link href={'/'} className={'text-center'}>
            Profile
          </Link>
        </div>
      </header>
      {/* <div className='pt-40px'></div> */}
    </>
  );
};

export default Header;

'use client';

import Link from 'next/link';
import React from 'react';
// import '../app/global.css';

const Header = () => {
  return (
    <>
    <div className={'p-2 fixed grid grid-cols-3 font-serif backdrop-blur-sm w-screen z-10'}>
      <h1>Tatsuo&apos;s Portfolio</h1>
      <div className={'grid grid-cols-4 gap-4'}>
        <Link href={'/'} className={'text-center'}>Home</Link>
        <Link href={'/articles'} className={'text-center'}>Articles</Link>
        <Link href={'/works'} className={'text-center'}>Works</Link>
        <Link href={'/profile'} className={'text-center'}>Profile</Link>
      </div>
    </div>
    <div className='pt-40px'></div>
    </>
  );
};

export default Header;

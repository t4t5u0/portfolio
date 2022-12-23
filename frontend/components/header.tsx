'use client';

import Link from 'next/link';
import React from 'react';
// import '../app/global.css';

const Header = () => {
  return (
    <>
    <div className={'p-2 grid grid-cols-3 font-serif backdrop-blur-sm'}>
      <h1>Tatsuo&apos;s Portfolio</h1>
      <div className={'grid grid-cols-4 gap-4'}>
        <Link href={'/'}>Home</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/articles'}>Articles</Link>
        <Link href={'/works'}>Works</Link>
      </div>
    </div>
    <div className='pt-40px'></div>
    </>
  );
};

export default Header;

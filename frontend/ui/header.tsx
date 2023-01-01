'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header
        className={
          'p-2 sticky grid grid-cols-3 backdrop-blur-sm w-screen z-10 font-serif'
        }
      >
        <h1>Tatsuo&apos;s Portfolio</h1>
        <div className={'grid grid-cols-4 gap-4'}>
          <Link href={'/'} className={'text-center'}>
            Home
          </Link>
          <Link href={'/articles'} className={'text-center text-slate-300'}>
            Articles
          </Link>
          <Link href={'/works'} className={'text-center text-slate-300'}>
            Works
          </Link>
          <Link href={'/profile'} className={'text-center'}>
            Profile
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;

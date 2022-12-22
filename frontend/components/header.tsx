'use client';

import Link from 'next/link';
import React from 'react';
import '../app/global.css';

const Header = () => {
  return (
    <div className={'font-serif'}>
      <h1>Tatsuo&apos;s Portfolio</h1>
      <div className={'hoge'}>
        <Link href={'/'}>Home</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/articles'}>Articles</Link>
        <Link href={'/works'}>Works</Link>
      </div>
    </div>
  );
};

export default Header;

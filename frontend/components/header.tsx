'use client';

import Link from 'next/link';
import React from 'react';
import '../app/global.css';

const Header = () => {
  return (
    <div className={'gridContainer'}>
      <h1>Tatsuo's Portfolio</h1>
      <div className={'hoge'}>
        <Link href={'/'}>Home</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/articles'}>Articles</Link>
        <Link href={'/works'}>Works</Link>
        <a href="">hogehoge</a>
      </div>
      <style jsx>
        {`
          .gridContainer {
            display: grid;
            grid-template-columns: 2fr 3fr 2fr;
          }

          .hoge {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            width: 300px;
            justify-items: center;
            align-items: center;
          }

          :global(a) {
            color: inherit;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default Header;

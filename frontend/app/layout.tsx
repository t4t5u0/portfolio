import React from 'react';
import Header from '../components/header';
import './global.css';
import { Noto_Sans_JP, Noto_Serif_JP, Oooh_Baby } from '@next/font/google';
import Link from 'next/link';
// import '../styles/globals.css';
// import GlobalCSS from '../styles/globals';

const NOTO_SANS_JP = Noto_Sans_JP({
  weight: '300',
  style: 'normal',
  subsets: ['japanese', 'latin'],
  variable: '--font-noto-sans-jp',
});
const NOTO_SERIF_JP = Noto_Serif_JP({
  weight: '200',
  style: 'normal',
  subsets: ['japanese', 'latin'],
  variable: '--font-noto-serif-jp',
});
const OOOH_BABY = Oooh_Baby({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-oooh-baby',
});

const RootLayout = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html
      lang="jp"
      className={`${NOTO_SANS_JP.variable} ${NOTO_SERIF_JP.variable} ${OOOH_BABY.variable} `}
    >
      <body>
        <Header />
        {/* <div className={'p-2 fixed top-0 grid grid-cols-3 font-serif backdrop-blur-sm w-screen text-[#202634]'}>
          <h1>Tatsuo&apos;s Portfolio</h1>
          <div className={'grid grid-cols-4 gap-4'}>
            <Link href={'/'} className={'text-center'}>Home</Link>
            <Link href={'/profile'} className={'text-center'}>Profile</Link>
            <Link href={'/articles'} className={'text-center'}>Articles</Link>
            <Link href={'/works'} className={'text-center'}>Works</Link>
          </div>
        </div>
        <div className={'pb-10'}></div> */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

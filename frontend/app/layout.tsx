import React from 'react';
import Header from 'components/header';
import 'styles/globals.css';
import { Noto_Sans_JP, Noto_Serif_JP, Oooh_Baby } from '@next/font/google';

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
      className={`${NOTO_SANS_JP.variable} ${NOTO_SERIF_JP.variable} ${OOOH_BABY.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

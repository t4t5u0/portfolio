'use client';

import React from 'react';
import {Noto_Sans_JP, Noto_Serif_JP, Oooh_Baby} from '@next/font/google';

const NOTO_SANS_JP = Noto_Sans_JP({weight: '400'});
const NOTO_SERIF_JP = Noto_Serif_JP({weight: '400', subsets: ['latin']});
const OOOH_BABY = Oooh_Baby({weight: '400'});

const GlobalCSS = () => {
  return (
    <style jsx global>
      {`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: ${NOTO_SERIF_JP.style.fontFamily}, -apple-system,
            BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        a {
          font-family: "Noto Serif JP", ${NOTO_SERIF_JP.style.fontFamily}, -apple-system,
          text-decoration: none;
        }
        a:visited {
          color: inherit;
        }
      `}
    </style>
  );
};

export default GlobalCSS;

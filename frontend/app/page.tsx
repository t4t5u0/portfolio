'use client';

import React from 'react';
// import './global.css';

const Page = () => {
  return (
    <>
      <h1>Page</h1>
      <p className={'OoohBabys'}>
        No Tech, <br />
        No Life!
      </p>
      <style jsx>
        {`
          .OoohBabys {
            font-family: 'Oooh Baby', sans-serif;
          }
        `}
      </style>
    </>
  );
};

export default Page;

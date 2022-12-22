import React from 'react';
import Header from '../components/header';
import './global.css';
import '../styles/globals.css';
import GlobalCSS from '../styles/globals';

const RootLayout = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="jp">
      <body>
        <GlobalCSS />
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

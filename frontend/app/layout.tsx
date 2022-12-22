import React from 'react';

const RootLayout = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="jp">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

import { FC, PropsWithChildren } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';

import './globals.css';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default RootLayout;

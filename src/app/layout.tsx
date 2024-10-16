import { ReactNode } from 'react';

import './globals.css';

type Props = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={'bg-[#fafafa]'}>{children}</body>
    </html>
  );
}

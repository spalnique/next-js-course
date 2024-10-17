import { PropsWithChildren } from 'react';
import NavLink from '@/app/components/nav-link';
import './globals.css';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={'bg-[#fafafa] flex flex-col items-center h-screen'}>
        <header
          className={
            'flex justify-center items-center min-h-12 bg-blue-400 w-full'
          }>
          <nav className={'flex gap-5 uppercase'}>
            <NavLink path={'/'}>Home</NavLink>
            <NavLink path={'/companies'}>Companies</NavLink>
          </nav>
        </header>
        <main className={'flex-grow w-full'}>{children}</main>
        <footer
          className={
            'flex justify-center items-center min-h-12 bg-blue-400 w-full'
          }>
          I am footer with something noone cares about
        </footer>
      </body>
    </html>
  );
}

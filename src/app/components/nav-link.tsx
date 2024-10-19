'use client';

import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = PropsWithChildren & {
  path: string;
};

const NavLink: FC<NavLinkProps> = ({ path, children }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={clsx('text-indigo-100', { ['font-bold']: isActive })}>
      {children}
    </Link>
  );
};

export default NavLink;

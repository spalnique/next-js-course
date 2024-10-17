'use client';

import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type NavLinkProps = {
  path: string;
} & PropsWithChildren;

function NavLink({ path, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={clsx('text-indigo-100', { ['font-bold']: isActive })}>
      {children}
    </Link>
  );
}

export default NavLink;

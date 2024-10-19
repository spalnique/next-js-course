import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';

export type SidebarItemProps = PropsWithChildren & {
  pathname: string;
  src: string;
  alt: string;
};

const SidebarItem: FC<SidebarItemProps> = ({
  children,
  pathname,
  src,
  alt,
}) => {
  return (
    <li>
      <a href={pathname} className="flex items-center h-9 mx-1 gap-3.5">
        <Image className="ml-5" width={18} height={18} src={src} alt={alt} />
        <span className="font-medium text-zinc-50">{children}</span>
      </a>
    </li>
  );
};

export default SidebarItem;

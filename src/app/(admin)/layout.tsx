import { FC, PropsWithChildren } from 'react';
import Sidebar from '@/app/components/sidebar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
};
export default Layout;

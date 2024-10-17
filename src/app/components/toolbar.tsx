import { PropsWithChildren, ReactNode } from 'react';

export interface ToolbarProps {
  action?: ReactNode;
}

function Toolbar({ children, action }: PropsWithChildren<ToolbarProps>) {
  return (
    <div className="flex items-center gap-7 py-8 px-10">
      <div className="flex-1">{children}</div>
      {action}
    </div>
  );
}

export default Toolbar;

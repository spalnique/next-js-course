import React from 'react';

declare global {
  type NextComponent<T = React.PropsWithChildren> = (
    props: T
  ) => React.ReactNode;
  type NC<T = React.PropsWithChildren> = (props: T) => React.ReactNode; // alias
}

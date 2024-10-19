'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import clsx from 'clsx';

export type ButtonProps = Partial<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> & {
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({ disabled, ...props }) => (
  <button
    {...props}
    className={clsx(
      'px-5 py-2.5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded',
      disabled ? 'text-zinc-100' : 'hover:bg-gray-800 active:bg-gray-950'
    )}
    disabled={disabled}></button>
);

export default Button;

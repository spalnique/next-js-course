'use client';

import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Field } from 'formik';

// export interface InputFieldProps {
//   id?: string;
//   label?: string;
// }
export interface InputFieldProps
  extends Partial<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  > {
  label?: string;
  id?: string;
}

function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className={'flex flex-col gap-2'}>
      {label && (
        <label htmlFor={id} className={'text-base text-gray-900'}>
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className={'p-3 h-11 text-sm rounded border border-gray-300 shadow'}
      />
    </div>
  );
}

export default InputField;

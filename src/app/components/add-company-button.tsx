'use client';

import { ComponentType, FC, useState } from 'react';
import dynamic from 'next/dynamic';

import Button from '@/app/components/button';
import { CompanyFormModalProps } from '@/app/components/company-form-modal';

const CompanyFormModal: ComponentType<CompanyFormModalProps> = dynamic(
  () => import('./company-form-modal'),
  {
    ssr: false,
  }
);

const AddCompanyButton: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Add Company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
};

export default AddCompanyButton;

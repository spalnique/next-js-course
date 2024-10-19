import { FC } from 'react';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Header from '@/app/components/header';

const Page: FC<Params> = ({ params }) => {
  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
};
export default Page;

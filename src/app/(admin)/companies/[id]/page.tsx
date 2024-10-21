import { FC } from 'react';
import Header from '@/app/components/header';

type PageProps = { params: { id: string } };

const Page: FC<PageProps> = ({ params }) => {
  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
};
export default Page;

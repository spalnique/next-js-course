import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

function Page({ params: { id } }: Params) {
  return <>{id && <h1 className={'text-center text-6xl'}>{id}</h1>}</>;
}

export default Page;

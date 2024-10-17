import StatusLabel, { Status } from '@/app/components/active-label';
import { headers } from 'next/headers';

export default function Home() {
  headers();
  return (
    <main>
      <h1>Home page</h1>
      <p>{new Date().toTimeString()}</p>
      <StatusLabel status={Status.Active} />
      <StatusLabel status={Status.NotActive} />
      <StatusLabel status={Status.Pending} />
      <StatusLabel status={Status.Suspended} />
    </main>
  );
}

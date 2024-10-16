import StatusLabel, { Status } from '@/app/components/active-label';

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <StatusLabel status={Status.Active} />
      <StatusLabel status={Status.NotActive} />
      <StatusLabel status={Status.Pending} />
      <StatusLabel status={Status.Suspended} />
    </main>
  );
}

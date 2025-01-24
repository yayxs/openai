import Timeline from './components/Timeline';
import { modelReleases } from './data/models';

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">
        大语言模型发展时间线
      </h1>
      <Timeline releases={modelReleases} />
    </main>
  );
}

'use client';

import Timeline from './components/Timeline';
import { modelReleases } from './data/models';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Timeline releases={modelReleases} />
      </div>
    </main>
  );
}

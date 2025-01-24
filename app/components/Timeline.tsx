import { ModelRelease } from '../data/models';

export default function Timeline({ releases }: { releases: ModelRelease[] }) {
  // 按日期排序
  const sortedReleases = [...releases].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="max-w-2xl mx-auto py-8">
      {sortedReleases.map((release, index) => (
        <div key={index} className="flex gap-4 mb-8">
          <div className="w-32 text-gray-500">
            {new Date(release.date).toLocaleDateString()}
          </div>
          <div className="flex-1">
            <div className="font-bold">{release.modelName}</div>
            <div className="text-sm text-gray-600">{release.company}</div>
          </div>
        </div>
      ))}
    </div>
  );
} 
import { ModelRelease } from '../data/models';

export default function Timeline({ releases }: { releases: ModelRelease[] }) {
  // 按日期倒序排序，最新的在前
  const sortedReleases = [...releases].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="relative">
        {/* 垂直线 */}
        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        
        {sortedReleases.map((release, index) => (
          <div key={index} className="relative flex gap-4 mb-8">
            {/* 时间点 */}
            <div className="w-32 text-gray-500 text-sm pt-1">
              {new Date(release.date).toLocaleDateString('zh-CN')}
            </div>
            
            {/* 圆点 */}
            <div className="absolute left-16 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
            
            {/* 内容 */}
            <div className="flex-1 ml-8">
              <div className="font-bold text-lg">{release.modelName}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
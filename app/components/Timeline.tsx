import { ModelRelease } from '../data/models';

export default function Timeline({ releases }: { releases: ModelRelease[] }) {
  // 按日期倒序排序，最新的在前
  const sortedReleases = [...releases].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="relative py-8">
      {/* 垂直线 */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
      
      {sortedReleases.map((release, index) => (
        <div key={index} className="relative flex items-center mb-12">
          {/* 时间点 */}
          <div className="w-1/2 pr-8 text-right">
            <div className="text-lg font-medium text-gray-600">
              {new Date(release.date).toLocaleDateString('zh-CN')}
            </div>
          </div>
          
          {/* 圆点 */}
          <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white z-10"></div>
          
          {/* 内容 */}
          <div className="w-1/2 pl-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold">{release.modelName}</h3>
                <span className="text-gray-500">({release.company})</span>
                {release.isOpenSource && (
                  <span className="px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                    开源
                  </span>
                )}
              </div>
              {release.description && (
                <p className="text-gray-600">{release.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 
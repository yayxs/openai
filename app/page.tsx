'use client';

import { useState, useMemo } from 'react';
import Timeline from './components/Timeline';
import ModelList from './components/ModelList';
import ModelTable from './components/ModelTable';
import Sidebar from './components/Sidebar';
import { modelReleases } from './data/models';

export default function Home() {
  const companies = useMemo(
    () => Array.from(new Set(modelReleases.map((release) => release.company))),
    []
  );

  const [selectedCompanies, setSelectedCompanies] = useState<string[]>(companies);
  // 定义展示模式：timeline、list、table、grid
  const [viewMode, setViewMode] = useState<'timeline' | 'list' | 'table' | 'grid'>('grid');

  const handleCompanyToggle = (company: string) => {
    setSelectedCompanies((prev) => {
      if (prev.includes(company)) {
        return prev.filter((c) => c !== company);
      } else {
        return [...prev, company];
      }
    });
  };

  const filteredReleases = modelReleases.filter((release) =>
    selectedCompanies.includes(release.company)
  );

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar
        companies={companies}
        selectedCompanies={selectedCompanies}
        onCompanyToggle={handleCompanyToggle}
        modelReleases={modelReleases}
      />
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* View mode switch buttons */}
          <div className="mb-6 flex space-x-4 bg-white p-2 rounded-lg shadow-sm">
            {[
              { id: 'timeline', label: '时间线', icon: '📅' },
              { id: 'list', label: '列表', icon: '📝' },
              { id: 'table', label: '表格', icon: '📊' },
              { id: 'grid', label: '网格', icon: '🎯' },
            ].map((item) => (
              <button
                key={item.id}
                className={`
                  px-4 py-2 rounded-md border transition-all duration-200
                  flex items-center gap-2
                  ${
                    viewMode === item.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }
                `}
                onClick={() => setViewMode(item.id as typeof viewMode)}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {selectedCompanies.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">请至少选择一个提供商以查看模型</p>
            </div>
          ) : (
            <>
              {viewMode === 'timeline' && <Timeline releases={filteredReleases} />}
              {viewMode === 'list' && <ModelList releases={filteredReleases} />}
              {viewMode === 'table' && <ModelTable releases={filteredReleases} />}

              {/* 新增网格视图 */}
              {viewMode === 'grid' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedCompanies.map((company) => {
                    const companyModels = modelReleases
                      .filter((release) => release.company === company)
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

                    return (
                      <div
                        key={company}
                        className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-200"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-blue-600">{company}</h3>
                          <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                            {companyModels.length} 个模型
                          </span>
                        </div>
                        <div className="space-y-3">
                          {companyModels.map((model, index) => (
                            <div
                              key={index}
                              className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 border border-gray-100"
                            >
                              <div className="flex justify-between items-start mb-2">
                                <div className="font-medium text-gray-900">{model.modelName}</div>
                                <div className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                                  {model.date}
                                </div>
                              </div>
                              {model.description && (
                                <div className="text-sm text-gray-600 mt-2 leading-relaxed">
                                  {model.description}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

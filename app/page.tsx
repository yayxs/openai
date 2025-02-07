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
  // 定义展示模式：timeline、list、table
  const [viewMode, setViewMode] = useState<'timeline' | 'list' | 'table'>('timeline');

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
      />
      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* View mode switch buttons */}
          <div className="mb-6 flex space-x-4">
            <button
              className={`px-4 py-2 rounded-md border ${
                viewMode === 'timeline' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => setViewMode('timeline')}
            >
              Timeline
            </button>
            <button
              className={`px-4 py-2 rounded-md border ${
                viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => setViewMode('list')}
            >
              List
            </button>
            <button
              className={`px-4 py-2 rounded-md border ${
                viewMode === 'table' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => setViewMode('table')}
            >
              Table
            </button>
          </div>

          {selectedCompanies.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">Please select at least one provider to view models</p>
            </div>
          ) : (
            <>
              {viewMode === 'timeline' && <Timeline releases={filteredReleases} />}
              {viewMode === 'list' && <ModelList releases={filteredReleases} />}
              {viewMode === 'table' && <ModelTable releases={filteredReleases} />}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

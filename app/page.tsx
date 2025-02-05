'use client';

import { useState, useMemo } from 'react';
import Timeline from './components/Timeline';
import Sidebar from './components/Sidebar';
import { modelReleases } from './data/models';

export default function Home() {
  const companies = useMemo(
    () => Array.from(new Set(modelReleases.map((release) => release.company))),
    []
  );

  const [selectedCompanies, setSelectedCompanies] = useState<string[]>(companies);

  const handleCompanyToggle = (company: string) => {
    setSelectedCompanies((prev) => {
      if (prev.includes(company)) {
        return prev.filter((c) => c !== company);
      } else {
        return [...prev, company];
      }
    });
  };

  const handleSelectAll = () => {
    setSelectedCompanies((prev) => (prev.length === companies.length ? [] : [...companies]));
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
        onSelectAll={handleSelectAll}
      />
      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Timeline releases={filteredReleases} />
        </div>
      </main>
    </div>
  );
}

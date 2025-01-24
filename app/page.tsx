'use client';

import { useState } from 'react';
import Timeline from './components/Timeline';
import CompanyTags from './components/CompanyTags';
import { modelReleases } from './data/models';

// 所有可用的公司
const companies = ['Anthropic', 'OpenAI', 'Google', 'Mistral'];

export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState<string | null>('Anthropic');

  // 根据选择的公司筛选模型
  const filteredReleases = selectedCompany
    ? modelReleases.filter(release => release.company === selectedCompany)
    : modelReleases;

  return (
    <main className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">
        大语言模型发展时间线
      </h1>
      <CompanyTags
        companies={companies}
        selectedCompany={selectedCompany}
        onSelectCompany={setSelectedCompany}
      />
      <Timeline releases={filteredReleases} />
    </main>
  );
}

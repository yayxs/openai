export interface ModelRelease {
  date: string;
  modelName: string;
  company: string;
  description?: string;
  isOpenSource?: boolean;
}

export const modelReleases: ModelRelease[] = [
  {
    date: '2025-01-20',
    modelName: 'DeepSeek-R1',
    company: 'DeepSeek',
    description: `open-sourced and with fully open reasoning tokens`,
  },
  {
    date: '2025-01-31',
    modelName: 'o3-mini o3-mini-2025-01-31',
    company: 'OpenAI',
    description: ``,
  },
];

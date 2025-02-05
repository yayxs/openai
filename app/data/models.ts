export interface ModelRelease {
  date: string;
  modelName: string;
  company: string;
  description?: string;
  isOpenSource?: boolean;
}

export const modelReleases: ModelRelease[] = [
  {
    date: "2025-01-20",
    modelName: "DeepSeek-R1",
    company: "DeepSeek",
    description: "开源大语言模型，支持思维链输出",
    isOpenSource: true
  },
]; 
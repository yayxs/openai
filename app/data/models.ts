export interface ModelRelease {
  date: string;
  modelName: string;
  company: string;
}

export const modelReleases: ModelRelease[] = [
  {
    date: "2022-12-21",
    modelName: "Claude (早期版本)",
    company: "Anthropic"
  },
  {
    date: "2023-03-14",
    modelName: "Claude",
    company: "Anthropic"
  },
  {
    date: "2023-07-11",
    modelName: "Claude 2",
    company: "Anthropic"
  },
  {
    date: "2023-08-15",
    modelName: "Claude 2.0",
    company: "Anthropic"
  },
  {
    date: "2023-11-21",
    modelName: "Claude 2.1",
    company: "Anthropic"
  },
  {
    date: "2024-01-16",
    modelName: "Claude 3 Opus",
    company: "Anthropic"
  }
]; 
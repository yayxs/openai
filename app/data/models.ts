export interface ModelRelease {
  date: string;
  modelName: string;
  company: string;
}

export const modelReleases: ModelRelease[] = [
  {
    date: "2023-03-14",
    modelName: "Claude 1",
    company: "Anthropic"
  },
  {
    date: "2023-07-11",
    modelName: "Claude 2",
    company: "Anthropic"
  },
  {
    date: "2023-11-21",
    modelName: "Claude 2.1",
    company: "Anthropic"
  },
  {
    date: "2024-01-16",
    modelName: "Claude 3 Haiku",
    company: "Anthropic"
  },
  {
    date: "2024-01-16",
    modelName: "Claude 3 Sonnet",
    company: "Anthropic"
  },
  {
    date: "2024-01-16",
    modelName: "Claude 3 Opus",
    company: "Anthropic"
  }
]; 
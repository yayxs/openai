export interface ModelRelease {
  date: string;
  modelName: string;
  company: string;
}

export const modelReleases: ModelRelease[] = [
  {
    date: "2022-11-30",
    modelName: "ChatGPT",
    company: "OpenAI"
  },
  {
    date: "2023-03-14",
    modelName: "GPT-4",
    company: "OpenAI"
  },
  {
    date: "2023-03-14",
    modelName: "Claude",
    company: "Anthropic"
  },
  {
    date: "2023-07-06",
    modelName: "Claude 2",
    company: "Anthropic"
  },
  {
    date: "2023-12-08",
    modelName: "Gemini Pro",
    company: "Google"
  }
]; 
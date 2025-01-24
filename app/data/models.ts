export interface ModelRelease {
  date: string;
  modelName: string;
  company: string;
  description?: string;
}

export const modelReleases: ModelRelease[] = [
  {
    date: "2022-12-21",
    modelName: "Claude (早期版本)",
    company: "Anthropic",
    description: "Claude 的首次公开发布，通过 Constitutional AI 训练"
  },
  {
    date: "2023-03-14",
    modelName: "Claude",
    company: "Anthropic",
    description: "正式版本发布，支持更长的上下文和更好的推理能力"
  },
  {
    date: "2023-07-11",
    modelName: "Claude 2",
    company: "Anthropic",
    description: "重大升级版本，在编码、数学和推理能力上有显著提升"
  },
  {
    date: "2023-08-15",
    modelName: "Claude 2.0",
    company: "Anthropic",
    description: "提供更长的上下文窗口（100K tokens）"
  },
  {
    date: "2023-11-21",
    modelName: "Claude 2.1",
    company: "Anthropic",
    description: "改进了系统提示的一致性，提供更可靠的输出"
  },
  {
    date: "2024-01-16",
    modelName: "Claude 3 Opus",
    company: "Anthropic",
    description: "最新发布的旗舰模型，具有更强的视觉理解能力"
  }
]; 
// 定义模型数据项的类型
export interface ModelItem {
  time: string;
  name: string;
  description: string;
  isReasoning?: boolean;
}

// 定义网格数据的类型
export type GridData = ModelItem[][];

// 定义模型提供商信息的类型
export interface ModelProvider {
  name: string;
  logo: string;
  color: string;
  url: string;
  tipTitle: string;
  tipContent: string;
}

// 定义ModelGrid组件的属性类型
export interface ModelGridProps {
  gridData: GridData;
  modelProviders: ModelProvider[];
  availableModels: string[];
} 
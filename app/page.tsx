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
  id: string;
  name: string;
  logo: string;
  color: string;
  url: string;
  tipTitle: string;
  tipContent: string;
}

// 模型数据
const modelsData: ModelItem[][] = [
  // Google Gemini系列
  [
    {
      time: '2025年03月25日',
      name: 'models/gemini-2.5-pro-exp-03-25',
      description: `最新的实验性Gemini 2.5 Pro版本，具有超长上下文和输出支持`
    },
    {
      time: '2025年02月05日',
      name: 'models/gemini-2.0-pro-exp-02-05',
      description: `Pro系列实验版本，同样指向2.5实验功能`
    },
    {
      time: '2025年02月05日',
      name: 'models/gemini-2.0-flash-lite-preview-02-05',
      description: `Flash Lite的预览版本，轻量级设计适合资源受限环境`
    },
    {
      time: '2025年01月21日',
      name: 'models/gemini-2.0-flash-thinking-exp-01-21',
      description: `Flash Thinking实验版本，专注于优化推理能力，温度值0.7`
    },
    {
      time: '2025年01月',
      name: 'models/gemini-2.0-flash-001',
      description: `Gemini 2.0 Flash的稳定版本发布，适合生产环境`
    },
    {
      time: '2025年01月',
      name: 'models/gemini-2.0-flash-lite-001',
      description: `Flash Lite稳定版，轻量级设计，资源效率高`
    },
    {
      time: '2025年01月',
      name: 'models/gemini-2.0-flash-exp-image-generation',
      description: `专为图像生成任务优化的实验性Flash版本`
    },
    {
      time: '2024年12月19日',
      name: 'models/gemini-2.0-flash-thinking-exp-1219',
      description: `首个Flash Thinking实验版本，推理能力强、一致性好`
    },
    {
      time: '2024年12月06日',
      name: 'models/gemini-exp-1206',
      description: `早期实验性Gemini版本，已指向2.5 Pro功能`
    },
  ],
  // OpenAI ChatGPT系列
  [
    {
      time: '2025年03月27日',
      name: 'GPT-4o',
      description: '',
    },
    {
      time: '2025年03月19日',
      name: 'OpenAI o1-pro',
      description: 'o1-pro/o1-pro-2025-03-19',
    },
    {
      time: '2025年02月27日',
      name: 'GPT‑4.5',
      description: 'gpt-4.5-preview/gpt-4.5-preview-2025-02-27',
    },
    {
      time: '2025年01月31日',
      name: 'OpenAI o3-mini',
      description: 'o3-mini-2025-01-31',
      isReasoning: true
    },
    {
      time: '2025年01月29日',
      name: 'GPT-4o',
      description: '模型的知识截止时间由原来的 2023 年 11 月延长至 2024 年 6 月，使得模型能更好地回答最新问题。',
    },
    {
      time: '2024年12月17日',
      name: 'OpenAI o1',
      description: 'o1/o1-2024-12-17',
    },
    {
      time: '2024年12月05日',
      name: 'OpenAI o1',
      description: 'o1/o1-2024-12-05',
    },
    {
      time: '2024年11月20日',
      name: 'GPT-4o',
      description: 'gpt-4o/gpt-4o-2024-11-20',
    },
    {
      time: '2024年09月12日',
      name: 'OpenAI o1-mini',
      description: 'o1-mini/o1-mini-2024-09-12',
    },
    {
      time: '2024年09月12日',
      name: 'OpenAI o1 preview',
      description: 'o1-preview-2024-09-12',
    },
    {
      time: '2024年09月03日',
      name: 'ChatGPT-4o',
      description: 'chatgpt-4o-latest与其他 GPT-4o 模型不同，它更专注于对话生成，而非多模态或实时处理',
    },
    {
      time: '2024年08月16日',
      name: 'GPT-4o',
      description:
        'gpt-4o/gpt-4o-2024-08-06这是 GPT-4o 的首个正式版本，支持文本、图像和音频输入，具有强大的多模态处理能力，相比 GPT-4o-mini，它在处理复杂任务时准确性更高，功能更全面',
    },
    {
      time: '2024年07月18日',
      name: 'GPT-4o mini',
      description: 'gpt-4o-mini/gpt-4o-mini-2024-07-18 \n 这是 GPT-4o-mini 的首个版本',
    },
    {
      time: '2024年05月13日',
      name: 'GPT-4o',
      description: 'gpt-4o/gpt-4o-2024-05-13 \n GPT‑4o 正式问世，具备多模态能力（文本、图像、音频），为 ChatGPT 提供了全新的、更强的多媒体处理与理解能力。',
    },
    {
      time: '2024年04月09日',
      name: 'gpt-4-turbo-2024-04-09',
      description: '这是GPT-4 Turbo的正式发布',
    },
    {
      time: '2024年01月25日',
      name: 'gpt-3.5-turbo-0125',
      description: '',
    },
    {
      time: '2024年01月25日',
      name: 'gpt-4-0125-preview',
      description: '相较于gpt-4-1106-preview，此版本改进了任务完成能力，它是第二个预览版本',
    },
    {
      time: '2023年11月06日',
      name: 'gpt-4-1106-preview',
      description: '这是GPT-4 Turbo的首个预览版本，于OpenAI的DevDay活动中发布',
    },
    {
      time: '2023年11月06日',
      name: 'gpt-3.5-turbo-1106',
      description: '',
    },
    {
      time: '2023年06月13日',
      name: 'gpt-4-0613',
      description: '',
    },
    {
      time: '2023年06月13日',
      name: 'gpt-3.5-turbo-0613',
      description: '',
    },
    {
      time: '2023年03月14日',
      name: 'gpt-4-0314',
      description: '',
    },
    {
      time: '2023年03月01日',
      name: 'gpt-3.5-0301',
      description: '',
    },
  ],
  // Anthropic Claude系列
  [
    {
      time: '2025年02月19日',
      name: 'Claude 3.7 Sonnet',
      description: '具有推理能力的模型',
      isReasoning: true
    },
    {
      time: '2024年10月22日',
      name: 'Claude 3.5 Sonnet',
      description: '升级了2024年06月21日的Claude 3.5 Sonnet',
    },
    {
      time: '2024年10月22日',
      name: 'Claude 3.5 Haiku',
      description: 'Claude 3.5 Haiku 和 Claude 3 Opus 表现相当',
    },
    {
      time: '2024年06月20日',
      name: 'Claude 3.5 Sonnet',
      description: 'Claude 3.5 模型系列中的首款产品',
    },
    {
      time: '2024年03月07日',
      name: 'Claude 3 Haiku',
      description: 'claude-3-haiku-20240307',
    },
    {
      time: '2024年02月29日',
      name: 'Claude 3 Opus',
      description: 'claude-3-opus-20240229',
    },
    {
      time: '2024年02月29日',
      name: 'Claude 3 Sonnet',
      description: 'claude-3-sonnet-20240229',
    },
  ],
  // xAI Grok系列
  [
    {
      time: '2025年02月17日',
      name: 'Grok3',
      description: '',
    },
    {
      time: '2014年12月12日',
      name: 'grok-2-1212/grok-2/grok-2-latest',
      description: '截止日期为 2024 年 7 月 17 日',
    },
    {
      time: '',
      name: 'grok-beta',
      description: 'grok-beta型号是早期型号，现已弃用',
    },
    {
      time: '2024年08月12日',
      name: 'Grok2 Grok2 mini',
      description: '',
    },
    {
      time: '2024年03月28日',
      name: 'Grok1.5',
      description: '',
    },
    {
      time: '2023年11月03日',
      name: 'Grok1',
      description: '',
    },
  ],
  // DeepSeek
  [
    {
      time: '2025年03月24日',
      name: 'DeepSeek-V3-0324',
      description: 'DeepSeek V3 模型已完成0324小版本升级',
    },
    {
      time: '2025年01月20日',
      name: 'DeepSeek-R1',
      description: '',
    },
    {
      time: '2024年12月26日',
      name: 'DeepSeek-V3',
      description: '',
    },
    {
      time: '2024年12月10日',
      name: 'DeepSeek-V2.5-1210',
      description: 'DeepSeek V2.5 的最终版微调模型，全新支持了联网搜索',
    },
    {
      time: '2024年11月20日',
      name: 'DeepSeek-R1-Lite',
      description: '处于迭代开发阶段，仅支持网页使用，暂不支持 API 调用',
    },
    {
      time: '2024年09月05日',
      name: 'DeepSeek-V2.5',
      description: 'DeepSeek V2 Chat 和 DeepSeek Coder V2 两个模型已经合并升级，升级后的新模型为 DeepSeek V2.5',
    },
    {
      time: '2024年07月24日',
      name: 'DeepSeek-Coder-V2-0724',
      description: 'deepseek-coder 模型升级为 DeepSeek-Coder-V2-0724',
    },
    {
      time: '2024年06月28日',
      name: 'DeepSeek-V2-0628',
      description: 'deepseek-chat 模型升级为 DeepSeek-V2-0628',
    },
    {
      time: '2024年06月14日',
      name: 'DeepSeek-Coder-V2-0614',
      description: 'deepseek-coder 模型升级为 DeepSeek-Coder-V2-0614',
    },
    {
      time: '2024年05月17日',
      name: 'DeepSeek-V2-0517',
      description: 'deepseek-chat 模型升级为 DeepSeek-V2-0517',
    },
    {
      time: '2024年05月06日',
      name: 'DeepSeek-V2-0506',
      description: '',
    },
  ],
  // 第六个格子 - Meta LLaMA系列
  [],
];


export default function Home() {
  

  return (
    <div className='flex flex-col h-screen overflow-auto relative'>
      
      {/* 主要内容区 */}
      <main className='relative z-10 flex-grow p-2 flex flex-col'> 
       
      </main>

      
    </div>
  )
}

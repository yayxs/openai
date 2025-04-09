'use client';

import { Footer as UIFooter } from '@/components/ui/footer';
import { Github, Twitter, Code } from 'lucide-react';

export default function Footer() {
  return (
    <div className="bg-white border-t border-gray-100">
      <UIFooter
        logo={null}
        brandName=""
        socialLinks={[
          {
            icon: <Github className='h-5 w-5' />,
            href: 'https://github.com/yayxs/llm-name',
            label: 'GitHub',
          },
          {
            icon: <Twitter className='h-5 w-5' />,
            href: 'https://x.com/10k_ai',
            label: 'X (Twitter)',
          },
          {
            icon: <Code className='h-5 w-5' />,
            href: 'https://aicoding.vercel.app/',
            label: 'AI Coding',
          },
        ]}
        mainLinks={[
          {
            href: 'https://help.openai.com/en/articles/7864572-what-is-the-chatgpt-model-selector',
            label: 'ChatGPT 模型选择器',
          },
          {
            href: 'https://docs.x.ai/docs/models?cluster=us-east-1#model-constraints',
            label: 'Grok Models',
          },
          {
            href: 'https://docs.anthropic.com/zh-CN/docs/about-claude/models/all-models',
            label: 'Claude 模型列表',
          },
          {
            href: 'https://api-docs.deepseek.com/zh-cn/news/news1210',
            label: 'DeepSeek API 文档',
          },
        ]}
        legalLinks={[]}
        copyright={{
          text: `© ${new Date().getFullYear()} LLMs Name`,
          license: 'MIT License',
        }}
      />
    </div>
  );
} 
'use client'

import Particles from '@/components/Particles/Particles'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/ui/footer'
import { Github, Twitter, Maximize2, Info } from 'lucide-react'
import { useState } from 'react'
import { Dialog } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export default function Home() {
  // 状态管理
  const [dialogOpen, setDialogOpen] = useState(false)
  const [activeGridIndex, setActiveGridIndex] = useState<number | null>(null)
  const [dialogTitle, setDialogTitle] = useState('')
  const [tipDialogOpen, setTipDialogOpen] = useState(false)
  const [tipContent, setTipContent] = useState('')
  const [tipTitle, setTipTitle] = useState('')

  // 打开全屏模态窗口
  const openFullscreen = (index: number, title: string) => {
    setActiveGridIndex(index)
    setDialogTitle(title)
    setDialogOpen(true)
  }

  // 关闭模态窗口
  const closeDialog = () => {
    setDialogOpen(false)
    setActiveGridIndex(null)
  }

  // 打开提示窗口
  const openTipDialog = (title: string, content: string) => {
    setTipTitle(title)
    setTipContent(content)
    setTipDialogOpen(true)
  }

  // 关闭提示窗口
  const closeTipDialog = () => {
    setTipDialogOpen(false)
  }

  // 模拟数据 - 每个格子的表格数据（每个格子是一个数据集，包含多行数据）
  const gridData = [
    // 第一个格子 - Google Gemini系列
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
    // 第二个格子 - OpenAI GPT系列
    [
      {
        time: '2025年03月19日',
        name: 'o1-pro/o1-pro-2025-03-19',
        description: '',
      },
      {
        time: '2025年02月27日',
        name: 'gpt-4.5-preview/gpt-4.5-preview-2025-02-27',
        description: '最大最能干聊天模型',
      },
      {
        time: '2025年01月31日',
        name: 'o3-mini/o3-mini-2025-01-31',
        description: '',
      },
      {
        time: '2024年12月17日',
        name: 'o1/o1-2024-12-17',
        description: '',
      },
      {
        time: '2024年11月20日',
        name: 'gpt-4o/gpt-4o-2024-11-20',
        description: '',
      },
      {
        time: '2024年09月12日',
        name: 'o1-mini/o1-mini-2024-09-12',
        description: '',
      },
      {
        time: '2024年09月12日',
        name: 'o1-preview-2024-09-12',
        description: '',
      },
      {
        time: '2024年09月03日',
        name: 'chatgpt-4o-latest',
        description: '与其他 GPT-4o 模型不同，它更专注于对话生成，而非多模态或实时处理',
      },
      {
        time: '2024年08月16日',
        name: 'gpt-4o/gpt-4o-2024-08-06',
        description:
          '这是 GPT-4o 的首个正式版本，支持文本、图像和音频输入，具有强大的多模态处理能力，相比 GPT-4o-mini，它在处理复杂任务时准确性更高，功能更全面',
      },
      {
        time: '2024年07月18日',
        name: 'gpt-4o-mini/gpt-4o-mini-2024-07-18',
        description: '这是 GPT-4o-mini 的首个版本，专为高效、低成本的应用场景设计，支持文本和视觉输入',
      },
      {
        time: '2024年05月13日',
        name: 'gpt-4o/gpt-4o-2024-05-13',
        description: '',
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
    // 第三个格子 - Anthropic Claude系列
    [
      {
        time: '2025年02月19日',
        name: 'Claude 3.7 Sonnet',
        description: '具有推理能力的模型',
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
    // 第四个格子 - xAI Grok系列
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
    // 第五个格子 - DeepSeek
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
  ]

  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      {/* 粒子背景 */}
      <div className='fixed inset-0 z-0'>
        <Particles
          particleColors={['#4F46E5', '#60A5FA', '#34D399']}
          particleCount={250}
          particleSpread={12}
          speed={0.08}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* 主要内容区 */}
      <main className='relative z-10 flex-grow p-2 flex flex-col h-[calc(100vh-80px)] md:h-[calc(100vh-60px)]'>
        {/* 内容区域 - 2行3列网格 */}
        <div className='w-full rounded-lg overflow-hidden grid grid-cols-3 grid-rows-2 h-full bg-white'>
          {/* 第一行第一列 - Gemini系列 */}
          <div className='border-r border-b p-0 flex flex-col'>
            <div className='flex justify-between items-center border-b p-2 bg-gray-50'>
              <Link href='https://gemini.google.com/' target='_blank' rel='noopener noreferrer'>
                <h3 className='font-bold text-lg flex items-center hover:underline'>
                  <span className='mr-2 flex items-center'>
                    <Image src='/google-color.svg' alt='Google Logo' width={20} height={20} className='mr-1' />
                  </span>
                  <span className='text-[#4285F4]'>Google Gemini</span>
                </h3>
              </Link>
              <div className='flex items-center'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full hover:bg-gray-100 mr-1'
                  onClick={() => 
                    openTipDialog(
                      'Google Gemini 使用提示', 
                      '• 2.5 Pro: 最新实验性功能，超长上下文窗口(100万+ tokens)\n• Flash系列: 速度快、响应迅速，适合实时应用\n• Flash Thinking: 特别优化推理能力，温度值较低(0.7)\n• Flash Lite: 轻量级设计，适合资源受限环境\n• 所有模型均支持多模态输入，包括文本、图像等'
                    )
                  }
                >
                  <Info className='h-4 w-4' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full hover:bg-gray-100'
                  onClick={() => openFullscreen(0, 'Google Gemini')}
                >
                  <Maximize2 className='h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='custom-scrollbar flex-1 px-2 h-[calc(50vh-85px)] md:h-[calc(50vh-75px)]'>
              <table className='w-full text-sm table-fixed'>
                <colgroup>
                  <col className='w-1/4 min-w-[100px]' />
                  <col className='w-1/3 min-w-[120px]' />
                  <col className='w-5/12' />
                </colgroup>
                <tbody>
                  {gridData[0]?.map((item, index) => (
                    <tr
                      key={index}
                      className='hover:bg-gray-100'
                    >
                      <td className='p-1 py-2 border-b whitespace-nowrap'>{item.time}</td>
                      <td className='p-1 py-2 border-b font-medium break-words'>{item.name}</td>
                      <td className='p-1 py-2 border-b whitespace-pre-line'>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 第一行第二列 - OpenAI GPT系列 */}
          <div className='border-r border-b p-0 flex flex-col'>
            <div className='flex justify-between items-center border-b p-2 bg-gray-50'>
              <Link href='https://chatgpt.com/' target='_blank' rel='noopener noreferrer'>
                <h3 className='font-bold text-lg flex items-center hover:underline'>
                  <span className='mr-2 flex items-center'>
                    <Image src='/openai.svg' alt='OpenAI Logo' width={20} height={20} className='mr-1' />
                  </span>
                  <span className='text-[#10A37F]'>OpenAI ChatGPT</span>
                </h3>
              </Link>
              <div className='flex items-center'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full hover:bg-gray-100 mr-1'
                  onClick={() => 
                    openTipDialog(
                      'OpenAI ChatGPT 使用提示', 
                      '• GPT-4o是当前最先进的多模态模型\n• 支持128K上下文窗口，特殊场景最高可达1M\n• 擅长编程、多语言翻译和创意写作\n• 最新模型支持实时搜索和插件集成\n• 提供完善的API文档和开发者工具'
                    )
                  }
                >
                  <Info className='h-4 w-4' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full hover:bg-gray-100'
                  onClick={() => openFullscreen(1, 'OpenAI ChatGPT')}
                >
                  <Maximize2 className='h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='custom-scrollbar flex-1 px-2 h-[calc(50vh-85px)] md:h-[calc(50vh-75px)]'>
              <table className='w-full text-sm table-fixed'>
                <colgroup>
                  <col className='w-1/4 min-w-[100px]' />
                  <col className='w-1/3 min-w-[120px]' />
                  <col className='w-5/12' />
                </colgroup>
                <tbody>
                  {gridData[1]?.map((item, index) => (
                    <tr key={index} className='hover:bg-gray-50 even:bg-gray-50/30'>
                      <td className='p-1 py-2 border-b whitespace-nowrap'>{item.time}</td>
                      <td className='p-1 py-2 border-b font-medium break-words'>{item.name}</td>
                      <td className='p-1 py-2 border-b'>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 第一行第三列 - Anthropic Claude系列 */}
          <div className='border-b p-0 flex flex-col'>
            <div className='flex justify-between items-center border-b p-2 bg-gray-50'>
              <Link href='https://claude.ai/' target='_blank' rel='noopener noreferrer'>
                <h3 className='font-bold text-lg flex items-center hover:underline'>
                  <span className='mr-2 flex items-center'>
                    <Image src='/anthropic.svg' alt='Anthropic Logo' width={20} height={20} className='mr-1' />
                  </span>
                  <span className='text-[#7B61FF]'>Anthropic Claude</span>
                </h3>
              </Link>
              <div className='flex items-center'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full hover:bg-gray-100 mr-1'
                  onClick={() => 
                    openTipDialog(
                      'Anthropic Claude 使用提示', 
                      '•  需要快速响应和低成本：选择Claude 3 Haiku或Claude 3.5 Haiku\n•  追求性价比和企业级应用：选择Claude 3 Sonnet、Claude 3.5 Sonnet或Claude 3.7 Sonnet\n•  需要顶级性能处理复杂任务：选择Claude 3 Opus'
                    )
                  }
                >
                  <Info className='h-4 w-4' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full hover:bg-gray-100'
                  onClick={() => openFullscreen(2, 'Anthropic Claude')}
                >
                  <Maximize2 className='h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='custom-scrollbar flex-1 px-2 h-[calc(50vh-85px)] md:h-[calc(50vh-75px)]'>
              <table className='w-full text-sm table-fixed'>
                <colgroup>
                  <col className='w-1/4 min-w-[100px]' />
                  <col className='w-1/3 min-w-[120px]' />
                  <col className='w-5/12' />
                </colgroup>
                <tbody>
                  {gridData[2]?.map((item, index) => (
                    <tr
                      key={index}
                      className='hover:bg-gray-50 even:bg-gray-50/30'
                    >
                      <td className='p-1 py-2 border-b whitespace-nowrap'>{item.time}</td>
                      <td className='p-1 py-2 border-b font-medium break-words'>{item.name}</td>
                      <td className='p-1 py-2 border-b'>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 第二行第一列 - xAI Grok系列 */}
          <div className='border-r p-0 flex flex-col'>
            <div className='flex justify-between items-center border-b p-2 bg-gray-50'>
              <Link href='https://grok.com/' target='_blank' rel='noopener noreferrer'>
                <h3 className='font-bold text-lg flex items-center hover:underline'>
                  <span className='mr-2 flex items-center'>
                    <Image src='/xai.svg' alt='xAI Logo' width={20} height={20} className='mr-1' />
                  </span>
                  <span className='text-[#000000]'>xAI Grok</span>
                </h3>
              </Link>
              <div className='flex items-center'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full hover:bg-gray-100'
                  onClick={() => openFullscreen(3, 'xAI Grok')}
                >
                  <Maximize2 className='h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='custom-scrollbar flex-1 px-2 h-[calc(50vh-85px)] md:h-[calc(50vh-75px)]'>
              <table className='w-full text-sm table-fixed'>
                <colgroup>
                  <col className='w-1/4 min-w-[100px]' />
                  <col className='w-1/3 min-w-[120px]' />
                  <col className='w-5/12' />
                </colgroup>
                <tbody>
                  {gridData[3]?.map((item, index) => (
                    <tr key={index} className='hover:bg-gray-50 even:bg-gray-50/30'>
                      <td className='p-1 py-2 border-b whitespace-nowrap'>{item.time}</td>
                      <td className='p-1 py-2 border-b font-medium break-words'>{item.name}</td>
                      <td className='p-1 py-2 border-b'>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 第二行第二列 - DeepSeek */}
          <div className='border-r p-0 flex flex-col'>
            <div className='flex justify-between items-center border-b p-2 bg-gray-50'>
              <Link href='https://chat.deepseek.com/' target='_blank' rel='noopener noreferrer'>
                <h3 className='font-bold text-lg flex items-center hover:underline'>
                  <span className='mr-2 flex items-center'>
                    <Image src='/deepseek-color.svg' alt='DeepSeek Logo' width={20} height={20} className='mr-1' />
                  </span>
                  <span className='text-[#4D6BFE]'>DeepSeek DeepSeek</span>
                </h3>
              </Link>
              <div className='flex items-center'>
               
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full hover:bg-gray-100'
                  onClick={() => openFullscreen(4, 'DeepSeek DeepSeek')}
                >
                  <Maximize2 className='h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='custom-scrollbar flex-1 px-2 h-[calc(50vh-85px)] md:h-[calc(50vh-75px)]'>
              <table className='w-full text-sm table-fixed'>
                <colgroup>
                  <col className='w-1/4 min-w-[100px]' />
                  <col className='w-1/3 min-w-[120px]' />
                  <col className='w-5/12' />
                </colgroup>
                <tbody>
                  {gridData[4]?.map((item, index) => (
                    <tr key={index} className='hover:bg-gray-50 even:bg-gray-50/30'>
                      <td className='p-1 py-2 border-b whitespace-nowrap'>{item.time}</td>
                      <td className='p-1 py-2 border-b font-medium break-words'>{item.name}</td>
                      <td className='p-1 py-2 border-b'>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 第二行第三列 - Meta LLaMA系列 */}
          <div className='p-0 flex flex-col'>
            <div className='flex justify-between items-center border-b p-2 bg-gray-50'>
              <h3 className='font-bold text-lg flex items-center'>
                <span className='mr-2 flex items-center'>
                  <Image src='/meta-color.svg' alt='Meta Logo' width={20} height={20} className='mr-1' />
                </span>
                <span className='text-[#0668E1]'>Meta LLaMA</span>
              </h3>
              <div className='flex items-center'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full hover:bg-gray-100 mr-1'
                  onClick={() => 
                    openTipDialog(
                      'Meta LLaMA 使用提示', 
                      '• LLaMA是Meta开发的开源大语言模型\n• 可以本地部署，无需依赖云服务\n• 支持微调和自定义模型训练\n• 最新版本LLaMA 3支持多语言和多模态输入\n• 广泛的社区支持和开发工具'
                    )
                  }
                >
                  <Info className='h-4 w-4' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full hover:bg-gray-100'
                  onClick={() => openFullscreen(5, 'Meta LLaMA')}
                >
                  <Maximize2 className='h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='custom-scrollbar flex-1 px-2 h-[calc(50vh-85px)] md:h-[calc(50vh-75px)]'>
              <table className='w-full text-sm table-fixed'>
                <colgroup>
                  <col className='w-1/4 min-w-[100px]' />
                  <col className='w-1/3 min-w-[120px]' />
                  <col className='w-5/12' />
                </colgroup>
                <tbody>
                  {gridData[5]?.map((item, index) => (
                    <tr key={index} className='hover:bg-gray-50 even:bg-gray-50/30'>
                      <td className='p-1 py-2 border-b whitespace-nowrap'>{item.time}</td>
                      <td className='p-1 py-2 border-b font-medium break-words'>{item.name}</td>
                      <td className='p-1 py-2 border-b'>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* 全屏模态窗口 */}
      <Dialog isOpen={dialogOpen} onClose={closeDialog} title={dialogTitle}>
        <div className="max-h-[80vh] overflow-y-auto pr-2">
          {activeGridIndex !== null && (
            <table className='w-full text-sm'>
              <colgroup>
                <col className='w-1/4' />
                <col className='w-1/3' />
                <col className='w-5/12' />
              </colgroup>
              <thead className="sticky top-0 bg-white z-10">
                <tr className='bg-gray-50'>
                  <th className='p-2 text-left font-medium border-b'>发布时间</th>
                  <th className='p-2 text-left font-medium border-b'>模型名称</th>
                  <th className='p-2 text-left font-medium border-b'>描述</th>
                </tr>
              </thead>
              <tbody>
                {gridData[activeGridIndex]?.map((item, index) => (
                  <tr key={index} className='hover:bg-gray-50 border-b even:bg-gray-50/30'>
                    <td className='p-2 py-3 whitespace-nowrap'>{item.time}</td>
                    <td className='p-2 py-3 font-medium break-words'>{item.name}</td>
                    <td className='p-2 py-3 whitespace-pre-line'>{item.description}</td>
                  </tr>
                ))}
                {gridData[activeGridIndex]?.length === 0 && (
                  <tr>
                    <td colSpan={3} className='p-4 text-center text-gray-500'>
                      暂无数据
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </Dialog>

      {/* 提示模态窗口 */}
      <Dialog isOpen={tipDialogOpen} onClose={closeTipDialog} title={tipTitle}>
        <div className="max-w-xl">
          <div className="whitespace-pre-line text-base">
            {tipContent}
          </div>
        </div>
      </Dialog>

      {/* 页脚 */}
      <div className='relative z-10 bg-white/90 backdrop-blur-sm min-h-[70px] md:h-[60px] flex items-center'>
        <Footer
          logo={<Image src='/window.svg' alt='LLMs Name Logo' width={24} height={24} />}
          brandName='LLMs Name'
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
          ]}
          mainLinks={[
            {
              href: 'https://docs.x.ai/docs/models?cluster=us-east-1#model-constraints',
              label: 'xAI Grok Models and Pricing',
            },
            {
              href: 'https://docs.anthropic.com/zh-CN/docs/about-claude/models/all-models',
              label: 'Anthropic Claude 模型列表',
            },
            {
              href: 'https://api-docs.deepseek.com/zh-cn/news/news1210',
              label: 'DeepSeek API 文档 - 新闻',
            },
          ]}
          legalLinks={[]}
          copyright={{
            text: `© ${new Date().getFullYear()} LLMs Name`,
            license: 'MIT License',
          }}
        />
      </div>
    </div>
  )
}

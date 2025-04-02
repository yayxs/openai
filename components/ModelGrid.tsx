'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Maximize2, Info, Lightbulb, Search as SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { GridData, ModelProvider } from '@/types'

interface ModelGridProps {
  gridData: GridData;
  modelProviders: ModelProvider[];
}

export default function ModelGrid({ gridData, modelProviders }: ModelGridProps) {
  const router = useRouter();
  
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

  // 添加一个处理行点击的函数
  const handleRowClick = (modelName: string) => {
    // 将模型名转换为URL参数格式 - 处理特殊格式的模型名称
    let modelParam = '';
    
    // 特殊情况处理
    if (modelName === 'OpenAI o3-mini') {
      modelParam = 'openai-o3-mini';
    } else if (modelName === 'Claude 3.7 Sonnet') {
      modelParam = 'claude-3.7-sonnet';
    } else {
      // 通用情况：转小写，替换空格和特殊字符为连字符
      modelParam = modelName.toLowerCase()
        .replace(/\s+/g, '-')       // 空格替换为连字符
        .replace(/\//g, '-')        // 斜杠替换为连字符
        .replace(/\./g, '-')        // 点号替换为连字符
        .replace(/[^\w\-]/g, '');   // 移除其他特殊字符
    }
    
    router.push(`/model/${modelParam}`);
  };

  return (
    <>
      {/* 内容区域 - 2行3列网格 */}
      <div className='w-full rounded-lg overflow-hidden grid grid-cols-3 grid-rows-2 h-full bg-white'>
        {/* 渲染所有模型网格 */}
        {modelProviders.map((provider, index) => (
          <div 
            key={index} 
            className={`${index < 3 ? 'border-b' : ''} ${index % 3 !== 2 ? 'border-r' : ''} p-0 flex flex-col`}
          >
            <div className='flex justify-between items-center border-b p-2 bg-gray-50'>
              {provider.url ? (
                <Link href={provider.url} target='_blank' rel='noopener noreferrer'>
                  <h3 className='font-bold text-lg flex items-center hover:underline'>
                    <span className='mr-2 flex items-center'>
                      <Image src={provider.logo} alt={`${provider.name} Logo`} width={20} height={20} className='mr-1' />
                    </span>
                    <span style={{ color: provider.color }}>{provider.name}</span>
                  </h3>
                </Link>
              ) : (
                <h3 className='font-bold text-lg flex items-center'>
                  <span className='mr-2 flex items-center'>
                    <Image src={provider.logo} alt={`${provider.name} Logo`} width={20} height={20} className='mr-1' />
                  </span>
                  <span style={{ color: provider.color }}>{provider.name}</span>
                </h3>
              )}
              <div className='flex items-center'>
                {provider.tipTitle && (
                  <Button
                    variant='ghost'
                    size='icon'
                    className='h-8 w-8 rounded-full hover:bg-gray-100 mr-1'
                    onClick={() => openTipDialog(provider.tipTitle, provider.tipContent)}
                  >
                    <Info className='h-4 w-4' />
                  </Button>
                )}
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full hover:bg-gray-100'
                  onClick={() => openFullscreen(index, provider.name)}
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
                  {gridData[index]?.map((item, i) => (
                    <tr
                      key={i}
                      className='hover:bg-gray-50 even:bg-gray-50/30 cursor-pointer'
                      onClick={() => handleRowClick(item.name)}
                    >
                      <td className='p-1 py-2 border-b whitespace-nowrap'>{item.time}</td>
                      <td className='p-1 py-2 border-b font-medium break-words'>
                        {item.name}
                        {item.isReasoning && <Lightbulb className='inline-block ml-1 h-4 w-4 text-amber-500' aria-label='推理模型' />}
                        {item.name === 'OpenAI o3-mini' && <SearchIcon className='inline-block ml-1 h-4 w-4 text-gray-500' aria-label='搜索' />}
                      </td>
                      <td className='p-1 py-2 border-b'>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

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
                  <tr 
                    key={index} 
                    className='hover:bg-gray-50 border-b even:bg-gray-50/30 cursor-pointer'
                    onClick={() => handleRowClick(item.name)}
                  >
                    <td className='p-2 py-3 whitespace-nowrap'>{item.time}</td>
                    <td className='p-2 py-3 font-medium break-words'>
                      {item.name}
                      {item.isReasoning && <Lightbulb className='inline-block ml-1 h-4 w-4 text-amber-500' aria-label='推理模型' />}
                      {item.name === 'OpenAI o3-mini' && <SearchIcon className='inline-block ml-1 h-4 w-4 text-gray-500' aria-label='搜索' />}
                    </td>
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
    </>
  );
} 
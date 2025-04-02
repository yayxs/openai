import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

// 获取模型名称的展示形式
const getDisplayName = (modelId: string) => {
  // 将URL参数转换为可读形式
  return modelId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// 检查MDX文件是否存在
function getMdxContent(modelId: string) {
  try {
    const filePath = path.join(process.cwd(), 'models', `${modelId}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    return fileContent
  } catch (error) {
    return null
  }
}

// 模型详情页面 - 服务器组件
export default function ModelDetailPage({ params }: { params: { modelId: string } }) {
  const modelId = params.modelId
  const modelName = getDisplayName(modelId)
  const mdxContent = getMdxContent(modelId)
  
  // 如果找不到MDX文件，显示默认内容
  if (!mdxContent) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* 顶部导航栏 */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center">
            <Link href="/" className="mr-4">
              <Button variant="ghost">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/" className="text-xl font-bold">LLMs Name</Link>
          </div>
        </div>
        
        {/* 错误内容 */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <h1 className="text-2xl font-bold mb-4">{modelName}</h1>
            <div className="text-gray-500">
              <p>未找到该模型的详细信息。我们正在努力更新所有模型的详情页面。</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="mr-4">
            <Button variant="ghost">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/" className="text-xl font-bold">LLMs Name</Link>
        </div>
      </div>
      
      {/* 模型内容 */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">          
          {/* 模型详情内容 - MDX渲染区域 */}
          <div className="p-6">
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={mdxContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '模型详情 | LLMs Name',
  description: '了解大型语言模型的详细信息、能力和限制',
}

export default function ModelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
} 
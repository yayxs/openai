import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import { Lightbulb } from 'lucide-react'

// 这个文件允许你为MDX内容提供自定义组件
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 自定义链接组件，使用Next.js的Link
    a: ({ href, children, ...props }) => {
      if (href && href.startsWith('/')) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        )
      }
      
      if (href && (href.startsWith('http') || href.startsWith('mailto:'))) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
          </a>
        )
      }
      
      return <a href={href} {...props}>{children}</a>
    },
    
    // 自定义图片组件，使用Next.js的Image
    img: (props) => {
      // 确保有alt属性
      const imageProps = { ...props } as ImageProps;
      if (!imageProps.alt) {
        imageProps.alt = '';
      }
      
      return (
        <Image
          sizes="100vw"
          
          style={{ width: '100%', height: 'auto' }}
          {...imageProps}
        />
      );
    },
    
    // 标题组件
    h1: ({ children, ...props }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4" {...props}>{children}</h1>
    ),
    
    h2: ({ children, ...props }) => (
      <h2 className="text-2xl font-semibold mt-6 mb-3" {...props}>{children}</h2>
    ),
    
    h3: ({ children, ...props }) => (
      <h3 className="text-xl font-medium mt-4 mb-2" {...props}>{children}</h3>
    ),
    
    // 段落
    p: ({ children, ...props }) => (
      <p className="my-3 text-gray-700" {...props}>{children}</p>
    ),
    
    // 列表
    ul: ({ children, ...props }) => (
      <ul className="list-disc pl-5 my-3" {...props}>{children}</ul>
    ),
    
    ol: ({ children, ...props }) => (
      <ol className="list-decimal pl-5 my-3" {...props}>{children}</ol>
    ),
    
    // 自定义组件
    ReasoningIcon: () => (
      <Lightbulb className="inline-block ml-1 h-4 w-4 text-amber-500" aria-label="推理模型" />
    ),
    
    // 合并用户提供的组件
    ...components,
  }
} 
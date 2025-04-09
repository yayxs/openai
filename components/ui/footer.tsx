interface FooterProps {
  logo: React.ReactNode
  brandName: string
  socialLinks: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  mainLinks: Array<{
    href: string
    label: string
  }>
  legalLinks: Array<{
    href: string
    label: string
  }>
  copyright: {
    text: string
    license?: string
  }
}

export function Footer({
  socialLinks,
  mainLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="py-6">
      <div className="px-4 container mx-auto">
        {/* 简化主链接区域 - 水平单行排列 */}
        {mainLinks.length > 0 && (
          <div className="overflow-x-auto pb-4">
            <ul className="flex space-x-6 min-w-max">
              {mainLinks.map((link, i) => (
                <li key={i} className="shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* 分隔线 */}
        <div className="border-t border-gray-100 my-4"></div>
        
        {/* 版权和社交链接 */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* 版权信息 */}
          <div className="text-sm text-gray-400 flex flex-col md:flex-row md:items-center md:space-x-2">
            <div>{copyright.text}</div>
            {copyright.license && <div className="hidden md:inline">•</div>}
            {copyright.license && <div>{copyright.license}</div>}
          </div>
          
          {/* 社交链接 */}
          {socialLinks.length > 0 && (
            <ul className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={link.label}
                    className="text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  )
}

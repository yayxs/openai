import { Button } from '@/components/ui/button'
import Link from 'next/link'

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

export function Footer({ logo, brandName, socialLinks, mainLinks, legalLinks, copyright }: FooterProps) {
  return (
    <footer className='py-2 w-full'>
      <div className='px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between'>
        <div className='flex items-center mb-2 md:mb-0'>
          <Link href='/' className='flex items-center gap-x-2' aria-label={brandName}>
            {logo}
            <span className='font-bold text-base'>{brandName}</span>
          </Link>
          
          <div className='ml-6 hidden md:flex'>
            <ul className='flex list-none space-x-6 flex-wrap'>
              {mainLinks.map((link, i) => (
                <li key={i} className='shrink-0 mb-1'>
                  <a
                    href={link.href}
                    className='text-sm text-primary underline-offset-4 hover:underline whitespace-nowrap'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 移动端显示的链接 */}
        <div className='md:hidden flex w-full mb-2 overflow-x-auto py-1 px-1'>
          <ul className='flex list-none space-x-5'>
            {mainLinks.map((link, i) => (
              <li key={i} className='shrink-0'>
                <a
                  href={link.href}
                  className='text-xs text-primary underline-offset-4 hover:underline whitespace-nowrap'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex items-center space-x-3'>
          <div className='text-xs text-muted-foreground hidden md:block'>
            <div>{copyright.text}</div>
          </div>

          <ul className='flex list-none space-x-2'>
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button variant='secondary' size='icon' className='h-8 w-8 rounded-full' asChild>
                  <a href={link.href} target='_blank' aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

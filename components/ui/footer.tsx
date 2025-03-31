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
      <div className='px-4 lg:px-6 flex items-center justify-between'>
        <div className='flex items-center'>
          <Link href='/' className='flex items-center gap-x-2' aria-label={brandName}>
            {logo}
            <span className='font-bold text-base'>{brandName}</span>
          </Link>
          
          <div className='ml-4 flex'>
            <ul className='flex list-none space-x-2'>
              {mainLinks.map((link, i) => (
                <li key={i} className='shrink-0'>
                  <a
                    href={link.href}
                    className='text-base text-primary underline-offset-4 hover:underline'
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

        <div className='flex items-center space-x-4'>
          {/* <div className='text-base text-muted-foreground'>
            <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
          </div> */}

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

import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { Button } from './button'

export interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  className?: string
}

export function Dialog({ isOpen, onClose, title, children, className }: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node) && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)

    // 打开时禁止滚动
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      <div
        ref={dialogRef}
        className={cn('bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] flex flex-col', className)}
      >
        <div className='flex items-center justify-between p-3 border-b bg-gray-50'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <Button variant='ghost' size='icon' onClick={onClose} className='h-8 w-8 rounded-full hover:bg-gray-200'>
            <X className='h-4 w-4' />
          </Button>
        </div>
        <div className='p-4 overflow-auto flex-1 scroll-auto-hide'>{children}</div>
      </div>
    </div>,
    document.body
  )
}

import { cn } from '@/lib/utils';
import React from 'react'

interface IconContainerProps {
  children: React.ReactNode;
  className?: string;
}

const IconContainer = ({ children, className }: IconContainerProps) => {
  return (
    <div className={cn('w-8 h-8 [&_svg]:size-4 flex items-center justify-center rounded-lg bg-neutral-25 outline outline-1 outline-neutral-100 -outline-offset-1 text-zinc-800', className)}>
      {children}
    </div>
  )
}

export default IconContainer
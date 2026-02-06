import React, { FC } from 'react'
import { cn } from '@/lib/utils'
interface ComingSoonBadgeProps {
  className?: string
}

const ComingSoonBadge: FC<ComingSoonBadgeProps> = ({ className }) => {
  return (
    <div className={cn('bg-zinc-100 text-zinc-600 px-1.5 py-0.5 rounded-md text-caption-s', className)}>
      <span>Coming soon</span>
    </div>
  )
}

export default ComingSoonBadge
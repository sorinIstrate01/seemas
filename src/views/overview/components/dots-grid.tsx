import { cn } from '@/lib/utils'
import React, { FC } from 'react'

export interface DotsGridProps {
  className?: string
}

const DotsGrid: FC<DotsGridProps> = ({
  className = '',
}) => {
  return (
    <div className={cn('w-[156px] relative', className)}>
      <svg width="156" height="40" viewBox="0 0 156 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.4">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#4680EC" />
          <circle cx="1.5" cy="13.833" r="1.5" fill="#4680EC" />
          <circle cx="1.5" cy="26.167" r="1.5" fill="#4680EC" />
          <circle cx="1.5" cy="38.5" r="1.5" fill="#4680EC" />
          <circle cx="14.5" cy="1.5" r="1.5" fill="#4680EC" />
          <circle cx="14.5" cy="13.833" r="1.5" fill="#4680EC" />
          <circle cx="14.5" cy="26.167" r="1.5" fill="#4680EC" />
          <circle cx="14.5" cy="38.5" r="1.5" fill="#4680EC" />
          <circle cx="27.5" cy="1.5" r="1.5" fill="#4680EC" />
          <circle cx="27.5" cy="13.833" r="1.5" fill="#4680EC" />
          <circle cx="27.5" cy="26.167" r="1.5" fill="#4680EC" />
          <circle cx="27.5" cy="38.5" r="1.5" fill="#4680EC" />
          <circle cx="40.5" cy="1.5" r="1.5" fill="#4680EC" />
          <circle cx="40.5" cy="13.833" r="1.5" fill="#4680EC" />
          <circle cx="40.5" cy="26.167" r="1.5" fill="#4680EC" />
          <circle cx="40.5" cy="38.5" r="1.5" fill="#4680EC" />
          <circle cx="53.5" cy="1.5" r="1.5" fill="#4680EC" />
          <circle cx="53.5" cy="13.833" r="1.5" fill="#4680EC" />
          <circle cx="53.5" cy="26.167" r="1.5" fill="#4680EC" />
          <circle cx="53.5" cy="38.5" r="1.5" fill="#4680EC" />
          <circle cx="66.5" cy="1.5" r="1.5" fill="#4680EC" />
          <circle cx="66.5" cy="13.833" r="1.5" fill="#4680EC" />
          <circle cx="66.5" cy="26.167" r="1.5" fill="#4680EC" />
          <circle cx="66.5" cy="38.5" r="1.5" fill="#4680EC" />
          <circle cx="79.5" cy="1.5" r="1.5" fill="#4680EC" />
          <circle cx="79.5" cy="13.833" r="1.5" fill="#4680EC" />
          <circle cx="79.5" cy="26.167" r="1.5" fill="#4680EC" />
          <circle cx="79.5" cy="38.5" r="1.5" fill="#4680EC" />
          <circle cx="92.5" cy="1.5" r="1.5" fill="#4680EC" />
          <circle cx="92.5" cy="13.833" r="1.5" fill="#4680EC" />
          <circle cx="92.5" cy="26.167" r="1.5" fill="#4680EC" />
          <circle cx="92.5" cy="38.5" r="1.5" fill="#4680EC" />
          <circle cx="105.5" cy="1.5" r="1.5" fill="#4680EC" />
          <circle cx="105.5" cy="13.833" r="1.5" fill="#4680EC" />
          <circle cx="105.5" cy="26.167" r="1.5" fill="#4680EC" />
          <circle cx="105.5" cy="38.5" r="1.5" fill="#4680EC" />
          <circle cx="118.5" cy="1.5" r="1.5" fill="#4680EC" />
          <circle cx="118.5" cy="13.833" r="1.5" fill="#4680EC" />
          <circle cx="118.5" cy="26.167" r="1.5" fill="#4680EC" />
          <circle cx="118.5" cy="38.5" r="1.5" fill="#4680EC" />
          <circle cx="131.5" cy="1.5" r="1.5" fill="#4680EC" />
          <circle cx="131.5" cy="13.833" r="1.5" fill="#4680EC" />
          <circle cx="131.5" cy="26.167" r="1.5" fill="#4680EC" />
          <circle cx="131.5" cy="38.5" r="1.5" fill="#4680EC" />
          <circle cx="144.5" cy="1.5" r="1.5" fill="#4680EC" />
          <circle cx="144.5" cy="13.833" r="1.5" fill="#4680EC" />
          <circle cx="144.5" cy="26.167" r="1.5" fill="#4680EC" />
          <circle cx="144.5" cy="38.5" r="1.5" fill="#4680EC" />
        </g>
      </svg>
      <div className='absolute inset-0' style={{ background: 'linear-gradient(90deg, rgba(250, 250, 250, 0.00) 0%, #FAFAFA 100%)' }} />
    </div>
  )
}

export default DotsGrid
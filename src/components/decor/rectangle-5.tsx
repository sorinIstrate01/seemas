import { cn } from '@/lib/utils';
import React, { FC } from 'react'

interface Rectangle5Props {
  className?: string;
}

const Rectangle5: FC<Rectangle5Props> = ({ className }) => {
  return (
    <div className={cn('absolute bg-rectangle-5 w-[296px] h-[192px] right-[-130.5px] bottom-[-103.5px] blur-[100px] xl:blur-[75px] opacity-20', className)} />
  )
}

export default Rectangle5

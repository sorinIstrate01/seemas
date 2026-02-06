import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

export interface InfoCardProps {
  icon: ReactNode
  title: string
  description?: string
  className?: string
}

const InfoCard: FC<InfoCardProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-xl p-4 flex flex-col gap-3 outline outline-1 outline-zinc-100 -outline-offset-1',
        className
      )}
    >
      <div className='flex gap-3 items-center'>
        <div className="text-zinc-900 [&_svg]:size-6 [&_svg]:stroke-[1.2]">
          {icon}
        </div>
        <h5 className="text-subtitle-s text-zinc-800">
          {title}
        </h5>
      </div>
      {description && (
        <p className="text-body-s text-zinc-700">
          {description}
        </p>
      )}
    </div>
  )
}

export default InfoCard

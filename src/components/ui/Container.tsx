import { cn } from '../../utils/cn'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizes = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
}

export default function Container({
  children,
  className,
  size = 'lg',
}: ContainerProps) {
  return (
    <div
      className={cn(
        sizes[size],
        'mx-auto px-6 sm:px-8 lg:px-12',
        className,
      )}
    >
      {children}
    </div>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { cn } from '../../utils/cn'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  once?: boolean
}

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-8% 0px' })
  const reduced = useReducedMotion()

  const getOffset = () => {
    if (reduced) return { x: 0, y: 0 }
    const d = 28
    return {
      x: direction === 'left' ? d : direction === 'right' ? -d : 0,
      y: direction === 'up' ? d : direction === 'down' ? -d : 0,
    }
  }

  const { x, y } = getOffset()

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration: reduced ? 0.2 : 0.7,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, filter: reduced ? 'none' : 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: reduced ? 'none' : 'blur(6px)' }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Direction = 'left' | 'right' | 'top' | 'bottom'

interface FlyInTextProps {
  direction?: Direction
  children: ReactNode
  className?: string
  duration?: number
  [key: string]: any 
}

export default function FlyInText({
  direction = 'left',
  children,
  className = '',
  duration = 0.8,
  ...otherProps
}: FlyInTextProps) {
  const initialVariants: Record<Direction, any> = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    top: { y: -50, opacity: 0 },
    bottom: { y: 50, opacity: 0 },
  }

  return (
    <motion.div
      className={className}
      initial={initialVariants[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration, ease: 'easeInOut' }}
      {...otherProps}
    >
      {children}
    </motion.div>
  )
}

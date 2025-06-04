'use client'

import { motion, MotionProps, Variants } from 'framer-motion'
import { ElementType, ReactNode, ComponentPropsWithoutRef } from 'react'

type MotionWrapperProps<T extends ElementType> = {
  children: ReactNode
  direction?: 'fade' | 'left' | 'right' | 'up' | 'down' | 'scale'
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
  className?: string
  as?: T
} & MotionProps & ComponentPropsWithoutRef<T>

export const MotionWrapper = <T extends ElementType = 'div'>({
  children,
  direction = 'fade',
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.1,
  className,
  as = 'div' as T,
  ...props
}: MotionWrapperProps<T>) => {
  const MotionElement = motion(as)

  const variants: Variants = {
    hidden: {
      ...(direction === 'fade' && { opacity: 0 }),
      ...(direction === 'left' && { x: -35, opacity: 0 }),
      ...(direction === 'right' && { x: 35, opacity: 0 }),
      ...(direction === 'up' && { y: 35, opacity: 0 }),
      ...(direction === 'down' && { y: -35, opacity: 0 }),
      ...(direction === 'scale' && { scale: 0.93, opacity: 0 }),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        delay,
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <MotionElement
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      {...props}
    >
      {children}
    </MotionElement>
  )
}

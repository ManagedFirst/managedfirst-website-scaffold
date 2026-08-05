'use client'
import { useInView } from '@/hooks/useInView'
import { CSSProperties } from 'react'

interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const directionClass: Record<NonNullable<AnimateInProps['direction']>, string> = {
  up:    'animate-fade-up',
  left:  'animate-slide-left',
  right: 'animate-slide-right',
  fade:  'animate-fade-in',
}

export function AnimateIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  as: Tag = 'div',
}: AnimateInProps) {
  const { ref, isInView } = useInView()

  const style: CSSProperties = {
    animationDelay: `${delay}ms`,
    animationFillMode: 'both',
  }

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`${isInView ? directionClass[direction] : 'opacity-0'} ${className}`}
      style={isInView ? style : undefined}
    >
      {children}
    </Tag>
  )
}

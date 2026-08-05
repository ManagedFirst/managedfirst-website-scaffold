import Link from 'next/link'
import { ReactNode } from 'react'

export interface ButtonProps {
  variant?: 'primary-light' | 'primary-dark' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  disabled?: boolean
  children: ReactNode
  className?: string
  icon?: ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const base = 'inline-flex items-center justify-center gap-2 font-display font-bold rounded-brand transition-all duration-150 active:scale-95 whitespace-nowrap select-none'

const variants = {
  'primary-light': 'bg-red text-white hover:brightness-110 disabled:bg-disabled-bg disabled:text-muted disabled:cursor-not-allowed',
  'primary-dark':  'bg-amber text-charcoal hover:brightness-110 disabled:bg-disabled-bg disabled:text-muted disabled:cursor-not-allowed',
  'secondary':     'bg-transparent border-[1.5px] border-blue text-blue hover:bg-blue hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
  'ghost':         'bg-white/10 border border-white/30 text-white hover:bg-white/[.18] disabled:opacity-50 disabled:cursor-not-allowed',
}

const sizes = {
  sm:  'text-[13px] px-4 py-2',
  md:  'text-cta   px-space-5 py-space-3',
  lg:  'text-[15px] px-8 py-3.5',
}

export function Button({
  variant = 'primary-light',
  size = 'md',
  href,
  onClick,
  disabled,
  children,
  className = '',
  icon,
  type = 'button',
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  )
}

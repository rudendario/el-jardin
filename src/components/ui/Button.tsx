import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  to?: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-copper text-white border-copper hover:bg-copper-light hover:border-copper-light shadow-soft hover:shadow-hover',
  secondary:
    'bg-transparent text-charcoal border-charcoal/20 hover:border-copper hover:text-copper',
  outline:
    'bg-transparent text-copper border-copper hover:bg-copper hover:text-white',
  ghost:
    'bg-transparent text-charcoal border-transparent hover:text-copper underline-offset-4',
}

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-sm tracking-wide',
  md: 'px-7 py-3.5 text-sm tracking-wide',
  lg: 'px-9 py-4 text-base tracking-wide',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full border font-sans font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      to,
      className,
      children,
      onClick,
      type = 'button',
      disabled,
      'aria-label': ariaLabel,
    },
    ref,
  ) => {
    const classes = cn(
      base,
      variants[variant],
      sizes[size],
      disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
      className,
    )

    if (to) {
      return (
        <Link to={to} className={classes} aria-label={ariaLabel}>
          {children}
        </Link>
      )
    }

    if (href) {
      return (
        <a href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
export default Button

import { cn } from '@/utils/helpers'
import { cva, VariantProps } from 'class-variance-authority'

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl',
      h2: 'scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-lg font-semibold tracking-tight',
      small: 'text-sm font-medium leading-none',
      lead: 'text-lg text-muted-foreground',
      large: 'text-lg font-semibold',
      sub1: 'text-sm text-muted-foreground',
      body1: 'leading-7 [&:not(:first-child)]:mt-6'
    }
  },
  defaultVariants: {
    variant: 'body1'
  }
})

export interface TypographyProps extends VariantProps<typeof typographyVariants> {
  children: React.ReactNode
  className?: string
  tag?: keyof JSX.IntrinsicElements
}

const Typography = ({
  children,
  variant,
  className = '',
  tag: Tag = 'div',
  ...props
}: TypographyProps) => (
  <Tag className={cn(typographyVariants({ variant, className }))} {...props}>
    {children}
  </Tag>
)

export { Typography }

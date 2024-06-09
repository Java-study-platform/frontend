import { cn } from '@/utils/helpers'

interface FooterProps extends React.ComponentPropsWithoutRef<'footer'> {}

export const Footer = ({ className, ...props }: FooterProps) => (
  <footer
    className={cn('container flex h-[40px] items-center justify-center border-t', className)}
    {...props}
  >
    Footer
  </footer>
)

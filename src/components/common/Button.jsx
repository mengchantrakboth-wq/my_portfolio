import { cx } from '@/utils/helpers'

const variants = {
  primary:
    'bg-mint text-ink hover:bg-mint-dim border border-mint',
  ghost:
    'bg-transparent text-text border border-border hover:border-mint hover:text-mint',
}

export default function Button({
  children,
  variant = 'primary',
  as: Tag = 'button',
  className,
  ...props
}) {
  return (
    <Tag
      className={cx(
        'inline-flex items-center gap-2 rounded-sm px-5 py-2.5 font-mono text-sm transition-colors',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

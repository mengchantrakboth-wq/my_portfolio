import { cx } from '@/utils/helpers'

export default function Container({ children, className, as: Tag = 'div' }) {
  return (
    <Tag className={cx('mx-auto w-full max-w-6xl px-6 md:px-10', className)}>
      {children}
    </Tag>
  )
}

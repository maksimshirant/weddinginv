import { type ReactNode } from 'react'

type InviteCardProps = {
  children: ReactNode
  variant?: 'dark' | 'light'
  className?: string
  tornTop?: boolean
  tornBottom?: boolean
}

const tornTopLight = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 42' preserveAspectRatio='none'%3E%3Cpath fill='%23f4efe8' d='M0 26c34 0 51-19 85-19 40 0 49 19 89 19 32 0 43-10 75-10 43 0 56 18 99 18 41 0 52-17 94-17 45 0 62 21 110 21 37 0 48-12 85-12 38 0 53 14 91 14 39 0 56-18 95-18 42 0 56 15 97 15 38 0 57-14 95-14 33 0 48 8 85 8v17H0Z'/%3E%3C/svg%3E")`
const tornBottomLight = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 42' preserveAspectRatio='none'%3E%3Cpath fill='%23f4efe8' d='M0 18c38 0 50 12 88 12 42 0 58-18 100-18 40 0 53 17 93 17 40 0 55-14 95-14 40 0 55 11 96 11 48 0 62-21 111-21 42 0 55 17 97 17 32 0 42-10 74-10 40 0 54 16 95 16 39 0 53-12 92-12 31 0 42 8 59 8v18H0Z'/%3E%3C/svg%3E")`
const tornTopDark = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 42' preserveAspectRatio='none'%3E%3Cpath fill='%23710f23' d='M0 26c34 0 51-19 85-19 40 0 49 19 89 19 32 0 43-10 75-10 43 0 56 18 99 18 41 0 52-17 94-17 45 0 62 21 110 21 37 0 48-12 85-12 38 0 53 14 91 14 39 0 56-18 95-18 42 0 56 15 97 15 38 0 57-14 95-14 33 0 48 8 85 8v17H0Z'/%3E%3C/svg%3E")`
const tornBottomDark = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 42' preserveAspectRatio='none'%3E%3Cpath fill='%23710f23' d='M0 18c38 0 50 12 88 12 42 0 58-18 100-18 40 0 53 17 93 17 40 0 55-14 95-14 40 0 55 11 96 11 48 0 62-21 111-21 42 0 55 17 97 17 32 0 42-10 74-10 40 0 54 16 95 16 39 0 53-12 92-12 31 0 42 8 59 8v18H0Z'/%3E%3C/svg%3E")`

export function InviteCard({
  children,
  variant = 'light',
  className = '',
  tornTop = true,
  tornBottom = true,
}: InviteCardProps) {
  const variantClasses =
    variant === 'light'
      ? 'bg-[#f4efe8] text-[#201d1a] shadow-[0_20px_44px_rgba(32,22,18,0.14)]'
      : 'bg-[#710f23] text-[#f7f3ee] shadow-[0_22px_48px_rgba(20,11,11,0.28)]'

  const topImage = variant === 'light' ? tornTopLight : tornTopDark
  const bottomImage = variant === 'light' ? tornBottomLight : tornBottomDark

  return (
    <section
      className={[
        'relative w-full overflow-hidden',
        variantClasses,
        className,
      ].join(' ')}
    >
      {tornTop ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-repeat-x bg-[length:100%_100%]"
          style={{ backgroundImage: topImage }}
        />
      ) : null}
      {tornBottom ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-repeat-x bg-[length:100%_100%]"
          style={{ backgroundImage: bottomImage }}
        />
      ) : null}
      {children}
    </section>
  )
}

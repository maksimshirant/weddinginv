type PlaceholderImageProps = {
  label: string
  className?: string
  tone?: 'dark' | 'light'
}

export function PlaceholderImage({
  label,
  className = '',
  tone = 'dark',
}: PlaceholderImageProps) {
  const toneClasses =
    tone === 'light'
      ? 'bg-gradient-to-br from-[#d4ccc3] via-[#ece6de] to-[#b8aba0] text-[#241d19]/70'
      : 'bg-gradient-to-br from-[#3d2529] via-[#75645b] to-[#181111] text-white/74'

  return (
    <div
      className={[
        'relative flex items-center justify-center overflow-hidden',
        'px-5 py-6 text-center text-[10px] uppercase tracking-[0.22em]',
        toneClasses,
        className,
      ].join(' ')}
    >
      <div className={tone === 'light' ? 'absolute inset-0 bg-black/8' : 'absolute inset-0 bg-black/28'} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.2),transparent_40%)]" />
      <span className="relative z-10 max-w-[16rem] leading-[1.6]">{label}</span>
    </div>
  )
}

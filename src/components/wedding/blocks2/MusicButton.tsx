type MusicButtonProps = {
  isPlaying: boolean
  onToggle: () => void
  className?: string
}

export function MusicButton({
  isPlaying,
  onToggle,
  className = '',
}: MusicButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={[
        'inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/14 px-3 py-2 text-left text-white shadow-[0_14px_34px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-white/18',
        className,
      ].join(' ')}
      aria-label={isPlaying ? 'Остановить музыку' : 'Включить музыку'}
      title={isPlaying ? 'Остановить музыку' : 'Включить музыку'}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#1f1d1b]">
        {isPlaying ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-[0.22em] text-white/60">
          Музыка
        </span>
        <span className="block truncate text-xs font-light tracking-[0.04em]">
          {isPlaying ? 'Музыка включена' : 'Музыка наших сердец'}
        </span>
      </span>
    </button>
  )
}

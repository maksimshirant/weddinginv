import { getPublicAssetUrl } from '../shared/getPublicAssetUrl'

type EnvelopeSectionProps = {
  isOpening: boolean
  onOpen: () => void
}

export function EnvelopeSection({
  isOpening,
  onOpen,
}: EnvelopeSectionProps) {
  const envelopeImageSrc = getPublicAssetUrl('конверт.png')

  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8">
      <div className="w-full max-w-[280px] text-center">
        <button
          type="button"
          onClick={onOpen}
          className={[
            'group mx-auto block transition duration-300',
            isOpening ? 'scale-95 opacity-0' : 'scale-100 opacity-100 hover:scale-[1.02] active:scale-[0.98]',
          ].join(' ')}
          aria-label="Открыть приглашение"
        >
          <div className="relative mx-auto h-[108px] w-[150px] overflow-hidden rounded-[2px]">
            <img
              src={envelopeImageSrc}
              alt=""
              className="h-full w-full object-cover object-[center_52%] [filter:sepia(0.2)_saturate(0.82)_hue-rotate(-10deg)_brightness(0.98)] scale-[1.24]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#7a1023]/10 mix-blend-multiply" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_25%,rgba(20,13,16,0.08))]" />
          </div>
        </button>

        <p className="mt-6 font-serifDisplay text-[30px] font-light tracking-[0.08em] text-[#f5ede3]">
          Приглашение
        </p>
        <p className="mt-2 text-[13px] tracking-[0.1em] text-[#f5ede3]">
          Нажмите чтобы открыть
        </p>
      </div>
    </section>
  )
}

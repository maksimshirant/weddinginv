import { Reveal } from '../shared/Reveal'
import { PlaceholderImage } from '../shared/PlaceholderImage'
import { InviteCard } from '../shared/InviteCard'

export function VenueSection() {
  return (
    <Reveal>
      <InviteCard variant="light" className="px-8 py-12 sm:px-10">
        <div className="text-center">
          <h2 className="font-serifDisplay text-[42px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#201d1a] sm:text-[48px]">
            МЕСТО
            <br />
            ПРОВЕДЕНИЯ
          </h2>

          <div className="mt-8 space-y-10">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#201d1a]/50">
                Церемония
              </p>
              <p className="mx-auto max-w-[340px] text-[15px] font-light leading-[1.65] text-[#201d1a]/80">
                ЗАГС который говорила Софа, но я забыл
                <br />
                Соответственно адрес
              </p>
              <PlaceholderImage
                label="[Тут будет фото загса]"
                tone="light"
                className="aspect-[16/10] rounded-[2px]"
              />
              <a
                href="https://maps.google.com?q=Москва+проспект+Мира+25"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-[#201d1a]/28 bg-transparent px-6 text-[12px] uppercase tracking-[0.2em] text-[#201d1a] transition hover:bg-[#201d1a] hover:text-[#f6f0e7]"
              >
                Открыть карту
              </a>
            </div>
          </div>
        </div>
      </InviteCard>
    </Reveal>
  )
}

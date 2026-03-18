import { wishes } from '../data'
import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'
import { PlaceholderImage } from '../shared/PlaceholderImage'

export function WishesSection() {
  return (
    <Reveal>
      <InviteCard variant="light" className="px-8 py-12 sm:px-10">
        <div className="text-center">
          <h2 className="font-serifDisplay text-[42px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#201d1a] sm:text-[48px]">
            ДЕТАЛИ
          </h2>

          <div className="mt-8 space-y-8">
            {wishes.map((wish, index) => (
              <div
                key={wish.title}
                className="grid grid-cols-[48px_1fr] gap-4 text-left"
              >
                <div className="font-serifDisplay text-[46px] leading-none text-[#201d1a]/88">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-serifDisplay text-[26px] font-light uppercase tracking-[0.08em] text-[#201d1a]">
                    {wish.title}
                  </h3>
                  <p className="mt-3 max-w-[360px] text-[14px] leading-[1.75] text-[#201d1a]/74">
                    {wish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <PlaceholderImage
              label="[ДЕКОР: графический арт-блок]"
              tone="light"
              className="aspect-[16/9] rounded-[2px]"
            />
          </div>
        </div>
      </InviteCard>
    </Reveal>
  )
}

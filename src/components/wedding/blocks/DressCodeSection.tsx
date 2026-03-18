import { InviteCard } from '../shared/InviteCard'
import { Reveal } from '../shared/Reveal'
import { getPublicAssetUrl } from '../shared/getPublicAssetUrl'

export function DressCodeSection() {
  const paletteImageSrc = getPublicAssetUrl('палитра.png')

  return (
    <Reveal>
      <InviteCard variant="light" className="px-8 py-12 sm:px-10">
        <div className="text-center">
          <h2 className="font-serifDisplay text-[42px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#201d1a] sm:text-[48px]">
            ДРЕСС-КОД
          </h2>

          <p className="mx-auto mt-5 max-w-[360px] text-[13px] uppercase leading-[1.85] tracking-[0.08em] text-[#201d1a]/72">
            Нам будет очень приятно, если вы учтёте
            <br />
            наши пожелания и при выборе одежды
            <br />
            предпочтёте вечерние наряды в
            <br />
            представленной ниже гамме.
          </p>

          <div className="mt-10 flex justify-center px-2">
            <img
              src={paletteImageSrc}
              alt="Палитра дресс-кода"
              className="w-full max-w-[460px] object-contain"
            />
          </div>
        </div>
      </InviteCard>
    </Reveal>
  )
}

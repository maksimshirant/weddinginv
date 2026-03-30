import { InviteCard } from '../shared/InviteCard'
import { Reveal } from '../shared/Reveal'
import { getPublicAssetUrl } from '../shared/getPublicAssetUrl'

const dressPhotoPaths = [
  'dress/photo_2026-03-30%2014.20.11.jpeg',
  'dress/photo_2026-03-30%2014.20.18.jpeg',
  'dress/photo_2026-03-30%2014.20.20.jpeg',
  'dress/photo_2026-03-30%2014.20.22.jpeg',
  'dress/photo_2026-03-30%2014.20.24.jpeg',
  'dress/photo_2026-03-30%2014.20.29.jpeg',
] as const

export function DressCodeSection() {
  const dressPhotos = dressPhotoPaths.map((path) => getPublicAssetUrl(path))

  return (
    <Reveal>
      <InviteCard
        variant="light"
        className="!bg-[rgba(241,232,209,0.92)] border border-[#b79b68]/26 px-8 py-12 shadow-[0_20px_44px_rgba(31,24,18,0.16)] sm:px-10"
        tornTop={false}
        tornBottom={false}
      >
        <div className="text-center">
          <h2 className="font-serifDisplay text-[42px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#281d17] sm:text-[48px]">
            ДРЕСС-КОД
          </h2>

          <p className="mx-auto mt-5 max-w-[360px] text-[13px] uppercase leading-[1.85] tracking-[0.08em] text-[#281d17]/74">
            Настроение второго дня:
            <br />
            русская свадьба девяностых,
            <br />
            чуть нарядно, чуть дерзко,
            <br />
            и обязательно с характером.
          </p>

          <div className="mt-10 flex justify-center px-2">
            <div className="grid w-full max-w-[560px] grid-cols-2 gap-2 sm:grid-cols-3">
              {dressPhotos.map((src, index) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-[2px]"
                >
                  <img
                    src={src}
                    alt={`Референс образа ${index + 1}`}
                    className="aspect-square w-full rounded-[2px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="mx-auto mt-5 max-w-[360px] text-[13px] leading-[1.8] text-[#281d17]/68">
            Подойдут жакеты, платья с блеском, рубашки,
            костюмы и всё, что выглядит как праздник с плёночной камеры.
          </p>
        </div>
      </InviteCard>
    </Reveal>
  )
}

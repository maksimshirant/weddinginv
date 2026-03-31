import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'
import { getPublicAssetUrl } from '../shared/getPublicAssetUrl'

const secondDayVenueAddress =
  'Волгоградская обл., Городищенский р-н, Ерзовское городское поселение, СНТ Титан, 762'
const secondDayVenueMapQuery = encodeURIComponent(secondDayVenueAddress)
const secondDayVenueMapHref = `https://yandex.ru/maps/?text=${secondDayVenueMapQuery}`

export function VenueSection() {
  const secondDayVenueImageSrc = getPublicAssetUrl('день2место.png')

  return (
    <Reveal>
      <InviteCard
        variant="light"
        className="!bg-[rgba(243,233,211,0.9)] border border-[#b79b68]/26 px-8 py-12 shadow-[0_20px_44px_rgba(31,24,18,0.16)] sm:px-10"
        tornTop={false}
        tornBottom={false}
      >
        <div className="text-center">
          <h2 className="font-serifDisplay text-[42px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#281d17] sm:text-[48px]">
            МЕСТО
            <br />
            ЗАСТОЛЬЯ
          </h2>

          <div className="mt-8 space-y-10">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#281d17]/50">
                Место застолья
              </p>
              <p className="mx-auto max-w-[360px] text-pretty text-[15px] font-light leading-[1.65] text-[#281d17]/80">
                {secondDayVenueAddress}
              </p>
              <div className="aspect-[853/960] overflow-hidden rounded-[2px]">
                <img
                  src={secondDayVenueImageSrc}
                  alt="Место проведения второго дня"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <a
                href={secondDayVenueMapHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-[#281d17]/28 bg-transparent px-6 text-[12px] uppercase tracking-[0.2em] text-[#281d17] transition hover:bg-[#281d17] hover:text-[#f6f0e7]"
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

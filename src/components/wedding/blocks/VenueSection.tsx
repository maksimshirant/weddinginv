import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'
import { getPublicAssetUrl } from '../shared/getPublicAssetUrl'

export function VenueSection() {
  const venueImageSrc = getPublicAssetUrl('place.jpg')

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
                Отдел ЗАГС администрации Советского района Волгограда
                <br />
                Университетский проспект, д. 64
              </p>
              <div className="aspect-[853/960] overflow-hidden rounded-[2px]">
                <img
                  src={venueImageSrc}
                  alt="Место проведения церемонии"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <a
                href="https://yandex.ru/maps/?text=%D0%9E%D1%82%D0%B4%D0%B5%D0%BB%20%D0%97%D0%90%D0%93%D0%A1%20%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8%20%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D0%B0%2C%20%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C%20%D0%B4.%2064"
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

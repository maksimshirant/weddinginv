import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'
import { PlaceholderImage } from '../shared/PlaceholderImage'

export function VenueSection() {
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
            ПЛЯСОК
          </h2>

          <div className="mt-8 space-y-10">
            <div className="space-y-4 rounded-[2px] border border-[#7f1730]/12 bg-[rgba(255,250,241,0.54)] px-5 py-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#7f1730]/68">
                Где будем танцевать
              </p>
              <p className="mx-auto max-w-[340px] text-[15px] font-light leading-[1.65] text-[#281d17]/82">
                Здесь будет точная локация второго дня:
                <br />
                зал, двор или веранда с настоящим настроением свадьбы девяностых.
              </p>
              <PlaceholderImage
                label="[Фото площадки для банкета 90-х скоро появится]"
                tone="light"
                className="aspect-[16/10] rounded-[2px]"
              />
              <button
                type="button"
                disabled
                className="inline-flex min-h-[50px] w-full cursor-default items-center justify-center rounded-full border border-[#710f23] bg-[#710f23] px-6 text-[12px] uppercase tracking-[0.2em] text-[#f7f1e8] opacity-100"
              >
                Скоро добавим точку сбора
              </button>
            </div>
          </div>
        </div>
      </InviteCard>
    </Reveal>
  )
}

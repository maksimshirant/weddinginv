import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'
import { getPublicAssetUrl } from '../shared/getPublicAssetUrl'

const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'] as const
const mayGrid = [
  null, null, null, 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31,
] as const

export function HeroSection() {
  const randomPhotoSrc = getPublicAssetUrl('block2/рандом.jpg')

  return (
    <>
      <Reveal>
        <InviteCard
          variant="dark"
          className="min-h-[760px] border border-[#e8d3a3]/18 bg-transparent shadow-[0_20px_44px_rgba(8,5,6,0.16)]"
          tornTop={false}
          tornBottom={false}
        >
          <div className="relative min-h-[760px]">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,10,12,0.18),rgba(18,10,12,0.08)_24%,rgba(18,10,12,0.22)_58%,rgba(18,10,12,0.42)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,248,220,0.05),transparent_26%,rgba(210,177,109,0.03)_52%,transparent_76%)]" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.018),rgba(255,255,255,0.018)_2px,transparent_2px,transparent_7px)] opacity-25" />

            <div className="relative z-10 flex min-h-[760px] flex-col justify-between px-8 pb-10 pt-8 text-center sm:px-10">
              <div className="rounded-[2px] bg-[rgba(18,10,12,0.18)] px-4 py-5 backdrop-blur-[1px]">
                <div className="mx-auto inline-flex whitespace-nowrap rounded-full border border-[#ead7aa]/28 bg-[rgba(209,174,106,0.14)] px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-[#f0dfb4] sm:px-4 sm:text-[10px] sm:tracking-[0.28em]">
                  второй день • свадьба 90-х
                </div>
                <h1 className="mt-5 font-serifDisplay text-[40px] font-light uppercase leading-[0.94] tracking-[0.08em] text-[#f7f2eb] [text-shadow:0_2px_14px_rgba(0,0,0,0.35)] sm:text-[50px]">
                  НИКОЛАЙ
                </h1>
                <div className="mt-1 text-[16px] uppercase tracking-[0.32em] text-[#ead7aa]/78">
                  и
                </div>
                <h1 className="mt-1 font-serifDisplay text-[40px] font-light uppercase leading-[0.94] tracking-[0.08em] text-[#f7f2eb] [text-shadow:0_2px_14px_rgba(0,0,0,0.35)] sm:text-[50px]">
                  ЕКАТЕРИНА
                </h1>
                <div className="mt-1 font-serifDisplay text-[28px] font-light tracking-[0.18em] text-[#e9d4a0] [text-shadow:0_2px_14px_rgba(0,0,0,0.3)] sm:text-[34px]">
                  06 05 25
                </div>
                <p className="mx-auto mt-6 max-w-[340px] text-[12px] uppercase leading-[1.8] tracking-[0.18em] text-[#f1e3bf]/92">
                  банкетный драйв, тосты без микрофона, песни хором
                  <br />
                  и та самая русская свадебная атмосфера девяностых
                </p>
              </div>

              <div className="rounded-[2px] border-t border-[#e8d3a3]/18 bg-[rgba(18,10,12,0.24)] px-4 pt-6 backdrop-blur-[1px]">
                <p className="mx-auto max-w-[360px] text-[13px] uppercase leading-[1.8] tracking-[0.14em] text-white/82">
                  Официальная часть уже позади. Здесь начинается день с вайбом
                  домашнего банкета, тостов и танцев под знакомые хиты.
                </p>
              </div>
            </div>
          </div>
        </InviteCard>
      </Reveal>

      <Reveal delay={70}>
        <InviteCard
          variant="dark"
          className="!bg-transparent px-0 py-0 shadow-none"
          tornTop={false}
          tornBottom={false}
        >
          <div className="overflow-hidden rounded-[2px] border border-[#e8d3a3]/22 bg-[rgba(18,10,12,0.18)] p-2 shadow-[0_20px_44px_rgba(8,5,6,0.16)] backdrop-blur-[1px]">
            <img
              src={randomPhotoSrc}
              alt="Настроение второго дня"
              className="w-full rounded-[2px] object-cover"
            />
          </div>
        </InviteCard>
      </Reveal>

      <Reveal delay={90}>
        <InviteCard
          variant="dark"
          className="border border-[#e1c889]/18 px-8 py-12 shadow-[0_22px_48px_rgba(22,11,11,0.26)] sm:px-10"
          tornTop={false}
          tornBottom={false}
        >
          <div className="text-center">
            <h2 className="font-serifDisplay text-[38px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#f2e4bf] sm:text-[46px]">
              КАЛЕНДАРЬ
            </h2>

            <p className="mx-auto mt-6 max-w-[360px] text-[13px] leading-[1.8] text-white/84">
              Отмечайте дату второго дня. Это будет уже не официальная часть,
              а шумное и душевное продолжение праздника.
            </p>

            <div className="mx-auto mt-10 max-w-[340px] border-t border-[#e8d3a3]/18 pt-6">
              <div className="font-serifDisplay text-[28px] font-light tracking-[0.08em] text-[#f2e4bf]">
                МАЙ
              </div>
              <div className="mt-5 grid grid-cols-7 gap-y-3 text-center">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="text-[10px] uppercase tracking-[0.2em] text-[#ead7aa]/42"
                  >
                    {day}
                  </div>
                ))}
                {mayGrid.map((day, index) => (
                  <div key={`${day ?? 'empty'}-${index}`} className="flex h-8 items-center justify-center">
                    {day ? (
                      <span
                        className={[
                          'flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-light',
                          day === 6
                            ? 'border border-[#f2e4bf] text-[#f2e4bf]'
                            : 'text-white/78',
                        ].join(' ')}
                      >
                        {day}
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </InviteCard>
      </Reveal>
    </>
  )
}

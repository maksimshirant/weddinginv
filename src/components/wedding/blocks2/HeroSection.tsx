import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'

const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'] as const
const mayGrid = [
  null, null, null, 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31,
] as const

function StarCalendarDay({
  day,
}: {
  day: number
}) {
  return (
    <span className="relative flex h-9 w-9 items-center justify-center text-[13px] font-light text-[#f2e4bf]">
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          d="m16 3.2 3.8 8 8.8 1-6.5 5.9 1.7 8.6L16 22.2 8.2 26.7l1.7-8.6-6.5-5.9 8.8-1Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="relative z-10">{day}</span>
    </span>
  )
}

export function HeroSection() {
  return (
    <>
      <Reveal>
        <InviteCard
          variant="dark"
          className="border border-[#e8d3a3]/18 bg-transparent shadow-[0_20px_44px_rgba(8,5,6,0.16)]"
          tornTop={false}
          tornBottom={false}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,10,12,0.18),rgba(18,10,12,0.08)_24%,rgba(18,10,12,0.22)_58%,rgba(18,10,12,0.42)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,248,220,0.05),transparent_26%,rgba(210,177,109,0.03)_52%,transparent_76%)]" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.018),rgba(255,255,255,0.018)_2px,transparent_2px,transparent_7px)] opacity-25" />

            <div className="relative z-10 flex flex-col gap-6 px-8 pb-10 pt-8 text-center sm:px-10">
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
                  06 05 26
                </div>
                <p className="mx-auto mt-6 max-w-[340px] text-[12px] uppercase leading-[1.8] tracking-[0.18em] text-[#f1e3bf]/92">
                  банкетный драйв, тосты без микрофона, песни хором
                  <br />
                  и та самая русская свадебная атмосфера девяностых
                </p>
              </div>

              <div className="rounded-[2px] border-t border-[#e8d3a3]/18 bg-[rgba(18,10,12,0.24)] px-4 pt-6 backdrop-blur-[1px]">
                <p className="mx-auto max-w-[360px] text-[13px] uppercase leading-[1.8] tracking-[0.14em] text-white/82">
                Официальная часть уже позади. здесь начинается поооооолный кураж, доставайте свои мыльницы, барсетки и гитару.
                </p>
              </div>
            </div>
          </div>
        </InviteCard>
      </Reveal>

      <Reveal delay={90}>
        <InviteCard
          variant="dark"
          className="mt-5 border border-[#e1c889]/18 px-8 py-12 shadow-[0_22px_48px_rgba(22,11,11,0.26)] sm:px-10"
          tornTop={false}
          tornBottom={false}
        >
          <div className="text-center">
            <h2 className="font-serifDisplay text-[38px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#f2e4bf] sm:text-[46px]">
              КАЛЕНДАРЬ
            </h2>

            <p className="mx-auto mt-6 max-w-[360px] text-[13px] leading-[1.8] text-white/84">
            Отмечайте дату второго дня. это будет самая шумная вечеринка на селе.
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
                      day === 6 ? (
                        <StarCalendarDay day={day} />
                      ) : day === 7 ? (
                        <StarCalendarDay day={day} />
                      ) : (
                        <span className="flex h-8 w-8 items-center justify-center text-[13px] font-light text-white/78">
                          {day}
                        </span>
                      )
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

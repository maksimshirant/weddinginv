import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'
import { buildMonthGrid, weekDays } from '../shared/calendar'
import { getPublicAssetUrl } from '../shared/getPublicAssetUrl'

const mayGrid = buildMonthGrid(2026, 4)

export function HeroSection() {
  const heroImageSrc = getPublicAssetUrl('hero.jpg')

  return (
    <>
      <Reveal>
        <InviteCard
          variant="dark"
          className="min-h-[760px]"
          tornTop={false}
          tornBottom={false}
        >
          <div className="relative min-h-[760px]">
            <img
              src={heroImageSrc}
              alt="Николай и Екатерина"
              className="absolute inset-0 h-full min-h-[760px] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(17,10,12,0.28),rgba(17,10,12,0.18)_34%,rgba(17,10,12,0.62)_78%,rgba(17,10,12,0.74))]" />

            <div className="relative z-10 flex min-h-[760px] flex-col justify-between px-8 pb-10 pt-8 text-center sm:px-10">
              <div>
                <h1 className="font-serifDisplay text-[40px] font-light uppercase leading-[0.94] tracking-[0.08em] text-[#f7f2eb] sm:text-[50px]">
                  НИКОЛАЙ
                </h1>
                <div className="mt-1 text-[16px] uppercase tracking-[0.32em] text-white/60">
                  и
                </div>
                <h1 className="mt-1 font-serifDisplay text-[40px] font-light uppercase leading-[0.94] tracking-[0.08em] text-[#f7f2eb] sm:text-[50px]">
                  ЕКАТЕРИНА
                </h1>
                <div className="mt-1 font-serifDisplay text-[28px] font-light tracking-[0.18em] text-[#f0e6d8] sm:text-[34px]">
                  05 05 26
                </div>
              </div>

              <div className="border-t border-white/18 pt-6">
                <p className="mx-auto max-w-[360px] text-[13px] uppercase leading-[1.8] tracking-[0.14em] text-white/82">
                  Приглашаем вас разделить с нами один из самых важных и
                  счастливых дней нашей жизни.
                </p>
              </div>
            </div>
          </div>
        </InviteCard>
      </Reveal>

      <Reveal delay={90}>
        <InviteCard variant="dark" className="px-8 py-12 sm:px-10">
          <div className="text-center">
            <h2 className="font-serifDisplay text-[38px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#f6f0e7] sm:text-[46px]">
              КАЛЕНДАРЬ
            </h2>

            <p className="mx-auto mt-6 max-w-[360px] text-[13px] leading-[1.8] text-white/84">
            Отмечайте дату и сохраняйте настроение праздника. Мы верим, что счастье становится полным, когда им делятся с самыми близкими. 
            </p>

            <div className="mx-auto mt-10 max-w-[340px] border-t border-white/18 pt-6">
              <div className="font-serifDisplay text-[28px] font-light tracking-[0.08em] text-[#f6f0e7]">
                МАЙ
              </div>
              <div className="mt-5 grid grid-cols-7 gap-y-3 text-center">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="text-[10px] uppercase tracking-[0.2em] text-white/46"
                  >
                    {day}
                  </div>
                ))}
                {mayGrid.map((day, index) => (
                  <div key={`${day ?? 'empty'}-${index}`} className="flex h-8 items-center justify-center">
                    {day ? (
                      day === 5 ? (
                        <span className="relative flex h-9 w-9 items-center justify-center text-[13px] font-light text-[#f6f0e7]">
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 32 29"
                            className="absolute inset-0 h-full w-full"
                            fill="none"
                          >
                            <path
                              d="M16 27.2 3.7 14.9a7.8 7.8 0 0 1 0-11 7.1 7.1 0 0 1 10.4 0L16 5.8l1.9-1.9a7.1 7.1 0 0 1 10.4 0 7.8 7.8 0 0 1 0 11Z"
                              stroke="currentColor"
                              strokeWidth="0.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="relative z-10">{day}</span>
                        </span>
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

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

export function HeroSection() {
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
              src="/hero.jpg"
              alt="Александр и Елена"
              className="absolute inset-0 h-full min-h-[760px] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(17,10,12,0.28),rgba(17,10,12,0.18)_34%,rgba(17,10,12,0.62)_78%,rgba(17,10,12,0.74))]" />

            <div className="relative z-10 flex min-h-[760px] flex-col justify-between px-8 pb-10 pt-14 text-center sm:px-10">
              <div className="pt-2">
                <h1 className="font-serifDisplay text-[40px] font-light uppercase leading-[0.94] tracking-[0.08em] text-[#f7f2eb] sm:text-[50px]">
                  НИКОЛАЙ
                </h1>
                <div className="mt-1 text-[16px] uppercase tracking-[0.32em] text-white/60">
                  и
                </div>
                <h1 className="mt-1 font-serifDisplay text-[40px] font-light uppercase leading-[0.94] tracking-[0.08em] text-[#f7f2eb] sm:text-[50px]">
                  ЕКАТЕРИНА
                </h1>
                <div className="mt-6 font-serifDisplay text-[28px] font-light tracking-[0.18em] text-[#f0e6d8] sm:text-[34px]">
                  05 05 25
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
              Будем счастливы разделить этот день вместе с вами. Отмечайте дату
              и сохраняйте настроение праздника.
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
                      <span
                        className={[
                          'flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-light',
                          day === 5
                            ? 'border border-[#f6f0e7] text-[#f6f0e7]'
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

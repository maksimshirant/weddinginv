import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'

export function FooterSection() {
  return (
    <div className="space-y-5">
      <Reveal>
        <InviteCard variant="dark" className="px-8 py-12 sm:px-10">
          <div className="text-center">
            <h2 className="font-serifDisplay text-[42px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#f7f2eb] sm:text-[48px]">
              ОБЩИЙ ЧАТ
            </h2>
            <p className="mx-auto mt-5 max-w-[360px] text-[14px] leading-[1.75] text-white/78">
              Ближе к дате мы пришлём ссылку на общий чат, где можно будет
              делиться эмоциями, фото и важными деталями.
            </p>
            <button
              type="button"
              disabled
              className="mt-8 inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-white/22 bg-transparent px-6 text-[12px] uppercase tracking-[0.2em] text-[#f7f2eb] opacity-90"
            >
              Скоро добавим
            </button>
          </div>
        </InviteCard>
      </Reveal>

      <Reveal delay={90}>
        <InviteCard variant="dark" className="px-8 py-12 sm:px-10">
          <div className="text-center">
            <h2 className="font-serifDisplay text-[46px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#f7f2eb] sm:text-[52px]">
              ЖДЁМ ВАС!
            </h2>
            <p className="mx-auto mt-5 max-w-[360px] text-[14px] leading-[1.75] text-white/78">
              Очень ждём вас, чтобы разделить этот день вместе и сохранить его
              в памяти как тёплую семейную историю.
            </p>
            <p className="mt-8 text-[13px] tracking-[0.12em] text-white/62">
              с любовью
            </p>
            <p className="mt-2 font-serifDisplay text-[24px] font-light uppercase tracking-[0.08em] text-[#f2e7d8]">
              НИКОЛАЙ И ЕКАТЕРИНА
            </p>
            <a
              href="#/second-day"
              className="mt-6 inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-white/22 bg-transparent px-6 text-center text-[12px] uppercase tracking-[0.2em] text-[#f7f2eb] transition hover:bg-white/10"
            >
              Присоединяйтесь ко второму дню празднования
            </a>
          </div>
        </InviteCard>
      </Reveal>
    </div>
  )
}

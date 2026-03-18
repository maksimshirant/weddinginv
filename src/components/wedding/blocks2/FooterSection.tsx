import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'

export function FooterSection() {
  return (
    <div className="space-y-5">
      <Reveal>
        <InviteCard
          variant="dark"
          className="border border-[#e8d3a3]/18 bg-transparent px-8 py-12 shadow-[0_20px_44px_rgba(8,5,6,0.16)] sm:px-10"
          tornTop={false}
          tornBottom={false}
        >
          <div className="text-center">
            <h2 className="font-serifDisplay text-[42px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#f2e4bf] sm:text-[48px]">
              СВЯЗЬ
            </h2>
            <p className="mx-auto mt-5 max-w-[360px] rounded-[2px] bg-[rgba(18,10,12,0.2)] px-4 py-4 text-[14px] leading-[1.75] text-white/82 backdrop-blur-[1px]">
              Отдельный чат для второго дня добавим позже. Там будут
              организационные детали, музыка и всё, что поможет поймать нужный вайб.
            </p>
            <button
              type="button"
              disabled
              className="mt-8 inline-flex min-h-[50px] w-full cursor-default items-center justify-center rounded-full border border-[#e8d3a3]/26 bg-transparent px-6 text-[12px] uppercase tracking-[0.2em] text-[#f7f1e8] opacity-100"
            >
              Скоро откроем чат
            </button>
          </div>
        </InviteCard>
      </Reveal>

      <Reveal delay={90}>
        <InviteCard
          variant="dark"
          className="border border-[#e8d3a3]/18 bg-transparent px-8 py-12 shadow-[0_20px_44px_rgba(8,5,6,0.16)] sm:px-10"
          tornTop={false}
          tornBottom={false}
        >
          <div className="text-center">
            <h2 className="font-serifDisplay text-[46px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#f2e4bf] sm:text-[52px]">
              ГУЛЯЕМ ДАЛЬШЕ!
            </h2>
            <p className="mx-auto mt-5 max-w-[360px] rounded-[2px] bg-[rgba(18,10,12,0.2)] px-4 py-4 text-[14px] leading-[1.75] text-white/82 backdrop-blur-[1px]">
              Второй день задуман с характером: шумный, семейный, немного
              ироничный и очень живой. Всё как мы любим.
            </p>
            <p className="mt-8 text-[13px] tracking-[0.12em] text-[#ead7aa]/70">
              с любовью и хорошим настроением
            </p>
            <p className="mt-2 font-serifDisplay text-[24px] font-light uppercase tracking-[0.08em] text-[#f2e7d8]">
              НИКОЛАЙ И ЕКАТЕРИНА
            </p>
          </div>
        </InviteCard>
      </Reveal>
    </div>
  )
}

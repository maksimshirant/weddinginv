import { type RefObject } from 'react'
import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'

type FooterSectionProps = {
  connectionSectionRef: RefObject<HTMLDivElement | null>
}

export function FooterSection({
  connectionSectionRef,
}: FooterSectionProps) {
  return (
    <div className="space-y-5">
      <div ref={connectionSectionRef} id="second-day-connection">
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
      </div>
    </div>
  )
}

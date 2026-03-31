import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'

export function ClosingSection() {
  return (
    <Reveal delay={120}>
      <InviteCard
        variant="dark"
        className="border border-[#e8d3a3]/18 bg-transparent px-8 py-12 shadow-[0_20px_44px_rgba(8,5,6,0.16)] sm:px-10"
        tornTop={false}
        tornBottom={false}
      >
        <div className="text-center">
          <h2 className="font-serifDisplay text-[46px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#f2e4bf] sm:text-[52px]">
            БУДЕМ ЖДАТЬ ВАС!
          </h2>
          <p className="mx-auto mt-5 max-w-[360px] rounded-[2px] bg-[rgba(18,10,12,0.2)] px-4 py-4 text-[14px] leading-[1.75] text-white/82 backdrop-blur-[1px]">
            С любовью, Николай и Екатерина
          </p>
        </div>
      </InviteCard>
    </Reveal>
  )
}

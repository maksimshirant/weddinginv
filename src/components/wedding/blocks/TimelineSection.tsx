import { timelineItems } from '../data'
import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'

export function TimelineSection() {
  return (
    <Reveal>
      <InviteCard variant="dark" className="px-8 py-12 sm:px-10">
        <div>
          <h2 className="text-center font-serifDisplay text-[42px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#f7f2eb] sm:text-[48px]">
            ПЛАН ДНЯ
          </h2>

          <div className="mt-8 space-y-8">
            {timelineItems.map((item, index) => (
              <div
                key={item.time}
                className="text-center"
              >
                <div className="font-serifDisplay text-[38px] font-light leading-none tracking-[0.04em] text-[#f7f2eb]">
                  {item.time}
                </div>
                {item.title ? (
                  <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/64">
                    {item.title}
                  </div>
                ) : null}
                <p className="mx-auto mt-3 max-w-[330px] text-[13px] leading-[1.75] text-white/76">
                  {item.description}
                </p>
                {index < timelineItems.length - 1 ? (
                  <div className="mx-auto mt-6 h-8 w-px bg-white/20" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </InviteCard>
    </Reveal>
  )
}

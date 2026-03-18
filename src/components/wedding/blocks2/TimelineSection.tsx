import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'

const secondDayTimelineItems = [
  {
    time: '14:00',
    title: 'Сбор гостей',
    description: 'Встречаемся без лишнего официоза: объятия, разговоры, закуски и первый тост за молодых.',
  },
  {
    time: '16:00',
    title: 'Застолье и тосты',
    description: 'Большой стол, салаты как полагается, пожелания от всех поколений и атмосфера семейного праздника.',
  },
  {
    time: '18:30',
    title: 'Конкурсы и музыка',
    description: 'Танцы, кричалки, неожиданные конкурсы и подборка треков, под которые невозможно усидеть на месте.',
  },
  {
    time: '21:00',
    title: 'Самое душевное',
    description: 'К вечеру включается режим самых тёплых разговоров, фотографий на память и песен хором.',
  },
] as const

export function TimelineSection() {
  return (
    <Reveal>
      <InviteCard
        variant="dark"
        className="border border-[#e1c889]/18 px-8 py-12 shadow-[0_22px_48px_rgba(22,11,11,0.26)] sm:px-10"
        tornTop={false}
        tornBottom={false}
      >
        <div>
          <h2 className="text-center font-serifDisplay text-[42px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#f4e5bd] sm:text-[48px]">
            ПЛАН ДНЯ
          </h2>

          <div className="mt-8 space-y-8">
            {secondDayTimelineItems.map((item) => (
              <div
                key={item.time}
                className="text-center"
              >
                <div className="font-serifDisplay text-[38px] font-light leading-none tracking-[0.04em] text-[#f7f2eb]">
                  {item.time}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-[#e7cf96]/78">
                  {item.title}
                </div>
                <p className="mx-auto mt-3 max-w-[330px] text-[13px] leading-[1.75] text-white/76">
                  {item.description}
                </p>
                <div className="mx-auto mt-6 h-8 w-px bg-[#e7cf96]/24" />
              </div>
            ))}
          </div>
        </div>
      </InviteCard>
    </Reveal>
  )
}

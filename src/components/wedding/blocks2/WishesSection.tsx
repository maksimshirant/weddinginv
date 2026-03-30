import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'

const secondDayDetails = [
  {
    title: 'Пойте от души',
    description: 'В этот день вы обязаны во все горло петь знакомые песни, поднимать тосты за молодых и не стесняться душевных поздравлений.',
  },
  {
    title: 'Ярче образ',
    description: 'Сделайте образ как можно ярче, не бойтесь добавить чуточку баловства в ваш наряд.',
  },
  {
    title: 'Все по-взрослому',
    description: 'Громкая музыка, откровенные шутки не для детей, вход по паспорту.',
  },
] as const

export function WishesSection() {
  return (
    <Reveal>
      <InviteCard
        variant="dark"
        className="border border-[#e1c889]/18 px-8 py-12 shadow-[0_22px_48px_rgba(22,11,11,0.26)] sm:px-10"
        tornTop={false}
        tornBottom={false}
      >
        <div className="text-center">
          <h2 className="font-serifDisplay text-[42px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#f4e5bd] sm:text-[48px]">
            ДЕТАЛИ
          </h2>

          <div className="mt-8 space-y-8">
            {secondDayDetails.map((wish) => (
              <div
                key={wish.title}
                className="text-left"
              >
                <div>
                  <h3 className="font-serifDisplay text-[26px] font-light uppercase tracking-[0.08em] text-[#f7f2eb]">
                    {wish.title}
                  </h3>
                  <p className="mt-3 max-w-[360px] text-[14px] leading-[1.75] text-white/74">
                    {wish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </InviteCard>
    </Reveal>
  )
}

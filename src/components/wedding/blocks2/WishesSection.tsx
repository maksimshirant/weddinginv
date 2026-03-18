import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'
import { PlaceholderImage } from '../shared/PlaceholderImage'

const secondDayDetails = [
  {
    title: 'Погромче',
    description: 'В этот день можно и нужно петь знакомые песни, поддерживать тосты и не стесняться громких поздравлений.',
  },
  {
    title: 'Понаряднее',
    description: 'Не бойтесь сделать образ ярче: второй день задуман более свободным, театральным и чуть ностальгическим.',
  },
  {
    title: 'Подушевнее',
    description: 'Главное здесь не идеальность, а настроение: семейность, тепло, смех за столом и старые добрые танцы.',
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
            {secondDayDetails.map((wish, index) => (
              <div
                key={wish.title}
                className="grid grid-cols-[48px_1fr] gap-4 text-left"
              >
                <div className="font-serifDisplay text-[46px] leading-none text-[#f0dbab]/84">
                  {String(index + 1).padStart(2, '0')}
                </div>
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

          <div className="mt-10">
            <PlaceholderImage
              label="[Афиша второго дня: тосты, музыка, кассеты и свадебная ностальгия]"
              tone="dark"
              className="aspect-[16/9] rounded-[2px]"
            />
          </div>
        </div>
      </InviteCard>
    </Reveal>
  )
}

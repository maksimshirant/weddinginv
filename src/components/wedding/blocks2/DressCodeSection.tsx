import { InviteCard } from '../shared/InviteCard'
import { Reveal } from '../shared/Reveal'
import { PlaceholderImage } from '../shared/PlaceholderImage'

export function DressCodeSection() {
  return (
    <Reveal>
      <InviteCard
        variant="light"
        className="!bg-[rgba(241,232,209,0.92)] border border-[#b79b68]/26 px-8 py-12 shadow-[0_20px_44px_rgba(31,24,18,0.16)] sm:px-10"
        tornTop={false}
        tornBottom={false}
      >
        <div className="text-center">
          <h2 className="font-serifDisplay text-[42px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#281d17] sm:text-[48px]">
            ДРЕСС-КОД
          </h2>

          <p className="mx-auto mt-5 max-w-[360px] text-[13px] uppercase leading-[1.85] tracking-[0.08em] text-[#281d17]/74">
            Настроение второго дня:
            <br />
            российская свадьба девяностых,
            <br />
            чуть нарядно, чуть дерзко,
            <br />
            и обязательно с характером.
          </p>

          <div className="mt-10 flex justify-center px-2">
            <PlaceholderImage
              label="[Кожа, атлас, золото, молочный, бордо, графит, леопард по желанию]"
              tone="light"
              className="aspect-[16/9] w-full max-w-[460px] rounded-[2px]"
            />
          </div>
          <p className="mx-auto mt-5 max-w-[360px] text-[13px] leading-[1.8] text-[#281d17]/68">
            Подойдут крупные украшения, жакеты, платья с блеском, рубашки,
            костюмы и всё, что выглядит как праздник с плёночной камеры.
          </p>
        </div>
      </InviteCard>
    </Reveal>
  )
}

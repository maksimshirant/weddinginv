import { useState } from 'react'
import { drinkOptions } from '../data'
import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'

type Attending = '' | 'yes' | 'no'

type FormState = {
  name: string
  attending: Attending
  drinks: string[]
  otherDrink: string
}

const initialState: FormState = {
  name: '',
  attending: '',
  drinks: [],
  otherDrink: '',
}

export function RsvpSection() {
  const [formState, setFormState] = useState<FormState>(initialState)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const isOtherDrinkSelected = formState.drinks.includes('other')

  const handleDrinkToggle = (value: string) => {
    setFormState((current) => ({
      ...current,
      drinks: current.drinks.includes(value)
        ? current.drinks.filter((item) => item !== value)
        : [...current.drinks, value],
      otherDrink:
        value === 'other' && current.drinks.includes(value)
          ? ''
          : current.otherDrink,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('RSVP Data:', formState)
    setIsSubmitted(true)
  }

  return (
    <Reveal>
      <InviteCard
        variant="light"
        className="!bg-[rgba(243,233,211,0.92)] border border-[#b79b68]/26 px-8 py-12 shadow-[0_20px_44px_rgba(31,24,18,0.16)] sm:px-10"
        tornTop={false}
        tornBottom={false}
      >
        <div id="rsvp-card">
          {isSubmitted ? (
            <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
              <div className="font-serifDisplay text-[52px] font-light uppercase leading-none tracking-[0.06em] text-[#281d17]">
                СПАСИБО
              </div>
              <p className="mt-5 max-w-[360px] text-[14px] leading-[1.75] text-[#281d17]/76">
                Ваш ответ успешно отправлен. Мы с нетерпением ждём встречи и
                рады разделить этот день вместе с вами.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-center font-serifDisplay text-[42px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#281d17] sm:text-[48px]">
                АНКЕТА
              </h2>
              <p className="mx-auto mt-5 max-w-[360px] text-center text-[14px] leading-[1.75] text-[#281d17]/72">
                Подтвердите участие во втором дне и дайте знать, готовы ли вы
                к застолью, танцам и русской свадебной классике девяностых.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.24em] text-[#281d17]/56">
                    Ваше имя и фамилия
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={(event) =>
                      setFormState((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    required
                    placeholder="Иван Иванов"
                    className="mt-3 w-full rounded-[2px] border border-[#a48658]/34 bg-[rgba(255,250,242,0.88)] px-4 py-3 text-[15px] text-[#281d17] placeholder:text-[#281d17]/42 outline-none transition focus:border-[#710f23] focus:bg-white"
                  />
                </div>

                <fieldset>
                  <legend className="block text-[10px] uppercase tracking-[0.24em] text-[#281d17]/56">
                    Планируете ли вы присутствовать?
                  </legend>
                  <div className="mt-4 space-y-3">
                    {[
                      { value: 'yes', label: 'Да, с радостью приду' },
                      { value: 'no', label: 'Нет, к сожалению, не получится' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex cursor-pointer items-center gap-3 rounded-[2px] border border-[#a48658]/18 bg-[rgba(255,250,242,0.52)] px-4 py-3 text-[15px] text-[#281d17]/84"
                      >
                        <input
                          type="radio"
                          name="attending"
                          value={option.value}
                          checked={formState.attending === option.value}
                          onChange={(event) =>
                            setFormState((current) => ({
                              ...current,
                              attending: event.target.value as Attending,
                            }))
                          }
                          required
                          className="h-[18px] w-[18px] accent-[#710f23]"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="block text-[10px] uppercase tracking-[0.24em] text-[#281d17]/56">
                    Предпочтения по напиткам
                  </legend>
                  <p className="mt-2 text-[13px] font-light text-[#281d17]/48">
                    Можно выбрать несколько вариантов
                  </p>
                  <div className="mt-4 grid gap-3">
                    {drinkOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex cursor-pointer items-center gap-3 rounded-[2px] border border-[#a48658]/18 bg-[rgba(255,250,242,0.52)] px-4 py-3 text-[15px] text-[#281d17]/84"
                      >
                        <input
                          type="checkbox"
                          name="drinks"
                          value={option.value}
                          checked={formState.drinks.includes(option.value)}
                          onChange={() => handleDrinkToggle(option.value)}
                          className="h-[18px] w-[18px] accent-[#710f23]"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {isOtherDrinkSelected ? (
                    <div className="mt-5">
                      <label className="block text-[10px] uppercase tracking-[0.24em] text-[#281d17]/56">
                        Ваш вариант
                      </label>
                      <input
                        type="text"
                        name="otherDrink"
                        value={formState.otherDrink}
                        onChange={(event) =>
                          setFormState((current) => ({
                            ...current,
                            otherDrink: event.target.value,
                          }))
                        }
                        required={isOtherDrinkSelected}
                        placeholder="Напишите напиток"
                        className="mt-3 w-full rounded-[2px] border border-[#a48658]/34 bg-[rgba(255,250,242,0.88)] px-4 py-3 text-[15px] text-[#281d17] placeholder:text-[#281d17]/42 outline-none transition focus:border-[#710f23] focus:bg-white"
                      />
                    </div>
                  ) : null}
                </fieldset>

                <button
                  type="submit"
                  className="mt-4 inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-[#710f23] bg-[#710f23] px-6 text-[12px] uppercase tracking-[0.2em] text-[#f7f1e8] transition hover:bg-[#5f0c1d]"
                >
                  Отправить
                </button>
              </form>
            </>
          )}
        </div>
      </InviteCard>
    </Reveal>
  )
}

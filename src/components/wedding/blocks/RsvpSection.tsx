import { useState } from 'react'
import { drinkOptions } from '../data'
import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'

type Attending = '' | 'yes' | 'no'

type FormState = {
  name: string
  attending: Attending
  drinks: string[]
}

const initialState: FormState = {
  name: '',
  attending: '',
  drinks: [],
}

export function RsvpSection() {
  const [formState, setFormState] = useState<FormState>(initialState)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleDrinkToggle = (value: string) => {
    setFormState((current) => ({
      ...current,
      drinks: current.drinks.includes(value)
        ? current.drinks.filter((item) => item !== value)
        : [...current.drinks, value],
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('RSVP Data:', formState)
    setIsSubmitted(true)
  }

  return (
    <Reveal>
      <InviteCard variant="light" className="px-8 py-12 sm:px-10">
        <div id="rsvp-card">
          {isSubmitted ? (
            <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
              <div className="font-serifDisplay text-[52px] font-light uppercase leading-none tracking-[0.06em] text-[#201d1a]">
                СПАСИБО
              </div>
              <p className="mt-5 max-w-[360px] text-[14px] leading-[1.75] text-[#201d1a]/76">
                Ваш ответ успешно отправлен. Мы с нетерпением ждём встречи и
                рады разделить этот день вместе с вами.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-center font-serifDisplay text-[42px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#201d1a] sm:text-[48px]">
                АНКЕТА
              </h2>
              <p className="mx-auto mt-5 max-w-[360px] text-center text-[14px] leading-[1.75] text-[#201d1a]/72">
                Подтвердите своё присутствие и расскажите нам о ваших
                предпочтениях.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.24em] text-[#201d1a]/46">
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
                    className="mt-3 w-full border-0 border-b border-[#201d1a]/22 bg-transparent px-0 pb-3 pt-1 text-[15px] text-[#201d1a] placeholder:text-[#201d1a]/36 outline-none transition focus:border-[#7a1023]"
                  />
                </div>

                <fieldset>
                  <legend className="block text-[10px] uppercase tracking-[0.24em] text-[#201d1a]/46">
                    Планируете ли вы присутствовать?
                  </legend>
                  <div className="mt-4 space-y-3">
                    {[
                      { value: 'yes', label: 'Да, с радостью приду' },
                      { value: 'no', label: 'Нет, к сожалению, не получится' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex cursor-pointer items-center gap-3 text-[15px] text-[#201d1a]/82"
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
                          className="h-[18px] w-[18px] accent-[#7a1023]"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="block text-[10px] uppercase tracking-[0.24em] text-[#201d1a]/46">
                    Предпочтения по напиткам
                  </legend>
                  <p className="mt-2 text-[13px] font-light text-[#201d1a]/42">
                    Можно выбрать несколько вариантов
                  </p>
                  <div className="mt-4 grid gap-3">
                    {drinkOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex cursor-pointer items-center gap-3 text-[15px] text-[#201d1a]/82"
                      >
                        <input
                          type="checkbox"
                          name="drinks"
                          value={option.value}
                          checked={formState.drinks.includes(option.value)}
                          onChange={() => handleDrinkToggle(option.value)}
                          className="h-[18px] w-[18px] accent-[#7a1023]"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <button
                  type="submit"
                  className="mt-4 inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-[#7a1023] bg-[#7a1023] px-6 text-[12px] uppercase tracking-[0.2em] text-[#f7f1e8] transition hover:bg-[#620a1a]"
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

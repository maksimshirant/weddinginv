import { useState } from 'react'
import { drinkOptions } from '../data'
import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'
import { type InvitationDraft } from '../shared/invitationDraft'

type RsvpSectionProps = {
  guestFullName: string
  formState: InvitationDraft['secondDay']
  onGuestFullNameChange: (value: string) => void
  onChange: (nextFormState: InvitationDraft['secondDay']) => void
  onOpenSummary: () => void
}

export function RsvpSection({
  guestFullName,
  formState,
  onGuestFullNameChange,
  onChange,
  onOpenSummary,
}: RsvpSectionProps) {
  const [isDrinksErrorVisible, setIsDrinksErrorVisible] = useState(false)
  const shouldShowDrinks = formState.attending !== 'no'
  const isOtherDrinkSelected = formState.drinks.includes('other')

  const handleDrinkToggle = (value: string) => {
    setIsDrinksErrorVisible(false)

    onChange({
      ...formState,
      drinks: formState.drinks.includes(value)
        ? formState.drinks.filter((item) => item !== value)
        : [...formState.drinks, value],
      otherDrink:
        value === 'other' && formState.drinks.includes(value)
          ? ''
          : formState.otherDrink,
    })
  }

  const handleAttendingChange = (value: InvitationDraft['secondDay']['attending']) => {
    setIsDrinksErrorVisible(false)

    onChange({
      ...formState,
      attending: value,
      drinks: value === 'no' ? [] : formState.drinks,
      otherDrink: value === 'no' ? '' : formState.otherDrink,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (formState.attending === 'yes' && formState.drinks.length === 0) {
      setIsDrinksErrorVisible(true)
      return
    }

    onOpenSummary()
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
          <h2 className="text-center font-serifDisplay text-[42px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#281d17] sm:text-[48px]">
            АНКЕТА ВТОРОГО ДНЯ
          </h2>
          <p className="mx-auto mt-5 max-w-[360px] text-center text-[14px] leading-[1.75] text-[#281d17]/72">
            Здесь соберём ответы по второму дню, а затем покажем итоговую
            сводку по двум дням перед отправкой.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-8">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.24em] text-[#281d17]/56">
                Имя и фамилия гостя
              </label>
              <input
                type="text"
                name="guestFullName"
                value={guestFullName}
                onChange={(event) => onGuestFullNameChange(event.target.value)}
                required
                placeholder="Иван Иванов"
                className="mt-3 w-full rounded-[2px] border border-[#a48658]/34 bg-[rgba(255,250,242,0.88)] px-4 py-3 text-[15px] text-[#281d17] placeholder:text-[#281d17]/42 outline-none transition focus:border-[#710f23] focus:bg-white"
              />
            </div>

            <fieldset>
              <legend className="block text-[10px] uppercase tracking-[0.24em] text-[#281d17]/56">
                Участие во втором дне
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
                      name="secondDayAttending"
                      value={option.value}
                      checked={formState.attending === option.value}
                      onChange={(event) => handleAttendingChange(
                        event.target.value as InvitationDraft['secondDay']['attending'],
                      )}
                      required
                      className="h-[18px] w-[18px] accent-[#710f23]"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {shouldShowDrinks ? (
              <fieldset>
                <legend className="block text-[10px] uppercase tracking-[0.24em] text-[#281d17]/56">
                  Напитки на второй день
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
                        name="secondDayDrinks"
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
                      Свой напиток на второй день
                    </label>
                    <input
                      type="text"
                      name="secondDayOtherDrink"
                      value={formState.otherDrink}
                      onChange={(event) =>
                        onChange({
                          ...formState,
                          otherDrink: event.target.value,
                        })
                      }
                      required={isOtherDrinkSelected}
                      placeholder="Напишите напиток"
                      className="mt-3 w-full rounded-[2px] border border-[#a48658]/34 bg-[rgba(255,250,242,0.88)] px-4 py-3 text-[15px] text-[#281d17] placeholder:text-[#281d17]/42 outline-none transition focus:border-[#710f23] focus:bg-white"
                    />
                  </div>
                ) : null}
                {isDrinksErrorVisible ? (
                  <p className="mt-4 text-[12px] leading-[1.5] text-[#710f23]">
                    Если вы подтверждаете присутствие, выберите хотя бы один напиток.
                  </p>
                ) : null}
              </fieldset>
            ) : null}

            <button
              type="submit"
              className="mt-4 inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-[#710f23] bg-[#710f23] px-6 text-[12px] uppercase tracking-[0.2em] text-[#f7f1e8] transition hover:bg-[#5f0c1d]"
            >
              Сохранить
            </button>
          </form>
        </div>
      </InviteCard>
    </Reveal>
  )
}

import { useEffect, useEffectEvent, useState } from 'react'
import { firstDayToastOptions } from '../data'
import { Reveal } from '../shared/Reveal'
import { InviteCard } from '../shared/InviteCard'
import { type InvitationDraft } from '../shared/invitationDraft'

type RsvpSectionProps = {
  guestFullName: string
  formState: InvitationDraft['firstDay']
  isInvitationSubmitted: boolean
  onGuestFullNameChange: (value: string) => void
  onChange: (nextFormState: InvitationDraft['firstDay']) => void
  onSave: () => void
}

export function RsvpSection({
  guestFullName,
  formState,
  isInvitationSubmitted,
  onGuestFullNameChange,
  onChange,
  onSave,
}: RsvpSectionProps) {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [isDrinksErrorVisible, setIsDrinksErrorVisible] = useState(false)
  const shouldShowDrinks = formState.attending !== 'no'
  const selectedToastOption = formState.drinks[0] ?? ''
  const isFormDisabled = isInvitationSubmitted || submissionStatus === 'submitting'
  const handleSave = useEffectEvent(() => {
    onSave()
  })

  useEffect(() => {
    if (submissionStatus !== 'success') {
      return
    }

    const timeoutId = window.setTimeout(() => {
      handleSave()
    }, 1000)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [submissionStatus])

  useEffect(() => {
    if (submissionStatus !== 'submitting') {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setSubmissionStatus('success')
    }, 1000)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [submissionStatus])

  const handleToastOptionChange = (value: string) => {
    setIsDrinksErrorVisible(false)

    onChange({
      ...formState,
      drinks: [value],
      otherDrink: '',
    })
  }

  const handleAttendingChange = (value: InvitationDraft['firstDay']['attending']) => {
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

    if (isInvitationSubmitted) {
      return
    }

    if (formState.attending === 'yes' && formState.drinks.length === 0) {
      setIsDrinksErrorVisible(true)
      return
    }

    if (submissionStatus !== 'idle') {
      return
    }

    setSubmissionStatus('submitting')
  }

  return (
    <Reveal>
      <InviteCard variant="light" className="px-8 py-12 sm:px-10">
        <div id="rsvp-card">
          {submissionStatus === 'success' && !isInvitationSubmitted ? (
            <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
              <div className="font-serifDisplay text-[52px] font-light uppercase leading-none tracking-[0.06em] text-[#201d1a]">
                УСПЕШНО
              </div>
              <p className="mt-5 max-w-[360px] text-[14px] leading-[1.75] text-[#201d1a]/76">
                Ответы по первому дню сохранены. Переходим ко второму дню
                празднования.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-center font-serifDisplay text-[42px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#201d1a] sm:text-[48px]">
                АНКЕТА ПЕРВОГО ДНЯ
              </h2>
              <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.24em] text-[#201d1a]/46">
                    Имя и фамилия гостя
                  </label>
                  <input
                    type="text"
                    name="guestFullName"
                    value={guestFullName}
                    onChange={(event) => onGuestFullNameChange(event.target.value)}
                    required
                    placeholder="Иван Иванов"
                    disabled={isFormDisabled}
                    className="mt-3 w-full border-0 border-b border-[#201d1a]/22 bg-transparent px-0 pb-3 pt-1 text-[16px] text-[#201d1a] placeholder:text-[#201d1a]/36 outline-none transition focus:border-[#7a1023] disabled:cursor-wait disabled:opacity-60 sm:text-[15px]"
                  />
                </div>

                <fieldset disabled={isFormDisabled}>
                  <legend className="block text-[10px] uppercase tracking-[0.24em] text-[#201d1a]/46">
                    Участие в первом дне
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
                          name="firstDayAttending"
                          value={option.value}
                          checked={formState.attending === option.value}
                          onChange={(event) => handleAttendingChange(
                            event.target.value as InvitationDraft['firstDay']['attending'],
                          )}
                          required
                          className="h-[18px] w-[18px] accent-[#7a1023]"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {shouldShowDrinks ? (
                  <fieldset disabled={isFormDisabled}>
                    <legend className="block text-[10px] uppercase tracking-[0.24em] text-[#201d1a]/46">
                      Желаете ли Вы выпить за молодых?
                    </legend>
                    <div className="mt-4 grid gap-3">
                      {firstDayToastOptions.map((option) => (
                        <label
                          key={option.value}
                          className="flex cursor-pointer items-center gap-3 text-[15px] text-[#201d1a]/82"
                        >
                          <input
                            type="radio"
                            name="firstDayToast"
                            value={option.value}
                            checked={selectedToastOption === option.value}
                            onChange={() => handleToastOptionChange(option.value)}
                            className="h-[18px] w-[18px] accent-[#7a1023]"
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                    {isDrinksErrorVisible ? (
                      <p className="mt-4 text-[12px] leading-[1.5] text-[#7a1023]">
                        Если вы подтверждаете присутствие, выберите один вариант ответа.
                      </p>
                    ) : null}
                  </fieldset>
                ) : null}

                <button
                  type="submit"
                  disabled={isFormDisabled}
                  className="mt-4 inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-[#7a1023] bg-[#7a1023] px-6 text-[12px] uppercase tracking-[0.2em] text-[#f7f1e8] transition hover:bg-[#620a1a] disabled:cursor-wait disabled:bg-[#8a4052] disabled:hover:bg-[#8a4052]"
                >
                  {isInvitationSubmitted
                    ? 'Анкета отправлена'
                    : submissionStatus === 'submitting'
                    ? 'Сохраняем...'
                    : 'Сохранить и перейти ко второму дню'}
                </button>

                {isInvitationSubmitted ? (
                  <p className="text-center text-[12px] uppercase tracking-[0.16em] text-[#7a1023]/76">
                    Ответы по обоим дням уже отправлены
                  </p>
                ) : formState.isSaved ? (
                  <p className="text-center text-[12px] uppercase tracking-[0.16em] text-[#7a1023]/76">
                    Ответы по первому дню сохранены
                  </p>
                ) : null}
              </form>
            </>
          )}
        </div>
      </InviteCard>
    </Reveal>
  )
}

import { drinkOptions, firstDayToastOptions } from '../data'

export type Attending = '' | 'yes' | 'no'

export type DayRsvpState = {
  attending: Attending
  drinks: string[]
  otherDrink: string
}

export type InvitationDraft = {
  guest: {
    fullName: string
  }
  firstDay: DayRsvpState & {
    isSaved: boolean
  }
  secondDay: DayRsvpState
}

export type InvitationSubmissionPayload = {
  'Имя и фамилия гостя': string
  'Первый день: участие': string
  'Второй день: участие': string
  'Первый день: желаете ли Вы выпить за молодых?'?: string
  'Второй день: напитки'?: string
}

const createDayRsvpState = (): DayRsvpState => ({
  attending: '',
  drinks: [],
  otherDrink: '',
})

export const initialInvitationDraft: InvitationDraft = {
  guest: {
    fullName: '',
  },
  firstDay: {
    ...createDayRsvpState(),
    isSaved: false,
  },
  secondDay: createDayRsvpState(),
}

const attendingLabels: Record<Attending, string> = {
  '': 'Не указано',
  yes: 'Да, с радостью приду',
  no: 'Нет, к сожалению, не получится',
}

const drinkLabels = new Map<string, string>(
  drinkOptions.map((option) => [option.value, option.label]),
)

const firstDayToastLabels = new Map<string, string>(
  firstDayToastOptions.map((option) => [option.value, option.label]),
)

function formatAttending(value: Attending): string {
  return attendingLabels[value]
}

function formatDrinks(drinks: string[], otherDrink: string): string {
  if (drinks.length === 0) {
    return 'Не указано'
  }

  const formattedDrinks = drinks.map((drink) => {
    if (drink === 'other') {
      const trimmedOtherDrink = otherDrink.trim()

      return trimmedOtherDrink
        ? trimmedOtherDrink
        : 'Свой вариант'
    }

    return drinkLabels.get(drink) ?? drink
  })

  return formattedDrinks.join(', ')
}

function formatFirstDayToast(drinks: string[]): string {
  const value = drinks[0]

  if (!value) {
    return 'Не указано'
  }

  return firstDayToastLabels.get(value) ?? value
}

export function buildInvitationSubmissionPayload(
  draft: InvitationDraft,
): InvitationSubmissionPayload {
  const payload = {} as InvitationSubmissionPayload

  payload['Имя и фамилия гостя'] = draft.guest.fullName.trim()
  payload['Первый день: участие'] = formatAttending(draft.firstDay.attending)

  if (draft.firstDay.attending !== 'no') {
    payload['Первый день: желаете ли Вы выпить за молодых?'] = formatFirstDayToast(
      draft.firstDay.drinks,
    )
  }

  payload['Второй день: участие'] = formatAttending(draft.secondDay.attending)

  if (draft.secondDay.attending !== 'no') {
    payload['Второй день: напитки'] = formatDrinks(
      draft.secondDay.drinks,
      draft.secondDay.otherDrink,
    )
  }

  return payload
}

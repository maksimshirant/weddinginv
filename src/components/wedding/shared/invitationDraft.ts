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
  secondDay: DayRsvpState & {
    isSubmitted: boolean
  }
}

export type InvitationSubmissionPayload = {
  'Имя и фамилия гостя': string
  'Первый день: участие': string
  'Второй день: участие': string
  'Первый день: желаете ли Вы выпить за молодых?'?: string
  'Второй день: напитки'?: string
}

export type InvitationSubmissionFields = {
  guest_full_name: string
  first_day_attending: string
  second_day_attending: string
  first_day_toast?: string
  second_day_drinks?: string
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
  secondDay: {
    ...createDayRsvpState(),
    isSubmitted: false,
  },
}

function isAttending(value: unknown): value is Attending {
  return value === '' || value === 'yes' || value === 'no'
}

function sanitizeDayRsvpState(value: unknown): DayRsvpState {
  if (!value || typeof value !== 'object') {
    return createDayRsvpState()
  }

  const candidate = value as Partial<DayRsvpState>

  return {
    attending: isAttending(candidate.attending) ? candidate.attending : '',
    drinks: Array.isArray(candidate.drinks)
      ? candidate.drinks.filter((item): item is string => typeof item === 'string')
      : [],
    otherDrink: typeof candidate.otherDrink === 'string' ? candidate.otherDrink : '',
  }
}

export function parseInvitationDraft(value: string | null): InvitationDraft {
  if (!value) {
    return initialInvitationDraft
  }

  try {
    const parsed = JSON.parse(value) as Partial<InvitationDraft>

    return {
      guest: {
        fullName:
          parsed.guest && typeof parsed.guest.fullName === 'string'
            ? parsed.guest.fullName
            : '',
      },
      firstDay: {
        ...sanitizeDayRsvpState(parsed.firstDay),
        isSaved: Boolean(parsed.firstDay?.isSaved),
      },
      secondDay: {
        ...sanitizeDayRsvpState(parsed.secondDay),
        isSubmitted: Boolean(parsed.secondDay?.isSubmitted),
      },
    }
  } catch {
    return initialInvitationDraft
  }
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

export function buildInvitationSubmissionFields(
  draft: InvitationDraft,
): InvitationSubmissionFields {
  const fields: InvitationSubmissionFields = {
    guest_full_name: draft.guest.fullName.trim(),
    first_day_attending: formatAttending(draft.firstDay.attending),
    second_day_attending: formatAttending(draft.secondDay.attending),
  }

  if (draft.firstDay.attending !== 'no') {
    fields.first_day_toast = formatFirstDayToast(draft.firstDay.drinks)
  }

  if (draft.secondDay.attending !== 'no') {
    fields.second_day_drinks = formatDrinks(
      draft.secondDay.drinks,
      draft.secondDay.otherDrink,
    )
  }

  return fields
}

export function buildInvitationSubmissionMessage(
  payload: InvitationSubmissionPayload,
): string {
  return Object.entries(payload)
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n')
}

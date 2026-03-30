import { useEffect, useState } from 'react'
import { WeddingInvitation } from './components/wedding/WeddingInvitation'
import { WeddingInvitationSecondDay } from './components/wedding/WeddingInvitationSecondDay'
import {
  buildInvitationSubmissionPayload,
  type InvitationDraft,
  initialInvitationDraft,
  parseInvitationDraft,
} from './components/wedding/shared/invitationDraft'

type InvitationRoute = 'main' | 'second-day'
const INVITATION_DRAFT_STORAGE_KEY = 'weddingInvitationDraft'

function getInvitationRoute(): InvitationRoute {
  return window.location.hash === '#/second-day' ? 'second-day' : 'main'
}

function App() {
  const [route, setRoute] = useState<InvitationRoute>(() => getInvitationRoute())
  const [draft, setDraft] = useState<InvitationDraft>(() => {
    if (typeof window === 'undefined') {
      return initialInvitationDraft
    }

    return parseInvitationDraft(window.localStorage.getItem(INVITATION_DRAFT_STORAGE_KEY))
  })

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getInvitationRoute())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [route])

  useEffect(() => {
    window.localStorage.setItem(INVITATION_DRAFT_STORAGE_KEY, JSON.stringify(draft))
  }, [draft])

  useEffect(() => {
    if (route !== 'second-day' || draft.firstDay.isSaved) {
      return
    }

    window.location.hash = '#/'
    setRoute('main')
  }, [draft.firstDay.isSaved, route])

  const handleGuestFullNameChange = (fullName: string) => {
    setDraft((current) => ({
      ...current,
      guest: {
        ...current.guest,
        fullName,
      },
    }))
  }

  const handleFirstDayChange = (nextFirstDay: InvitationDraft['firstDay']) => {
    setDraft((current) => ({
      ...current,
      firstDay: nextFirstDay,
    }))
  }

  const handleSecondDayChange = (nextSecondDay: InvitationDraft['secondDay']) => {
    setDraft((current) => ({
      ...current,
      secondDay: nextSecondDay,
    }))
  }

  const handleFirstDaySave = () => {
    setDraft((current) => ({
      ...current,
      firstDay: {
        ...current.firstDay,
        isSaved: true,
      },
    }))
  }

  const handleSubmitInvitation = () => {
    const payload = buildInvitationSubmissionPayload(draft)
    console.group('Финальные данные анкеты')
    console.table([payload])
    console.log(payload)
    console.log(JSON.stringify(payload, null, 2))
    console.groupEnd()
  }

  return route === 'second-day'
    ? (
        <WeddingInvitationSecondDay
          draft={draft}
          onSecondDayChange={handleSecondDayChange}
          onSubmitInvitation={handleSubmitInvitation}
        />
      )
    : (
        <WeddingInvitation
          draft={draft}
          onGuestFullNameChange={handleGuestFullNameChange}
          onFirstDayChange={handleFirstDayChange}
          onFirstDaySave={handleFirstDaySave}
        />
      )
}

export default App

import { useEffect, useState } from 'react'
import { WeddingInvitation } from './components/wedding/WeddingInvitation'
import { WeddingInvitationSecondDay } from './components/wedding/WeddingInvitationSecondDay'
import {
  buildInvitationSubmissionPayload,
  type InvitationDraft,
  initialInvitationDraft,
} from './components/wedding/shared/invitationDraft'

type InvitationRoute = 'main' | 'second-day'

function getInvitationRoute(): InvitationRoute {
  return window.location.hash === '#/second-day' ? 'second-day' : 'main'
}

function App() {
  const [route, setRoute] = useState<InvitationRoute>(() => getInvitationRoute())
  const [draft, setDraft] = useState<InvitationDraft>(initialInvitationDraft)

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
          onGuestFullNameChange={handleGuestFullNameChange}
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

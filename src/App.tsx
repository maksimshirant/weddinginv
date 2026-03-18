import { useEffect, useState } from 'react'
import { WeddingInvitation } from './components/wedding/WeddingInvitation'
import { WeddingInvitationSecondDay } from './components/wedding/WeddingInvitationSecondDay'

type InvitationRoute = 'main' | 'second-day'

function getInvitationRoute(): InvitationRoute {
  return window.location.hash === '#/second-day' ? 'second-day' : 'main'
}

function App() {
  const [route, setRoute] = useState<InvitationRoute>(() => getInvitationRoute())

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

  return route === 'second-day'
    ? <WeddingInvitationSecondDay />
    : <WeddingInvitation />
}

export default App

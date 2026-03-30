import { useEffect, useState } from 'react'
import { DressCodeSection } from './blocks/DressCodeSection'
import { EnvelopeSection } from './blocks/EnvelopeSection'
import { HeroSection } from './blocks/HeroSection'
import { RsvpSection } from './blocks/RsvpSection'
import { TimelineSection } from './blocks/TimelineSection'
import { WishesSection } from './blocks/WishesSection'
import { VenueSection } from './blocks/VenueSection'
import { FooterSection as ConnectionSection } from './blocks2/FooterSection'
import { getPublicAssetUrl } from './shared/getPublicAssetUrl'
import { type InvitationDraft } from './shared/invitationDraft'

const INVITATION_SCROLL_TARGET_STORAGE_KEY = 'weddingInvitationScrollTarget'
const FIRST_DAY_RSVP_SCROLL_TARGET = 'first-day-rsvp'

type WeddingInvitationProps = {
  draft: InvitationDraft
  onGuestFullNameChange: (value: string) => void
  onFirstDayChange: (nextFirstDay: InvitationDraft['firstDay']) => void
  onFirstDaySave: () => void
}

export function WeddingInvitation({
  draft,
  onGuestFullNameChange,
  onFirstDayChange,
  onFirstDaySave,
}: WeddingInvitationProps) {
  const [isInvitationOpen, setIsInvitationOpen] = useState(() => (
    window.sessionStorage.getItem('weddingInvitationOpen') === 'true'
  ))
  const [isEnvelopeOpening, setIsEnvelopeOpening] = useState(false)
  const backgroundImageSrc = getPublicAssetUrl('фон.jpg')
  const secondDayBackgroundImageSrc = getPublicAssetUrl('block2/фон.jpg')

  useEffect(() => {
    window.sessionStorage.setItem('weddingInvitationOpen', String(isInvitationOpen))
  }, [isInvitationOpen])

  useEffect(() => {
    const preloadLinkId = 'second-day-background-preload'
    let preloadLink = document.getElementById(preloadLinkId) as HTMLLinkElement | null

    if (!preloadLink) {
      preloadLink = document.createElement('link')
      preloadLink.id = preloadLinkId
      preloadLink.rel = 'preload'
      preloadLink.as = 'image'
      preloadLink.href = secondDayBackgroundImageSrc
      document.head.appendChild(preloadLink)
    }

    const image = new Image()
    image.decoding = 'async'
    image.src = secondDayBackgroundImageSrc
  }, [secondDayBackgroundImageSrc])

  useEffect(() => {
    if (!isInvitationOpen) {
      return
    }

    const scrollTarget = window.sessionStorage.getItem(INVITATION_SCROLL_TARGET_STORAGE_KEY)

    if (scrollTarget !== FIRST_DAY_RSVP_SCROLL_TARGET) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
      return
    }

    window.sessionStorage.removeItem(INVITATION_SCROLL_TARGET_STORAGE_KEY)

    window.requestAnimationFrame(() => {
      document.getElementById('rsvp-card')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }, [isInvitationOpen])

  const handleOpenEnvelope = () => {
    if (isEnvelopeOpening || isInvitationOpen) {
      return
    }

    setIsEnvelopeOpening(true)

    window.setTimeout(() => {
      setIsInvitationOpen(true)
      setIsEnvelopeOpening(false)
    }, 500)
  }

  const handleSaveFirstDay = () => {
    onFirstDaySave()
    window.location.hash = '#/second-day'
  }

  return (
    <div className="relative min-h-screen text-[#201d1a]">
      <div className="fixed inset-0 -z-10">
        <img
          src={backgroundImageSrc}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {!isInvitationOpen ? (
        <EnvelopeSection
          isOpening={isEnvelopeOpening}
          onOpen={handleOpenEnvelope}
        />
      ) : (
        <main className="px-3 py-5 sm:px-5 sm:py-8 lg:px-7">
          <div className="mx-auto max-w-[560px] space-y-5">
            <HeroSection />
            <TimelineSection />
            <VenueSection />
            <DressCodeSection />
            <WishesSection />
            <ConnectionSection />
            <RsvpSection
              guestFullName={draft.guest.fullName}
              formState={draft.firstDay}
              onGuestFullNameChange={onGuestFullNameChange}
              onChange={onFirstDayChange}
              onSave={handleSaveFirstDay}
            />
          </div>
        </main>
      )}
    </div>
  )
}

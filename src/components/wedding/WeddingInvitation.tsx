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
  const isInvitationSubmitted = draft.secondDay.isSubmitted
  const shouldShowSecondDayButton = isInvitationSubmitted && draft.secondDay.attending === 'yes'

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
        <>
          {shouldShowSecondDayButton ? (
            <a
              href="#/second-day"
              className="fixed bottom-3 right-3 z-20 inline-flex min-h-[42px] items-center gap-2 rounded-full border border-[#e8d3a3]/18 bg-[rgba(113,15,35,0.9)] px-3 py-2 text-[#f7f2eb] shadow-[0_10px_24px_rgba(0,0,0,0.22)] backdrop-blur-md transition hover:bg-[rgba(113,15,35,0.97)] sm:bottom-6 sm:right-6 sm:min-h-[50px] sm:px-4"
            >
              <span className="text-[10px] uppercase tracking-[0.14em] sm:hidden">
                Второй день
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.18em] sm:inline">
                Перейти ко второму дню
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/16 bg-white/10 text-[14px] leading-none">
                →
              </span>
            </a>
          ) : null}

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
                isInvitationSubmitted={isInvitationSubmitted}
                onGuestFullNameChange={onGuestFullNameChange}
                onChange={onFirstDayChange}
                onSave={handleSaveFirstDay}
              />
            </div>
          </main>
        </>
      )}
    </div>
  )
}

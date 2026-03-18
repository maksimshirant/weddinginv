import { useEffect, useState } from 'react'
import { DressCodeSection } from './blocks/DressCodeSection'
import { EnvelopeSection } from './blocks/EnvelopeSection'
import { HeroSection } from './blocks/HeroSection'
import { RsvpSection } from './blocks/RsvpSection'
import { TimelineSection } from './blocks/TimelineSection'
import { WishesSection } from './blocks/WishesSection'
import { VenueSection } from './blocks/VenueSection'
import { getPublicAssetUrl } from './shared/getPublicAssetUrl'
import { type InvitationDraft } from './shared/invitationDraft'

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

  useEffect(() => {
    window.sessionStorage.setItem('weddingInvitationOpen', String(isInvitationOpen))
  }, [isInvitationOpen])

  useEffect(() => {
    if (!isInvitationOpen) {
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
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
            <VenueSection />
            <TimelineSection />
            <DressCodeSection />
            <WishesSection />
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

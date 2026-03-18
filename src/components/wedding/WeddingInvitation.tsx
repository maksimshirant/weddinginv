import { useEffect, useState } from 'react'
import { DressCodeSection } from './blocks/DressCodeSection'
import { EnvelopeSection } from './blocks/EnvelopeSection'
import { FooterSection } from './blocks/FooterSection'
import { HeroSection } from './blocks/HeroSection'
import { RsvpSection } from './blocks/RsvpSection'
import { TimelineSection } from './blocks/TimelineSection'
import { WishesSection } from './blocks/WishesSection'
import { VenueSection } from './blocks/VenueSection'
import { getPublicAssetUrl } from './shared/getPublicAssetUrl'

export function WeddingInvitation() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false)
  const [isEnvelopeOpening, setIsEnvelopeOpening] = useState(false)
  const backgroundImageSrc = getPublicAssetUrl('фон.jpg')

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
            <RsvpSection />
            <FooterSection />
          </div>
        </main>
      )}
    </div>
  )
}

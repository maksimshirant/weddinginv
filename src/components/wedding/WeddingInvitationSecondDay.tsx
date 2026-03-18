import { useEffect } from 'react'
import { DressCodeSection } from './blocks2/DressCodeSection'
import { FooterSection } from './blocks2/FooterSection'
import { HeroSection } from './blocks2/HeroSection'
import { RsvpSection } from './blocks2/RsvpSection'
import { TimelineSection } from './blocks2/TimelineSection'
import { VenueSection } from './blocks2/VenueSection'
import { WishesSection } from './blocks2/WishesSection'
import { getPublicAssetUrl } from './shared/getPublicAssetUrl'

export function WeddingInvitationSecondDay() {
  const backgroundImageSrc = getPublicAssetUrl('block2/фон.jpg')

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [])

  return (
    <div className="relative min-h-screen text-[#201d1a]">
      <div className="fixed inset-0 -z-10">
        <img
          src={backgroundImageSrc}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,240,205,0.12),rgba(101,20,33,0.2)_18%,rgba(42,53,34,0.24)_38%,rgba(33,18,20,0.68)_58%,rgba(16,11,12,0.86)_100%)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.018),rgba(255,255,255,0.018)_2px,transparent_2px,transparent_6px)] opacity-40" />
      </div>

      <a
        href="#/"
        className="fixed left-3 top-3 z-20 inline-flex min-h-[42px] items-center gap-2 rounded-full border border-[#e8d3a3]/18 bg-[rgba(113,15,35,0.9)] px-3 py-2 text-[#f7f2eb] shadow-[0_10px_24px_rgba(0,0,0,0.22)] backdrop-blur-md transition hover:bg-[rgba(113,15,35,0.97)] sm:left-6 sm:top-6 sm:min-h-[50px] sm:px-4"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/16 bg-white/10 text-[14px] leading-none">
          ←
        </span>
        <span className="text-[10px] uppercase tracking-[0.14em] sm:hidden">
          Первый день
        </span>
        <span className="hidden text-[10px] uppercase tracking-[0.18em] sm:inline">
          Вернуться к первому дню
        </span>
      </a>

      <main className="px-3 pb-5 pt-20 sm:px-5 sm:py-8 lg:px-7">
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
    </div>
  )
}

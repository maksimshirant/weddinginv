import { useEffect, useRef, useState } from 'react'
import { CelebrationSection } from './blocks2/CelebrationSection'
import { DressCodeSection } from './blocks2/DressCodeSection'
import { FooterSection } from './blocks2/FooterSection'
import { HeroSection } from './blocks2/HeroSection'
import { RsvpSection } from './blocks2/RsvpSection'
import { TimelineSection } from './blocks2/TimelineSection'
import { VenueSection } from './blocks2/VenueSection'
import { WishesSection } from './blocks2/WishesSection'
import { getPublicAssetUrl } from './shared/getPublicAssetUrl'
import {
  buildInvitationSubmissionPayload,
  type InvitationDraft,
} from './shared/invitationDraft'

type WeddingInvitationSecondDayProps = {
  draft: InvitationDraft
  onGuestFullNameChange: (value: string) => void
  onSecondDayChange: (nextSecondDay: InvitationDraft['secondDay']) => void
  onSubmitInvitation: () => void
}

export function WeddingInvitationSecondDay({
  draft,
  onGuestFullNameChange,
  onSecondDayChange,
  onSubmitInvitation,
}: WeddingInvitationSecondDayProps) {
  const backgroundImageSrc = getPublicAssetUrl('block2/фон.jpg')
  const connectionSectionRef = useRef<HTMLDivElement>(null)
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false)
  const [modalStatus, setModalStatus] = useState<'review' | 'success'>('review')
  const submissionPreview = buildInvitationSubmissionPayload(draft)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [])

  useEffect(() => {
    if (!isSummaryModalOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isSummaryModalOpen])

  const handleSecondDaySubmitted = () => {
    window.setTimeout(() => {
      connectionSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 900)
  }

  const handleOpenSummary = () => {
    setModalStatus('review')
    setIsSummaryModalOpen(true)
  }

  const handleCloseSummary = () => {
    setIsSummaryModalOpen(false)
    setModalStatus('review')
  }

  const handleConfirmSubmit = () => {
    onSubmitInvitation()
    setModalStatus('success')

    window.setTimeout(() => {
      setIsSummaryModalOpen(false)
      setModalStatus('review')
      handleSecondDaySubmitted()
    }, 2000)
  }

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
          <CelebrationSection />
          <VenueSection />
          <TimelineSection />
          <DressCodeSection />
          <WishesSection />
          <RsvpSection
            guestFullName={draft.guest.fullName}
            formState={draft.secondDay}
            onGuestFullNameChange={onGuestFullNameChange}
            onChange={onSecondDayChange}
            onOpenSummary={handleOpenSummary}
          />
          <FooterSection connectionSectionRef={connectionSectionRef} />
        </div>
      </main>

      {isSummaryModalOpen ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-[rgba(17,11,12,0.72)] px-4 py-5 backdrop-blur-sm sm:px-5 sm:py-6">
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-[540px] rounded-[2px] border border-[#b79b68]/24 bg-[rgba(244,236,220,0.98)] px-4 py-4 text-[#281d17] shadow-[0_24px_60px_rgba(17,11,12,0.34)] sm:px-6 sm:py-5"
          >
            {modalStatus === 'success' ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <div className="font-serifDisplay text-[44px] font-light uppercase leading-none tracking-[0.06em] text-[#281d17] sm:text-[54px]">
                  УСПЕШНО
                </div>
                <p className="mt-4 max-w-[320px] text-[13px] leading-[1.65] text-[#281d17]/74 sm:text-[14px]">
                  Анкета отправлена. Через пару секунд вернём вас к блоку связи.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-center font-serifDisplay text-[34px] font-light uppercase leading-[0.95] tracking-[0.08em] text-[#281d17] sm:text-[42px]">
                  ПРОВЕРЬТЕ АНКЕТУ
                </h3>
                <p className="mx-auto mt-2 max-w-[360px] text-center text-[12px] leading-[1.55] text-[#281d17]/72 sm:text-[13px]">
                  Ниже собраны ответы по первому и второму дню. Здесь ничего не редактируется,
                  только проверяется перед отправкой.
                </p>

                <div className="mt-4 grid gap-2 min-[420px]:grid-cols-2">
                  {Object.entries(submissionPreview).map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[2px] border border-[#a48658]/16 bg-[rgba(255,250,242,0.74)] px-3 py-[10px]"
                    >
                      <div className="text-[9px] uppercase tracking-[0.16em] text-[#281d17]/48 sm:text-[10px]">
                        {label}
                      </div>
                      <div className="mt-1 text-[13px] leading-[1.4] text-[#281d17]/88 sm:text-[14px]">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleCloseSummary}
                    className="inline-flex min-h-[46px] w-full items-center justify-center rounded-full border border-[#a48658]/26 bg-transparent px-5 text-[11px] uppercase tracking-[0.16em] text-[#281d17] transition hover:bg-[rgba(165,134,88,0.08)] sm:min-h-[48px] sm:text-[12px]"
                  >
                    Изменить
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmSubmit}
                    className="inline-flex min-h-[46px] w-full items-center justify-center rounded-full border border-[#710f23] bg-[#710f23] px-5 text-[11px] uppercase tracking-[0.16em] text-[#f7f1e8] transition hover:bg-[#5f0c1d] sm:min-h-[48px] sm:text-[12px]"
                  >
                    Отправить
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}

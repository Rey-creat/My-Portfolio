import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import TiltCard from '../animation/tilt-card'
import thesisImage from '../images/thesis-logo.png'

const project = {
  title: 'PPGS Fixed Asset Management',
  category: 'Thesis Project',
  description:
    'A web-based system for the LCCB and managing property and fixed-asset records.',
  image: thesisImage,
  liveUrl: 'https://ppgs-assetory.vercel.app/',
  githubUrl: 'https://github.com/kur0gir1/PPGS-Asset-Management',
}

const projects = [project, null, null, null]

function Project() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || isHovered || hasFocus) return undefined

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % projects.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [hasFocus, isHovered, reduceMotion])

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + projects.length) % projects.length)
  }

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % projects.length)
  }

  return (
    <section
      id="project"
      data-reveal
      className="relative flex min-h-[calc(100vh-82px)] scroll-mt-[82px] items-center overflow-hidden px-8 py-16 max-lg:px-6 max-md:min-h-[calc(100vh-72px)] max-md:px-5 max-md:py-14"
    >
      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="reveal-left mb-10 flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#697243]" />
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#697243]">
                Selected Work
              </p>
            </div>
            <h2 className="text-[clamp(38px,4.5vw,64px)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#171925]">
              Featured
              <span className="block text-[#697243]">Projects.</span>
            </h2>
          </div>
          <p className="max-w-[420px] text-[15px] leading-7 text-[#62665f] max-md:text-left">
            A selection of digital work shaped by thoughtful design,
            responsive development, and purposeful interaction.
          </p>
        </div>

        <div
          className="reveal-right mx-auto mt-8 w-full max-w-[550px] max-md:max-w-[400px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocusCapture={() => setHasFocus(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setHasFocus(false)
            }
          }}
        >
          <div
            aria-label="Featured projects"
            aria-roledescription="carousel"
            className="overflow-hidden"
          >
            <div
              className={`flex ${reduceMotion ? '' : 'transition-transform duration-700 ease-in-out'}`}
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {projects.map((item, index) => (
                <div
                  key={index}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${index + 1} of ${projects.length}`}
                  className="w-full shrink-0 px-3 py-4"
                >
                  <TiltCard className="h-full w-full">
                    {item ? (
                      <article className="group relative flex aspect-square flex-col overflow-hidden rounded-[24px] border border-[#697243]/10 bg-[#f8f7f2] p-5 shadow-[0_18px_44px_rgba(23,25,37,0.08)] backdrop-blur-xl transition-all duration-500 hover:border-[#697243]/25 hover:shadow-[0_24px_54px_rgba(23,25,37,0.14)]">
                        <div className="mb-5 flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[16px] bg-white/70 p-4">
                          <img
                            src={item.image}
                            alt="Assetory asset management logo"
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#697243]">
                          {item.category}
                        </p>
                        <h3 className="mt-2 text-[21px] font-semibold tracking-[-0.02em] text-[#171925]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-6 text-[#62665f]">
                          {item.description}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-3 pt-5">
                          <a
                            href={item.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-full bg-[#171925] px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#262626]"
                          >
                            Visit Project
                          </a>
                          <a
                            href={item.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-[#171925]/15 bg-white/70 px-5 py-3 text-[13px] font-semibold text-[#171925] transition-colors hover:border-[#697243]/40 hover:bg-white"
                          >
                            Visit GitHub
                          </a>
                        </div>
                      </article>
                    ) : (
                      <article
                        aria-label="Empty project card"
                        className="aspect-square rounded-[24px] border border-[#697243]/10 bg-[#f8f7f2] shadow-[0_18px_44px_rgba(23,25,37,0.08)]"
                      />
                    )}
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous project"
              onClick={showPrevious}
              className="grid size-10 place-items-center rounded-full border border-[#171925]/15 bg-white/70 text-[#171925] transition-colors hover:bg-white"
            >
              <span aria-hidden="true">←</span>
            </button>
            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to project slide ${index + 1}`}
                  aria-current={activeSlide === index ? 'true' : undefined}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === index
                      ? 'w-6 bg-[#697243]'
                      : 'w-2.5 bg-[#697243]/30 hover:bg-[#697243]/55'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next project"
              onClick={showNext}
              className="grid size-10 place-items-center rounded-full border border-[#171925]/15 bg-white/70 text-[#171925] transition-colors hover:bg-white"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
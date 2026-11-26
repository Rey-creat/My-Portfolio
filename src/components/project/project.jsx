import { useRef, useState } from 'react'
import TiltCard from '../animation/tilt-card'

const projects = [
  {
    number: '01',
    title: 'Creative Portfolio',
    category: 'Web Development',
    description:
      'A responsive portfolio experience built with a clear visual system and smooth interactions.',
  },
  {
    number: '02',
    title: 'Modern Dashboard',
    category: 'UI / UX',
    description:
      'A clean dashboard concept focused on data clarity, usability, and professional presentation.',
  },
  {
    number: '03',
    title: 'Mobile Experience',
    category: 'React Native',
    description:
      'A mobile-first concept designed for speed, accessibility, and intuitive daily use.',
  },
]

function Project() {
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const moveProject = (direction) => {
    const carousel = carouselRef.current
    if (!carousel) return

    const nextIndex = Math.max(
      0,
      Math.min(projects.length - 1, activeIndex + direction),
    )

    carousel.scrollTo({
      left: nextIndex * carousel.clientWidth,
      behavior: 'smooth',
    })
  }

  const updateActiveProject = () => {
    const carousel = carouselRef.current
    if (!carousel || !carousel.clientWidth) return

    const index = Math.round(carousel.scrollLeft / carousel.clientWidth)
    setActiveIndex(Math.min(projects.length - 1, index))
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
          ref={carouselRef}
          className="reveal-right mx-auto mt-8 flex w-full max-w-[860px] snap-x snap-mandatory overflow-x-auto scroll-smooth"
          onScroll={updateActiveProject}
          role="region"
          aria-label="Featured projects"
          tabIndex={0}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="w-full shrink-0 snap-center px-3 py-4"
            >
              <TiltCard className="h-full w-full">
                <article className="group relative min-h-[460px] overflow-hidden rounded-[28px] border border-white/70 bg-white/55 p-6 shadow-[0_18px_44px_rgba(23,25,37,0.08)] backdrop-blur-xl transition-all duration-500 hover:border-[#697243]/25 hover:shadow-[0_24px_54px_rgba(23,25,37,0.14)]">
                  <div className="relative h-[280px] overflow-hidden rounded-[20px] border border-[#171925]/8 bg-[linear-gradient(145deg,#d9ff72_0%,#84e8ce_55%,#8b7cff_120%)]">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.38),transparent_55%,rgba(23,25,37,0.12))]" />
                    <div className="absolute bottom-5 left-5 right-5 h-[72%] rounded-t-[16px] border border-white/60 bg-[#171925]/90 shadow-[0_18px_40px_rgba(23,25,37,0.18)] transition-transform duration-700 group-hover:-translate-y-2" />
                    <div className="absolute bottom-8 left-8 right-8 h-[58%] rounded-t-[12px] bg-white/90 transition-transform duration-700 group-hover:-translate-y-3" />
                    <span className="absolute right-4 top-4 text-[11px] font-bold tracking-[0.16em] text-[#171925]/55">
                      {project.number}
                    </span>
                  </div>

                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#697243]">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-[21px] font-semibold tracking-[-0.02em] text-[#171925]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#62665f]">
                    {project.description}
                  </p>
                </article>
              </TiltCard>
            </div>
          ))}
        </div>

        <div className="reveal-right mx-auto flex w-full max-w-[836px] items-center justify-between px-3">
          <p
            className="text-[12px] font-bold tracking-[0.16em] text-[#62665f]"
            aria-live="polite"
          >
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(projects.length).padStart(2, '0')}
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous project"
              disabled={activeIndex === 0}
              onClick={() => moveProject(-1)}
              className="grid size-11 place-items-center rounded-full border border-[#171925]/15 bg-white/70 text-[20px] text-[#171925] shadow-[0_8px_24px_rgba(23,25,37,0.06)] transition-all hover:-translate-y-0.5 hover:border-[#697243]/40 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              aria-label="Next project"
              disabled={activeIndex === projects.length - 1}
              onClick={() => moveProject(1)}
              className="grid size-11 place-items-center rounded-full border border-[#171925]/15 bg-white/70 text-[20px] text-[#171925] shadow-[0_8px_24px_rgba(23,25,37,0.06)] transition-all hover:-translate-y-0.5 hover:border-[#697243]/40 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
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
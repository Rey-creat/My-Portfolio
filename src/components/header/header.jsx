import { useEffect, useState } from 'react'
import logoImage from '../images/logo.png'

const navItems = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Education', href: 'education' },
  { label: 'Services', href: 'services' },
  { label: 'Project', href: 'project' },
  { label: 'Contact', href: 'contacts' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState(
    window.location.hash || '#home',
  )

  useEffect(() => {
    const syncActiveLink = () => {
      setActiveHref(window.location.hash || '#home')
    }

    window.addEventListener('hashchange', syncActiveLink)
    return () => window.removeEventListener('hashchange', syncActiveLink)
  }, [])

  useEffect(() => {
    const syncHeaderState = () => setScrolled(window.scrollY > 16)
    syncHeaderState()
    window.addEventListener('scroll', syncHeaderState, { passive: true })
    return () => window.removeEventListener('scroll', syncHeaderState)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`)
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const selectLink = (href) => {
    setActiveHref(href)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] h-[82px] w-full overflow-visible font-[Inter,'SF_Pro_Display','Segoe_UI',sans-serif] transition-all duration-500 max-md:h-[72px] ${
        scrolled
          ? 'bg-[#11131a]/78 shadow-[0_16px_50px_rgba(10,12,18,0.22)] backdrop-blur-2xl'
          : 'bg-[#11131a]/92 shadow-[0_8px_30px_rgba(10,12,18,0.10)] backdrop-blur-xl'
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-60'
        }`}
        style={{
          background:
            'linear-gradient(90deg, transparent 4%, rgba(217,255,114,0.32) 28%, rgba(255,255,255,0.10) 50%, rgba(139,124,255,0.28) 72%, transparent 96%)',
        }}
      />

      <div className="relative mx-auto grid h-full w-full max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-12 px-12 max-lg:gap-7 max-lg:px-6 max-md:gap-0 max-md:px-4 max-md:grid-cols-[1fr_auto]">
        <div
          className="relative -ml-7 grid size-[55px] justify-self-start place-items-center overflow-hidden rounded-full border-2 border-[#d9ff72]/85 bg-[#11131a] no-underline shadow-[0_0_18px_rgba(217,255,114,0.24)] max-md:-ml-1 max-md:size-12"
          aria-hidden="true"
        >
          <img
            src={logoImage}
            alt=""
            className="absolute left-1/2 top-1/2 size-[80px] max-w-none -translate-x-1/2 -translate-y-1/2 max-md:size-[92px]"
          />
        </div>

        <nav
          className={`flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.035] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md max-md:absolute max-md:left-0 max-md:right-0 max-md:top-[62px] max-md:grid max-md:gap-1 max-md:rounded-2xl max-md:border-white/10 max-md:bg-[#11131a]/98 max-md:p-2.5 max-md:shadow-[0_18px_50px_rgba(15,23,42,0.32)] max-md:backdrop-blur-2xl max-md:transition-all max-md:duration-300 ${
            menuOpen
              ? 'max-md:visible max-md:translate-y-2 max-md:scale-100 max-md:opacity-100'
              : 'max-md:invisible max-md:-translate-y-2 max-md:scale-[0.97] max-md:opacity-0'
          }`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              className={`relative min-w-[88px] rounded-full px-5 py-3 text-center text-[14px] font-medium tracking-[0.025em] no-underline transition-all duration-300 active:scale-95 max-md:w-full max-md:rounded-[10px] max-md:px-3.5 max-md:py-3 max-md:text-[15px] max-md:font-semibold ${
                activeHref === item.href
                  ? 'bg-white/[0.11] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_22px_rgba(0,0,0,0.16)]'
                  : 'text-white/55 hover:bg-white/[0.06] hover:text-white'
              }`}
              href={item.href}
              aria-current={activeHref === item.href ? 'page' : undefined}
              onClick={() => selectLink(item.href)}
            >
              <span className="relative">
                {item.label}
                {activeHref === item.href && (
                  <span className="absolute -bottom-[7px] left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[#d9ff72] shadow-[0_0_12px_rgba(217,255,114,0.90)] max-md:hidden" />
                )}
              </span>
            </a>
          ))}
        </nav>

        <a
          className="group inline-flex min-h-[46px] items-center justify-self-end gap-3 rounded-full border border-[#d9ff72]/35 bg-[#d9ff72] px-6 text-[14px] font-semibold tracking-[0.015em] text-[#171a20] no-underline shadow-[0_12px_28px_rgba(217,255,114,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e3ff92] hover:shadow-[0_16px_34px_rgba(217,255,114,0.20)] active:scale-95 max-md:hidden"
          href="#contacts"
          onClick={() => selectLink('#contacts')}
        >
          Let&apos;s Talk
          <span className="text-[17px] transition-transform duration-180 group-hover:translate-x-0.5" aria-hidden="true">
            ↗
          </span>
        </a>

        <button
          className="hidden size-[44px] justify-self-end place-items-center content-center gap-[7px] rounded-full border border-white/10 bg-white/8 p-0 text-white max-md:grid"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-0.5 w-[18px] rounded-full bg-[#d9ff72] transition-transform duration-180 ${
              menuOpen ? 'translate-y-[4.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-[18px] rounded-full bg-[#d9ff72] transition-transform duration-180 ${
              menuOpen ? ' -translate-y-1.5 -rotate-45' : ''
            }`}
          />
        </button>
      </div>
    </header>
  )
}

export default Header
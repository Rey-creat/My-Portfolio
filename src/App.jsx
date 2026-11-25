import { useEffect } from 'react'
import Header from './components/header/header'
import Home from './components/home/home'
import About from './components/about/about'
import Services from './components/services/services'
import Project from './components/project/project'
import Contact from './components/contact/contact'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.35,
        rootMargin: '-8% 0px -8% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-[#f4f3ed]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="ambient-grid absolute inset-0" />
        <div className="ambient-glow ambient-glow-one absolute -left-32 top-[8%] size-[480px] rounded-full bg-[#d9ff72]/24 blur-[100px]" />
        <div className="ambient-glow ambient-glow-two absolute -right-40 top-[28%] size-[520px] rounded-full bg-[#8b7cff]/16 blur-[110px]" />
        <div className="ambient-glow ambient-glow-three absolute bottom-[-260px] left-[38%] size-[620px] rounded-full bg-[#84e8ce]/18 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.44),transparent_35%,rgba(255,255,255,0.18)_70%,transparent)]" />
      </div>

      <Header />
      <main className="relative z-10 pt-[82px] max-md:pt-[72px]">
        <Home />
        <About />
        <Services />
        <Project />
        <Contact />
      </main>
    </div>
  )
}

export default App

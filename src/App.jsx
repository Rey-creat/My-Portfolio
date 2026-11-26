import { useEffect } from 'react'
import { MotionConfig } from 'motion/react'
import CursorTrail from './components/animation/cursor-trail'
import Header from './components/header/header'
import Home from './components/home/home'
import About from './components/about/about'
import Education from './components/education/education'
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
        threshold: 0.01,
        rootMargin: '-8% 0px -8% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative isolate min-h-screen overflow-x-clip bg-[#f4f3ed]">
        <Header />
        <main className="relative z-10 pt-[82px] max-md:pt-[72px]">
          <Home />
          <About />
          <Education />
          <Services />
          <Project />
          <Contact />
        </main>
        <CursorTrail />
      </div>
    </MotionConfig>
  )
}

export default App

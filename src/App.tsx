import { Suspense, lazy, memo, useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { CustomCursor } from './components/cursor/CustomCursor'
import { Hero } from './components/sections/Hero'
import { Metrics } from './components/sections/Metrics'
import { useLenis } from './hooks/useLenis'
import { useScrollProgress } from './hooks/useScrollProgress'
import { useStore } from './store/useStore'

const Experience = lazy(() => import('./components/sections/Experience').then(module => ({ default: module.Experience })))
const Skills = lazy(() => import('./components/sections/Skills').then(module => ({ default: module.Skills })))
const Projects = lazy(() => import('./components/sections/Projects').then(module => ({ default: module.Projects })))
const Certifications = lazy(() => import('./components/sections/Certifications').then(module => ({ default: module.Certifications })))
const Contact = lazy(() => import('./components/sections/Contact').then(module => ({ default: module.Contact })))

/** Root layout with smooth scroll, lazy sections and active section observer. */
function AppComponent() {
  const setActiveSection = useStore(state => state.setActiveSection)
  useLenis()
  useScrollProgress()

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [setActiveSection])

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Suspense fallback={<div className="bg-paper px-6 py-20 text-center text-mist">Loading section...</div>}>
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default memo(AppComponent)

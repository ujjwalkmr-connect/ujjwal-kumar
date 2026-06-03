import { memo, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '../../store/useStore'

const links = [
  { label: 'Impact', href: '#metrics' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' }
]

/** Fixed glass navigation with active-section styling. */
function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useStore(state => state.activeSection)
  const setCursorHover = useStore(state => state.setCursorHover)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-32px))] -translate-x-1/2 rounded-full border border-white/70 bg-paper/85 px-4 shadow-soft backdrop-blur-2xl transition-all ${scrolled ? 'h-12' : 'h-16'}`}
    >
      <nav className="flex h-full items-center justify-between">
        <a href="#hero" className="font-heading text-xl font-extrabold text-ink" onMouseEnter={() => setCursorHover(true)} onMouseLeave={() => setCursorHover(false)}>
          UK<span className="text-teal-2">.</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(link => {
            const key = link.href.replace('#', '')
            return (
              <a key={link.href} href={link.href} onMouseEnter={() => setCursorHover(true)} onMouseLeave={() => setCursorHover(false)} className={`text-sm font-medium transition ${activeSection === key ? 'text-teal-2' : 'text-ink-3 hover:text-teal-2'}`}>
                {link.label}
              </a>
            )
          })}
        </div>
        <a href="#contact" onMouseEnter={() => setCursorHover(true)} onMouseLeave={() => setCursorHover(false)} className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal">
          Let&apos;s connect →
        </a>
      </nav>
    </motion.header>
  )
}

export const Navbar = memo(NavbarComponent)

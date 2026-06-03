import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Linkedin, ArrowDown } from 'lucide-react'
import { memo, useEffect, useRef } from 'react'
import { HeroScene } from '../../scenes/HeroScene'
import { useStore } from '../../store/useStore'
import { fadeUp, stagger } from '../../animations/variants'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  ['5.2×', 'Lead growth'],
  ['65%', 'Lower CPL'],
  ['<5m', 'Response SLA'],
  ['20+', 'Automations'],
]

function HeroComponent() {
  const sectionRef = useRef<HTMLElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const photoCardRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const setMouse = useStore(state => state.setMouse)

  const imageUrl = `${import.meta.env.BASE_URL}ujjwal_photo.png`
  const fallbackUrl = `${import.meta.env.BASE_URL}photo-placeholder.svg`

  useEffect(() => {
    const section = sectionRef.current
    const visual = visualRef.current
    const text = textRef.current

    if (!section || !visual || !text) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        visual,
        { y: 40, opacity: 0, scale: 0.94 },
        { y: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out' }
      )

      gsap.to(visual, {
        y: -120,
        scale: 0.88,
        opacity: 0.42,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to(text, {
        y: -70,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '70% top',
          scrub: 1,
        },
      })

      gsap.fromTo(
        '.hero-stat-card',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.hero-stat-grid',
            start: 'top 82%',
          },
        }
      )
    }, section)

    return () => {
      ctx.revert()
    }
  }, [])

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setMouse(event.clientX, event.clientY)

      const card = photoCardRef.current
      if (!card) return

      const rect = card.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      const rotateY = ((x / rect.width) - 0.5) * 18
      const rotateX = -((y / rect.height) - 0.5) * 18

      gsap.to(card, {
        rotateX,
        rotateY,
        x: ((event.clientX / window.innerWidth) - 0.5) * 24,
        y: ((event.clientY / window.innerHeight) - 0.5) * 18,
        duration: 0.55,
        ease: 'power3.out',
      })
    }

    const reset = () => {
      const card = photoCardRef.current
      if (!card) return

      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.45)',
      })
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', reset)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', reset)
    }
  }, [setMouse])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#060B16] px-5 pt-28 text-white md:px-10 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(103,232,249,0.22),transparent_28%),radial-gradient(circle_at_42%_42%,rgba(129,140,248,0.22),transparent_24%),linear-gradient(180deg,#060B16_0%,#0A1020_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[31rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/10" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          ref={textRef}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-cyan-300 backdrop-blur-xl"
          >
            ⚡ Growth & RevOps Architect · 9+ Years
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-[clamp(4.6rem,8.5vw,8.7rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.07em]"
          >
            Ujjwal
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-teal-2 to-indigo-300 bg-clip-text text-transparent">
              Kumar
            </span>
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="mt-6 max-w-3xl text-2xl font-bold leading-tight text-white md:text-4xl"
          >
            Building predictable,{' '}
            <span className="text-cyan-300">automated engines</span> for scale.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
          >
            I lead Performance Marketing, RevOps and AI automation across healthcare
            growth systems. I build acquisition, CRM and automation stacks that
            compound: 5.2× lead growth, 65% lower CPL, and under-five-minute
            response across every channel.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <a
              href="mailto:ujjwalkmr@outlook.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-indigo-300 px-6 py-3 text-sm font-bold text-[#07101d] shadow-[0_18px_60px_rgba(96,165,250,0.35)] transition hover:-translate-y-1"
            >
              <Mail size={16} /> Email me
            </a>

            <a
              href="tel:+917762903717"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/50"
            >
              <Phone size={16} /> +91 77629 03717
            </a>

            <a
              href="https://linkedin.com/in/ujjwal-kmr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/50"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-cyan-300" /> Ranchi, India
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail size={15} className="text-cyan-300" /> ujjwalkmr@outlook.com
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="hero-stat-grid mt-12 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4"
          >
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="hero-stat-card rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl"
              >
                <div className="font-heading text-3xl font-extrabold text-cyan-300">
                  {value}
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div
          ref={visualRef}
          className="relative mx-auto h-[650px] w-full max-w-[560px] [perspective:1200px]"
        >
          <div className="absolute inset-0 rounded-[3.4rem] bg-cyan-300/20 blur-[95px]" />
          <div className="absolute inset-10 rounded-[3rem] bg-indigo-400/20 blur-[80px]" />

          <div className="absolute inset-0 z-0">
            <HeroScene />
          </div>

          <div
            ref={photoCardRef}
            className="absolute left-1/2 top-1/2 z-10 w-[76%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2.5rem] border border-white/15 bg-slate-950 shadow-[0_35px_140px_rgba(103,232,249,0.22)] will-change-transform [transform-style:preserve-3d]"
          >
            <img
              src={imageUrl}
              alt="Ujjwal Kumar"
              className="h-[475px] w-full object-cover object-top"
              onError={event => {
                event.currentTarget.src = fallbackUrl
              }}
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(6,11,22,0.95)_100%)]" />

            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-[#07101d]/82 p-5 backdrop-blur-2xl [transform:translateZ(70px)]">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                Currently
              </p>
              <p className="mt-1 font-heading text-xl font-extrabold leading-tight">
                Head of Digital Marketing & Growth
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Ankuram IVF · Blossom · Medica365
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-16 z-20 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-xl">
            Move mouse · 3D parallax
          </div>

          <a
            href="#metrics"
            className="absolute bottom-6 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-300 backdrop-blur-xl transition hover:border-cyan-300/50 hover:text-cyan-300"
          >
            Scroll to impact <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

export const Hero = memo(HeroComponent)

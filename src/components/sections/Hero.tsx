import { motion } from 'framer-motion'
import { memo } from 'react'
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react'
import { HeroScene } from '../../scenes/HeroScene'
import { fadeUp, stagger } from '../../animations/variants'

const stats = [
  ['5.2×', 'Lead growth'],
  ['65%', 'Lower CPL'],
  ['<5m', 'Response SLA'],
  ['20+', 'Automations'],
]

function HeroComponent() {
  const imageUrl = `${import.meta.env.BASE_URL}ujjwal_photo.png`
  const fallbackUrl = `${import.meta.env.BASE_URL}photo-placeholder.svg`

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#070d1d] px-5 pt-28 text-white md:px-10 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(90,132,255,0.28),transparent_30%),radial-gradient(circle_at_35%_25%,rgba(13,158,143,0.18),transparent_28%),linear-gradient(180deg,#070d1d_0%,#091020_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
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
            className="font-heading text-[clamp(4.2rem,8vw,8rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.06em]"
          >
            Ujjwal{' '}
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
            I lead Performance Marketing, RevOps and AI automation across
            healthcare growth systems. Across my tenure, I have built paid
            acquisition, CRM and automation stacks that compound: 5.2× lead
            growth, 65% lower CPL, and under-five-minute response across every
            channel.
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
            className="mt-12 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4"
          >
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl"
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

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.85, ease: 'easeOut' }}
          className="relative mx-auto h-[620px] w-full max-w-[520px]"
        >
          <div className="absolute inset-0 rounded-[3rem] bg-cyan-300/20 blur-[90px]" />
          <div className="absolute inset-8 rounded-[2.6rem] bg-indigo-400/20 blur-[70px]" />

          <div className="absolute inset-0">
            <HeroScene />
          </div>

          <div className="absolute inset-x-10 top-16 overflow-hidden rounded-[2.4rem] border border-white/15 bg-slate-900 shadow-[0_35px_120px_rgba(96,165,250,0.28)]">
            <img
              src={imageUrl}
              alt="Ujjwal Kumar"
              className="h-[430px] w-full object-cover object-top"
              onError={event => {
                event.currentTarget.src = fallbackUrl
              }}
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,13,29,0.92)_100%)]" />

            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-[#07101d]/80 p-5 backdrop-blur-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                Currently
              </p>
              <p className="mt-1 font-heading text-xl font-extrabold">
                Head of Digital Marketing & Growth
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Ankuram IVF · Blossom · Medica365
              </p>
            </div>
          </div>

          <div className="absolute -right-3 top-10 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-xl">
            Interactive 3D
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export const Hero = memo(HeroComponent)

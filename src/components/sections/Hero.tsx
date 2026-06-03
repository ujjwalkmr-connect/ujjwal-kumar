cat > src/components/sections/Hero.tsx <<'EOF'
import { motion } from 'framer-motion'
import { memo } from 'react'
import { HeroScene } from '../../scenes/HeroScene'
import { fadeUp, stagger } from '../../animations/variants'

const heroStats = [
  ['5.2×', 'Lead growth'],
  ['65%', 'CPL reduction'],
  ['<5m', 'Response time'],
  ['₹10L+', 'Monthly budget'],
]

function HeroComponent() {
  const imageUrl = `${import.meta.env.BASE_URL}ujjwal_photo.png`
  const fallbackUrl = `${import.meta.env.BASE_URL}photo-placeholder.svg`

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#070C11] px-5 pt-28 text-white md:px-10 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(13,158,143,0.28),transparent_32%),radial-gradient(circle_at_20%_70%,rgba(200,137,42,0.18),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-teal-2 backdrop-blur-xl"
          >
            <span className="h-px w-10 bg-teal-2" />
            Growth Architect · 9+ Years
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-[clamp(4.8rem,11vw,9.8rem)] font-extrabold uppercase leading-[0.78] tracking-[-0.085em]"
          >
            Ujjwal
            <br />
            <span className="relative inline-block text-teal-2">
              Kumar
              <span className="absolute -bottom-3 left-3 h-3 w-[88%] -rotate-1 rounded-full bg-gold" />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-9 max-w-2xl text-lg leading-8 text-pale md:text-xl"
          >
            Senior Growth & Performance Marketing Leader building acquisition,
            conversion, automation, and revenue systems across healthcare, BFSI,
            and real estate.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-teal-2 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-ink shadow-[0_18px_60px_rgba(13,158,143,0.38)] transition hover:-translate-y-1 hover:bg-white"
            >
              Get in touch →
            </a>

            <a
              href="#experience"
              className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-teal-2 hover:text-teal-2"
            >
              View work ↓
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4"
          >
            {heroStats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
              >
                <div className="font-heading text-3xl font-extrabold text-teal-2">{value}</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-pale">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.85, ease: 'easeOut' }}
          className="relative mx-auto h-[680px] w-full max-w-[560px]"
        >
          <div className="absolute inset-8 rounded-[3.5rem] bg-teal-2/20 blur-3xl" />
          <div className="absolute inset-0 rounded-[3.5rem] border border-white/10 bg-white/[0.045] shadow-[0_40px_140px_rgba(0,0,0,0.45)] backdrop-blur-2xl" />

          <HeroScene />

          <div className="absolute inset-x-10 bottom-10 top-16 overflow-hidden rounded-[3rem] border border-white/15 bg-[#101922] shadow-2xl">
            <img
              src={imageUrl}
              alt="Ujjwal Kumar"
              className="h-full w-full object-cover object-top opacity-95"
              onError={event => {
                event.currentTarget.src = fallbackUrl
              }}
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(7,12,17,0.88)_100%)]" />

            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="rounded-3xl border border-white/10 bg-black/45 p-5 backdrop-blur-2xl">
                <p className="font-heading text-2xl font-extrabold">Ujjwal Kumar</p>
                <p className="mt-1 text-sm text-pale">
                  Growth Architect · Performance Marketing · RevOps
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-2 top-6 rounded-full border border-teal-2/30 bg-teal-2/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-2 backdrop-blur-xl">
            Interactive 3D
          </div>

          <div className="absolute -left-4 bottom-24 rounded-3xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur-2xl">
            <div className="font-heading text-4xl font-extrabold text-gold">20+</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-pale">
              Automation workflows
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export const Hero = memo(HeroComponent)
EOF
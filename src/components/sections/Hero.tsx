import { memo } from 'react'
import { motion } from 'framer-motion'
import { HeroScene } from '../../scenes/HeroScene'
import { fadeUp, stagger } from '../../animations/variants'
import { AnimatedCounter } from '../ui/AnimatedCounter'

const stats = [
  { value: 5.2, suffix: '×', title: 'Qualified lead volume growth', note: 'Over 12 months, Meta + Google', dark: true, decimals: 1 },
  { value: 65, suffix: '%', title: 'Reduction in blended CPL', note: 'Alongside 25% CPA reduction' },
  { value: 10, prefix: '₹', suffix: 'L+', title: 'Monthly marketing budget', note: 'Across 5 healthcare centres' },
  { value: 20, suffix: '+', title: 'Automation workflows', note: 'n8n · Make · Zapier' }
]

/** Landing section with animated copy, photo card, 3D scene and metric cards. */
function HeroComponent() {
  return (
    <section id="hero" className="min-h-screen bg-paper px-6 pb-20 pt-32 md:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-teal">
            <span className="h-px w-12 bg-teal-2" /> Growth Architect · 9+ Years
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-heading text-6xl font-extrabold leading-[0.88] tracking-[-0.06em] text-ink md:text-8xl">
            Ujjwal<br />
            <span className="relative text-teal-2">
              Kumar
              <span className="absolute -bottom-2 left-1 h-2 w-[92%] rounded-full bg-gold/80" />
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg leading-8 text-ink-3">
            Senior Growth & Performance Marketing Leader driving scalable acquisition, conversion, and revenue growth across healthcare, BFSI, and real estate. Currently leading multi-brand growth operations across five centres.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-teal px-6 py-3 font-semibold text-white shadow-glow transition hover:bg-teal-2">Get in touch →</a>
            <a href="#experience" className="rounded-full border border-ink/15 bg-white px-6 py-3 font-semibold text-ink transition hover:border-teal-2 hover:text-teal-2">View work ↓</a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4 rounded-3xl border border-white bg-white/70 p-4 shadow-soft backdrop-blur">
            <img src="./ujjwal-photo.jpg" onError={event => { event.currentTarget.src = './photo-placeholder.svg' }} alt="Ujjwal Kumar" className="h-20 w-20 rounded-2xl object-cover" />
            <div>
              <p className="font-heading text-xl font-bold text-ink">Tech-savvy growth operator</p>
              <p className="mt-1 text-sm text-mist">Performance marketing · RevOps · Automation · AI workflows</p>
            </div>
          </motion.div>
        </motion.div>

        <div>
          <HeroScene />
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <div key={stat.title} className={`rounded-[1.5rem] border p-5 shadow-soft ${stat.dark ? 'sm:col-span-2 border-ink bg-ink text-white' : 'border-white bg-white text-ink'}`}>
                <div className={`font-heading text-4xl font-extrabold ${stat.dark ? 'text-teal-2' : 'text-teal'}`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} decimals={stat.decimals} />
                </div>
                <p className="mt-2 font-semibold">{stat.title}</p>
                <p className={`mt-1 text-sm ${stat.dark ? 'text-pale' : 'text-mist'}`}>{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export const Hero = memo(HeroComponent)

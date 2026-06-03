import { memo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionLabel } from '../ui/SectionLabel'

const items = [
  {
    role: 'Head of Digital Marketing & Growth',
    company: 'Ankuram IVF · Blossom Maternity & Child Care · Medica365',
    context: 'Multi-brand IVF & fertility healthcare group · 5 centres · ₹10L+ monthly budget',
    period: 'Jan 2022 – Present',
    bullets: [
      '5.2× lead growth — Designed and scaled Meta + Google acquisition engine reducing blended CPL by 65% and CPA by 25% over 12 months through structured intent targeting, negative keyword frameworks, and disciplined A/B experimentation',
      'Architected unified conversion funnel (Ad → LP → WhatsApp/Call → Telecalling → Consultation → Treatment) lifting lead-to-consult by 18pp and consult-to-treatment by 9pp',
      'Built automation stack (n8n/Make/Zapier) ingesting 100% leads in near-real-time, cutting first-response from 45–60 min to under 5 min, reducing lead leakage by 30–40%',
      'Deployed centre-wise and agent-wise lead assignment with Tata Smartflo telephony, boosting contact rate by 20%',
      'Led IVF-specific SEO and AEO roadmap driving 70–90% YoY growth in organic IVF-intent sessions, top-3 positions for core fertility keywords',
      'Built and managed team of 8 + 3 agency relationships, scaling output 2× without proportional headcount growth'
    ]
  },
  {
    role: 'Marketing Manager',
    company: 'Homeline Builders',
    context: 'Residential real estate developer',
    period: 'Jul 2021 – Dec 2021',
    bullets: [
      'Managed Meta + Google campaigns for project launches, reducing CPL ~30% through creative and targeting experiments',
      'Established data-led performance reviews using campaign and CRM metrics, reallocating spend across micro-markets',
      'Executed integrated digital and on-ground initiatives maintaining consistent brand messaging across multiple projects'
    ]
  },
  {
    role: 'Projects Manager',
    company: 'RIAOM Services Pvt. Ltd.',
    context: 'BFSI, government programs, social enterprise',
    period: 'Jun 2017 – Jun 2021',
    bullets: [
      'Spearheaded launch and 5-state expansion of Saral Pe FinTech, onboarding 1,200+ retail banking merchants',
      'Onboarded 350+ retail banking kiosks across Jharkhand for financial inclusion',
      'Led COVID-19 emergency operations for Ranchi District Administration: mobilised PPE manufacturers, managed 100+ person delivery fleet'
    ]
  }
]

function ExperienceComponent() {
  const [open, setOpen] = useState(0)

  return (
    <section id="experience" className="bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>Career</SectionLabel>
        <h2 className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-ink md:text-6xl">Professional Experience</h2>
        <div className="mt-10 divide-y divide-pale/60 rounded-[2rem] border border-pale/70 bg-white shadow-soft">
          {items.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.role} className="p-6 md:p-8">
                <button onClick={() => setOpen(isOpen ? -1 : index)} className="flex w-full items-start justify-between gap-6 text-left">
                  <div>
                    <p className="font-heading text-2xl font-bold text-ink">{item.role}</p>
                    <p className="mt-1 font-semibold text-teal">{item.company}</p>
                    <p className="mt-1 text-sm text-mist">{item.context}</p>
                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-gold">{item.period}</p>
                  </div>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-3xl text-teal-2">+</motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
                      <ul className="mt-6 space-y-4 text-ink-3">
                        {item.bullets.map(bullet => <li key={bullet} className="leading-7">→ {bullet}</li>)}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export const Experience = memo(ExperienceComponent)

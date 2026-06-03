import { memo } from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../ui/SectionLabel'
import { cardReveal, stagger } from '../../animations/variants'

const cards = [
  ['Automation', 'Automation-First Marketing Org', 'Orchestrated 20+ production workflows (lead capture, routing, alerts, reminders, reactivation) across n8n/Make/Zapier — scaling marketing output 2× without proportional headcount growth. First-response SLA dropped from 45–60 min to under 5 min.'],
  ['SEO / AEO', 'AEO & AI-Search Alignment', 'Reframed content strategy around conversational fertility queries, answer snippets, and AI-assistant readability — supporting visibility in zero-click, AI-summary, and local-intent results. Drove 70–90% YoY organic growth.'],
  ['FinTech', 'Saral Pe FinTech Network', 'Led end-to-end product launch and 5-state expansion, onboarding 1,200+ retail banking merchants with full lifecycle support across growth marketing, vendor alignment, and merchant management.'],
  ['Public Health', 'Telemedicine Grid Deployment', 'Led deployment in partnership with MedTel Healthcare across Latehar, Nagri, and Ranchi districts — demonstrating viability of tech-enabled remote diagnosis in underserved Jharkhand.']
]

function ProjectsComponent() {
  return (
    <section id="projects" className="bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Work</SectionLabel>
        <h2 className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-ink md:text-6xl">Key Projects</h2>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="mt-10 grid gap-5 md:grid-cols-2">
          <motion.article variants={cardReveal} className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-soft md:col-span-2">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-teal-2/20 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_220px] md:items-center">
              <div>
                <span className="rounded-full bg-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-teal-2">Healthcare Growth</span>
                <h3 className="mt-6 font-heading text-3xl font-bold">IVF Growth Engine Build-out</h3>
                <p className="mt-4 max-w-3xl leading-8 text-pale">Designed a fully integrated system mapping every campaign to CRM pipeline stages, telecalling workflows, and clinical outcomes — enabling weekly optimisation against actual treatments delivered, not just clicks or leads.</p>
                <p className="mt-6 font-mono text-sm text-teal-2">5.2× Lead growth | 65% CPL reduction | 18pp Conversion lift</p>
              </div>
              <div className="text-center text-8xl opacity-30">📈</div>
            </div>
          </motion.article>
          {cards.map(([tag, title, desc], index) => (
            <motion.article key={title} variants={cardReveal} className="rounded-[2rem] border border-pale/60 bg-white p-7 shadow-soft">
              <span className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] ${index % 2 === 0 ? 'bg-teal-lt text-teal' : 'bg-gold-lt text-gold'}`}>{tag}</span>
              <h3 className="mt-6 font-heading text-2xl font-bold text-ink">{title}</h3>
              <p className="mt-4 leading-7 text-ink-3">{desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export const Projects = memo(ProjectsComponent)

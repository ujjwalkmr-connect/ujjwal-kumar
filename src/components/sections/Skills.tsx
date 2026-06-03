import { memo, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionLabel } from '../ui/SectionLabel'
import { cardReveal, stagger } from '../../animations/variants'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  ['Paid Acquisition', 92, '🎯', '#E0F5F3', 'Meta Ads · Google Ads (Search, PMax, Display, YouTube) · Bid strategy · A/B testing'],
  ['Marketing Automation', 88, '⚡', '#FDF3E3', 'n8n · Make · Zapier · Webhook & API integrations · CRM-sync'],
  ['Analytics & Data', 78, '📊', '#EEF2FF', 'GA4 · GTM · Looker Studio · Attribution · Experimentation design'],
  ['CRM & RevOps', 80, '🔗', '#F0FDF4', 'Zoho CRM · Bitrix24 · Groweon · Pipeline design · SLA management'],
  ['SEO & AEO', 72, '🔍', '#FFF7ED', 'Technical SEO · Local SEO · AI-search · Answer engine optimisation'],
  ['Cloud Telephony', 75, '📞', '#FFF0F0', 'Tata Smartflo · IVR design · Call routing · QA frameworks'],
  ['AI & Automation', 62, '🤖', '#F5F3FF', 'Prompt engineering · LLM workflows · AI-search · OpenAI API'],
  ['Leadership', 70, '👥', '#F0F9FF', 'Team of 8 · 3 agencies · SOP development · Multi-location ops']
] as const

function SkillsComponent() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const bars = gsap.utils.toArray<HTMLElement>(ref.current.querySelectorAll('[data-skill-bar]'))
    const tweens = bars.map(bar => gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: bar, start: 'top 88%', once: true } }))
    return () => tweens.forEach(tween => tween.kill())
  }, [])

  return (
    <section id="skills" className="bg-paper px-6 py-24 md:px-12">
      <div ref={ref} className="mx-auto max-w-7xl">
        <SectionLabel>Expertise</SectionLabel>
        <h2 className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-ink md:text-6xl">Core Competencies</h2>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map(([title, percent, icon, bg, tools]) => (
            <motion.article key={title} variants={cardReveal} whileHover={{ y: -4 }} className="rounded-[1.5rem] border border-white bg-white p-6 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-2xl" style={{ backgroundColor: bg }}>{icon}</div>
              <div className="mt-5 flex items-center justify-between gap-3">
                <h3 className="font-heading text-xl font-bold text-ink">{title}</h3>
                <span className="font-mono text-sm text-teal">{percent}%</span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-pale/60">
                <div data-skill-bar className="h-full rounded-full bg-gradient-to-r from-teal to-teal-2" style={{ width: `${percent}%` }} />
              </div>
              <p className="mt-4 text-sm leading-6 text-mist">{tools}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export const Skills = memo(SkillsComponent)

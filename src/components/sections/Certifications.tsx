import { memo } from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../ui/SectionLabel'
import { cardReveal, stagger } from '../../animations/variants'

const certs = [
  ['Columbia+', 'Prompt Engineering & Programming with OpenAI', 'May 2026'],
  ['HubSpot Academy', 'Revenue Operations Certification', 'Jan 2026'],
  ['Google', 'Google Analytics Certification', 'Jan 2026'],
  ['HubSpot Academy', 'Social Media Marketing Certification', 'Jan 2026'],
  ['Intel', 'AI Appreciation & Awareness Badges', 'Jul 2025'],
  ['Office Master', 'Power BI Workshop', 'Aug 2025'],
  ['Google/Coursera', 'Foundations of Digital Marketing & E-commerce', 'Jan 2024'],
  ['Meta', 'Meta Ads Manager & Facebook Marketing', 'Jan 2024']
]

function CertificationsComponent() {
  return (
    <section id="certifications" className="bg-paper px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Credentials</SectionLabel>
        <h2 className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-ink md:text-6xl">Certifications</h2>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map(([issuer, name, date]) => (
            <motion.article key={`${issuer}-${name}`} variants={cardReveal} whileHover={{ y: -3 }} className="rounded-[1.5rem] border border-white bg-white p-6 shadow-soft">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal">{issuer}</p>
              <h3 className="mt-4 font-heading text-xl font-bold text-ink">{name}</h3>
              <p className="mt-4 font-mono text-sm text-mist">{date}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export const Certifications = memo(CertificationsComponent)
